import React from 'react'

export default function Nav({logo, cart, cog}) {
  return (
    <nav className='nav-jogos center'>

        <img className='nav-logo' src={logo} alt="Logo" />

        <div className='gap center'>
            <h2 className='text-grey hover-scale transition'> Jogos </h2>
            <h2 className='text-grey hover-scale transition'> Plataformas </h2>
            <h2 className='text-grey hover-scale transition'> Lojas </h2>
        </div>

        <div className='nav-icons gap center'>
            <img src={cart} alt="Carrinho" />
            <img src={cog} alt="Configurações" />
        </div>
    </nav>
  )
}
