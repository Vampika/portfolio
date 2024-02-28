import React, { useEffect, useState }  from 'react'
import Title from "../elements/Title";
import Button from "../elements/Button";
import LearingSection from "./LearningSection";
import Baikal from "../../image/baikal-small.png"
import img1 from '../../image/image-1.png'
import img2 from '../../image/image-2.png'



function PortfolioSection(){
    const [modalActive, setModalActive] = useState(true)

    return (
        <section className="portfolio-section" id="portfolio">
            <Title text="MY WORKS" color="blue"/>
            <h2 className="portfolio-section__small-title">COMMERCIAL</h2>

            <div className="portfolio-section__slider-wrapper">
            <div className="portfolio-section__slide">
                <div className="slider-image__wrapper">
                    <div className="slider-image__img">
                        <img src={Baikal}></img>
                    </div>
                </div>
                <p className="slider-image__text">This is my first commercial work as a frontend developer. It's quite a big work with a lot of pages and some js-scripts.</p>
                <a href="#!"><Button text="LOOK LIVE" color="blue" /></a>
            </div>
            </div>
            <h2 className="portfolio-section__small-title">TRAINING</h2>
            <div className="portfolio-section__slider-wrapper">
                <div className="portfolio-section__slide">
                    <div className="slider-image__wrapper">
                    <div className="slider-image__img">
                        <img src={img1}></img>
                    </div>
                    </div>
                        <p className="slider-image__text">A one-page website created for training. Here are BEM and Sass methodology. Lots of CSS animations</p>
                    <a href="https://github.com/Vampika/Front-training_2" target="_blank"><Button text="LOOK ON GIT" color="blue" /></a>
                </div>
            </div>
            <div className="portfolio-section__slider-wrapper">
                <div className="portfolio-section__slide">
                    <div className="slider-image__wrapper">
                    <div className="slider-image__img">
                        <img src={img2}></img>
                    </div>
                    </div>
                        <p className="slider-image__text">A one-page website created for training. Here are BEM and Sass methodology.</p>
                    <a href="https://github.com/Vampika/Front-training_1" target="_blank"><Button text="LOOK ON GIT" color="blue" /></a>
                </div>
                
            </div>
            <Title text="LEARNING NEVER ENDS" color="blue"/>
            <LearingSection />
        </section>
    )
}

export default PortfolioSection;