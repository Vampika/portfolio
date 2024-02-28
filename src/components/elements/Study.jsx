import React from 'react'
import itmo from '../../image/icons/itmo-logo-dark.svg'
import leti from '../../image/icons/spbetu-logo-ru.svg'



function Study(){
    return(
        <div className="study-section">
            <div className="study-section__step-wrapper">
                <h6 className="study-section__title">2016 – среднее профессиональное</h6>
                <div className="study-section__bottom">

                
                <div className="study-section__logo">
                    <img src={itmo}></img>
                </div>
                <p className="study-section__text">Факультет среднего профессионального образования
                09.02.03 Программирование в компьютерных системах</p>
                </div>
            </div>
            <div className="study-section__step-wrapper">
                <h6 className="study-section__title">2020 – бакалавриат</h6>
                <div className="study-section__bottom">
                <div className="study-section__logo">
                    <img src={leti}></img>
                </div>
                <p className="study-section__text">Факультет компьютерных<br /> технологий и информатики, Информационные системы, бакалавр</p>
                </div>
            </div>
            <div className="study-section__step-wrapper">
                <h6 className="study-section__title">2022 – магистратура</h6>
                <div className="study-section__bottom">
                <div className="study-section__logo">
                    <img src={leti}></img>
                </div>
                <p className="study-section__text">Факультет компьютерных<br /> технологий и информатики, Информационные системы и технологии 09.04.02</p>
                </div>
            </div>
        </div>
    )
}

export default Study;