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
          <div className='row'>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>Developers.</Link>

              </h2>
            </div>
            <div className='col-5'>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Serrch product here" aria-label="Serrch product here" aria-describedby="basic-addon2" />
                <span class="input-group-text" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className='col-5'></div>
          </div>
        </div>
      </header>



    </>
  );
};

export default Header