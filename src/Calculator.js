import React from 'react'

function Calculator() {
  return (
    <div>Calculator
        <form className='border border-black bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/4'>
            <div className='flex flex-col items-center my-5'>
                <label for='age' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Age</label>
                <input type='number' id='age' className='appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'></input>
            </div>
            <h2 className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4'>Sex</h2>
            <fieldset className='flex w-full justify-center mb-5'>
                <div className='mx-4'>
                    <input type='radio' name='sex' id='male' value='male'></input>
                    <label for='male' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Male</label>
                </div>
                <div className='mx-4'>
                    <input type='radio' name='sex' id='female' value='female'></input>
                    <label for='female' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Female</label>
                </div>
            </fieldset>
            <div className='flex flex-col items-center my-5'>
                <label for='weight' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Weight (US pounds)</label>
                <input type='number' id='weight' className='appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'></input>
            </div>
            <div className='my-5'>
                <label for='height_feet' className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Height</label>
                <div className='flex justify-center'>
                    <input type='number' id='height_feet' className='appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-1/4 mx-2'></input>
                    <input type='number' id='height_inches' className='appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-1/4 mx-2'></input>
                </div>
            </div>
            <button type='submit' className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-6'>Submit</button>
        </form>
    </div>
  )
}

export default Calculator