import React, { useContext } from 'react'
import { GithubContext } from '../../context/context'
import { ChartComponent, Pie3D, Column3D, Bar3D, Doughnut2d } from '../Charts'
import './Repos.css'
const Repos = () => {
    const { repos } = useContext(GithubContext)
    // console.log(repos);

    const languages = repos.reduce((total, item) => {
        const { language, stargazers_count } = item;
        if (!language) return total;
        if (!total[language]) {
            total[language] = { label: language, value: 1, stars: stargazers_count };
        } else {
            total[language] = {
                ...total[language], value: total[language].value + 1,
                stars: total[language].stars + stargazers_count
            };
        }
        return total
    }, {})

    const mostUsedLang = Object.values(languages).sort((a, b) => {
        return b.value - a.value;
    }).slice(0, 5)

    //most stars per lang
    const mostPopular = Object.values(languages).sort((a, b) => {
        return b.stars - a.stars
    }).map((item) => {
        return { ...item, value: item.stars }
    }).slice(0, 5);

    //stars , forks
    let { stars, forks } = repos.reduce((total, item) => {
        const { stargazers_count, name, forks } = item;
        total.stars[stargazers_count] = {
            label: name,
            value: stargazers_count
        }
        total.forks[forks] = { label: name, value: forks }
        return total;
    }, {
        stars: {},
        forks: {},
    })

    stars = Object.values(stars).slice(-5).reverse();
    forks = Object.values(forks).slice(-5).reverse()

    return (
        <div className="sectionRepos">
            <div className="sectionReposContainer">
                <div className="firstDiv">
                    <div className="mostUsedLang">
                        <Pie3D data={mostUsedLang} />
                    </div>
                    <div className="mostPopular">
                        <Doughnut2d data={mostPopular} />
                    </div>
                </div>
                <div className="secondDiv">
                    <div className="usersDiv">
                        <Column3D data={stars} />
                    </div>
                    <div className="forks">
                        <Bar3D data={forks} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Repos
