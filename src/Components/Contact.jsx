import React from 'react'
import contactStyles from './ModuleCss/Contact.module.css'

const Contact = () => {
    return (
        <>
            <div className="container-fluid" id='contact'>
                <div className="container">
                    <div className="row">

                        <div className="col-12 d-flex justify-content-center flex-column">
                            <div style={{ lineHeight: '2rem' }} data-aos="zoom-in-up">
                                <p className="headerBlue">Contact</p>
                                <p className="headerBlack pe-5">
                                    Don't be shy, Hit me up !!
                                    <i class="fa-solid fa-hand-point-down mx-2" style={{ color: 'red', fontSize: '2rem' }}></i>
                                </p>
                            </div>
                        </div>


                        <div className="container w-75">
                            <div className="row px-0 mx-0" data-aos="zoom-in-up">
                                <div className={`col-lg-6 ${contactStyles.content}`} >
                                    <div className="row">
                                        <div className="col-6 my-auto d-flex justify-content-center ">
                                            <i class="fa-solid fa-map-location-dot"></i>
                                        </div>
                                        <div className="col-6 d-flex justify-content-center flex-column">
                                            <p>Location</p>
                                            <p>Kolkata, West Bengal, India</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-lg-6 ${contactStyles.content}`}>
                                    <div className="row">
                                        <div className="col-6 my-auto d-flex justify-content-center ">
                                            <i class="fa-solid fa-envelope-open-text"></i>
                                        </div>
                                        <div className="col-6 d-flex justify-content-center flex-column">
                                            <p>email</p>
                                            <p>utsab********@*****.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>









                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
