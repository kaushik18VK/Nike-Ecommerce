import React from "react";

const Content = () => {
  return (
    <div>
      <div className="main container">
        <div className="left">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="buttons">
            <button>Shop Now</button>
            <button className="category-btn">Category</button>
          </div>
          <div className="shop">
            <p>Also Available On</p>
            <div className="icons">
            <img src="/images/flipkart.png" alt="flipkart" />
            <img src="/images/amazon.png" alt="amazon" />
            </div>
          </div>
        </div>
        <div className="right">
            <img src="/images/shoe_image.png" alt="Nike Shoe" />
        </div>
      </div>
    </div>
  );
};

export default Content;
