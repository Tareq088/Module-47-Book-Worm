import React from 'react';
import { createBrowserRouter } from 'react-router';

import MainLayout from '../assets/Pages/MainLayOut/MainLayout';

export const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout
    }
  ])