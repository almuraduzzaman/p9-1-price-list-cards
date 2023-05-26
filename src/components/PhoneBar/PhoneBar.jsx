import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PhoneBar = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
                // console.log(loadedData);
                const phonesData = loadedData.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);

                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    };
                    return phoneInfo;
                });
                console.log(phonesData);
                setPhones(phonesData);
            });
    }, []);

    return (
        <div className='bg-indigo-100 mx-12 my-5 p-4 rounded-md shadow-md'>
            <BarChart data={phones} width={1000} height={300}>

                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey='name' />
                <YAxis dataKey='price' />
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default PhoneBar;