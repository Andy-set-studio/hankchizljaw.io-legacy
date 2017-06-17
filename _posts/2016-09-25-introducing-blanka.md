---
layout: post
title: "Introducing Blanka"
summary: "I've made a little Chrome extension that should help remedy the widespread <code>target=\"_blank\"</code> abuse on the web. Hopefully it'll help lots of people out by automatically stripping those nasty attributes out for them."
redirect_from: "/blog/introducing-blanka"
---

One thing that I think is abused on the internet the most is *target="_blank"*. In my experience, most of the time this attribute is used by developers and designers, is when the client "doesn't want users to leave their website". Other times it's likely down to pure naivety.

I created a little Chrome extension called Blanka to help remedy this.

It's a tiny little JavaScript function that finds all elements that are set to *target="_blank"* and removes that attribute. I hope that although it's tiny, it helps users browse the web in the knowledge that clicking a link won't unexpectedly open a new window / tab.

### Why Blanka?

Well, *target="_blank"* abuse makes me rage just like one of my favourite Street Fighter characters, [Blanka](https://en.wikipedia.org/wiki/Blanka) does in the game. I've always wanted to incorporate a Street Fighter character in a project, so it seemed perfect.

### Why I made a Chrome extension

There's a number of reasons why I made a Chrome extension. The main one is that I wanted to test the water for a couple of accessibility tools that I'm thinking of making. The experience of making a Chrome extension was much better than I expected it to be too.

Another reason is that where a link opens should be the user's and **only** the user's choice. Even if we as developers and designers think it may enhance the user's experience, we're likely to be wrong. This extension should help users take back control from these decisions.

### Sometimes there are exceptions

There is a very small handful of situations where *target="_blank"* could possibly be useful such as:

- The user is playing audio or video. [Chris Coyier has talked about this in the past](https://css-tricks.com/use-target_blank/)
- The user is at the checkout/payment stage of an ecommerce site
- The user is filling out a long form
- The user is adding / editing content which hasn't been saved

Exceptions like these will likely find their way into Blanka behind configurable flags as I want to keep developing it to be as useful to everybody as possible.

I'll always welcome contributions from others too - so if you think you can improve Blanka, [create an issue](https://github.com/hankchizljaw/blanka/issues/new) or get stuck in by [forking the repo](https://github.com/hankchizljaw/blanka).

For now though, there's a decent MVP out there ready to be used.

You can find Blanka on the [Chrome Store](https://chrome.google.com/webstore/detail/blanka/nhfjfbeeepkckcfhkhammiiooddeaama) and on [GitHub](https://github.com/hankchizljaw/blanka).
