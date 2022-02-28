import React, { useEffect, useState } from 'react'
import SpiderMan from '../img/Spider-Man.png'
import Close from './CloseModal'
import Comprar from './Comprar'

import '../css/modal.css'
import Lojas from './Lojas'
import Plataforma from './Plataforma'

export default function Modal ({jogo, lojas, plataformas, closeModal}) {

    console.log(jogo)
    console.log(lojas)
    console.log(plataformas)
  return (
    <div id='shadow-modal'>
        <div className='container-modal center'>
            <img className='banner-modal' src= {jogo.imagem} alt="" />
            <div className='info-modal'>
                <Close closeModal = {closeModal} />

                <h2 className='titulo-modal center'> {jogo.nome} </h2>
                
                <div className='plataformas-modal center'>
                    {plataformas?.map((plataforma) => (
                        <Plataforma nome = {plataforma.nome} />
                    ))}
                </div>

                <p className='desc-modal center'>
                {jogo.descricao}
                </p>
                <div className='comprar-modal center'>
                    <p> R${jogo.preco} </p>
                    <Comprar/>  
                </div>
                <div className='lojas-modal center'>
                {lojas?.map((loja) => (
                    <Lojas nome = {loja.nome} link = {loja.link} lat = {loja.lat} lng = {loja.lng} />
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}
