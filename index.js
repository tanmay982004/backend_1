require('dotenv').config()
// console.log(process.env)
const express = require('express')
//above line can also be written as 
//import express from "express"
const app = express() //app is a variable like math
const port = 4000

 const githubData={
  "login": "tanmay982004",
  "id": 155573005,
  "node_id": "U_kgDOCUXbDQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/155573005?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/tanmay982004",
  "html_url": "https://github.com/tanmay982004",
  "followers_url": "https://api.github.com/users/tanmay982004/followers",
  "following_url": "https://api.github.com/users/tanmay982004/following{/other_user}",
  "gists_url": "https://api.github.com/users/tanmay982004/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/tanmay982004/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/tanmay982004/subscriptions",
  "organizations_url": "https://api.github.com/users/tanmay982004/orgs",
  "repos_url": "https://api.github.com/users/tanmay982004/repos",
  "events_url": "https://api.github.com/users/tanmay982004/events{/privacy}",
  "received_events_url": "https://api.github.com/users/tanmay982004/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2024-01-03T17:52:38Z",
  "updated_at": "2024-09-07T05:43:04Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('Hello Twitter')
})
app.get('/login',(req,res)=>
{
    res.send('You are logged in')
})
app.get('/youtube',(req,res)=>
{
    res.send('<h1>Hello Youtube</h1>')
})
app.get('/github',(req,res)=>
  {
     res.json(githubData)
  })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})