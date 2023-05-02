import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";
import RecipeCard from '../RecipeCard/RecipeCard';

const Category = () => {
const {id} = useParams();
const categoryRecipe= useLoaderData();
    return (
        <div>
            <h2>This Category: {categoryRecipe.length}</h2>
            {
                categoryRecipe.map(recipe => <RecipeCard
                 key={recipe._id}
                 recipe={recipe}
                ></RecipeCard>)
            }
        </div>
    );
};

export default Category;