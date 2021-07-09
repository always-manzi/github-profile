# github-clone

[![NPM Version](https://camo.githubusercontent.com/ddeb61629220ec52a44c20ed3409dc47fa42a397dc79a9b09f198a6c90f97d4a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406e6573746a732f636f72652e737667)](https://www.npmjs.com/~nestjscore)

##### 상세

`Next.JS` 의 기본 **API**와 **Github**에서 제공하는 [**users API**](https://api.github.com/users)를 활용해 **Github**의 유저 페이지를 바탕으로 **개인의 개발에 대한 경험을 요약하는 페이지**를 만들어보는 **토이 프로젝트**.

##### 기술

- `React.js`
- `Next.js`

---

### API

##### 1. [Github users api](https://api.github.com/users)

```json
{
  "login": "always-manzi",
  "id": 28479028,
  "node_id": "MDQ6VXNlcjI4NDc5MDI4",
  "avatar_url": "https://avatars.githubusercontent.com/u/28479028?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/always-manzi",
  "html_url": "https://github.com/always-manzi",
  "followers_url": "https://api.github.com/users/always-manzi/followers",
  "following_url": "https://api.github.com/users/always-manzi/following{/other_user}",
  "gists_url": "https://api.github.com/users/always-manzi/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/always-manzi/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/always-manzi/subscriptions",
  "organizations_url": "https://api.github.com/users/always-manzi/orgs",
  "repos_url": "https://api.github.com/users/always-manzi/repos",
  "events_url": "https://api.github.com/users/always-manzi/events{/privacy}",
  "received_events_url": "https://api.github.com/users/always-manzi/received_events",
  "type": "User",
  "site_admin": false,
  "name": "manzi",
  "company": "wouldyou.in",
  "blog": "",
  "location": "鷄龍 , KOREA",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 4,
  "following": 5,
  "created_at": "2017-05-06T08:49:00Z",
  "updated_at": "2021-07-09T13:42:20Z"
}
```
