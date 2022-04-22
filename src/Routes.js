import React  from 'react';
import {Route, Routes} from 'react-router-dom';

import Card2 from "./Card2";
import Card1 from "./Card1";
import Dashboard from "./Dashboard"

export default function MyRoutes(){
    return(
            <Routes>
                <Route exact path='/' element={<Card1 />} />
                <Route path='/card2' element={<Card2 />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
    );
}   
