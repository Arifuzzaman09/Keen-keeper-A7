import React from 'react';
import Carts from './Carts';

const CountCarts = () => {
    return (
        <div className=' w-10/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='bg-gray-200 rounded-lg text-center  flex justify-center items-center flex-col'>
                <h4 className='text-3xl font-bold text-green-500'>9</h4>
                <p className='font-semibold'>Totals Friends</p>
            </div>
            <div className='bg-gray-200 rounded-lg text-center  flex justify-center items-center flex-col'>
                <h4 className='text-3xl font-bold text-green-500'>3</h4>
                <p className='font-semibold'>On Track</p>
            </div>
            <div className='bg-gray-200 rounded-lg text-centerx flex justify-center items-center flex-col'>
                <h4 className='text-3xl font-bold text-green-500'>6</h4>
                <p className='font-semibold'>Need Attention</p>
            </div>
            <div className='bg-gray-200 rounded-lg text-center py-12  flex justify-center items-center flex-col'>
                <h4 className='text-3xl font-bold text-green-500'>12</h4>
                <p className='font-semibold'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default CountCarts;