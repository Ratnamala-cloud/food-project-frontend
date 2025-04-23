import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>

  </BrowserRouter>


=======
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <App />
</BrowserRouter>
  
>>>>>>> 78b24c6 (first commit)
)
