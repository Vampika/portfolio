import React from 'react'
import TextLine from '../elements/TextLine'
import Icons from '../elements/Icons'
import Button from '../elements/Button'


function SecondSection(){
    return(
        <section className="second-section">
            <TextLine text="HTML – CSS – JAVASCRIPT – REACT – HTML – CSS – JAVASCRIPT – REACT –&nbsp;" color="blue" />
            <div className="second-section__wrapper">
                <div className="second-section__left-part">
                    <h1 className='second-section__title'>I’m&nbsp;<span>looking</span> for a job</h1>
                    <p className='second-section__text'>Looking at my portfolio below and if you are interesting send me a letter, or text in telegram</p>
                </div>
                <div className="second-section__right-part">
                    <Icons name="tg" color="blue" size="big"/>
                    <a href="mailto:vampika.vamp@gmail.com"  target="_blank"><Button text="Write&nbsp;a&nbsp;letter" color="blue" /></a>
                </div>
            </div>
        </section>
    )
}

export default SecondSection;