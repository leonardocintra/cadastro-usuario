import React from "react"
import { Route, Routes } from "react-router";

import Home from '../components/home/Home'
import User from "../components/users/User"

export default props =>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<User />} />
    </Routes>