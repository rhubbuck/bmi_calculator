import React, { useState, useEffect } from 'react';
import Chart from './Chart';

function Table({userData, userOption, userWeight}) {

    const [sedentary, setSedentary] = useState();
    const [light, setLight] = useState();
    const [moderate, setModerate] = useState();
    const [hard, setHard] = useState();
    const [calories, setCalories] = useState();
    const [showMacros, setShowMacros] = useState(false);


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
    }, [userOption, userData])
  
  return (
    <div>
        <div>
            <ul onClick={(e) => {setShowMacros(true)}}>
                <li className='text-lg mb-2 underline'>Calorie Requirements</li>
                <li className='cursor-pointer' onClick={(e) => {setCalories(sedentary)}}>Sedentary : {sedentary} cal/day</li>
                <li className='cursor-pointer' onClick={(e) => {setCalories(light)}}>Light activity : exercise 1-3 days per week : {light} cal/day</li>
                <li className='cursor-pointer' onClick={(e) => {setCalories(moderate)}}>Moderate activity : exercise 4-6 days per week : {moderate} cal/day</li>
                <li className='cursor-pointer' onClick={(e) => {setCalories(hard)}}>Heavy activity : exercise every day : {hard} cal/day</li>
            </ul>
            <Chart sedentary={sedentary} light={light} moderate={moderate} hard={hard} userWeight={userWeight} calories={calories} userOption={userOption} showMacros={showMacros} />
        </div>
    </div>   
  )
}

export default Table