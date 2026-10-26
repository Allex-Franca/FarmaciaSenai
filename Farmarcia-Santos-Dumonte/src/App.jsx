import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
