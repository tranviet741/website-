import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';
const Header = () => {
  return (
    <>
      <header className='header-top-trip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'> Free shoping</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Hotline:
                <a className='text-white' href='Tel: +913703970'>
                  0913703970</a>
              </p>
            </div>
          </div>
        </div>
      </header>



      <header className="header-upper py-3">
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>Developers.</Link>

              </h2>
            </div>
            <div className='col-5'>
              <div class="input-group">
                <input type="text" class="form-control py-2" placeholder="Serrch product here" aria-label="Serrch product here" aria-describedby="basic-addon2" />
                <span class="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-uper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/compare.svg ' alt='compare' />
                    <p className='mb-0' >
                      Compare <br /> Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link  to='/wishlist'
                  className='d-flex align-items-center gap-10 text-white' >
                    <img src='images/wishlist.svg ' alt='wishlist' />
                    <p className='mb-0'>
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link  to='/login' 
                   className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/user.svg ' alt='user' />
                    <p className='mb-0'>
                      Login <br /> My account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='cart'
                  className='d-flex align-items-center gap-10 text-white' >
                    <img src='images/cart.svg ' alt='cart' />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'></span>
                      <p className='mb-0'>$ 500 </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">

        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30  '>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt='' />
                      <span className='me-5 d-inline-block'>
                        Shop Categories
                      </span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to="/">Home </NavLink>
                    <NavLink to="/store">Our Store </NavLink>
                    <NavLink to="/blogs">Blogs </NavLink>
                    <NavLink to="/contact">Contact </NavLink>


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>



      </header>



    </>
  );
};

export default Header