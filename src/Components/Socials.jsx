import React from 'react'
import socialStyles from './ModuleCss/Socials.module.css'


const socialMedia = [
    {
        link: 'https://www.linkedin.com/in/utsab-sarkar-971bb5184/',
        img: 'Images/Socials/in.png',
    },
    {
        link: 'https://www.facebook.com/profile.php?id=100075459850106',
        img: 'Images/Socials/fb.png',
    },
    {
        link: 'https://www.instagram.com/executor_jit/',
        img: 'Images/Socials/insta.png',
    },
    {
        link: '#',
        img: 'Images/Socials/git.png',
    },
]

const Socials = () => {
    return (
        <>

            <div className="container-fluid" id='socials'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center flex-column order-1 order-lg-0">
                            <div style={{ lineHeight: '2rem' }} data-aos="zoom-in-up">
                                <p className="headerBlue">Socials</p>
                                <p className="headerBlack pe-5">
                                    Social Media platforms where you can get in touch with me
                                    <i class="fa-solid fa-thumbs-up mx-2" style={{ color: 'red', fontSize: '2rem' }}></i>
                                </p>
                            </div>

                            <div className="my-3">

                                <div className="row">
                                    {
                                        socialMedia.map((elm) => {
                                            return (
                                                <div className={`col-lg-6 d-flex justify-content-center mx-auto my-2  ${socialStyles.image}`} data-aos="zoom-in-up">
                                                    <a href={elm.link} target='_blank'>
                                                        <img src={elm.img} alt="img-fluid" />
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        </div>


                        <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0 order-0 order-lg-1" >
                            <div className={socialStyles.imgContainer} data-aos="zoom-in-up">
                                <img src="Images/Socials/socials.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
















        </>
    )
}

export default Socials
