import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Contact from './Components/Home/Contact/Contact.jsx';
import CreateContact from './Components/Home/CreatContact/CreateContact.jsx';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Contact/>
      },
      {
        path:"/Add_Contact",
        element:<CreateContact/>
      }
    ]
  },
]);
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
   </QueryClientProvider>
  </React.StrictMode>
);