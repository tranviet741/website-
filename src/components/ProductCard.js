import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { gird } = props;
  const [cart, setCart] = useState([]);

  let location = useLocation();
  console.log(location);
  const addToCart = () => {
    
    const product = {
      id: 1, 
      name: "abcbabâssss", 
      price: 100000.0, 
    };

    // Add the product to the cart
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      {/* sp1 */}
      <div
        className={` ${location.pathname == "/store" ? `gr-${gird}` : "col-3"}`}
      >
        <Link to="product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>

          <div className="product-image">
            <img
              src="//demo-digitic.myshopify.com/cdn/shop/products/09_260x.jpg?v=1655095977"
              alt="product image"
            />
            <img
              src="//demo-digitic.myshopify.com/cdn/shop/products/09_00_260x.jpg?v=1655095991"
              alt="product image"
            />
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
              <p
                className={`description ${gird === 12 ? "d-block" : "d-none"}`}
              >
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt...
              </p>
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

              <Link onClick={addToCart}>
                <img src="images/add-cart.svg" alt=" add-cart" />
              </Link>
              {/* <Link>
                <img src="images/add-cart.svg"  alt=" add-cart" />
              </Link> */}
            </div>
          </div>
        </Link>
      </div>
      {/* sp 2 */}
      <div
        className={` ${location.pathname == "/store" ? `gr-${gird}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>

          <div className="product-image">
            <img
              src="https://demo-digitic.myshopify.com/cdn/shop/products/12_00_260x.jpg?v=1655096387"
              alt="product image"
            />
            <img
              src="https://demo-digitic.myshopify.com/cdn/shop/products/12_260x.jpg?v=1655096377"
              alt="product image"
            />
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
              <p
                className={`description ${gird === 12 ? "d-block" : "d-none"}`}
              >
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt...
              </p>
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
              {/* add sp ở đây */}
              <Link>
                <img src="images/add-cart.svg" alt=" add-cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
