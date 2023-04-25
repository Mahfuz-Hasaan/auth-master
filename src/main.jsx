import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Header from './cmponents/Header.jsx';
import Home from './cmponents/Home.jsx';
import Register from './cmponents/Register.jsx';
import Login from './cmponents/Login.jsx';
import Main from './layout/Main.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import Orders from './cmponents/Orders.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import UserProgfile from './cmponents/UserProgfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : 'register',
        element : <Register></Register>
      },
      {
        path : 'login',
        element : <Login></Login>
      },
      {
        path : 'order',
        element : <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path : 'profile',
        element : <PrivateRoute><UserProgfile></UserProgfile></PrivateRoute>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
