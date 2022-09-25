import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Calculator from './Calculator';
import Table from './Table';

function App() {
  const [userData, setUserData] = useState();

  function setData(data) {
    console.log(data)
    setUserData(data)
  }

  return (
    <div className="App">
      <Header />
      <Calculator setData={setData} />
      <Table userData={userData}/>
    </div>
  );
}

export default App;
