

import React, { useState } from 'react'
import { data } from './data'


function CategoryFilter() {

    const [item, setItem] = useState(data);
    console.log(item)


    return (
        <>
            <div className='border-b border-orange-400 text-xl pt-10 pb-5 justify-center flex font-semibold mx-20'>
                <h2>Product List</h2>
            </div>

            <div className='px-32'>
                <div className='flex justify-evenly py-3'>
                    <h3 className='text-lg cursor-pointer'>All</h3>
                    <h3 className='text-lg cursor-pointer'>Laptop</h3>
                    <h3 className='text-lg cursor-pointer'>Tablet</h3>
                    <h3 className='text-lg cursor-pointer'>Mobile</h3>
                </div>
            </div>

            <div>
                <div className='flex justify-center flex-wrap mx-20'>
                    {
                        data.map((item, index) => {
                            return (

                                <div key={index} className='w-3/12 bg-gray-200 p-5 m-10 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 '>
                                    <img src={item.img} className='rounded-md'></img>
                                    <h3 className='text-lg flex justify-center py-1 font-semibold'>{item.title}</h3>
                                    <p className='text-justify'>{item.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CategoryFilter