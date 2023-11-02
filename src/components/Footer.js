import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newletter" />
                <h2 className="mb-0 text-white">sign up for newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white">Contact Us</h4>
              <div>
                <address className=" text-white fs-6">
                  abc/123 ho chi minh
                </address>
                <a
                  href="tel:090999999999"
                  className="mt-4 d-block mb-2 text-white"
                >
                  +84999999999
                </a>
                <a
                  href="mailto:abc@gmail.com"
                  className="mt-4 d-block mb-2 text-white"
                >
                  abc@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="#" className="text-white">
                    <BsLinkedin className="fs-4" />
                  </a>

                  <a href="#" className="text-white">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a href="#" className="text-white">
                    <BsGithub className=" fs-4" />
                  </a>
                  <a href="#" className="text-white">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
                <div></div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white"> Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">abc</Link>
                <Link className="text-white py-2 mb-1">abc</Link>
                <Link className="text-white py-2 mb-1">abc</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">about us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">laptop</Link>
                <Link className="text-white py-2 mb-1">laptop</Link>
                <Link className="text-white py-2 mb-1">laptop</Link>
                <Link className="text-white py-2 mb-1">laptop</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Developer
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
