import React, { useState } from 'react'
import educationStyles from './ModuleCss/Education.module.css'
import educationData from './Data/educationData'
import EducationComponent from './UI/EducationComponent'








const Education = () => {

    const [data, setData] = useState(educationData)

    return (
        <>
            <div className="container-fluid my-4" id='education'>
                <div className="container">
                    <div className="row">



                        <div className="col-lg-6 d-flex justify-content-center flex-column px-3 px-lg-5">
                            <div style={{ lineHeight: '2rem' }} data-aos="zoom-in-up">
                                <p className="headerBlue">education</p>
                                <p className="headerBlack pe-5">
                                    Education I Possess
                                    <i class="fa-solid fa-graduation-cap mx-2" style={{ color: 'red', fontSize: '2rem' }}></i>
                                </p>
                            </div>

                            <div className={`row mt-5 ${educationStyles.desc}`}>
                                <div class="accordion" id="accordionExample" >

                                    {
                                        data.map((elm) => {
                                            return (
                                               <EducationComponent dataBsTarget={elm.dataBsTarget} header={elm.header} details={elm.details}/>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>


                        <div className={`col-lg-6 d-flex justify-content-center my-auto mt-2 mt-lg-0  px-0 px-lg-5 ${educationStyles.imgDiv}`} data-aos="zoom-in-up">
                            <div className={educationStyles.imgContainer} >
                                <img src="Images/education.gif" alt="" />
                            </div>
                        </div>





                    </div>
                </div>
            </div>
        </>
    )
}

export default Education
