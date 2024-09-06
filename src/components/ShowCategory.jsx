
import React from 'react'

function ShowCategory({items}) {
    return (
        <div>
            <div className='flex justify-center flex-wrap mx-20'>
                {

                    items.map((item, index) => {
                        return (
                            <div key={index} className='w-3/12 bg-gray-200 p-5 mx-10 my-5 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 '>
                                <img src={item.img} className='rounded-md'></img>
                                <h3 className='text-lg flex justify-center py-1 font-semibold'>{item.title}</h3>
                                <p className='text-justify'>{item.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShowCategory