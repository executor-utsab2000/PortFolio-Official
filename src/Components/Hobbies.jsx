import React, { useState } from 'react'
import hobbiesStyle from './ModuleCss/Hobbies.module.css'
import HobbyCard from './UI/HobbyCard'


const hobbiesData = [
    {
        img: 'Images/hobbies/football.svg',
        tooltip: 'Football',
    },
    {
        img: 'Images/hobbies/games.svg',
        tooltip: 'eSports',
    },
    {
        img: 'Images/hobbies/music.svg',
        tooltip: 'Listening to Music',
    },
    {
        img: 'Images/hobbies/innovation.svg',
        tooltip: 'innovating new things',
    },

]



const Hobbies = () => {



    const [data , setData] =useState(hobbiesData)
    return (
        <div className="container-fluid " id='hobby'>
        <div className="container">
            <div className="row">





                <div className={`col-lg-6 d-flex justify-content-center my-auto  px-0 px-lg-5 ${hobbiesStyle.imgDiv}`} data-aos="zoom-in-up">
                    <div className={hobbiesStyle.imgContainer}>
                        <img src="Images/hobbies/hobbies.gif" alt="" />     
                    </div>
                </div>



                <div className="col-lg-6 d-flex justify-content-center flex-column px-3 px-lg-5">
                    <div style={{ lineHeight: '2rem' }} data-aos="zoom-in-up">
                        <p className="headerBlue">Hobbies</p>
                        <p className="headerBlack pe-5">
                            My field of mind refreshment & break
                            <i class="fa-solid fa-champagne-glasses mx-2" style={{ color: 'red', fontSize: '2rem' }}></i>
                        </p>
                    </div>

                    <div className={`mt-5 ${hobbiesStyle.cardContent}`}>
                           <div className="row">
                            {
                                data.map((elm)=>{
                                    return(
                                        <div className="col-md-6 d-flex justify-content-center my-3" data-aos="zoom-in-up" key={Math.random()}>
                                             <HobbyCard image={elm.img} tooltip={elm.tooltip}/>
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
    )
}

export default Hobbies
