---
title: ftb.tv
description: A recreation of Nightbot.tv for my own usage
date: '2024-6-01'
categories:
  - twitch
  - astro
  - postgres
  - prisma
post: true
image: true
---

ftb.tv is a project for my twitch channel to have a moderation and utility bot created by myself to moderate chat and give useful informations if needed

It's divided in two parts: the bot and the dashboard

The bot is writen in TypeScript with [tmi.js](https://github.com/tmijs/tmi.js) while the dashboard is made with [Astro](https://astro.build). The two share a postgres database and interact with it using [Prisma](https://prisma.io/).

The source code of the bot can be found [here](https://git.gay/fantomitechno/ftb.tv) and the dasboard [here](https://git.gay/fantomitechno/ftb.tv-web)