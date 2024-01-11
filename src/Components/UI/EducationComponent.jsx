import React from 'react'
import eduCompo from './EducationComponent.module.css'

const EducationComponent = (props) => {


    
    return (

        <>
        
            <div className="col-12 d-flex justify-content-center my-2" data-aos="zoom-in-up">
                <div class={`accordion-item w-100 ${eduCompo.accordian}`}>
                    <h2 class="accordion-header" id="#">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.dataBsTarget}`} aria-expanded="false" aria-controls={props.dataBsTarget}>
                            {props.header}
                        </button>
                    </h2>
                    <div id={props.dataBsTarget} class="accordion-collapse collapse" aria-labelledby="#" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div className="row">
                            {
                                props.details.map((data) => {
                                    return (
                                        <>
                                                <div className=" col-6 my-2">
                                                    <div class={`card ${eduCompo.card}`} >
                                                        <div class="card-body">
                                                            <p class={`card-title ${eduCompo.cardTitle}`}>{data.detailsHeader}</p>                                                            
                                                            <p class={`card-text ${eduCompo.cardTxt}`}>{data.detailsInfo}</p>
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                        </>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EducationComponent
