const searchGithubUser = async user => {
  toggleError()
  //setLoading(true)

  const response = await axios(`${rootUrl}/users/${user}`).catch(err =>
    console.log(err)
  )
  console.log(response)

  if (response) {
    setGithubUser(response.data)
    console.log(response.data)

    //more logic here
  } else {
    toggleError(true, 'there is no user with that username')
  }
}

const searchGithubUserWithTry = async user => {
  toggleError()
  //setLoading(true)
  //

  try {
    const response = await axios(`${rootUrl}/users/${user}`)
    setGithubUser(response.data)
    console.log(response.data)
    //more logic here
  } catch (err) {
    toggleError(true, 'there is no user with that username')
  }
}
