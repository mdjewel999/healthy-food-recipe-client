import React from 'react';
import './RightNav.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className='All_chef'>All Chef Name</h2>
      <div className="ps-4">
        {categories.map((category) => (
          <p key={category.id} className='chef_name'>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-black"
            >
              {category.chef}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default RightNav;
