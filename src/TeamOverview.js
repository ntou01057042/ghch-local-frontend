import React, { useEffect } from 'react';
import './TeamOverview.css';
import timelineData from './data/timelineData.json'; // Adjust the path as necessary

const TeamOverview = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.async = true;
        script.onload = () => {
            window.google.charts.load('current', { packages: ['timeline'] });
            window.google.charts.setOnLoadCallback(drawChart);
        };
        document.body.appendChild(script);
    }, []);

    const drawChart = () => {
        const container = document.getElementById('example7.1');
        const chart = new window.google.visualization.Timeline(container);
        const dataTable = new window.google.visualization.DataTable();
        dataTable.addColumn({ type: 'string', id: 'Branch' });
        dataTable.addColumn({ type: 'string', id: 'Author' });
        dataTable.addColumn({ type: 'string', id: 'style', role: 'style' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });

        const dataRows = timelineData.timelineData.map(item => [
            item.Branch,
            item.Author,
            item.style,
            new Date(item.Start),
            new Date(item.End)
        ]);

        dataTable.addRows(dataRows);

        const options = {
            timeline: { showRowLabels: false },
            avoidOverlappingGridLines: false,
            alternatingRowStyle: false,
            width: 1000,
            height: 300
        };

        chart.draw(dataTable, options);
    };

    return (
        <div className="team-overview">
            <div id="example7.1" style={{ height: '300px' }}></div>
        </div>
    );
};

export default TeamOverview;
