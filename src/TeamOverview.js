import React, { useEffect } from 'react';
import './TeamOverview.css';

const TeamOverview = () => {
    useEffect(() => {
        // 加载Google Charts库
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.async = true;
        script.onload = () => {
            // 加载Timeline包
            window.google.charts.load('current', { packages: ['timeline'] });
            window.google.charts.setOnLoadCallback(drawChart);
        };
        document.body.appendChild(script);
    }, []);

    const drawChart = () => {
        const color = [
            ['#008DB8', '#47C5EB', '#99E7FF'],
            ['#009E15', '#47E65C', '#99FFA7'],
            ['#B30C00', '#E0574D', '#FFA099']
        ];

        const container = document.getElementById('example7.1');
        const chart = new window.google.visualization.Timeline(container);
        const dataTable = new window.google.visualization.DataTable();
        dataTable.addColumn({ type: 'string', id: 'Room' });
        dataTable.addColumn({ type: 'string', id: 'Name' });
        dataTable.addColumn({ type: 'string', id: 'style', role: 'style' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });

        dataTable.addRows([
            ['Sung', 'Sung', color[0][2], new Date(2024, 3, 1), new Date(2024, 3, 4)],
            ['Sung', 'Sung', color[0][1], new Date(2024, 3, 5), new Date(2024, 3, 6)],
            ['Sung', 'Sung', color[0][0], new Date(2024, 3, 6), new Date(2024, 3, 9)],
            ['Sung', 'Sung', color[0][1], new Date(2024, 3, 12), new Date(2024, 3, 18)],
            ['Sung', 'Sung', color[0][2], new Date(2024, 3, 19), new Date(2024, 3, 26)],
            ['Chen', 'Chen', color[1][2], new Date(2024, 3, 5), new Date(2024, 3, 6)],
            ['Chen', 'Chen', color[1][1], new Date(2024, 3, 6), new Date(2024, 3, 8)],
            ['Chen', 'Chen', color[1][0], new Date(2024, 3, 9), new Date(2024, 3, 13)],
            ['Chen', 'Chen', color[1][1], new Date(2024, 3, 15), new Date(2024, 3, 17)],
            ['Chen', 'Chen', color[1][0], new Date(2024, 3, 19), new Date(2024, 3, 20)],
            ['Chen', 'Chen', color[1][2], new Date(2024, 3, 21), new Date(2024, 3, 23)],
            ['Wu', 'Wu', color[2][2], new Date(2024, 3, 2), new Date(2024, 3, 5)],
            ['Wu', 'Wu', color[2][2], new Date(2024, 3, 7), new Date(2024, 3, 11)],
            ['Wu', 'Wu', color[2][1], new Date(2024, 3, 12), new Date(2024, 3, 15)],
            ['Wu', 'Wu', color[2][0], new Date(2024, 3, 15), new Date(2024, 3, 16)],
            ['Wu', 'Wu', color[2][0], new Date(2024, 3, 15), new Date(2024, 3, 23)],
            ['Wu', 'Wu', color[2][2], new Date(2024, 3, 23), new Date(2024, 3, 24)],
            ['Wu', 'Wu', color[2][1], new Date(2024, 3, 24), new Date(2024, 3, 25)]
        ]);

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
