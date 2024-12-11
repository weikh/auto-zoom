import {observer} from 'mobx-react-lite'
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Brands from '../pages/brands/brands';
import Categories from '../pages/categories/categories';
import Dashboard from "../pages/dashboard/dashboard";
import Login from "../pages/login/login";
import Models from '../pages/models/models';
import authStore from "../store/auth.store";
import Places from '../pages/places/places'
import Cities from '../pages/cities/cities'
import Cars from '../pages/cars/cars'

const Router = () => {
  const { isAuth } = authStore;

  if (!isAuth)
    return (
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Navigate to="/login " />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/brands' element={<Brands/>}/>
        <Route path='/models' element={<Models/>}/>
        <Route path='/places' element={<Places/>}/>
        <Route path='/cities' element={<Cities/>}/>
        <Route path='/cars' element={<Cars/>}/>

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default observer(Router);
