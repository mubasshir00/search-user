import React, { useContext } from 'react'
import { Info, Loading, Navbar, Repos, Search, User } from '../components'
import Followers from '../components/Followers/Followers'
import { GithubContext } from '../context/context'
import './Dashboard.css'
const DashboardPage = () => {
    const { isLoading} = useContext(GithubContext)
    if(isLoading){
        return <main>
            <Navbar/>
            <Search/>
            <Loading/>
        </main>
    }
    return (
        <div className="dashboard">
            <div className="dashboardContainer">
                <Navbar></Navbar>
                <Search />
                <Info />
                <div className="userfollwer">
                    <User />
                    <Followers />
                </div>
                <Repos />
            </div>
        </div>
    )
}

export default DashboardPage
