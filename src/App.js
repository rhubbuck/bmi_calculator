import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Calculator from './Calculator';
import Table from './Table';
import Glycemic from './Glycemic';

function App() {
  const [userData, setUserData] = useState();
  const [userOption, setUserOption] = useState();
  const [userWeight, setUserWeight] = useState();
  const [showTable, setShowTable] = useState(false);

  function setData(data, option, weight) {
    setUserData(data)
    setUserOption(option)
    setUserWeight(weight)
    setShowTable(true)
  }

  return (
    <div className="App">
      {/* <Header />
      <div className='flex w-full justify-around mx-8'>
        <div className='basis-1/2'>
          <Calculator setData={setData} />
        </div>
        <div className='basis-1/2'>
          {showTable ? <Table userData={userData} userOption={userOption} userWeight={userWeight}/> : null}
        </div>
      </div> */}
      <Glycemic />
    </div>
  );
}

export default App;
