import React, { useContext } from 'react'
import { GithubContext } from '../../context/context'
import Card from '../Card/Card';
import './Followers.css'
const Followers = () => {
    const { gitFollowers} = useContext(GithubContext)
    return (
        <section className="sectionfollwer">
            <div className="sectioncenter">
                <div className="cardFollower">
                <div className="card">
           <div className="cardHeading">
                <h1>Followers</h1>
           </div>
           <div className="cardBody">
                    {
                        gitFollowers.map((follower,index)=>{
                            const { avatar_url, html_url, login } = follower
                            return(
                                <div className="followerContent" key={index}>
                                   <img src={avatar_url} alt=""/>
                                   
                                   <div>
                                        <p className="name">{login}</p>
                                        <a href={ html_url }
                                        target="_blank"
                                        className="githubLink">{html_url}</a>
                                   </div>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Followers
