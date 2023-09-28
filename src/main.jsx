import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom'

// redux and redux per
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor } from "./redux/store";




import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ToastContainer
                            position="bottom-left"
                            autoClose={1000}
                            // hideProgressBar={false}
                            // newestOnTop={false}
                            closeOnClick
                            // rtl={false}
                            pauseOnFocusLoss
                            pauseOnHover={false}
                            // draggable
                            // pauseOnHover
                            theme="colored"
                        />
                    <App />
                    
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
