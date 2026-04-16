import React from 'react';

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto text-center space-y-4 my-16'>
            <h2 className='text-4xl font-bold '>Friends to keep close in your life</h2>
            <p>Your personal shelf of meaningful connections. Browse, tend, and <br /> nurture the
                relationships that matter most.</p>
            <button className='btn bg-green-700 text-white font-semibold'>+ Add a Friend</button>
        </div>
    );
};

export default Banner;