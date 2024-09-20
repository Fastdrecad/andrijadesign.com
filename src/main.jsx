import React from 'react';
import ReactDOM from 'react-dom/client';
import { SidebarProvider } from './context/SidebarContext.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </React.StrictMode>
);
