import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import SignInAuthRoute from './routes/SignInAuthRoute';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignInForm from './components/SignInForm';
import AuthForm from './components/AuthForm';
import store from './store';
import { Provider } from 'react-redux';
import ProfileRoute from './routes/ProfileRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<SignInAuthRoute />}>
            <Route index element={<SignInForm />} />
            <Route path='auth' element={<AuthForm />} />
          </Route>
          <Route path='profile' element={ <ProfileRoute /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
