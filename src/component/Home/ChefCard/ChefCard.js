import React from 'react';

const ChefCard = ({chef}) => {
    const {chefName,picture,experience,liked,description,recipes} = chef;
    console.log(recipes);
    return (
        <div style={{border:'2px solid',margin:'10px'}}>
            <img style={{width:'100%'}} src={picture} alt="" />
            <div>
                <p>{chefName}</p>
                <p>{experience}</p>

                <p>{liked}</p>
                <button>View Recipes</button>
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