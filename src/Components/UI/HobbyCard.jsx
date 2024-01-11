import React from 'react'
import hobbiesCardStyle from './HobbyCard.module.css'






const HobbyCard = (props) => {


    return (
        <div>
            <div class={hobbiesCardStyle.card}>
                <div class={hobbiesCardStyle.cardDetails}>
                <img src={props.image} alt="" className='img-fluid'/>
                </div>
                <button class={hobbiesCardStyle.cardButton}>{props.tooltip}</button>
            </div>
        </div>
    )
}

export default HobbyCard
