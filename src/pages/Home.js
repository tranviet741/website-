import React from "react";
import { Link } from "react-router-dom";

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
      </section>

    </>
  );
};

export default Home;
