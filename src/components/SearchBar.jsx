import React, { useState } from 'react'

export default function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='search-container center'>
      <h2> Jogos </h2>

      <input className='search-box' type="text" placeholder='Pesquise um Jogo' onChange={(event) => {
        setSearchTerm(event.target.value)
        
      }} />
    </div>
  )
}
