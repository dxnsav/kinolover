import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './index.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
		</Route>
		</Routes>
	</BrowserRouter>,
  document.getElementById("root")
);
