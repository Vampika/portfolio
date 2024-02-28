import React from 'react'
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import AboutSection from "./sections/AboutSection";
import PortfolioSection from "./sections/PortfolioSection";

function Main() {


    return (
        <main className="main">
            <FirstSection />
            <SecondSection />
            <AboutSection />
            <PortfolioSection />
        </main>
    )
}

export default Main;