import React from 'react'

function Header() {
  return (
    <div className='flex w-full justify-between px-10 py-5'>
        <div>BMI Calculator</div>
        <ul className='flex'>
            <li className='mx-2 cursor-pointer'>Home</li>
            <li className='mx-2 cursor-pointer'>Glycemic Index</li>
        </ul>
    </div>
  )
}

export default Header