import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './components/app';
import GlobalStyles from './global-styles';

const container = document.getElementById('root')!;
const root = ReactDOMClient.createRoot(container);

root.render(
    <React.StrictMode>
        <GlobalStyles/>
        <App/>
    </React.StrictMode>
);