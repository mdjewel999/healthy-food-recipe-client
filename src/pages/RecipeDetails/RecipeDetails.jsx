import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

const RecipeDetails = () => {
  const recipe = useLoaderData();
  const { _id, title, details, image_url, category_id,author } = recipe;


  return (
    <div className="mt-4">
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>Name: {author?.name}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">
              <FaArrowLeft></FaArrowLeft> All Recipe
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeDetails;
