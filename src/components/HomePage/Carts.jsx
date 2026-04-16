import React, { use } from 'react';
import FriendCarts from '../ui/FriendCarts';



const friendPromise = fetch("/data.json")
.then((res) => res.json())



const Carts = () => {
    const carts = use(friendPromise)

    return (
        <div className='w-10/12 mx-auto my-15'>
            <h3 className='text-2xl font-semibold'>Your Friends</h3>
            <div className='grid   md:grid-cols-2 lg:grid-cols-4  gap-2 text-center'>
                {
                    carts.map((cart, ind) => {
                        return (
                            <FriendCarts cart={cart} key={ind}></FriendCarts>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
};

export default Carts; <h3>Your Friends</h3>