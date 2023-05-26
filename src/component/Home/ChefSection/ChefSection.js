import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const ChefSection = () => {
    const [chefs,setSefs] = useState([]);
    useEffect(()=>{
        fetch('public.json')
        .then(res=>res.json())
        .then(data=>setSefs(data));
    },[])
    return (
        <div >
            {
                chefs.map(chef=><ChefCard
                    key={chef._id}
                    chef ={chef}
                ></ChefCard>)
            }
        </div>
    );
};

export default ChefSection;