import { data } from 'autoprefixer';
import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
       return (
       <div
          className="custom-tooltip"
          style={{
             backgroundColor: "#ffff",
             padding: "5px",
             border: "1px solid #cccc"
          }}
       >
          <label>{`${payload[0].name} : ${payload[0].value} g.`}</label>
       </div>
    );
 }
 return null;
};

function Chart({ sedentary, light, moderate, hard, userWeight, calories, userOption }) {

   const [protein, setProtein] = useState();
   const [fat, setFat] = useState();
   const [carbs, setCarbs] = useState();
   const [dataArray, setDataArray] = useState([]);

   useEffect(() => {
      // setProtein(userWeight * 1.2)
      if (userOption === 'CUT') {
         setProtein(userWeight * 1)
         setFat(((calories * .25) / 9).toFixed(1))
         setCarbs(((calories - (((userWeight * 1) * 4) + (calories * .25))) / 4).toFixed(1))
         let array = [
            {
               name: 'Protein',
               value: userWeight * 1
            }, 
            {
               name: 'Fat', 
               value: parseInt(((calories * .25) / 9).toFixed(1))
            },
            {
               name: 'Carbs',
               value: parseInt(((calories - (((userWeight * 1) * 4) + (calories * .25))) / 4).toFixed(1))
            }
         ]
         console.log(array)
         setDataArray(array)
      } else {
         setProtein(userWeight * 1.2)
         setFat(((calories * .3) / 9).toFixed(1))
         setCarbs(((calories - (((userWeight * 1.2) * 4) + (calories * .3))) / 4).toFixed(1))
         let array = [
            {
               name: 'Protein',
               value: userWeight * 1.2
            }, 
            {
               name: 'Fat', 
               value: parseInt(((calories * .3) / 9).toFixed(1))
            },
            {
               name: 'Carbs',
               value: parseInt(((calories - (((userWeight * 1.2) * 4) + (calories * .3))) / 4).toFixed(1))
            }
         ]
      console.log(array)
      setDataArray(array)
      }
   }, [userWeight, calories])
   
   // useEffect(() => {
   //    console.log(dataArray)
   // }, [dataArray])

  return (
   <div>
    <PieChart width={730} height={350}>
      <Pie
         data={dataArray}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={120}
         fill="#8884d8"
         label
         isAnimationActive={false}
      >
         {dataArray.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      </PieChart>
      <p>{protein}g protein, {fat}g fat, {carbs}g carbs</p>
      {/* {dataArray.map(item => console.log(item))} */}
      </div>
  )
}

export default Chart