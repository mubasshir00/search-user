import React, { useContext } from 'react'
import { GithubContext } from '../../context/context'
import Card from '../Card/Card'
import Followers from '../Followers/Followers'
import { MdBusiness, MdLocationOn ,MdLink} from 'react-icons/md'
import './User.css'
const User = () => {
    const { githubUser } = useContext(GithubContext)
    const {
        avatar_url,
        html_url,
        name,
        login,
        company,
        blog,
        bio,
        location,
        twitter_username,
    } = githubUser
    // console.log(githubUser);
    return (
        <section className="section">
            <div className="section-center">
                <div className="card"></div>
                <div className="card">
           <div className="cardHeading">
                <h1>Users</h1>
           </div>
           <div className="cardBody">
                   <div className="userBody">
                        <div className="userDetails">
                            <div className="img">
                                <img src={avatar_url} alt={name} />
                            </div>
                            <div className="details">
                                <p className="name">{name}</p>
                                {/* <p className="login">{login}</p> */}
                                <p>@{twitter_username}</p>
                                <p className="bio">{bio}</p>
                            </div>
                            <div className="links">
                                <p>
                                    {
                                        company ? <MdBusiness className="linksIcon" /> : ''
                                    }
                                    {company}
                                </p>
                                <p>
                                    <MdLocationOn className="linksIcon" />
                                    {location}
                                </p>
                                <a href={blog}>
                                    <MdLink className="linksIcon"/>
                                    {blog}
                                </a>
                            </div>
                        </div>
                        <div className="followbtn" >
                            <a href={html_url} target="_blank">Follow</a>
                        </div>
                   </div>
                </div>  
                </div>
                
            </div>
        </section>
    )
}

export default User
