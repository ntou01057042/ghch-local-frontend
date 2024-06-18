import React, { useEffect, useState } from 'react';
import './input.css'; // 引入 Tailwind CSS
import timelineData from './data/timelineData.json'; // Adjust the path as necessary


const primaryOptions = {
    title: 'Team branch chart',
    // colors: ['#475468', '#365f9b', '#c6cfdc'],
    allowHtml: true,
    explorer: { axis: 'horizontal' },
    width: 14000,
    //height: 400
};

const tooltipOptions = {
    title: 'Commit frequency',
    legend: 'none',
    hAxis: {
        format: 'M/d',
    }
};

const BranchChart = (/*帳號跟repo名稱*/) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let result;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/graph-branch?owner=ntou01057042&repo=github-flow-tutor');
                if (!response.ok) {
                    throw new Error('網路錯誤');
                }
                result = await response.json();
                console.log(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
            const script = document.createElement('script');
            script.src = 'https://www.gstatic.com/charts/loader.js';
            script.async = true;
            script.onload = () => {
                window.google.charts.load('current', { packages: ['timeline'] });
                window.google.charts.load('current', { packages: ['corechart'] });
                window.google.charts.setOnLoadCallback(drawTooltipCharts);
            }
            document.body.appendChild(script);
        };
        fetchData();


    }, []);

    const drawTooltipCharts = () => {
        // const data = new window.google.visualization.arrayToDataTable(tooltipData);
        // const view = new window.google.visualization.DataView(data);

        // for (let i = 0; i < primaryData.length; i++) {
        //     view.setColumns([0, i + 1]);
        //     const hiddenDiv = document.getElementById('hidden_div');
        //     const tooltipChart = new window.google.visualization.LineChart(hiddenDiv);

        //     window.google.visualization.events.addListener(tooltipChart, 'ready', function () {
        //         let tooltipImg = '<img src="' + tooltipChart.getImageURI() + '">';
        //         let commitDetail = '<p style="margin-left:50px">' + 'feat: initial commit' + '<p>';
        //         primaryData[i][2] = tooltipImg + commitDetail;
        //     });
        //     tooltipChart.draw(view, tooltipOptions);
        // }
        drawPrimaryChart();
    }

    const drawPrimaryChart = () => {
        const dataTable = new window.google.visualization.DataTable();
        dataTable.addColumn({ type: 'string', id: 'branch-type' });
        dataTable.addColumn({ type: 'string', id: 'branch-name' });
        dataTable.addColumn({
            type: 'string',
            label: 'Tooltip Chart',
            role: 'tooltip',
            'p': { 'html': true }
        });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        const dataRows = result.map(item => [
            item.name,
            item.committer,
            new Date(item.startDate),
            new Date(item.endDate)
        ]);
        
        //調整資料以符合需求
        for (let i = 0; i < dataRows.length; i++) {
            dataRows[i].splice(2, 0, null);
        }
        dataRows.splice(3,1);
        dataRows.splice(3,1);
        dataRows.splice(3,1);
        // const dataRows = timelineData.primaryData.map(item => [
        //     item.Branch,
        //     item.Author,
        //     new Date(item.Start),
        //     new Date(item.End)
        // ]);
        
        // //調整資料以符合需求
        // for (let i = 0; i < dataRows.length; i++) {
        //     dataRows[i].splice(2, 0, null);
        // }
        console.log(dataRows);
        dataTable.addRows(dataRows);
        var visibleDiv = document.getElementById('branch_chart');
        var PrimaryChart = new window.google.visualization.Timeline(visibleDiv);
        PrimaryChart.draw(dataTable, primaryOptions);
    }

    if (loading) {
        return <div>加載中...</div>
    }

    return (
        <>
            <div id='hidden_div' style={{ display: 'none' }}></div>
            <div id='branch_chart' class="max-w-6xl p-4 shadow overflow-auto"></div>
        </>
    );
};

export default BranchChart;
