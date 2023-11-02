import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            {/* <img src="https://demo-digitic.myshopify.com/cdn/shop/products/01_287x.jpg?v=1655094851" alt="phone " />
        </div> */}
            <img src="images/watch.jpg" className="img-fluid" alt="" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">havels</h5>
            <h6 className="title">
              Samsung Galaxy Note10+ Mobile Phone; Sim...
            </h6>

            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value="3"
              edit="false"
            />
            <p className="price">
                <strike>$200</strike>  &nbsp; <span className="red-p">$100</span>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
            {/* <p className="mb-0">
                <b>5 </b>days
            </p> */}
                {/* <div className="d-flex gap-10 align-items-center">
                    <span className="badge rounded-circle p-3 gb-warning">1</span>:
                    <span className="badge rounded-circle p-3 gb-warning">1</span>:
                    <span className="badge rounded-circle p-3 gb-warning">1</span>
                </div> */}
               <Link className="button"> OPTION</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
