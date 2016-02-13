/* File: browser_action.js
 * -----------------------
 * This javascript file listens for a click on the submit
 * button, and responds by saving the current value of the
 * textarea to Chrome's local storage. You shouldn't have to
 * change this file unless you also change the corresponding
 * browser_action.html file.
 */

window.onload = function() {
	// Executes when HTML document is loaded and DOM is ready
	var $submit = document.getElementById('submit');

	$submit.addEventListener('click', function() {
		var $textarea = document.getElementById('settings');
		var text = $textarea.value;
	    chrome.storage.local.set({'settings': text}, function() {
	    	// This code block is executed asynchronously, once
	    	// the key/value pair is saved to local storage
	    	console.log("Data Saved");
	    });
	});
};