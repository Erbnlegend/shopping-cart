import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.html'
import './styles/main.css'
import 'normalize.css'
import './styles/navbar.css'
import './styles/search.css'
import './styles/cards.css'
import './styles/cart.css'
import './styles/theme.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
