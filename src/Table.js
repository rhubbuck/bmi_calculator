import React, { useState, useEffect } from 'react';
import Chart from './Chart';

function Table({userData, userOption, userWeight}) {

    const [sedentary, setSedentary] = useState();
    const [light, setLight] = useState();
    const [moderate, setModerate] = useState();
    const [hard, setHard] = useState();
    const [calories, setCalories] = useState();


    useEffect(() => {
        if (userOption === 'MAINTAIN') {
            setSedentary(parseInt(userData * 1.2));
            setLight(parseInt(userData * 1.375))
            setModerate(parseInt(userData * 1.55))
            setHard(parseInt(userData * 1.725))
        } else if (userOption === 'GAIN') {
            setSedentary(Math.round((parseInt(userData * 1.2)) * 1.2))
            setLight(Math.round((parseInt(userData * 1.375)) * 1.2))
            setModerate(Math.round((parseInt(userData * 1.55)) * 1.2))
            setHard(Math.round((parseInt(userData * 1.725)) * 1.2))
        } else {
            setSedentary(Math.round((parseInt(userData * 1.2)) * .8))
            setLight(Math.round((parseInt(userData * 1.375)) * .8))
            setModerate(Math.round((parseInt(userData * 1.55)) * .8))
            setHard(Math.round((parseInt(userData * 1.725)) * .8))
        }
    }, [userOption])
  
  return (
    <div>
        <div>
            <h2>Calorie Requirements</h2>
            <ul>
                <li onClick={(e) => {setCalories(sedentary)}}>Sedentary : {sedentary} cal/day</li>
                <li onClick={(e) => {setCalories(light)}}>Light exercise 1-3 days per week : {light} cal/day</li>
                <li onClick={(e) => {setCalories(moderate)}}>Moderate exercise 6-7 days per week : {moderate} cal/day</li>
                <li onClick={(e) => {setCalories(hard)}}>Hard exercise every day : {hard} cal/day</li>
            </ul>
            <Chart sedentary={sedentary} light={light} moderate={moderate} hard={hard} userWeight={userWeight} calories={calories} userOption={userOption} />
        </div>
    </div>   
  )
}

export default Table