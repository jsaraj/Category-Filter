

import React, { useState } from 'react'
import { data } from './data'
import ShowCategory from './ShowCategory';
import MenuCategory from './MenuCategory';



function Home() {

    const [items, setItems] = useState(data);

    const allcategory =["All" ,... new Set(data.map((item,index)=>item.category))];

    const [allCat,setAllCat]=useState(allcategory);

    const filterItem = (categor) => {
        if (categor === 'All') {
            setItems(data);
            return
        }

        const newFilter = data.filter((cat) => {
            return cat.category == categor;
        });
        setItems(newFilter);

    }


    return (
        <>
            <div className='border-b border-orange-400 text-xl pt-10 pb-5 justify-center flex font-semibold mx-20'>
                <h2>Product List</h2>
            </div>

            <MenuCategory filterItem={filterItem} allcategory={allCat} />

            <ShowCategory items={items} />
        </>
    )
}

export default Home