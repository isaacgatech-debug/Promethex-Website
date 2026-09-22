import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Admin from './Admin.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {window.location.pathname === '/admin' || window.location.pathname.startsWith('/admin/') ? <Admin /> : <App />}
  </React.StrictMode>,
)
