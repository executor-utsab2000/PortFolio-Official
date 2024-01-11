import React from 'react'
import aboutStyles from './ModuleCss/About.module.css';
const About = () => {
    return (
        <>

            <div className="container-fluid " id='about'>
                <div className="container">
                    <div className="row">





                        <div className={`col-lg-6 d-flex justify-content-lg-center my-auto  px-0 px-lg-5 ${aboutStyles.imgDiv}`} data-aos="zoom-in-up">
                            <div className={aboutStyles.imgContainer}>
                                <img src="Images/aboutVideo.gif" alt="" />                                  
                                <div>
                                    <img src="Images/animatedTxt.gif" alt="" className={aboutStyles.img2}  />
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-6 d-flex justify-content-center flex-column px-3 px-lg-5" >
                            <div style={{ lineHeight: '2rem' }} data-aos="zoom-in-up">
                                <p className="headerBlue">about me</p>
                                <p className="headerBlack pe-5">
                                    A dedicated Front-end Developer based in WestBengal, India
                                    <i class="fa-solid fa-map-pin mx-2" style={{ color: 'red', fontSize: '2rem' }}></i>
                                </p>
                            </div>

                            <div className={`mt-5 ${aboutStyles.desc}`} data-aos="zoom-in-up">
                                <p>Creative and detail-oriented Web Designer with a strong passion for creating visually stunning and user-friendly websites being well versed with the knowledge I have gained and am confident in my field. I also designed several websites in my Project some of which are mentioned below. I will always give my best to my company. Adapt multitasker with the ability to bring innovative and eye-catching designs to complete the project with efficiency and accuracy within the stipulated time. Able to work well independently or as a member of a professional web design team.</p>
                            </div>
                        </div>





                    </div>
                </div>
            </div>


        </>
    )
}
export default About
