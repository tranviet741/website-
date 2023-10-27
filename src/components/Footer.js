import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newletter' />
                <h2 className='mb-0 text-white'>sign up for newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2" />
                <span class="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className="text-white">Contact Us</h4>
              <div></div>

            </div>
            <div className='col-3'>
              <h4 className="text-white"> Information</h4>
              <div></div>
            </div>
            <div className='col-3'>
              <h4 className="text-white">Account</h4>
              <div></div>
            </div>
            <div className='col-2'>
              <h4 className="text-white">Quick Links</h4>
              <div></div>
            </div>
          </div>
        </div>
      </footer>




      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}; Powered by Developer
              </p>

            </div>

          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer

