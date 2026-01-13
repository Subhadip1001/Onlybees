import React from 'react'
import Logo from '../assets/OnlyBees_light.3cfb6be4.svg'

const Namebar = () => {
  return (
    <div className='bg-black w-full p-3 border-b-2 border-white fixed top-0 z-20'>
      <img src={Logo} alt="Logo" className="h-8" />
    </div>
  )
}

export default Namebar