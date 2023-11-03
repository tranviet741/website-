import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="/Product Name" />
      <div className="main-product py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>

      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <p className="bg-white p-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates dolore laboriosam magnam quam cumque harum non
                doloribus dicta, quo, impedit obcaecati voluptas ea aut tempora
                exercitationem odio nemo repellat mollitia?
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className=" row">
            <div className="col-12">
              <h3 className="section-heading">Our popular products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
