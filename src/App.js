import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Calculator from './Calculator';
import Table from './Table';

function App() {
  const [userData, setUserData] = useState();
  const [userOption, setUserOption] = useState();

  function setData(data, option) {
    console.log(data)
    setUserData(data)
    console.log(option)
    setUserOption(option)
  }

  return (
    <div className="App">
      <Header />
      <Calculator setData={setData} />
      <Table userData={userData} userOption={userOption}/>
    </div>
  );
}

export default App;
