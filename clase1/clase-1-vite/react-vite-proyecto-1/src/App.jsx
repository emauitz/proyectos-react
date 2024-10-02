import { useState } from 'react'
import "./sections/Header"
import "./sections/Footer"
import Section from './sections/Section'
import { ApiDolar, ApiFeriados } from './sections/Apis'

function App() {
  return <div>
    <header />
    <Section />
    <ApiDolar />
    <ApiFeriados />
    <footer />
  </div>
}

export default App
