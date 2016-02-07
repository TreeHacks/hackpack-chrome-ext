# Chrome Extension Hackpack @ TreeHacks

## Questions (for you guys)

Should I add more images/gifs/before-afters of the extension in action?

Should I have a diagram of information flow in the starter code?

## BLURB

## Overview

Congratulations! You've chosen this hackpack, and you're well on your way to building a super cool product! In this hackpack, you will build a chrome extension that replaces the content on webpages according to customizable rules. At a glance, your tasks will include:

1. Replace all instances of the text 'cal' with the text 'butt' on all webpages.
2. Allow a user to customize replacement rules that determine the text replacement on webpages
3. Replace all images on a website with a user-specified image 

After you've finished these tasks, you will have built an exciting application that you can use in your own browser!

## Getting Started

Download the starter code from [the TreeHacks website](...) if you haven't already.

### SCREENSHOTS of SETTING IT UP

### Requirements

* Of course, you'll need to be using the Chrome browser in order to build a Chrome extension. If you haven't yet, download Chrome from [this link](...).

### Learn Javascript

What is JavaScript?
> JavaScript is a scripting language for computers. It is often run in web browser applications to create dynamic content like a popup message or a live clock. It is not related to the programming language Java.

If you've never seen JavaScript before, you will need to learn a bit of the language for this project. Luckily, there are tons of amazing tutorials online. We've curated a couple for you: 

```
if you've seen lots of programming languages before:
    goto https://learnxinyminutes.com/docs/javascript/ (about 10 minutes)
otherwise if you want a more in-depth, practice-oriented overview of the language:
    goto https://www.codecademy.com/learn/javascript   (about 10 hours)
otherwise if you need a refresher on the whole web technology thing
    goto http://www.w3schools.com/
```

### The Basics of Chrome Extensions

If you want to learn more about Chrome Extensions, read through [their introduction](https://developer.chrome.com/extensions).

## Checkpoint 1: Cal --> Butt

For the first checkpoint, you will need to implement a function called `modifyText` that is given the contents of some text node on the page, along with some optional settings (which will be `null` for this part, so you can ignore it). For now, your task:

Task 1: **Update `modifyText` to replace every instance of 'cal' with 'butt'**

Your function should return the modified string. 

```
/* File src/inject/inject.js */
function modifyText(text, settings) { // For part 1, settings will always be null
	// YOUR CODE HERE
	return text;
}
```

For example, `modifyText('kern is a calhacks organizer', null)` should return the string `'kern is a butthacks organizer'`. 

(Hint: Check out the documentation on [JavaScript String replace()](http://www.w3schools.com/jsref/jsref_replace.asp) or 

## Checkpoint 2: Custom Translations

If you read XKCD, some of this may seem familiar to you. If you haven't read XKCD, you should celebrate your completion of part 1 with some [good old-fashioned webcomics](http://xkcd.com/).

---

![Batman](http://imgs.xkcd.com/comics/batman.png)

---

![s/keyboard/leopard](http://imgs.xkcd.com/comics/s_keyboard_leopard.png)

---

![XKCD Substitutions](https://imgs.xkcd.com/comics/substitutions.png)

---

![Horse](http://imgs.xkcd.com/comics/horse.png)

---

![Substitutions 2](http://imgs.xkcd.com/comics/substitutions_2.png)

---

Your task here is to implement a function `parseSettings` that accepts as input a string corresponding the text entered in the 

```
function parseSettings(text) {
	return null;
}
```





## Checkpoint 3: Image Replacement

For checkpoint 3, extend the functionality of the browser action to allow the user to specify image replacements. You can use whatever encoding scheme you want - however, we suggest that you use the scheme `img->http://path.to/image`

## Extensions

Take a step back and look at what you've built. It's very impressive! Really, you've built a message-passing interface from a chrome extension dropdown window to a background script that is injected on every page. We've been using this to pass information about text and image replacements to the background script, but there's no reason we have to stop here!

You can extend this framework to build really cool projects. The sky's the limit, but we've given some suggestions here.

* Replace not just text nodes, but also provide replacements for other DOM elements! For example, replace all outgoing links with a link to Rick Astley (or if you're feeling cruel, only a small fraction - say 1% - of them)
* 


