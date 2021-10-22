import React, { useEffect, useState } from "react";
import axios from "axios";
import { fakeUsers } from "../data/fakeUser";
import { fakeRepos } from "../data/fakeRepos";
import { fakeFollower } from "../data/fakefollowers";

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({children}) =>{
    const [githubUser, setGithubUser] = useState(fakeUsers);
    const [repos, setRepos] = useState(fakeRepos);
    const [gitFollowers, setGitFollowers] = useState(fakeFollower)
    const [request, setRequest] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    // error
    const [error, setError] = useState({show:false,msg:""})

    const checkRequest = () =>{
        axios(`${rootUrl}/rate_limit`)
            .then(({ data})=>{
            let {
                rate: { remaining}
            } = data;
            setRequest(remaining);
            if(remaining ===0){
                toggleError(true,'You have reached to request limit!')
            }
        })
        .catch((err)=>console.log(err))
    }

    const searchGitHubUser = async(user) =>{
        toggleError()
        setIsLoading(true)

        const response = await axios(`${rootUrl}/users/${user}`)
        .catch((err)=>console.log(err))
        console.log(response);

        if(response){
            setGithubUser(response.data);
            const {login,followers_url} = response.data;

            //it is for showing all data after completed all data loading

            await Promise.allSettled([axios(`${rootUrl}/users/${login}/repos?per_page=100`), axios(`${followers_url}?per_page=100`),]).then((results)=>{
                console.log(results);
                const [repos,followers] = results;
                const status = 'fulfilled';
                if(repos.status === status){
                    setRepos(repos.value.data)
                }
                if(followers.status===status){
                    setGitFollowers(followers.value.data);
                }
            }).catch(err=>console.log(err))
        } else {
            toggleError(true,'Sorry')
        }

        checkRequest();
        setIsLoading(false);
    }

    function toggleError(show = false,msg=''){
        setError({show,msg})
    }

    useEffect(checkRequest, [])

    return(
        <GithubContext.Provider value={{ githubUser, repos, gitFollowers, request, error, searchGitHubUser, isLoading}}>
            {children}
        </GithubContext.Provider>

    )
}

export {GithubProvider,GithubContext}