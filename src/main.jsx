import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './components/Blog.jsx';
import Card from './components/card/Card.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
const router = createBrowserRouter([
  {
    path:"/dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:"/dashboard",
        element:<Card></Card>,
      },
      {
        path:"/dashboard/test",
        element:<Blog></Blog>
      }
    ],

  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
