import React from 'react'
import Button from './elements/Button'
import Icons from './elements/Icons'
import TextLine from './elements/TextLine';

function Footer()
{


    return (
        <footer className="footer" id="contacts">
            <TextLine text=" HIRE ME – HIRE ME – HIRE ME – HIRE ME – HIRE ME – HIRE ME – HIRE ME – HIRE ME – HIRE ME – HIRE ME –&nbsp;"/>
            <div className="footer__wrapper">

                
                <div className="footer__contacts contacts">
                    <div className="contacts__name-wrapper">
                        <p className="contacts__name">
                            <span>PULNEVA KSENIIA</span> – FRONTEND DEVELOPER – Saint Petersburg, RUSSIA
                        </p>
                        <a href="mailto:vampika.vamp@gmail.com"  target="_blank"><Button text="Write a letter" /></a>
                    </div>
                    <div className="contacts__icons">
                        <Icons name="tg"/> 
                        <Icons name="git"/>                        
                        <Icons name="codewars"/>
                        <Icons name="hh"/>                        
                    </div>
                </div>
                <hr className="footer__line" />
                <p className="footer__small-text">I’m not a designer and this site is created by borrowing many components from other people. Thank you!</p>
            </div>
        </footer>
    )
}

export default Footer;