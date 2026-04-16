import React from 'react';
import { Link } from 'react-router';

const FriendCarts = ({ cart }) => {
    return (
        <Link to={`/${cart.id}`} className='bg-gray-200 p-5 rounded-lg'>
            <img src={cart.picture} alt="" className='w-[60px] h-[60px] mx-auto rounded-full' />
            <h2 className='text-lg font-bold'>{cart.name}</h2>
            <p>{cart.days_since_contact}d ago</p>
            {
                cart.tags.map((tag, ind) => <div key={ind}>
                    <span className={`${tag === "office" ? "bg-green-300 text-green-900 font-semibold px-3 rounded-lg" : ""} ${tag === "friend" ? "bg-yellow-300 text-green-900 font-semibold px-3 rounded-lg" : ""} ${tag === "college" ? "bg-green-900 text-white font-semibold px-3 rounded-lg" : ""} ${tag === "close friend" ? "bg-red-700 text-white font-semibold px-3 rounded-lg" : ""} ${tag === "school" ? "bg-green-900 text-white font-semibold px-3 rounded-lg" : ""}`}>{tag}</span>
                </div>)
            }
        </Link>)

};

export default FriendCarts;