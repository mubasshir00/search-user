import React, { useContext } from 'react'
import { GithubContext } from '../../context/context'
import { GoGist, GoRepo } from 'react-icons/go'
import { FiUsers, FiUserPlus } from 'react-icons/fi'
import './Info.css'
const Info = () => {
    const { githubUser } = useContext(GithubContext)
    const { public_repos, followers, following, public_gists } = githubUser;
    const items = [
        {
            id: 1,
            icon: <GoRepo className="icon" />,
            label: 'Repos',
            value: public_repos,
        },
        {
            id: 2,
            icon: <FiUsers className="icon" />,
            label: 'Followers',
            value: followers,
        },
        {
            id: 3,
            icon: <FiUserPlus className="icon" />,
            label: 'Following',
            value: following,
        },
        {
            id: 4,
            icon: <GoGist className="icon" />,
            label: 'Gists',
            value: public_gists,
        }
    ]
    return (
        <div className="infoContent">
            {
                items.map((item) => {
                    const { id, icon, value, label, color } = item;
                    return (
                        <div className="contentContainer">
                            <div className={color}>
                                {icon}
                            </div>
                            <div className="content">
                                <p className="value">{value}</p>
                                <p>{label}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Info
