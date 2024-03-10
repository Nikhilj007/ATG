"use client"

import Image from "next/image";
import hero from '../../../public/hero.svg'
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";

function Hero() {
    const [active, setActive] = useState(false);
    return (
        <div className="d-lg-flex mt-5  justify-content-between px-lg-5 pt-5 " style={{ backgroundColor: '#F7F5F9' }}>
            <div className=""><div className="container my-5">
                <div className="row text-start ">
                    <div className="col-md-10 ">
                        <h1 className="text-center mb-4 fw-bold fst-italic " >Explore your <span className="text-primary">hobby </span>or<span className="text-primary"> passion </span></h1>
                        <p className="lead text-start ">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities.</p>
                        <p className="lead text-start">If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.</p>
                    </div>
                <Image src={hero} alt="Hero" width={600} height={216}  />
                </div>
            </div></div>
            <div className="p-2"><div className="mt-4 ">
                <div className="row justify-content-center">
                    <div className="bg-transparent">
                        <div className="">
                            <div className="card-header mb-3">
                                <ul className="nav nav-tabs card-header-tabs">
                                    <li onClick={()=>{setActive(false)}} className="nav-item fw-bold ">
                                        <a className={`nav-link ${!active?'active':''}`}  href="#">Sign In</a>
                                    </li>
                                    <li onClick={()=>setActive(true)} className="nav-item fw-bold ">
                                        <a className={`nav-link ${active?'active':''}`} href="#">Join In</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <button className="btn w-100  d-flex justify-content-start gap-5   btn-outline-primary btn-block text-black border-black  mb-3">
                                    <FcGoogle style={{fontSize:'23px'}} />
                                    <div style={{minWidth:'200px'}}>Continue with Google</div>
                                    <div> </div>
                                </button>
                                <button className="btn w-100  d-flex  justify-content-start gap-5     btn-outline-primary btn-block text-black border-black  mb-3">
                                    <IoLogoFacebook style={{fontSize:'23px'}} />
                                    <div style={{minWidth:'200px'}}>Continue with Facebook</div>
                                    <div></div>
                                </button>
                                <hr className="hr-text" data-content="Or Connect With"/>
                                <form>
                                    <div className="form-group mb-3 ">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="remember" />
                                        <label className="form-check-label" htmlFor="remember">Remember me</label>
                                    </div>
                                </form>
                                <span>By continuing, you agree to our Terms of Service and Privacy Policy.</span>
                                <div className="text-center mt-3 py-2 rounded-3 " style={{backgroundColor:'#8064A2',color:'white'}} >
                                    <div className="text-muted text-decoration-none text-white ">Agree and continue</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
        </div>
    );
}

export default Hero;