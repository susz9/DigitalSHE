/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable quotes */
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
    Footer,
    Blog,
    Possibility,
    Features,
    Header,
    DigitalSHE,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

import "./App.css";

const App = () => {
    useEffect(()=> {
        Aos.init({
            offset: 200,
            duration: 1000,
        });
    }, [])
    return (
    <div className="App">
        <div className=".gradient__bg" >
            <Navbar />
            <Header />
        </div>
        <DigitalSHE />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Brand />
        <Footer />
    </div>
    )
    }

export default App;
