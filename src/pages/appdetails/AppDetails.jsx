import React, { use } from 'react';
import { BsArchiveFill } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { IoMdVideocam } from 'react-icons/io';
import { MdDelete, MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { TbBellXFilled } from 'react-icons/tb';
import { useParams } from 'react-router';
const friendPromise = fetch("/data.json")
    .then((res) => res.json())

const AppDetails = () => {
    const details = use(friendPromise)

    const { id } = useParams()

    const detailsData = details.find((detail) => detail.id == id)

    return (
        <div className='w-10/12 mx-auto my-16'>
            <div className='grid grid-cols-12 gap-2.5'>
                <div className='col-span-4 text-center '>
                    <div className='bg-gray-200 p-5 rounded-lg shadow-lg'>
                        <img src={detailsData.picture} alt="" className='w-[60px] h-[60px] mx-auto rounded-full' />
                        <h2 className='text-lg font-bold'>{detailsData.name}</h2>

                        {
                            detailsData.tags.map((tag, ind) => <div key={ind}>
                                <span className={`${tag === "office" ? "bg-green-300 text-green-900 font-semibold px-3 rounded-lg" : ""} ${tag === "friend" ? "bg-yellow-300 text-green-900 font-semibold px-3 rounded-lg" : ""} ${tag === "college" ? "bg-green-900 text-white font-semibold px-3 rounded-lg" : ""} ${tag === "close friend" ? "bg-red-700 text-white font-semibold px-3 rounded-lg" : ""} ${tag === "school" ? "bg-green-900 text-white font-semibold px-3 rounded-lg" : ""}`}>{tag}</span>

                            </div>)
                        }
                        <p>{detailsData.bio}</p>
                    </div>
                    <div className='space-y-4'>
                        <div className='bg-gray-200 p-2.5 flex justify-center items-center gap-2 font-semibold rounded-lg my-4 shadow-lg '>
                            <TbBellXFilled />
                            <a href="">Snooze 2 Weeks</a>
                        </div>
                        <div className='bg-gray-200 p-2.5 flex justify-center items-center gap-2 font-semibold rounded-lg shadow-lg '>
                            <BsArchiveFill />
                            <a href="">Archive</a>
                        </div>
                        <div className='bg-gray-200 p-2.5 flex justify-center items-center gap-2 font-semibold rounded-lg shadow-lg text-red-500'>
                            <MdDelete />
                            <a href="">Delete</a>
                        </div>
                    </div>


                </div>
                <div className='col-span-8'>
                    <div className='grid grid-cols-3 gap-3'>
                        <div className='text-center shadow-lg bg-gray-200 p-7 rounded-lg'>
                            <h3 className='text-xl font-bold text-green-800'>{detailsData.days_since_contact}</h3>
                            <p> Days since Contact </p>
                        </div>
                        <div className='text-center shadow-lg bg-gray-200 p-7 rounded-lg'>
                            <h3 className='text-xl font-bold text-green-800'>{detailsData.goal}</h3>
                            <p> (Gol) Days  </p>
                        </div>
                        <div className='text-center shadow-lg bg-gray-200 p-7 rounded-lg'>
                            <h3 className='text-xl font-bold text-green-800'>{detailsData.next_due_date}</h3>
                            <p> Next Due </p>
                        </div>
                    </div>
                    <div className='flex justify-between bg-gray-200 shadow-lg p-5 my-2 rounded-lg'>
                        <div className=''>
                            <h4 className='text-xl font-bold text-green-800'>Relationship Goal</h4>
                            <p>Connect every <span className=' font-bold'>30 days</span></p>
                        </div>
                        <button className='btn px-9'>Edit</button>
                    </div>

                    <div className='bg-gray-200 p-4 rounded-lg'>
                        <h4 className='text-xl font-semibold'>Quick Check-In</h4>
                        <div className='grid lg:grid-cols-3 gap-2.5'>
                             <div className='bg-white text-center rounded-lg shadow-sm p-7  '>
                                   <FiPhoneCall className='mx-auto text-2xl font-bold' />
                                   <p className='font-semibold'>Call</p>
                             </div>
                             <div className='bg-white text-center rounded-lg shadow-sm p-7  '>
                                   <MdOutlineTextsms className='mx-auto text-2xl font-bold' />
                                   <p className='font-semibold'>Text</p>
                             </div>
                             <div className='bg-white text-center rounded-lg shadow-sm p-7  '>
                                   <IoMdVideocam className='mx-auto text-2xl font-bold' />
                                   <p className='font-semibold'>Video</p>
                             </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AppDetails;