import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

import {store} from './redux/store.js';
import App from './components/App.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <BrowserRouter>
        <Provider store={store}>
          <App />
          <Toaster position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#f7f7f7",
              color: "#101828",
            },
          }}/>
          </Provider>
        </BrowserRouter>
  </StrictMode>
);