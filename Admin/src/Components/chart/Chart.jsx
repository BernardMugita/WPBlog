import React from 'react'
import '../chart/Chart.scss'
import { Legend, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, ComposedChart, Line } from 'recharts';

const stats = [
  { name: 'January', Total: 1200 },
  { name: 'February', Total: 2500 },
  { name: 'March', Total: 600 },
  { name: 'April', Total: 1800 },
  { name: 'May', Total: 2450 },
  { name: 'June', Total: 1000 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="Chart">
      <div className="title">{title}</div>
      <ComposedChart width={700} height={250} data={stats}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#8d8dff" />
        <Area type="monotone" dataKey="amt" fill="#50508f" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#000047" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </div>
  )
}

export default Chart