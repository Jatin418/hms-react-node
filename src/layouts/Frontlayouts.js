import * as React from "react";
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Frontlayouts(props){
    console.log("props layout", props)
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}