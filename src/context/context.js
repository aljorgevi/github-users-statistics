import React, { useState, useEffect, createContext } from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com'

const GithubContext = createContext()

// Provider, Consumer - GithubContext.Provider

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)

  //request loading
  const [requets, setRequets] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({ show: false, msg: '' })

  const searchGithubUser = async user => {
    toggleError()
    setIsLoading(true)

    try {
      const response = await axios(`${rootUrl}/users/${user}`)
      setGithubUser(response.data)

      const { followers_url, repos_url } = response.data

      const results = await Promise.allSettled([
        axios(`${repos_url}?per_page=100`),
        axios(`${followers_url}?per_page=100`)
      ])
      const [repos, followers] = results

      setRepos(repos.value.data)

      setFollowers(followers.value.data)
    } catch (err) {
      console.error(err.message)
      toggleError(true, 'there is no user with that username')
    }

    checkRequests()
    setIsLoading(false)
  }

  //check rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let { remaining } = data.rate

        setRequets(remaining)
        if (remaining === 0) {
          toggleError(true, 'sorrry, you have exceeded your hourly rate limit!')
        }
      })
      .catch(err => console.log(err))
  }

  //error function
  function toggleError(show = false, msg = '') {
    setError({ show, msg })
  }

  useEffect(checkRequests, [])

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requets,
        error,
        searchGithubUser,
        isLoading
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export { GithubProvider, GithubContext }
