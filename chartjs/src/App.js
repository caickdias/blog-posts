import React, { useState } from 'react';

import './App.css';

import LineChart from './components/charts/LineChart';
import { citiesData } from './data/fakeLine.js';

function App() {

  const [data, setData] = useState({
    labels: citiesData.map(data => data.year),
    datasets: [{
        label: "Cars",
        data: citiesData.map(data => data.cars),       
        backgroundColor: ['red']     
    },
    {
      label: "Bicycles",
      data: citiesData.map(data => data.bicycles),       
      backgroundColor: ['Blue']     
    }]
  });

  return (
    <div className="App">
      <LineChart chartData={data} />
    </div>
  );
}

export default App;
