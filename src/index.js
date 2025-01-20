import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import { store, persistor } from './store'; 
import { PersistGate } from 'redux-persist/integration/react';  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    <App />
    </PersistGate>
  </Provider>


);


