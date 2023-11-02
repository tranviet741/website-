import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />

                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>Ipad 13+ pro</h5>
                  <p>
                    From $999.00 or $41.62/mo.
                    <br />
                    for 24 mo. Footnote*
                  </p>

                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4>Best sale</h4>
                    <h5>Laptop pro</h5>
                    <p>
                      From $999.00
                      <br />
                      or $41.62/mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>smartwatch 7</h5>
                    <p>From $9.00 or $1.62/mo.</p>
                  </div>
                </div>

                <div className="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>From $9.00 or $1.62/mo.</p>
                  </div>
                </div>

                <div className="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4>Free</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      High-fidenlity playback &
                      <br /> utra-low distortion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt=" services" />
                  <div>
                    <h6> free shipping</h6>
                    <p>From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt=" services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p>Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt=" services" />
                  <div>
                    <h6>Save up to 25% off</h6>
                    <p>Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt=" services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p>Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt=" services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p>100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart televison</h6>
                    <p>12 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>smartwatches</h6>
                    <p>13 Items</p>
                  </div>
                  <img src="images/TV.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>music & gaming </h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>prortable speaker</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>prortable speaker</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>prortable speaker</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Home Appliances</h6>
                    <p>6 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className=" row">
            <div className="col-12">
              <h3 className="section-heading">featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="https://demo-digitic.myshopify.com/cdn/shop/files/subbanner-01.jpg?v=1655701528" className="img-fluid"
                  alt=""
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6> Smart watch series 7</h6>
                  <p>From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="https://demo-digitic.myshopify.com/cdn/shop/files/subbanner-02.jpg?v=1654920168 " className="img-fluid" alt="" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio display</h5>
                  <h6 className="text-dark"> 600 nit or brightness</h6>
                  <p className="text-dark">27inch 5k retina display</p>
                </div>
              </div>
            </div>


            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="https://demo-digitic.myshopify.com/cdn/shop/files/subbanner-03.jpg?v=1654920181 " className="img-fluid" alt="" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio display</h5>
                  <h6 className="text-dark"> 600 nit or brightness</h6>
                  <p className="text-dark">27inch 5k retina display</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="https://demo-digitic.myshopify.com/cdn/shop/files/subbanner-04.jpg?v=1654920192 " className="img-fluid" alt="" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio display</h5>
                  <h6 className="text-dark"> 600 nit or brightness</h6>
                  <p className="text-dark">27inch 5k retina display</p>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special product</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
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

      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className=" col-12">
              <div className="marquee-inner-wrapper bg-white card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img
                      src="//demo-digitic.myshopify.com/cdn/shop/files/brand-01_131x119@2x.png?v=1655725508"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://demo-digitic.myshopify.com/cdn/shop/files/brand-02_131x119@2x.png?v=1655725508"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className=" row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
