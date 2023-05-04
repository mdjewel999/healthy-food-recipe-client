import React from 'react';
import "../Footer/Footer.css";
import groupImage from "../../../../../assets/Icons/Group 9969.png";

const Footer = () => {
  return (
    <div className="footer_area container">
      <div className=" text-center container footer_container mt-5 ">
        <div className="row mb-5">
          <div className="col-md-3 order-md-1 order-1 mt-2 ">
            <h4>Needed Food</h4>
            <p className="">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img src={groupImage} alt="" />
          </div>
          <div className="col-md-2 order-md-1 order-1 mt-2 ">
            <h5>Company</h5>
            <p className="">About Us</p>
            <p className="">Work</p>
            <p className="">Latest</p>
            <p className="">Careers</p>
          </div>
          <div className="col-md-2 order-md-1 order-1 mt-2 ">
            <h5>Product</h5>
            <p className="">Classic Cheeseburger</p>
            <p className="">BBQ Burger</p>
            <p className="">Veggie Burger</p>
            <p className="">Turkey Burger</p>
          </div>
          <div className="col-md-2 order-md-1 order-1 mt-2 ">
            <h5>Support</h5>
            <p className="">Help Desk</p>
            <p className="">Sales</p>
            <p className="">Become a Partner</p>
            <p className="">Jalapeno </p>
          </div>
          <div className="col-md-3 order-md-1 order-1 mt-2 ">
            <h5>Contact</h5>
            <p className="">524 Broadway , NYC</p>
            <p className="">+1 777 - 978 - 5570</p>
            <p className="">mdjewel878761@gmail.com</p>
          </div>
        </div>

        <div className="row border-top ">
          <div className="col-md-6 order-md-1 order-1 mt-5">
            <p className="">@2023 Recipe. All Rights Reserved</p>
          </div>
          <div className="col-md-6 order-md-1 order-1 mt-5">
            <p className="">Powered by Healthy Food recipe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
