import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import MyFieldSet from './MyFieldSet'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <MyFieldSet titulo="Datos Personales" txt1="Nombre" txt2="Contrasenia"></MyFieldSet>
  </React.StrictMode>,
)
