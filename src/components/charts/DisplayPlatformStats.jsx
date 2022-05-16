import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const DisplayPlatformStats = ({videoGames}) => {

    function generateDataFormChart(){

        console.log(videoGames)

        const data = [
            ["Platform", "Sales", { role: "style" }],
            ["PS3", 8.94, "#b87333"],
            ["Silver", 10.49, "silver"],
            ["Gold", 19.3, "gold"],
            ["Platinum", 21.45, "color: #e5e4e2"],
        ];

        return data;
    }

    return (
        <div>
            <h1>Platform By Global Sales in Millions</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()} />
        </div>
    );
}

export default DisplayPlatformStats;