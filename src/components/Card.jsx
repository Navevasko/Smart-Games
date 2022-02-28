import React from 'react'
import SaibaMais from './SaibaMais'

export default function Card({idJogo, img, title, price}) {

  return (
    <div className='card'>
        <img className='card-img' src={img} alt="Banner do Jogo" />

        <h2 className='card-desc'> {title} </h2>

        <p className='card-desc'> R${price} </p>

        <SaibaMais idJogo = {idJogo}/>
    </div>
  )
}
