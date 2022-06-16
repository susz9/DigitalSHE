/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable quotes */
import React from "react";

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

const App = () => (
    <div className="App">
        <div className=".gradient__bg">
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
);

export default App;
