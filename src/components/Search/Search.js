import React, { useContext, useState } from 'react'
import { MdSearch } from 'react-icons/md'
import { GithubContext } from '../../context/context'
import './Search.css'

const Search = () => {
    const { request, error, searchGitHubUser } = useContext(GithubContext)
    const [user, setUser] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (user) {
            searchGitHubUser(user)
        }

    }
    return (
        <div className="formContainer">
            <form className="form-search" onSubmit={handleSubmit}>
                <input type="text" name="" value={user} placeholder="Enter Github User" onChange={(e) => setUser(e.target.value)} />
                <button type="submit">Search</button>
                {error.show &&
                    <div>
                        <p className="error">{error.msg}</p>
                    </div>
                }
            </form>
            {/* <h3>Request : {request}/60</h3> */}
        </div>
    )
}

export default Search
