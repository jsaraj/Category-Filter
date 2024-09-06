

import React from 'react'

export default function MenuCategory({ filterItem, allcategory }) {
    console.log(allcategory)
    return (
        <div className='px-32'>
            <div className='flex justify-evenly py-3'>
                {
                    allcategory.map((item) => {
                        console.log(item)
                        return <button className='text-lg cursor-pointer hover:scale-110 transition-all duration-200 focus:border-b px-5 border-orange-400' onClick={() => { filterItem(item) }}>{item}</button>
                    })
                }

            </div>
        </div>
    )
}
