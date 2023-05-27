import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const [singleChefInfo, setSingleChefInfo] = useState([]);
    const [singleObject , setSingleObject] = useState([]);
    const { chefName, picture, experience, liked, description, recipes } = chef;
    const navigate = useNavigate();
    const param = useParams();
    // console.log(param);
    // console.log(recipes);
    const handleChef = id => {
        // console.log('ids',id);
        const url = 'public.json'
        fetch(url).then(res => res.json()).then(data => setSingleChefInfo(data));
        for(const single of singleChefInfo){
           if(single._id === id){
                setSingleObject(single)
                // console.log(singleObject.description);
                // console.log(typeof(singleObject));
           }
        }
        // navigate(`/details/${singleObject._id}`)
    }
    // const handleChef2 = data => {
    //     navigate(`/details/${singleObject}`)
    // }
    return (
        <div className='card'>
            <img style={{ width: '100%' }} src={picture} alt="" />
            <div className='text-section'>
                <h3 >Name: <span className='text-primary'>{chefName}</span></h3>
                <p>Experience: <span className="text-primary">{experience}</span></p>

                <p>Got Liked: {liked}</p>
                <div className='btn-container'>
                    <button onClick={() => handleChef(`${chef._id}`)} className='btn '>View Recipes</button>
                    {/* <Link onClick={()=>handleChef2(chef)} to={`/details/${_id}`} className='card-btn'>View Recipes2</Link> */}
                </div>
                {/* <p>{description}</p> */}
            </div>
            {/* এখানে আরেকটা কম্পোনেন্ট শো করাব যার ভিতর দিয়ে recipes.map হবে */}
            <div>
                {singleObject.description}
            </div>
        </div>
    );
};

export default ChefCard;