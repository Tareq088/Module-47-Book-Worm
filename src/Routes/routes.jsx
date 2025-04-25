import React from 'react';
import { createBrowserRouter } from 'react-router';

import MainLayout from '../assets/Pages/MainLayOut/MainLayout';

import Errorpage from '../Pages/ErrorPage/Errorpage';
import Home from '../Pages/Home/Home';

export const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      errorElement: <Errorpage></Errorpage>,
      children:[
        {
          index: true,
          path:"/",
          loader:()=> fetch("booksData.json")  ,
          Component:Home,
        }
      ]
    }
  ])