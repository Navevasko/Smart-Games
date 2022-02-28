import React, {useState, useEffect} from 'react'
import SaibaMais from './SaibaMais'
import api from '../api/api'

export default function Destaque({idJogo}) {

  const [jogo, setJogo] = useState()

    useEffect(() => {
        api.get(`jogo/${idJogo}`).then((data) => {
          setJogo(data.data.jogo)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div className='destaque-container center'>
      <img className='destaque-banner' src='https://upload.wikimedia.org/wikipedia/pt/thumb/d/dc/Ghost_of_Tsushima_capa.png/270px-Ghost_of_Tsushima_capa.png' alt="Banner de Jogo" />
      <div className='destaque-desc'>
          <h2 className='destaque-title center'> Ghost of Tsushima </h2>

          <p className='destaque-bio' > No final do século XIII, o império mongol devastou nações inteiras durante sua campanha para conquistar o Oriente. A Ilha de Tsushima é tudo o que está entre o Japão continental e uma enorme frota invasora mongol comandada pelo implacável e sagaz general Khotun Khan. À medida que a ilha queima na esteira da primeira onda do assalto mongol, o guerreiro samurai Jin Sakai mantém-se como um dos último membros sobreviventes de seu clã. Ele está decidido a proteger seu povo e recuperar seu lar, independente do que aconteça, custe o que custar. Será preciso romper com as tradições que o tornaram um guerreiro para forjar um novo caminho do Fantasma e declarar uma guerra incomum pela liberdade de Tsushima. </p>
      </div>
    </div>
  )
}
