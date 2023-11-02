import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
        <Link>
            <img src="images/wish.svg" alt="wishlist" />
        </Link>

        </div>



        <div className="product-image">
          <img src="//demo-digitic.myshopify.com/cdn/shop/products/09_260x.jpg?v=1655095977" alt="product image" />
          <img src="//demo-digitic.myshopify.com/cdn/shop/products/09_00_260x.jpg?v=1655095991" alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="brand"> Havells </h6>
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
        <div className="action-bar  position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt=" compare" />
            </Link>

            <Link>
              <img src="images/view.svg" alt=" view" />
            </Link>

            <Link>
              <img src="images/add-cart.svg" alt=" add-cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
