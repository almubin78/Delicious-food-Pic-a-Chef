import React from 'react';

const ChefCard = ({ chef }) => {
    const { chefName, picture, experience, liked, description, recipes } = chef;
    console.log(recipes);
    return (
        <div className='card' style={{ border: '2px solid' }}>
            <img style={{ width: '100%' }} src={picture} alt="" />
            <div className='text-section'>
                <p>Name: {chefName}</p>
                <p>Experience: {experience}</p>

                <p>Got Liked: {liked}</p>
                <div className='btn-container'>
                    <button className='card-btn'>View Recipes</button>
                </div>
                {/* <p>{description}</p> */}
            </div>
            {/* এখানে আরেকটা কম্পোনেন্ট শো করাব যার ভিতর দিয়ে recipes.map হবে */}
            {
                // recipes.map(recipe=><h3>{recipe.recipesName}</h3>)
            }
        </div>
    );
};

export default ChefCard;