window.onload = function() {
	// Executes when HTML document is loaded and DOM is ready
	var $submit = document.getElementById('submit');

	$submit.addEventListener('click', function() {
		var $textarea = document.getElementById('settings');
		var text = $textarea.value;
	    chrome.storage.local.set({'settings': text}, function() {
	    	// This code block is executed once the key/value pair is saved to local storage
	    	// console.log("Successfully saved data")
	    });
	});
};