import React from 'react'
import Api from './components/Api'

export default function App() {
  return (
    <div className='bg-contain h-screen w-screen' style={{ backgroundImage: "url('src/assets/images.jpeg')" }}>
      <nav className='py-7 flex justify-center items-center w-full mb-24'>
        <div className='text-blue-700 text-5xl font-extrabold font-serif'>SCINCE FICTION</div>
      </nav>
      <Api/> 
    </div>
  )
}
