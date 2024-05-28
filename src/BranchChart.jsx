import React, { useEffect, useState } from 'react';

const primaryOptions = {
    title: 'Team branch chart',
    colors: ['#475468', '#365f9b', '#c6cfdc'],
    allowHtml: true,
    explorer: { axis: 'horizontal' },
    width: 1000
};

const tooltipOptions = {
    title: 'Commit frequency',
    legend: 'none',
    hAxis: {
        format: 'M/d',
    }
};

const BranchChart = ({ primaryData, tooltipData }) => {
    const [chartData, setChartData] = useState(primaryData);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.async = true;
        script.onload = () => {
            window.google.charts.load('current', { packages: ['timeline'] });
            window.google.charts.load('current', { packages: ['corechart'] });
            window.google.charts.setOnLoadCallback(drawTooltipCharts);
        }
        document.body.appendChild(script);
    }, []);

    const drawTooltipCharts = () => {
        const data = new window.google.visualization.arrayToDataTable(tooltipData);
        const view = new window.google.visualization.DataView(data);

        for (let i = 0; i < primaryData.length; i++) {
            view.setColumns([0, i + 1]);
            const hiddenDiv = document.getElementById('hidden_div');
            const tooltipChart = new window.google.visualization.LineChart(hiddenDiv);

            window.google.visualization.events.addListener(tooltipChart, 'ready', function () {
                let tooltipImg = '<img src="' + tooltipChart.getImageURI() + '">';
                let commitDetail = '<p style="margin-left:50px">' + 'feat: initial commit' + '<p>';
                primaryData[i][2] = tooltipImg + commitDetail;
            });
            tooltipChart.draw(view, tooltipOptions);
        }
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
        dataTable.addRows(primaryData);
        var visibleDiv = document.getElementById('branch_chart');
        var PrimaryChart = new window.google.visualization.Timeline(visibleDiv);
        PrimaryChart.draw(dataTable, primaryOptions);
    }

    return (
        <>
            <div id='hidden_div' style={{display: 'none'}}></div>
            <div id='branch_chart'></div>
        </>
    );
};

export default BranchChart;
