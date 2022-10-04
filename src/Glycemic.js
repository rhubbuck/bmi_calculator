import React from 'react'

function Glycemic() {
  return (
    <div>
        <p>Glycemic index information paragraph</p>
        <div className='flex w-full justify-center'>
            <div className='mx-8'>
                <h3 className='text-lg underline'>Low GI</h3>
                <ul>
                    <li>14 - Peanuts</li>
                    <li>14 - Low-fat Yogurt</li>
                    <li>15 - Asparagus</li>
                    <li>15 - Broccoli</li>
                    <li>15 - Peppers</li>
                    <li>15 - Spinach</li>
                    <li>24 - Kidney Beans</li>
                    <li>30 - Pizza Dough</li>
                    <li>33 - Lowfat Yogurt</li>
                    <li>34 - Soy Milk</li>
                    <li>38 - Apples</li>
                    <li>39 - Milk</li> 
                    <li>41 - Fruit Yogurt</li>
                    <li>41 - Apple Juice</li>
                    <li>43 - Oranges</li>
                    <li>47 - Carrots</li>
                    <li>48 - Spaghetti</li>
                    <li>50 - Orange Juice</li>
                    <li>51 - Bananas</li>
                    <li>52 - Sweet Corn</li>
                    <li>54 - Potato Chips</li>
                    <li>55 - Snickers Bar</li>
                </ul>
            </div>
            <div className='mx-8'>
                <h3 className='text-lg underline'>Moderate GI</h3>
                <ul>
                    <li>59 - Soda</li>
                    <li>59 - Pineapple</li>
                    <li>61 - Honey</li>
                    <li>61 - Ice Cream</li>
                    <li>63 - Sweet Potato</li>
                    <li>64 - Macaroni and Cheese</li>
                    <li>64 - Raisins</li>
                    <li>65 - Popcorn</li>
                    <li>65 - Sucrose(Sugar)</li>
                    <li>67 - Wheat Thins</li>
                    <li>68 - Brown Rice</li>
                </ul>
            </div>
            <div className='mx-8'>
                <h3 className='text-lg underline'>High GI</h3>
                <ul>
                    <li>72 - Corn Chips</li>
                    <li>73 - White Rice</li>
                    <li>75 - Pumpkin</li>
                    <li>78 - Gatorade</li>
                    <li>78 - Potato</li>
                    <li>83 - Pretzels</li>
                    <li>87 - Oatmeal</li>
                    <li>87 - Rice Cakes</li>
                    <li>100 - White Bread</li>
                </ul>
            </div>
        </div>
        <p>Looking for different foods? Just follow  this link and search for anything in the glycemic index database.</p>
        <a href='https://glycemicindex.com/' target='_blank' rel='noreferrer'>https://glycemicindex.com/</a>
    </div>
  )
}

export default Glycemic