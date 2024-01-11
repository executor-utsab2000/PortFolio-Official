import React, { useState } from 'react'
import landingStyles from './ModuleCss/Landing.module.css'






const Landing = () => {

  const [languages, setLanguages] = useState([
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png', //html
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png', //css
    'https://w1.pngwing.com/pngs/951/574/png-transparent-react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-thumbnail.png', //js
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/2560px-JQuery-Logo.svg.png', //jQuery
    'https://w7.pngwing.com/pngs/414/111/png-transparent-boostrap-front-end-long-shadow-preprocessor-web-long-shadow-web-icons-icon-thumbnail.png', //bootsrap
    'https://w7.pngwing.com/pngs/856/564/png-transparent-react-logo-javascript-front-and-back-ends-user-interface-others-miscellaneous-logo-symmetry-thumbnail.png', //react
    'https://w7.pngwing.com/pngs/28/601/png-transparent-sql-logo-illustration-microsoft-azure-sql-database-microsoft-sql-server-database-blue-text-logo-thumbnail.png', //sql
  ])

  return (
    <div className="container-fluid " id='landing'>
      <div className={`container w-75 ${landingStyles.LDcontainer}`}>
        <div className="row">


          <div className="col-lg-6 d-flex justify-content-center order-1 order-lg-0">
            <div>
              <p className={landingStyles.txt1}>𝗙𝗿𝗼𝗻𝘁-𝗘𝗻𝗱 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿</p>
              <p className={landingStyles.txt2}>𝐇𝐢𝐢 , 𝐈'𝐦 𝐔𝐭𝐬𝐚𝐛 𝐒𝐚𝐫𝐤𝐚𝐫, 𝐚 𝐩𝐚𝐬𝐬𝐢𝐨𝐧𝐚𝐭𝐞 𝐅𝐫𝐨𝐧𝐭-𝐞𝐧𝐝 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐛𝐚𝐬𝐞𝐝 𝐢𝐧 𝐖𝐞𝐬𝐭 𝐁𝐞𝐧𝐠𝐚𝐥, 𝐈𝐧𝐝𝐢𝐚 <i class="fa-solid fa-map-pin mx-2" style={{ color: 'red', fontSize: '1.2rem' }}></i></p>
              <p className={landingStyles.icons}>
                <span><i class="fa-brands fa-github mx-2"></i></span>
                <span><i class="fa-brands fa-linkedin mx-2"></i></span>
              </p>
              <div className={`row  ${landingStyles.techarea}`}>
                <div className="col-3">
                  <span>𝗧𝗲𝗰𝗵 𝗦𝘁𝗮𝗰𝗸</span>
                  <span className="mx-3"><i class="fa-solid fa-grip-lines-vertical"></i></span>
                </div>
                <div className="col-9">
                  <div className="row">
                    {
                      languages.map((elm) => {
                        return (
                          <div className="col d-flex justify-content-center my-2 mx-auto">
                            <img src={elm} alt="" />
                          </div>
                        )
                      })
                    }
                  </div>              

                </div>
                

                <div className="col-12">
                <div className="row">
                    <div className="col-12 mt-4">
                      <a href="#" className={`nav-item ${landingStyles.resume}`}>
                        <button>𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐑𝐞𝐬𝐮𝐦𝐞 </button>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>


          <div className="col-lg-6 d-flex justify-content-center order-0 order-lg-1">
            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" height="500">
              <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                  <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                </linearGradient>
              </defs>
              <mask id="mask1" mask-type="alpha">
                <path fill="url(#sw-gradient)" d="M25.4,-31C31.2,-25.3,33.1,-15.7,33.9,-6.6C34.7,2.5,34.4,11.1,30.5,17.4C26.6,23.7,19.1,27.7,10.8,31.5C2.6,35.3,-6.4,38.8,-14.4,37C-22.3,35.2,-29.3,28.1,-32.8,19.9C-36.4,11.8,-36.5,2.7,-35.4,-6.7C-34.3,-16,-31.9,-25.6,-25.8,-31.3C-19.7,-36.9,-9.8,-38.7,0,-38.6C9.8,-38.6,19.5,-36.7,25.4,-31Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ transition: "all 0.3s ease 0s" }}></path>
              </mask>
              <g mask="url(#mask1)">
                <path fill="url(#sw-gradient)" d="M25.4,-31C31.2,-25.3,33.1,-15.7,33.9,-6.6C34.7,2.5,34.4,11.1,30.5,17.4C26.6,23.7,19.1,27.7,10.8,31.5C2.6,35.3,-6.4,38.8,-14.4,37C-22.3,35.2,-29.3,28.1,-32.8,19.9C-36.4,11.8,-36.5,2.7,-35.4,-6.7C-34.3,-16,-31.9,-25.6,-25.8,-31.3C-19.7,-36.9,-9.8,-38.7,0,-38.6C9.8,-38.6,19.5,-36.7,25.4,-31Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ transition: "all 0.3s ease 0s" }}></path>
                <image href="Images/landingPic.jpeg" x="-1" y="11.5" height="100" width="100" style={{ height: '5rem' }} />
              </g>
            </svg>

            {/* 
          <div className={landingStyles.socialIcons}>
            <i class="fa-brands fa-linkedin mx-2"></i>
          </div> */}



          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
