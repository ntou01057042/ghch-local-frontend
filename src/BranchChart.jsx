import React, { useEffect } from 'react';
import { Chart } from 'react-google-charts';

export const settingData = [
    [
        { type: 'string', id: 'branch-type' },
        { type: 'string', id: 'branch-name' },
        {
            type: 'string',
            label: 'Tooltip Chart',
            role: 'tooltip',
            'p': { 'html': true }
        },
        { type: 'date', id: 'Start' },
        { type: 'date', id: 'End' }
    ]
];

export const options = {
    title: 'Team branch chart',
    colors: ['#475468', '#365f9b', '#c6cfdc'],
    tooltip: { isHtml: true },
    explorer: { axis: 'horizontal' },
    width: 1000
};

const BranchChart = ({ primaryData, tooltipData }) => {
    console.log('hello');
    // useEffect(() => {
    //     if (window.google) {
    //         window.google.charts.load('current', { packages: ['corechart', 'timeline'] });
    //         window.google.charts.setOnLoadCallback(drawTooltipCharts);
    //     }

    //     function drawTooltipCharts() {
    //         const data = new window.google.visualization.arrayToDataTable(tooltipData);
    //         const view = new window.google.visualization.DataView(data);

    //         for (let i = 0; i < primaryData.length; i++) {
    //             view.setColumns([0, i + 1]);
    //             const hiddenDiv = document.getElementById('hidden_div');
    //             const tooltipChart = new window.google.visualization.LineChart(hiddenDiv);

    //             window.google.visualization.events.addListener(tooltipChart, 'ready', function () {
    //                 let tooltipImg = '<img src="' + tooltipChart.getImageURI() + '">';
    //                 let commitDetail = '<p style="margin-left:50px">' + 'feat: initial commit' + '<p>';
    //                 primaryData[i][2] = tooltipImg + commitDetail;
    //                 console.log(primaryData[i][2]);
    //             });
    //             tooltipChart.draw(view, {
    //                 title: 'Commit frequency',
    //                 legend: 'none',
    //                 hAxis: { format: 'M/d' }
    //             });
    //         }
    //         // drawPrimaryChart();
    //         console.log('hi');
    //     }

    //     // function drawPrimaryChart() {
    //     //     console.log('hello');
    //     //     const dataTable = new window.google.visualization.DataTable();
    //     //     dataTable.addColumn({ type: 'string', id: 'branch-type' });
    //     //     dataTable.addColumn({ type: 'string', id: 'branch-name' });
    //     //     dataTable.addColumn({
    //     //         type: 'string',
    //     //         label: 'Tooltip Chart',
    //     //         role: 'tooltip',
    //     //         p: { html: true }
    //     //     });
    //     //     dataTable.addColumn({ type: 'date', id: 'Start' });
    //     //     dataTable.addColumn({ type: 'date', id: 'End' });

    //     //     dataTable.addRows(primaryData);
    //     //     const visibleDiv = document.getElementById('visible_div');
    //     //     const PrimaryChart = new window.google.visualization.Timeline(visibleDiv);
    //     //     PrimaryChart.draw(dataTable, {
    //     //         title: 'Team branch chart',
    //     //         colors: ['#475468', '#365f9b', '#c6cfdc'],
    //     //         tooltip: { isHtml: true },
    //     //         explorer: { axis: 'horizontal' },
    //     //         width: 1000
    //     //     });
    //     //     console.log('use');
    //     // }
    // }, [primaryData, tooltipData]);

    const data = settingData.concat(primaryData);
    return (
        <>
            {/* <div id="hidden_div" style={{ display: 'none' }}></div> */}
            <Chart
                chartType="Timeline"
                data={data}
                width="100%"
                height="400px"
                options={options}
            />
        </>
    );
};

export default BranchChart;
