/**
 * YOUR CODE HERE (Part 1)
 *
 * Write a method to convert a node's text according to some rule
 * and return it. For Part 1, replace every instance of the
 * substring 'cal' with the text 'butt'
 *
 * 
 * Sample Usage:
 * modifyText('Calhacks organizer') -> 'Butthacks organizer'
 *
 * @param text: (string) content of text node to be updated
 * @param settings: (map) hashmap from keys to values, with
 * 					whatever meaning you gave it in part 2
 * (Note: During part 1, settings will be null)
 */
function modifyText(text, settings) {
	return text;
	// text = text.replace(/\bThe Cloud\b/g, "My Butt")
	// text = text.replace(/\bThe cloud\b/g, "My butt");
	// text = text.replace(/\bthe Cloud\b/g, "my Butt");
	// text = text.replace(/\bthe cloud\b/g, "my butt");
	// text = text.replace(/\bcal\b/g, "butt");
	// text = text.replace(/\bCal\b/g, "Butt");
	// return text;
}

/**
 * YOUR CODE HERE
 * 
 * For Part 2, parse a line of the text that the 
 * user has specified into a key-value pair specifying
 * a replacement rule
 */
function parseSettings(text) {
	// for line in text.split("\n")
	// split on ->
}

/****************************w************
 * DO NOT MODIFY CODE BENEATH THIS LINE *
 ****************************************/

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});

chrome.storage.local.get('settings', function(settings) {
	walk(document.body, settings);
});


      // chrome.storage.onChanged.addListener(function(changes, namespace) {

// Full credit to: http://is.gd/mwZp7E
function walk(node, settings)
{
	var child, next;

	// For more info, read http://www.w3schools.com/jsref/prop_node_nodetype.asp
	switch (node.nodeType)
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child)
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node, settings);
			break;
	}
}

function handleText(textNode, settings)
{
	var text = textNode.nodeValue;
	modifiedText = modifyText(text, settings);
	textNode.nodeValue = modifiedText;
}
