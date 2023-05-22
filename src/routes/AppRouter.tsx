import React,{useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/pages/login/Login'
import Dashboard from '../components/pages/dashboard/Dashboard'
import OneAlbum from '../components/pages/oneAlbum/oneAlbum'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard /> } />

      <Route path="/album/:id" element={<OneAlbum />} />  
      
      <Route path="*" element={<Dashboard /> } />
    </Routes>
  )
}

export default AppRouter
