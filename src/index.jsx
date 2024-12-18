import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './assets/CartContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
  ReactDOM.render(
  <CartProvider>
      <App />
  </CartProvider>,
  document.getElementById('root')
);