import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./base/app/App";
import {ContentConfigProvider} from "./base/app/Hooks";

// Ensure the 'root' element is not null by using a type assertion
const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <ContentConfigProvider>
            <App />
        </ContentConfigProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
