import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SimpleProvider } from './context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <SimpleProvider>
      <App />
    </SimpleProvider>
  </React.StrictMode>,
)
