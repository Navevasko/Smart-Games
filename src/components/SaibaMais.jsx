import React, {useState, useEffect} from 'react'
import Modal from './ModalJogo'
import api from '../api/api'

export default function SaibaMais({idJogo}) {
  const [openModal, setOpenModal] = useState(false)

  const [jogo, setJogo] = useState()

    useEffect(() => {
        api.get(`jogo/${idJogo}`).then((data) => {
          setJogo(data.data.jogo)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div>
      <button onClick={() => {setOpenModal(true)}} className='saiba-mais hover-scale transition'>
        Saiba Mais
      </button>
      {openModal && 
      <Modal
        jogo = {jogo}
        lojas = {jogo.Loja}
        plataformas = {jogo.Plataforma}
        closeModal= {setOpenModal} 
      />}
    </div>
    
    
  )
}
