import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import projectPgStyle from './MainPage.module.css'
import ProjectDetailsData from '../Data/ProjectDetailsData'
import { useParams } from 'react-router';


const Data = {

}


const MainPage = () => {

    useEffect(() => {
        toast(" 𝗙𝗼𝗿 𝗯𝗲𝘀𝘁 𝘃𝗶𝗲𝘄 𝘀𝘄𝗶𝘁𝗰𝗵 𝘁𝗼 𝘀𝗰𝗿𝗲𝗲𝗻 𝘄𝗶𝗱𝘁𝗵 𝗮𝗯𝗼𝘃𝗲 𝟲𝟱𝟬𝗽𝘅 ")
    }, [])


    const { id } = useParams()
    console.log(id);


    const data = ProjectDetailsData[id - 1]


    return (
        <>
            <div className="container-fluid">


                <div className="row" style={{ background: '#faedcd', marginTop: '4rem' }}>

                    <div className="col-12 px-0">
                        <div className={projectPgStyle.bg} style={{ backgroundImage: `url(${data.backgroundImage})` }} >
                            <img src={data.image} alt="Image can't be Displayed in small screen devices below  550px" class="animate__animated animate__zoomInDown animate__slower	3s" />
                        </div>
                    </div>


                    <div className="container w-75 mt-5 ">
                        <div className="row mt-5">
                            <div className="col-12" data-aos="zoom-in-up">
                                <span className={projectPgStyle.heading}>{data.title}</span>
                            </div>

                            <div className="col-12 mt-4 mb-3" data-aos="zoom-in-up">
                                <span className={projectPgStyle.subHeader}>
                                    <i class="fa-solid fa-circle-dot me-2"></i> Description
                                </span>
                                <p className={projectPgStyle.desc}> {data.description}  </p>
                            </div>

                            <div className="col-12 my-3" data-aos="zoom-in-up">
                                <span className={projectPgStyle.subHeader}>
                                    <i class="fa-solid fa-circle-dot me-2"></i> Duration Consumed
                                </span>
                                <div className={projectPgStyle.desc}>

                                    <table>
                                        <tbody>
                                            <tr>
                                                <td> <span className="text-danger ps-3">{data.duration.days}</span> Days   </td>
                                                <td> <span className="text-danger ps-3">{data.duration.hours}</span> Hours   </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="col-12 my-3" data-aos="zoom-in-up">
                                <span className={projectPgStyle.subHeader}>
                                    <i class="fa-solid fa-circle-dot me-2"></i> Languages Used
                                </span>

                                <div className="row">
                                    {
                                        data.languagesUsed.map((elm) => {
                                            return (
                                                <div className="col-md-6 d-flex justify-content-center flex-column px-5" key={Math.random()}>

                                                    <span className={projectPgStyle.languagesHeader}>
                                                        <label htmlFor="progress"> <img src={elm.languageLogo} alt="" className={` img-fluid  ${projectPgStyle.imageLogo}`} />  {elm.languageName}</label>
                                                        <div class="progress mt-2" style={{ border: '2px solid #F1C40F' }}>
                                                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${elm.percentage}%` }}>{elm.percentage}% </div>
                                                        </div>
                                                    </span>

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

            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

        </>
    )
}

export default MainPage
