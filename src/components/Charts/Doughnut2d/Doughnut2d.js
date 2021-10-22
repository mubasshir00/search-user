import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import candy from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Charts, candy);

const ChartComponent = ({ data }) => {
    const chartConfigs = {
        type: "doughnut3d", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                caption: "Stars Per Language",
                decimals: 0,
                doughnutRadius: '45%',
                showPercentValues:0,
                paletteColors: '#F84B0A,F8DF0A,#0A2EF8,#0AF8DB,#000000,#784212,#76F80A,#CD853F,#708090,#FF6347,#9370DB',
                theme:'candy'
            },
            // Chart Data
            data,
        }
    };
    return <ReactFC {...chartConfigs} />
};

export default ChartComponent