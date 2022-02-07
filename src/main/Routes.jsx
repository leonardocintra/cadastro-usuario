import React from "react"
import { Routes, Route } from 'react-router-dom';

import Home from '../components/home/Home'
import User from "../components/users/User"

export default props =>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<User />} />
    </Routes>