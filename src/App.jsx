import React, { useState } from 'react'
import './App.css'
import DataForm from './assets/components/DataForm'
import ResultBox from './assets/components/ResultBox'

const App = () => {
  const [qrCodeUrl , setQrCodeUrl] = useState("");

  return (
    <>
      <div className='title-container fadeInDown'>
        <h1>Gerador de QR Code</h1>
      </div>
      <div className='main-container popUp'>
        <DataForm setQrCodeUrl={setQrCodeUrl}/>
        <ResultBox qrCodeUrl={qrCodeUrl}/>
      </div>
      <div className="contacts popIn">
        <a href="https://github.com/RecheEduardo" target='_blank'><i class="fa-brands fa-github contact-icon"></i></a>
        <a href="https://www.linkedin.com/in/eduardorechemartins/" target='_blank'><i class="fa-brands fa-linkedin contact-icon"></i></a>
        <a href="mailto:eduardorechemartins2006@gmail.com" target='_blank'><i class="fas fa-envelope contact-icon"></i></a>
      </div>
    </>  
  )
}

export default App