# Cal -> Butt: Chrome Extension Hackpack @ TreeHacks 2016

## Overview

Congratulations! You've chosen this hackpack, and you're well on your way to building a super cool product! In this hackpack, you will build a chrome extension that replaces the content on webpages according to customizable rules. At a glance, your tasks will include:

1. Replace all instances of the text 'cal' with the text 'butt' on all webpages.
2. Allow a user to customize replacement rules that determine the text replacement on webpages
3. Replace all images on a website with a user-specified image 

After you've finished these tasks, you will have built an exciting application that you can use in your own browser!

## Getting Started

**1. Download and unzip the [starter code](https://github.com/TreeHacks/hackpack-chrome-ext/archive/master.zip).**

You should roughly have the following files.

```
hackpack-chrome-ext-master/
├── README.md
├── _locales
│   └── en
│       └── messages.json
├── css
├── icons
│   ├── TreeHacks-white-16.png
│   ├── TreeHacks-white-19.png
│   ├── TreeHacks-white-32.png
│   ├── TreeHacks-white-48.png
│   ├── TreeHacks-white-64.png
│   ├── TreeHacks-white-96.png
│   └── TreeHacks-white-128.png
├── manifest.json
└── src
    ├── bg
    │   └── background.js
    ├── browser_action
    │   ├── browser_action.css
    │   ├── browser_action.html
    │   └── browser_action.js
    ├── inject
    │   └── inject.js
    └── options
        ├── options.html
        └── options.js
```

Alternatively, if you are a Git master, you can sync with [our Git repository](https://github.com/TreeHacks/hackpack-chrome-ext) over HTTPS or SSH. Note: If you aren't familiar with Git, or don't know what the following lines would do, don't execute the following commands!

```
# Clone via HTTPS
$ git clone https://github.com/TreeHacks/hackpack-chrome-ext.git
# or SSH
$ git clone git@github.com:TreeHacks/hackpack-chrome-ext.git
```

### Requirements

* Of course, you'll need to be using the Chrome browser in order to build a Chrome extension. If you haven't yet, download Chrome from [this link](https://www.google.com/chrome/browser/desktop/).

### Enable Chrome Developer Settings

We need to enable Chrome Developer Settings in order to build our chrome extension.

At a high level:

1. Navigate to [chrome://extensions](chrome://extensions) (in the url bar)
2. Click the developer mode checkbox in the upper right corner of the window
3. You should now see an additional menu with three buttons: Load Unpacked Extension, Pack Extension, and Update Extensions Now. Don't worry if it doesn't look exactly like that.

### Load the Starter Code into Chrome

Next, we have to tell Chrome to treat our starter code (`hackpack-chrome-ext-master/`) as a Chrome extension. To do this, 



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

In the third and final part of this hackpack, you will extend the functionality of the browser action to allow the user to specify image replacements. That is, users will be able to specify an image through the browser action so that all images on all websites will be replaced that chosen image.

You can use whatever encoding scheme you want - however, we suggest that you use the scheme `img->http://path.to/image`

In order to get a list of the images on a page, use `document.querySelectorAll('img')`. The documentation for this is [here](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll). For example, executing the following code through the JavaScript console on the [TreeHacks](https://www.treehacks.com/) main website yields

```
> imgs = document.querySelectorAll('img')
> imgs
[
    <img class=​"twitter" src=​"images/​twitter.png">​,
    <img class=​"facebook" src=​"images/​facebook.png">​,
    <img class=​"logo" src=​"images/​logo.png" width=​"95px" height=​"95px">​,
    <img src=​"../​images/​MLH.png">​,
    <img src=​"images/​logos/​tera/​informatica.png" title=​"informatica">​,
    <img src=​"images/​logos/​tera/​microsoft.png" title=​"microsoft">​,
    <img src=​"images/​logos/​tera/​netsuite.png" title=​"netsuite">​,
    ...
] 
> // Update the src attribue of the first image on the page.
> imgs[0].src = 'http://factmag-images.s3.amazonaws.com/wp-content/uploads/2013/12/beyonce-121313.jpg'
```

Where should you make your changes?


## Extensions

Take a step back and look at what you've built. It's very impressive! Really, you've built a message-passing interface from a chrome extension dropdown window to a background script that is injected on every page. We've been using this to pass information about text and image replacements to the background script, but there's no reason we have to stop here!

You can extend this framework to build really cool projects. The sky's the limit, but we've given some suggestions here.

* Replace not just text nodes, but also provide replacements for other DOM elements! For example, replace all outgoing links with a link to Rick Astley (or if you're feeling cruel, only a small fraction - say 1% - of them)

* Extend the replacement pattern matching by allowing users to specify 


## Feedback

If you have any comments, reach out to Sam Redmond (@organizer-sam on Slack) with feedback!



