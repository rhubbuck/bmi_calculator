import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
const pieData = [
      {
         name: "Apple",
         value: 74.85
      },
      {
         name: "Samsung",
         value: 47.91
      },
      {
         name: "Redmi",
         value: 16.85
      },
      {
         name: "One Plus",
         value: 16.14
      },
      {
         name: "Others",
         value: 10.25
      }
   ];

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
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
       </div>
    );
 }
 return null;
};

function Chart({ sedentary, light, moderate, hard, userWeight, calories }) {

   const [protein, setProtein] = useState();
   const [fat, setFat] = useState();
   const [carbs, setCarbs] = useState();
   const [dataArray, setDataArray] = useState([]);

   useEffect(() => {
      setProtein(userWeight * 1.2)
      setFat(((calories * .3) / 9).toFixed(1))
      setCarbs(((calories - (((userWeight * 1.2) * 4) + (calories * .3))) / 4).toFixed(1))
      let array = [
         {
            name: 'protein',
            value: userWeight * 1.2
         }, 
         {
            name: 'fat', 
            value: ((calories * .3) / 9).toFixed(1)
         },
         {
            name: 'carbs',
            value: ((calories - (((userWeight * 1.2) * 4) + (calories * .3))) / 4).toFixed(1)
         }
      ]
      console.log(array)
      setDataArray(array)
      console.log(dataArray)
   }, [userWeight, calories])

  return (
   <div>
    <PieChart width={730} height={350}>
      <Pie
         data={pieData}
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
         {pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      </PieChart>
      <p>{calories} calories, {protein}g protein, {fat}g fat, {carbs}g carbs</p>
      </div>
  )
}

export default Chart