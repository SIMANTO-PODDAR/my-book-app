import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from "react-router/dom";
import router from './Routers/Router';

import Contexts from './assets/Contexts/Contexts';



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Contexts>

      <RouterProvider router={router} />

    </Contexts>

  </StrictMode>,
);
