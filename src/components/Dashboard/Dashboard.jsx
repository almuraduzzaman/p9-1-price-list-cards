import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const [marks, setMarks]=useState([]);
    useEffect(()=>{
        fetch('marks.json')
        .then(res=>res.json())
        .then(data=>setMarks(data));
    },[])
    return (
        <div className='bg-purple-100 mx-12 my-5 p-4 rounded-md shadow-md'>
            <LineChart
            width={1000}
            height={300}
            data={marks}
            >
            <Line dataKey='math'></Line>
            <Line stroke="#82ca9d" dataKey='physics'></Line>
            <Line stroke="#8884d8" dataKey='chemistry'></Line>
            <XAxis dataKey='name'/>
            <YAxis/>
            <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;