import { useState } from 'react'
import heroImg from './assets/hero.png'
import iphoneImg from './assets/iphone.png'
import samsungImg from './assets/samsung.png'
import googleImg from './assets/googlepixel7.png'
import './App.css'
import Card from './Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  const products = [
    { id: "1", name: "Iphone 14", price: 999, img: iphoneImg },
    { id: "2", name: "Samsung Galaxy S23", price: 1299, img: samsungImg },
    { id: "3", name: "Google Pixel 7", price: 1499, img: googleImg }
  ]

  return (
    <div className="page-container">
      <main className="main-content">
        <Card prod={products} />
      </main>
    </div>
  )
}

export default App