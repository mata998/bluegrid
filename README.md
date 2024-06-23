# Bluegrid test

## Introduction

This project is a solution to Bluegrid test. It is express api written in typescript. This project can be run locally by node or docker compose. It is also deployed and running on VPS, more about that down below!

## Check it out online

You can check it out here: http://128.140.126.243:4000/api/files

I didn't have time to set up the domain and https but i hope this is enough :D

## Local setup

Use Node `v16.13.0`

```
npm i
```

## Running locally with node

### Dev mode

You can run app in dev mode, and every code change will be reflected immediately

```
npm run dev
```

### Prod mode

Run the app in prod mode

```
npm start
```

## Running locally with docker

If you have Docker and Docker compose installed and setup on your machine, you can run this application in dev mode in docker container

```
npm run docker-dev
```

## Tests

You can run tests

```
npm run test
```

## More about my solution

### Simple express app

It's been a really long time since i built a pure express typescript app from the ground up without any "higher" framework or preset. I'm glad I did it because it was fun doing it again!

### Clean code

Maybe it looks like an overkill for an application of one endpoint, but i tried to make a "Clean code" structure that can be used as a template for any new company API.

I used "Repository pattern" and "Dependency injection" as my main guides for code structure.

### Docker and VPS

I love deploying everything i build, otherwise i have no idea if it really works or if it's just _"It Works On My Machine"_ (that was the name of my last Hackathon team)

So I set up simple containerisation with Docker and Docker compose. I also made a little VPS on [Hetzner](https://www.hetzner.com/cloud/) and deployed and run the container there. You can visit it here: http://128.140.126.243:4000/api/files

### Compression

I noticed that the json from your endpoint is **_br_** encoded when i hit it from the Chrome, so i did a **_gzip_** encoding.

## Final thoughts

I enjoyed working on this mini project and i learned some new things too!

Thank you for this opportunity and hope to hear from you soon!
