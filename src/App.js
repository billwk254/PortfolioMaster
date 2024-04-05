import Navbar from "./components/Navbar/Navbar";
import React, { useEffect } from 'react';
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Floater from "./components/UnderConstruction/construction";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    useEffect(() => {
        document.title = "Billy Wamboo"; // Set your desired page title here
    }, []); // Empty dependency array ensures this effect runs only once after mounting

    return ( <
        div className = "App"
        style = {
            {
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
            }
        } >
        <
        Navbar / >
        <
        Intro / >
        <
        Services / >
        <
        Experience / >
        <
        Portfolio / >

        <
        Contact / >
        <
        Footer / >
        <
        Floater / >
        <

        /div>
    );
}

export default App;