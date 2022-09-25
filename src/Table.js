import React from 'react'

function Table({userData}) {
  return (
    <div>
        <div>
            <p>Sedentary : {parseInt(userData * 1.2)} cal/day</p>
            <p>Light exercise 1-3 days per week : {parseInt(userData * 1.375)} cal/day</p>
            <p>Moderate exercise 6-7 days per week : {parseInt(userData * 1.55)} cal/day</p>
            <p>Hard exercise every day : {parseInt(userData * 1.725)} cal/day</p>
        </div>
    </div>   
  )
}

export default Table