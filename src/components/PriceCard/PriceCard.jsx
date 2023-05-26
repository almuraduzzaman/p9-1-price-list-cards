import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-400 mt-4 p-4 rounded-md shadow-md flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold'>{price.price}</span>
                <span className='text-2xl font-bold text-white'>/Cup</span>
            </h2>
            <h5 className='text-2xl font-bold text-center my-6'>{price.name}</h5>
            <p className='font-bold text-white underline'>Features:</p>
            {
                price.features.map((feature,idx)=> <Feature key={idx} feature={feature}></Feature>)
            }
            <button className='w-full mt-auto bg-green-500 hover:bg-green-700 text-white py-2 font-bold rounded-md'>Buy Now</button>
        </div>
    );
};

export default PriceCard;