import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

//example
{/*

    <Graphic/>

*/}

export default function Graphic() {
  let data = [];
  data.push({ name: 'Page a', uv: 0, pv: 0, iv: 0, amt: 2100, })
  data.push({ name: 'Page b', uv: 4400, pv: 2300, iv: 1134, amt: 2100, })
  data.push({ name: 'Page c', uv: 4400, pv: 2300, iv: 1134, amt: 2100, })
  
  return (
    <>
      <LineChart
        width={window.innerWidth / 1.5}
        height={200}
         data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        <Line type="monotone" dataKey="iv" stroke="#82ca9d" />
        <Line type="monotone" dataKey="amt" stroke="#8884d8" />
      </LineChart>
    </>
  )

}
