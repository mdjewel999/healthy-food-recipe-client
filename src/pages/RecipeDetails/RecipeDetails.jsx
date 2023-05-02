import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecipeDetails = () => {
    const recipe = useLoaderData();
    
    return (
        <div>
            <h1>RecipeDetails </h1>
        </div>
    );
};

export default RecipeDetails;