# Cal to Butt: Chrome Extension Hackpack @ Treehacks 2019

## Overview

Congratulations! You've chosen this hackpack, and you're well on your way to building a super cool product!

In this hackpack, you will build a chrome extension that replaces the content on webpages according to customizable rules. Your main task is to replace all instances of the text "cal" with the text "butt" on all webpages.

It utilizes some Javascript and HTML to edit website displays, and can be easily changed and altered to suit other purposes.

## Getting Started

### Download and unzip starter code
Download and unzip the [starter code] (https://github.com/TreeHacks/hackpack-chrome-ext)

Alternatively, if you are a Git master, you can sync with [our Git repository](https://github.com/TreeHacks/hackpack-chrome-ext)  over HTTPS or SSH. Note: If you aren't familiar with Git, or don't know what the following lines would do, don't execute the following commands!

```
# From Terminal.app or equivalent...

# Clone via HTTPS
$ git clone (https://github.com/TreeHacks/hackpack-chromeExt)
# or SSH
$ git clone git@github.com:TreeHacks/hackpack-chromeExt.git
```

### Download Google Chrome
Download Google Chrome if you haven't already! You can download the latest version [here](https://www.google.com/chrome/browser/desktop/). For this hackpack, you'll need Chrome Version 40 or newer. In order to figure out which version you have, go to [chrome://version/](chrome://version/) in the Omnibar, and look at the top line. You should see something like

```
Google Chrome	48.0.2564.109 (Official Build) (64-bit)
```

Don't worry if it's not exactly the same. As long as the major number (before the decimal point) is greater than 40, you're set!

### Load Starter Code
Chrome usually ships extensions as `.crx` files (similar to `.zip` files), which is great for distribution, but not so great for developing. Instead, we'll tell Chrome to treat the starter code folder as an extension.

We need to enable Chrome Developer Settings in order to build our chrome extension.

In order to do this:

1. Navigate to [chrome://extensions](chrome://extensions) in your browser.
2. Ensure that the **Developer mode** checkbox in the top right-hand corner is checked.
3. Click **Load unpacked extension...** to pop up a file-selection dialog.
4. Navigate to the directory in which your extension files live, and select it.

You should now see a screen that looks like the below:

<a href="Loading Starter Code"><img src="https://i.imgur.com/CMGui4o.png" height="500" ></a>


Note that the **Developer mode** checkbox is checked, and the extension is enabled.

Additionally, pay close attention to the **Reload** link.

**By default, Chrome will _not_ reload your extension automatically if you update your code. Thus, if you want to test your extension, you _must_ reload the extension before testing. Otherwise, your changes will _not_ be present in the active extension.** Basically, every time you make a change to your code that you want to test live in Chrome, make sure to reload the extension using that **Reload** button.

### Background Knowledge

For this project, you will need some knowledge of Javascript and Chrome Extensions. The starter code should have sufficient comments to explain each file, but if you want to get a deeper understanding of these systems before beginning the hackpack, we've provided links to some tutorials below. In particular, if you've never seen Javascript before, we _highly_ recommend going through a Javascript tutorial.

#### Learn about Javascript

What is JavaScript?
> JavaScript is a scripting language for computers. It is often run in web browser applications to create dynamic content like a popup message or a live clock. It is not related to the programming language Java.

Here are a few of our favorite Javascript tutorials!

If you're an expert in several programming languages before, or you used to know Javascript and you just need a refresher on the syntax, check out [Learn X in Y Minutes](https://learnxinyminutes.com/docs/javascript/). This tutorial takes about 10 minutes.

If you've never seen (or heard of) Javascript before, or you want an in-depth, involved tutorial that takes you through Javascript from the ground up, we recommend [Codecademy](https://www.codecademy.com/learn/javascript). This tutorial takes about 10 hours.

If you want a comprehensive tutorial of all things Javascript, check out [W3 Schools](http://www.w3schools.com/js/). This tutorial takes about 10 hours.

Of course, you're free to find your own tutorials, or learn by doing.

#### The Basics of Chrome Extensions

What are Chrome Extensions?
> Extensions are small software programs that can modify and enhance the functionality of the Chrome browser. You write them using web technologies such as HTML, JavaScript, and CSS.

If you want to learn more about Chrome Extensions, read through Google's [introduction](https://developer.chrome.com/extensions) to extensions and Google's high-level [overview](https://developer.chrome.com/extensions/overview).

## Now onto the actual coding!

With all that out of the way, let's get started!

**Step 1: Read the starter code**
Before you begin writing any code, read through the starter code and comments we've provided. In particular, read all of `/src/content.js`, because you will be making most of your changes in that file. If you have any questions, this would be a great opportunity to ask for help through Slack or a mentor!

**Step 2:** Create *manifest.json*, which includes required chrome extension values. A simple example of the JSON file looks like this:
```JSON
{
  "manifest_version": 2,
  "name": "My Chrome Extension - TreeHacks 2019",
  "version": "0.1"
}
```

**Step 2:** Create */src/content.js*, which is the code to find and replace text on websites. It gets every element in the HTML document and parses through it for specific regular expressions. This content script is injected into every webpage visited. The sample code below replaces every instance of the substring "cal" to the string "butt".
```Javascript
if (node.nodeType === 3) {
    var text = node.nodeValue;
    var replacedText = text.replace(/cal/gi, "butt");

    if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
}
```

Test your method by visiting the [UC Berkeley Wiki page](https://en.wikipedia.org/wiki/University_of_California,_Berkeley) or the [CalHacks website](http://www.calhacks.io/). I personally like the [Calculus Wiki page](https://en.wikipedia.org/wiki/Calculus).

**Step 3:** Create */src/popup.html*, which creates a link to the TreeHacks website, and is accessed through tapping the icon on the chrome extension bar

**Step 4:** Create */src/popup.js*, which is javascript that allows the link in *popup.html* to be opened on a new tab.
```Javascript
       ln.onclick = function () {
            chrome.tabs.create({active: true, url: location});
       };
```

**Step 5:** Now, to test out the chrome extension, visit chrome://extensions/. You'll see all the existing extensions and your test creations.

**Step 6:** The, click *Developer mode*, which allows you to test your own code, then click *load unpacked extension* with the extension's directory. When you edit your code, make sure you refresh the extension or the page so the changes are up-to-date.

## Congratulations!

You did it! Very well done. You've built a cool chrome extension that replaces content on websites, and what's more, you get to keep it!

Take a moment to relax, take a deep breath, and look back on the project you've built. It's very impressive!

## Miscellaneous

### Feedback

If you have any comments, positive or negative, reach out to Michelle Bao (@organizer-michelle on Slack) with feedback! We'd love to hear what you think is great, and what you think we can improve.

### Credit

Credit for the idea goes to the originators of the Cloud-to-Butt Chrome Extension. Credit for great documentation (much of which we shamelessly stole) goes to the Chromium contributors. Credit for the images goes to XKCD. Credit for this hackpack in past years goes to [Sam Redmond](https://github.com/sredmond) and [Joy Hsu](https://github.com/joyhsu0504). This year's hackpack was developed by [Michelle Bao](https://github.com/michellebao/).

### License
MIT

# About HackPacks 🌲

HackPacks are built by the [TreeHacks](https://www.treehacks.com/) team to help hackers build great projects at our hackathon that happens every February at Stanford. We believe that everyone of every skill level can learn to make awesome things, and this is one way we help facilitate hacker culture. We open source our hackpacks (along with our internal tech) so everyone can learn from and use them! Feel free to use these at your own hackathons, workshops, and anything else that promotes building :) 

If you're interested in attending TreeHacks, you can apply on our [website](https://www.treehacks.com/) during the application period.

You can follow us here on [GitHub](https://github.com/treehacks) to see all the open source work we do (we love issues, contributions, and feedback of any kind!), and on [Facebook](https://facebook.com/treehacks), [Twitter](https://twitter.com/hackwithtrees), and [Instagram](https://instagram.com/hackwithtrees) to see general updates from TreeHacks. 
