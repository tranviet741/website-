import React from "react";
import ReactStars from "react-rating-stars-component";
const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card">
        <div className="product-image">
          <img src="images/watch.jpg" alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="brand"> Havells</h6>
          <h5 className="product-title">
            kid head phone bulk full 10 pack multi colored for students
          </h5>
          <div>
             <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value="3"
              edit="false"
            /> 
            
          </div>
          <p className="price">$100.00 </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
