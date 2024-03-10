import Image from 'next/image';
import logo from '../../../public/logo.svg'
import { IoIosNotifications } from "react-icons/io";
import { MdSearch } from "react-icons/md";
import { IoCompass } from "react-icons/io5";
import { RiShieldStarFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { IoBookmark } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

function navbar() {
  return (
    <nav className="navbar fixed-top shadow-sm bg-white  px-lg-5  navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand " href="#" title="Home">
          <Image src={logo} width={156} height={32} className='d-lg-none d-block ' alt='hobbycue' />
          <Image src={logo} width={293} height={60} className='d-lg-block d-none' alt='hobbycue' />
        </a>
        <MdSearch className='d-lg-none d-block' style={{ backgroundColor: 'white', color: '#8064A2', fontSize: '26px' }}/>
        <IoIosNotifications className='d-lg-none d-block' style={{ backgroundColor: 'white', color: '#8064A2', fontSize: '26px' }}/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between " id="navbarSupportedContent">
          <form className="d-lg-flex d-none" role="search">
            <input className="form-control rounded-end-0 " type="search" placeholder="Search here" aria-label="Search" />
            <button title='search' className="btn  text-white rounded-start-0 " style={{ backgroundColor: '#8064A2' }} type="submit"><MdSearch /></button>
          </form>
          <ul className="navbar-nav d-lg-flex d-none me-2 mb-2 mb-lg-0">
            <li className="nav-item d-flex me-4 dropdown align-items-center">
              <IoCompass className='' style={{ backgroundColor: 'white', color: '#8064A2', fontSize: '26px' }} />
              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Explore</a>
              <FaAngleDown role="button" data-bs-toggle="dropdown" aria-expanded="false" className='text-dark-emphasis ' />
              <ul className="dropdown-menu text-black-50 ">
                <li><a className="dropdown-item border-bottom " href="#">People - Community</a></li>
                <li><a className="dropdown-item border-bottom " href="#">Places - Venues</a></li>
                <li><a className="dropdown-item border-bottom " href="#">Programs - Events</a></li>
                <li><a className="dropdown-item border-bottom " href="#">Products - Store</a></li>
                <li><a className="dropdown-item" href="#">Blogs</a></li>
              </ul>
            </li>
            <li className="nav-item d-flex me-4 dropdown align-items-center">
              <RiShieldStarFill className='' style={{ backgroundColor: 'white', color: '#8064A2', fontSize: '26px' }} />
              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Link</a>
              <FaAngleDown role="button" data-bs-toggle="dropdown" aria-expanded="false" className='' />
              <ul className="dropdown-menu text-black-50 ">
                <li><a className="dropdown-item border-bottom " href="#">People - Community</a></li>
                <li><a className="dropdown-item border-bottom " href="#">Places - Venues</a></li>
                <li><a className="dropdown-item border-bottom " href="#">Programs - Events</a></li>
                <li><a className="dropdown-item border-bottom " href="#">Products - Store</a></li>
                <li><a className="dropdown-item" href="#">Blogs</a></li>
              </ul>
            </li>
            <li>
              <IoBookmark className='nav-item me-4 mt-2  ' style={{ backgroundColor: 'white', color: '#8064A2', fontSize: '22px' }} />
            </li>
            <li>
              <IoIosNotifications className='nav-item me-4 mt-2 ' style={{ backgroundColor: 'white', color: '#8064A2', fontSize: '26px' }} />
            </li>
            <li>
              <FaShoppingCart className='nav-item me-4 mt-2 ' style={{ backgroundColor: 'white', color: '#8064A2', fontSize: '22px' }} />
            </li>
            <li>
              <button className="btn btn-outline-secondary me-2" style={{color:'#8064A2'}} type="button">Sign in</button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default navbar;