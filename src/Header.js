import React from 'react'

function Header() {
  return (
    <div className='flex w-full justify-between px-6'>
        <div>BMI Calculator</div>
        <ul className='flex'>
            <li className='mx-2'>Home</li>
            <li className='mx-2'>Glycemic Index</li>
        </ul>
    </div>
  )
}

export default Header