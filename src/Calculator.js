import React, { useState, useRef, useEffect } from 'react'

function Calculator({setData}) {

    const [option, setOption] = useState('MAINTAIN');
    const [sex, setSex] = useState();
    const ageRef = useRef(null);
    const weightRef = useRef(null);
    const feetRef = useRef(null);
    const inchesRef = useRef(null);
    const formRef = useRef(null);

    function convertWeight (lbs) {
        return 10 * (lbs / 2.205)
    }

    function convertHeight (inches) {
        return 6.25 * (inches * 2.54)
    }

    function convertAge (years) {
        return 5 * years
    }

    function getMaleBMR (lbs, inches, years) {
            return convertWeight(lbs) + convertHeight(inches) - convertAge(years) + 5
    }

    function getFemaleBMR (lbs, inches, years) {
            return convertWeight(lbs) + convertHeight(inches) - convertAge(years) - 161  
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(sex)
        let userAge = ageRef.current.value
        let userWeight = weightRef.current.value
        let userFeet = feetRef.current.value
        let userInches = inchesRef.current.value
        let userHeight = (parseInt(userFeet * 12)) + parseInt(userInches)
        if (sex === 'MALE') {
            let userResults = getMaleBMR(userWeight, userHeight, userAge)
            setData(userResults, option, userWeight)
        } else {
            let userResults = getFemaleBMR(userWeight, userHeight, userAge)
            setData(userResults, option, userWeight)
        }
        formRef.current.reset()
      }

  return (
    <div>
        <form ref={formRef} onSubmit={handleSubmit} className='border border-black bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-32'>
            <div className='flex flex-col items-center my-5'>
                <label htmlFor='age' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Age</label>
                <input ref={ageRef} required type='number' id='age' className='appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'></input>
            </div>
            <h2 className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4'>Sex</h2>
            <fieldset className='flex w-full justify-center mb-5' onChange={event => setSex(event.target.value)}>
                <div className='mx-4'>
                    <input type='radio' name='sex' id='male' value='MALE'></input>
                    <label htmlFor='male' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Male</label>
                </div>
                <div className='mx-4'>
                    <input type='radio' name='sex' id='female' value='FEMALE'></input>
                    <label htmlFor='female' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Female</label>
                </div>
            </fieldset>
            <div className='flex flex-col items-center my-5'>
                <label htmlFor='weight' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Weight (US pounds)</label>
                <input ref={weightRef} required type='number' id='weight' className='appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'></input>
            </div>
            <div className='my-5'>
                <label htmlFor='height_feet' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Height</label>
                <div className='flex justify-center'>
                    <input ref={feetRef} required type='number' id='height_feet' className='appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-1/4 mx-2'></input>
                    <input ref={inchesRef} required type='number' id='height_inches' className='appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-1/4 mx-2'></input>
                </div>
            </div>
            <h3 className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4'>What is your goal?</h3>
            <fieldset className='flex w-full justify-center my-3' onChange={event => setOption(event.target.value)}>
                    <div className='mx-4'>
                        <input type='radio' name='maintain' id='cut' value='CUT'></input>
                        <label htmlFor='male' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Cut</label>
                    </div>
                    <div className='mx-4'>
                        <input defaultChecked type='radio' name='maintain' id='maintain' value='MAINTAIN'></input>
                        <label htmlFor='female' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Maintain</label>
                    </div>
                    <div className='mx-4'>
                        <input type='radio' name='maintain' id='bulk' value='GAIN'></input>
                        <label htmlFor='female' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Bulk</label>
                    </div>
                </fieldset>
            <button type='submit' className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-6'>Submit</button>
        </form>
    </div>
  )
}

export default Calculator