import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Admin from './Admin.jsx'
import Privacy from './Privacy.jsx'
import './index.css'

const path = window.location.pathname

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {path === '/admin' || path.startsWith('/admin/') ? <Admin /> : path === '/privacy' ? <Privacy /> : <App />}
  </React.StrictMode>,
)
