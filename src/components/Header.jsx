import React from 'react'

function Header() {

return (
    <header className="header">
        <nav className="header__nav nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#about">About</a></li>
                <li className="nav__item"><a href="#education">Education</a></li>
                <li className="nav__item"><a href="#skills">Skills</a></li>
                <li className="nav__item"><a href="#portfolio">Portfolio</a></li>
                <li className="nav__item"><a href="#contacts">Contacts</a></li>
            </ul>
        </nav>
    </header>
)
}

export default Header;