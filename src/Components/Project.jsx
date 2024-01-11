import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import projectStyles from './ModuleCss/Project.module.css';

import { ProjectData1, ProjectData2, ProjectData3, ProjectData4 } from './Data/ProjectData'








const Project = () => {

  const [data, setData] = useState({ ProjectData1, ProjectData2, ProjectData3, ProjectData4 })
  // console.log(data.ProjectData1);



  return (
    <div className="container-fluid" id='projects'>
      <div className="container">


        <div className="row">
          <div className="col-12 d-flex justify-content-center flex-column">
            <div style={{ lineHeight: '2rem' }} data-aos="zoom-in-up">
              <p className="headerBlue">projects</p>
              <p className="headerBlack pe-5">
                Each piece of projects is solely a creation of myself
                <i class="fa-solid fa-puzzle-piece mx-2" style={{ color: 'red', fontSize: '2rem' }}></i>
              </p>
            </div>
          </div>
        </div>



        <div className="row mt-4" data-aos="zoom-in-up">
          <div className="col-12">
            <ul class={`nav nav-tabs d-flex justify-content-between justify-content-lg-start ${projectStyles.navTabs}`} id="myTab" role="tablist" >

              <li class="nav-item me-0 me-md-3" role="presentation" >
                <button class="nav-link active " id="profile-tab" data-bs-toggle="tab" data-bs-target="#responsive" type="button" role="tab" aria-controls="responsive" aria-selected="false" >Responsive</button>
              </li>

              <li class="nav-item me-0 me-md-3" role="presentation" >
                <button class="nav-link   " id="home-tab" data-bs-toggle="tab" data-bs-target="#app" type="button" role="tab" aria-controls="app" aria-selected="true"   >App</button>
              </li>

              <li class="nav-item me-0 me-md-3" role="presentation" >
                <button class="nav-link " id="contact-tab" data-bs-toggle="tab" data-bs-target="#games" type="button" role="tab" aria-controls="games" aria-selected="false" >Games</button>
              </li>

              <li class="nav-item me-0 me-md-3" role="presentation" >
                <button class="nav-link " id="contact-tab" data-bs-toggle="tab" data-bs-target="#react" type="button" role="tab" aria-controls="react" aria-selected="false" >React</button>
              </li>

            </ul>
          </div>
        </div>



        <div className="container" >
          <div className="row mt-5">
            <div className="col-12">
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade " id="app" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                  <div className="row my-4">
                    <div className="col-12">
                      <div className="row px-2">
                        {
                          data.ProjectData1.map((elm) => {
                            // console.log(elm.image1);
                            return (
                              <div className={`row my-4 mx-0   ${projectStyles.projectCard} `} data-aos="zoom-in-up">
                                <div className={`col-lg-6 d-flex justify-content-center  ${elm.orderClass1}`}>
                                  <img src={elm.image1} alt="" className={`img-fluid my-2  my-lg-0 ${projectStyles.image}`} />
                                </div>
                                <div className={`col-lg-6 py-3  d-flex justify-content-center flex-column ${elm.orderClass2}`}>
                                  <p className='text-center'>{elm.title1}</p>
                                  <p className='text-center'>{elm.desc1}</p>

                                  <div className="container w-75 ">
                                    <div className="row d-flex justify-content-between ">
                                      <span className="col-md-4 d-flex justify-content-center">Languages Used <i class="fa-solid fa-grip-lines-vertical mx-3" style={{ fontSize: '1.5rem' }}></i> </span>
                                      <span className="col-md-8 mt-5 mt-lg-0  d-flex justify-content-center">
                                        {
                                          elm.languages.map((elm) => {
                                            // console.log(elm);
                                            return (
                                              <img src={elm} alt="" className='mx-3' />
                                            )
                                          })
                                        }
                                      </span>
                                    </div>
                                    <div className="row mt-5 d-flex justify-content-between">
                                      <div className="col d-flex justify-content-center">
                                        <a href={elm.liveDemo1} target='_blank'>
                                          <button>Live Demo</button>
                                        </a>
                                        {/* <NavLink to={elm.liveDemo1}>
                                          <button>Live Demo</button>
                                        </NavLink> */}
                                      </div>
                                      <div className="col d-flex justify-content-center">
                                        <NavLink to={elm.caseStudy1}>
                                          <button>Case Study</button>
                                        </NavLink>
                                      </div>

                                    </div>
                                  </div>


                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade show active" id="responsive" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                  <div className="row my-4">
                    <div className="col-12">
                      <div className="row px-2">
                        {
                          data.ProjectData4.map((elm) => {
                            // console.log(elm.image1);
                            return (
                              <div className={`row my-4 mx-0 ${projectStyles.projectCard} `}>
                                <div className={`col-lg-6 d-flex justify-content-center ${elm.orderClass1}`}>
                                  <img src={elm.image1} alt="" className={`img-fluid my-2  my-lg-0 ${projectStyles.image}`} />
                                </div>
                                <div className={`col-lg-6 py-3  d-flex justify-content-center flex-column ${elm.orderClass2}`}>
                                  <p className='text-center'>{elm.title1}</p>
                                  <p className='text-center'>{elm.desc1}</p>

                                  <div className="container w-75 ">
                                    <div className="row d-flex justify-content-between ">
                                      <span className="col-md-4 d-flex justify-content-center">Languages Used <i class="fa-solid fa-grip-lines-vertical mx-3" style={{ fontSize: '1.5rem' }}></i> </span>
                                      <span className="col-md-8 mt-5 mt-lg-0  d-flex justify-content-center">
                                        {
                                          elm.languages.map((elm) => {
                                            // console.log(elm);
                                            return (
                                              <img src={elm} alt="" className='mx-3' />
                                            )
                                          })
                                        }
                                      </span>
                                    </div>
                                    <div className="row mt-5 d-flex justify-content-between">
                                      <div className="col d-flex justify-content-center">
                                        <a href={elm.liveDemo1} target='_blank'>
                                          <button>Live Demo</button>
                                        </a>
                                      </div>
                                      <div className="col d-flex justify-content-center">
                                        <NavLink to={elm.caseStudy1}>
                                          <button>Case Study</button>
                                        </NavLink>
                                      </div>

                                    </div>
                                  </div>


                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="games" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                  <div className="row my-4">
                    <div className="col-12">
                      <div className="row px-2">
                        {
                          data.ProjectData2.map((elm) => {
                            // console.log(elm.image1);
                            return (
                              <div className={`row my-4 mx-0 ${projectStyles.projectCard} `}>
                                <div className={`col-lg-6 d-flex justify-content-center ${elm.orderClass1}`}>
                                  <img src={elm.image1} alt="" className={`img-fluid my-2  my-lg-0 ${projectStyles.image}`} />
                                </div>
                                <div className={`col-lg-6 py-3  d-flex justify-content-center flex-column ${elm.orderClass2}`}>
                                  <p className='text-center'>{elm.title1}</p>
                                  <p className='text-center'>{elm.desc1}</p>

                                  <div className="container w-75 ">
                                    <div className="row d-flex justify-content-between ">
                                      <span className="col-md-4 d-flex justify-content-center">Languages Used <i class="fa-solid fa-grip-lines-vertical mx-3" style={{ fontSize: '1.5rem' }}></i> </span>
                                      <span className="col-md-8 mt-5 mt-lg-0  d-flex justify-content-center">
                                        {
                                          elm.languages.map((elm) => {
                                            // console.log(elm);
                                            return (
                                              <img src={elm} alt="" className='mx-3' />
                                            )
                                          })
                                        }
                                      </span>
                                    </div>
                                    <div className="row mt-5 d-flex justify-content-between">
                                      <div className="col d-flex justify-content-center">
                                        <a href={elm.liveDemo1} target='_blank'>
                                          <button>Live Demo</button>
                                        </a>
                                      </div>
                                      <div className="col d-flex justify-content-center">
                                        <NavLink to={elm.caseStudy1}>
                                          <button>Case Study</button>
                                        </NavLink>
                                      </div>

                                    </div>
                                  </div>


                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="react" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                  <div className=" row my-4">
                    <div className="col-12">
                      <div className="row px-2">
                        {
                          data.ProjectData3.map((elm) => {
                            // console.log(elm.languages);
                            return (
                              <div className={`row my-4 mx-0 ${projectStyles.projectCard} `}>
                                <div className={`col-lg-6 d-flex justify-content-center ${elm.orderClass1}`}>
                                  <img src={elm.image1} alt="" className={`img-fluid my-2  my-lg-0 ${projectStyles.image}`} />
                                </div>
                                <div className={`col-lg-6 py-3  d-flex justify-content-center flex-column ${elm.orderClass2}`}>
                                  <p className='text-center'>{elm.title1}</p>
                                  <p className='text-center'>{elm.desc1}</p>

                                  <div className="container w-75 ">
                                    <div className="row d-flex justify-content-between ">
                                      <span className="col-md-4 d-flex justify-content-center">Languages Used <i class="fa-solid fa-grip-lines-vertical mx-3" style={{ fontSize: '1.5rem' }}></i> </span>
                                      <span className="col-md-8 mt-5 mt-lg-0  d-flex justify-content-center">
                                        {
                                          elm.languages.map((elm) => {
                                            // console.log(elm);
                                            return (
                                              <img src={elm} alt="" className='mx-3' />
                                            )
                                          })
                                        }
                                      </span>
                                    </div>
                                    <div className="row mt-5 d-flex justify-content-between">
                                      <div className="col d-flex justify-content-center">
                                        <a href={elm.liveDemo1} target='_blank'>
                                          <button>Live Demo</button>
                                        </a>
                                      </div>
                                      <div className="col d-flex justify-content-center">
                                        <NavLink to={elm.caseStudy1}>
                                          <button>Case Study</button>
                                        </NavLink>
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


















      </div>
    </div>
  )
}

export default Project
