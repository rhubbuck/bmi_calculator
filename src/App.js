import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Calculator from './Calculator';
import Table from './Table';

function App() {
  const [userData, setUserData] = useState();
  const [userOption, setUserOption] = useState();
  const [userWeight, setUserWeight] = useState();

  function setData(data, option, weight) {
    setUserData(data)
    setUserOption(option)
    setUserWeight(weight)
  }

  return (
    <div className="App">
      <Header />
      <Calculator setData={setData} />
      <Table userData={userData} userOption={userOption} userWeight={userWeight}/>
    </div>
  );
}

export default App;
