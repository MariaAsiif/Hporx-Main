import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.grid.css';
import './index.css';
import 'tw-elements';
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import App from './app/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
          <App />
      </PersistGate>

    </Provider>
  </React.StrictMode>
);


