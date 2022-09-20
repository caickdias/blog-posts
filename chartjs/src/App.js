import React, { useState } from 'react';

import './App.css';

import LineChart from './components/charts/LineChart';
import { UserData } from './data/dummyLine.js';

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map(data => data.year),
    datasets: [{
        label: "Users Gained",
        data: UserData.map(data => data.userGain),       
        backgroundColor: ['red']     

    }]
  });

  return (
    <div className="App">
      <LineChart chartData={userData} />
    </div>
  );
}

export default App;
