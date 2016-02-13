# Cal to Butt: Chrome Extension Hackpack @ TreeHacks 2016

## Overview

Congratulations! You've chosen this hackpack, and you're well on your way to building a super cool product!

In this hackpack, you will build a chrome extension that replaces the content on webpages according to customizable rules. At a glance, your tasks will include:

1. Replace all instances of the text "cal" with the text "butt" on all webpages.
2. Replace all text on a webpage according to user-specified replacement rules.
3. Replace all images on a website according to user-specified replacement rules.

After you've finished these tasks, you will have built an exciting application that you can use in your own browser!

## Getting Started

**1. Download and unzip the [starter code](https://github.com/TreeHacks/hackpack-chrome-ext/archive/master.zip).**

You should roughly have the following files.

```
hackpack-chrome-ext-master/
├── README.md
├── manifest.json
├── icons
│   ├── TreeHacks-white-128.png
│   ├── TreeHacks-white-16.png
│   ├── TreeHacks-white-19.png
│   ├── TreeHacks-white-32.png
│   ├── TreeHacks-white-48.png
│   ├── TreeHacks-white-64.png
│   └── TreeHacks-white-96.png
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
        ├── options.css
        ├── options.html
        └── options.js
```

Alternatively, if you are a Git master, you can sync with [our Git repository](https://github.com/TreeHacks/hackpack-chrome-ext) over HTTPS or SSH. Note: If you aren't familiar with Git, or don't know what the following lines would do, don't execute the following commands!

```
# From Terminal.app or equivalent...

# Clone via HTTPS
$ git clone https://github.com/TreeHacks/hackpack-chrome-ext.git
# or SSH
$ git clone git@github.com:TreeHacks/hackpack-chrome-ext.git
```

### Getting Started

#### Download Google Chrome

In order to build a Chrome extension, you'll need Google Chrome! If you haven't downloaded Chrome already, download the latest version [here](https://www.google.com/chrome/browser/desktop/). For this hackpack, you'll need Chrome Version 40 or newer. In order to figure out which version you have, go to [chrome://version/](chrome://version/) in the Omnibar, and look at the top line. You should see something like

```
Google Chrome	48.0.2564.109 (Official Build) (64-bit)
```

Don't worry if it's not exactly the same. As long as the major number (before the decimal point) is greater than 40, you're set!

#### Load the Starter Code

Chrome usually ships extensions as `.crx` files (similar to `.zip` files), which is great for distribution, but not so great for developing. Instead, we'll tell Chrome to treat the starter code folder as an extension.

We need to enable Chrome Developer Settings in order to build our chrome extension.

In order to do this:

1. Navigate to [chrome://extensions](chrome://extensions) in your browser.
2. Ensure that the **Developer mode** checkbox in the top right-hand corner is checked.
3. Click **Load unpacked extension...** to pop up a file-selection dialog.
4. Navigate to the directory in which your extension files live, and select it.

You should now see a screen that looks like the below:

![Loading Starter Code](http://imgur.com/sXgh4Ae)


### Load the Starter Code into Chrome

Next, we have to tell Chrome to treat our starter code (`hackpack-chrome-ext-master/`) as a Chrome extension. To do this, 

### Background Knowledge

For this project, you will need some knowledge of Javascript.

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

(Hint: Check out the documentation on [JavaScript String replace](http://www.w3schools.com/jsref/jsref_replace.asp))

Test your method by visiting the [CalHacks website](http://www.calhacks.io/) or the [UC Berkeley Wiki page](https://en.wikipedia.org/wiki/University_of_California,_Berkeley)

Can you make the replacement respect the casing of the original text? That is, can you implement `modifyText` so that `modifyText('iCal')` returns `iButt` and `modifyText('calendar')` returns `buttender`?

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

These comics show some great text replacements, which I've reproduced here in plaintext format.

```
batman -> a man dressed like a bat

keyboard -> leopard

witnesses -> these dudes i know
allegedly -> kinda probably
new study -> tumblr post
rebuild -> avenge
space -> spaaace
google glass -> virtual boy
smartphone -> pokedex
electric -> atomic
senator -> elf-lord
car -> cat
election -> eating contest
congressional leaders -> river spirits
homeland security -> homestar runner
could not be reached for comment -> is guilty and everyone knows it

force -> horse

debate -> dance-off
self driving -> uncontrollably swerving
poll -> psychic reading
candidate -> airbender
drone -> dog
vows to -> probably won't
at large -> very large
successfully -> suddenly
expands -> physically expands
first-degree -> friggin' awful
second-degree -> friggin' awful
third-degree -> friggin' awful
an unknown number -> like hundreds
front runner -> blade runner
global -> spherical
years -> minutes
minutes -> years
no indication -> lots of signs
urgedrestraint by -> drunkenly egged on
horsepower -> tons of horsemeat
```

And of course, our very own

```
cal -> butt
```

We're going to use the arrow syntax to communicate a text replacement rule for the rest of this project. In particular, we'll assume that every line of text corresponds to a single text replacement rule of the form
```
pattern -> replacement
```

That is, you can assume that every line will have exactly one instance of the substring `->` that separates two text entries. The pattern is guaranteed to be nonempty (i.e. will have at least one character in it). The replacement string could be the empty string (representing deletion of the pattern).

Your task here is to implement a function `parseSettings` that accepts as input an array of lines representing text replacement rules. It should return a dictionary 

```
function parseSettings(lines) {
	return null;
}
```

You can test this function by entering replacement rules in the extension's browser action (reminder: the icon in the upper right corner of your Chrome window)

*Edge cases*

* No replacement text (i.e. a line such as `"pattern ->"`)

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


## Miscellaneous Information

### Feedback

If you have any comments, reach out to Sam Redmond (@organizer-sam on Slack) with feedback!

### Credit

Credit for the idea goes to the originators of the Cloud-to-Butt Chrome Extension, credit for great documentation (much of which we shameless stole) goes to the Chromium contributors, and credit for the images goes to XKCD.



