import React from "react"
import { Routes, Route } from 'react-router-dom';

import Home from '../components/home/Home'
import Pessoa from "../components/pessoa/Pessoa";

export default props =>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pessoas' element={<Pessoa />} />
    </Routes>