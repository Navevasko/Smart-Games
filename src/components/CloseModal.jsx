import React, { useState } from 'react'

export default function Close({closeModal}) {
  return (
    <button onClick={() => closeModal(false)} className='close-modal center-row'>
      <p>X</p>
    </button>
  )
}
