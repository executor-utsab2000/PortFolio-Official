import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import navStyles from './Navbar.module.css';
import { NavHashLink } from 'react-router-hash-link';


const navBrandStyle = {
    color: 'black ',
    fontSize: '1.2rem',
    fontWeight: 700,
    textDecoration: 'none',
}



const Navbar = () => {

    // const [isLight , setIslight] =useState(true)
    const [navBarIcon, setNavBarIcon] = useState(true) //navbar icon toggler~




    return (
        <>

            <nav className={`navbar navbar-expand-lg navbar-light bg-transparent py-3 ${navStyles.bg}`}>
                <div className="container-fluid" style={{ zIndex: '10' }}>
                    <NavLink className={`navbar-brand ps-3  ${navStyles.navBrand}`} to="/" style={navBrandStyle}>  𝘂𝘁𝘀𝗮𝗯｡𝗱𝗲𝘃</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setNavBarIcon(!navBarIcon)} >

                        {navBarIcon ? <i className="fa-solid fa-bars" ></i> : <i className="fa-solid fa-xmark"></i>}

                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item ">
                                <NavHashLink className="nav-link px-4 "  to="/#landing">Home</NavHashLink>
                            </li>

                            <li className="nav-item ">
                                <NavHashLink className="nav-link px-4" to="/#about">About Me</NavHashLink>
                            </li>

                            <li className="nav-item  dropdown">
                                <a className="nav-link px-4 dropdown-toggle" data-bs-auto-close="outside" href="#project" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </a>
                                <ul className="dropdown-menu mt-2">
                                    <li className="dropend">
                                        <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#project">Responsive</a>
                                        <ul className="dropdown-menu  ">
                                            <li> <NavLink to="/projects/1" className="dropdown-item">Academia</NavLink> </li>
                                            <li> <NavLink to="/projects/2" className="dropdown-item">Crown Resto</NavLink> </li>
                                            <li> <NavLink to="/projects/3" className="dropdown-item">Free-Lancing Group </NavLink> </li>
                                        </ul>
                                    </li>
                                    <li className="dropend">
                                        <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Application</a>
                                        <ul className="dropdown-menu  ">
                                            <li> <NavLink to='/projects/8' className="dropdown-item">Audio Corner</NavLink> </li>
                                            <li> <NavLink to='/projects/7' className="dropdown-item">Weather Whisper</NavLink> </li>
                                        </ul>
                                    </li>
                                    <li className="dropend">
                                        <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Games</a>
                                        <ul className="dropdown-menu  ">
                                            <li> <NavLink to="/projects/6" className="dropdown-item">Tic Tac Toe</NavLink> </li>
                                            <li> <NavLink to="/projects/5" className="dropdown-item">Stone Paper Scissor</NavLink> </li>
                                            <li> <NavLink to="/projects/4" className="dropdown-item">Cassio </NavLink> </li>
                                        </ul>
                                    </li>
                                    <li className="dropend">
                                        <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">React js</a>
                                        <ul className="dropdown-menu  ">
                                            <li> <NavLink to="/projects/9" className="dropdown-item">Branding Page</NavLink> </li>
                                            <li> <NavLink to="/projects/10" className="dropdown-item">Gym Page</NavLink> </li>
                                        </ul>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item ">
                                <NavHashLink className="nav-link px-4" to="/#education">Education</NavHashLink>
                            </li>

                            <li className="nav-item ">
                                <NavHashLink className="nav-link px-4" to="/#hobby">Interests</NavHashLink>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle  px-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contact
                                </a>
                                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <li><NavHashLink className="dropdown-item px-3 bg-white" to="/#socials">Socials</NavHashLink></li>
                                    <li><NavHashLink className="dropdown-item px-3 bg-white" to="/#contact">Details</NavHashLink></li>
                                </ul>
                            </li>

                        </ul>



                    </div>
                </div>
            </nav>




        </>
    )
}

export default Navbar
