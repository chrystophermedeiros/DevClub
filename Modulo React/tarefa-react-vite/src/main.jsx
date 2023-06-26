import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DigimonList from './Digimon.jsx'
import GlobalStyles from './globalStyle.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   < GlobalStyles />
    <App />
    {/* < DigimonList /> */}
  </React.StrictMode>,
)
