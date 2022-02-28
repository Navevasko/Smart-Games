import React, {useEffect, useState} from 'react'
import api from './api/api'
import img from './img/Spider-Man.png'
import cart from './img/bag.svg'
import cog from './img/cog.svg'

import Nav from './components/Nav'
import Destaque from './components/Destaque'
import Card from './components/Card'
import SearchBar from './components/SearchBar'


function App() {

  const [jogos, setJogos] = useState([])


  useEffect(() => {
      api.get('jogos').then((data) => {
        setJogos(data.data.jogo)
        
      })
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Nav logo = {img} cart = {cart} cog= {cog}/>

      <Destaque idJogo = '4' />

      <SearchBar/>

      <div className='container-jogos center'>

      {jogos?.map((jogo) => (
          <Card
            key={jogo.idJogo}
            idJogo = {jogo.idJogo}
            img = {jogo.imagem}
            title = {jogo.nome}
            price = {jogo.preco}
          />
        ))}
      </div>
    </div>
  )
}

export default App
