import React, { useState } from 'react';

import './App.css';

import LineChart from './components/charts/LineChart';
import { UserData } from './data/fakeLine.js';

function App() {

  const [data, setData] = useState({
    labels: UserData.map(data => data.year),
    datasets: [{
        label: "Cars",
        data: UserData.map(data => data.cars),       
        backgroundColor: ['red']     
    },
    {
      label: "Bicycles",
      data: UserData.map(data => data.bicycles),       
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
