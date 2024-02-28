import React from 'react'
import { useState } from 'react';
import Icons from '../elements/Icons'

function LearingSection()
{

    const [gitResume, setGitResume] = useState('')
    const [gitRepos, setGitRepos] = useState('')
    const [codeWars, setCodeWars] = useState('')

    if(!gitResume && !codeWars) 
    {
        let resume = fetch('https://api.github.com/users/vampika').then(r => r.json()).then(data => {
            setGitResume(data)
        })

        let repos = fetch('https://api.github.com/users/Vampika/repos').then(r => r.json()).then(data => {
            setGitRepos(data)}) 
            
        
    }
    else
    if(!codeWars)
    {
        let codewar = fetch('https://www.codewars.com/api/v1/users/Vampika').then(r => r.json()).then(data => {
            setCodeWars(data)})
    }
    else
        {
            
            return(
                <div className="learning-section">
                    <div className="learning-section__left-part">
                        <div className="learning-section__header-wrapper">
                            <h6>GitHub statistics</h6>
                            <Icons name="git" color="blue" />
                        </div>
                        
                        <ul>
                            <li>Created at – {gitResume.created_at}</li>
                            <li>Updated at – {gitResume.updated_at}</li>
                            <li>Number of public repositories – {gitResume.public_repos}</li>
                        </ul>
                    </div>
                    <div className="learning-section__right-part">
                    <div className="learning-section__header-wrapper">
                    <Icons name="codewars" color="blue" />
                        <h6>Codewars statistics</h6>
                    </div>
                        <ul>
                            <li>Rank – {codeWars.ranks.overall.name}</li>
                            <li>Honor – {codeWars.honor}</li>
                            <li>Total completed Kata's – {codeWars.codeChallenges.totalCompleted}</li>
                        </ul>
                    </div>
                </div>
            )
        }
}

export default LearingSection;