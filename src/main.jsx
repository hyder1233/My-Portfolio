import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Resume from './pages/Resume/Resume.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <About/>,
      },
      {
        path: "/resume",
        element: <Resume/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "skills",
        element: <Skills/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
