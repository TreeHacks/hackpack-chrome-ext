/* File: browser_action.js
 * -----------------------
 * This javascript file listens for a click on the submit
 * button, and responds by saving the current value of the
 * textarea to Chrome's local storage. You shouldn't have to
 * change this file unless you also change the corresponding
 * browser_action.html file.
 */

// Saves settings to chrome.storage.local.
function save_settings() {
	var $textarea = document.getElementById('settings');
	var text = $textarea.value;
	chrome.storage.local.set({
		'settings': text
	}, function() {
		// This code block is executed when the settings are saved.
		var $status = document.getElementById('status');
		$status.textContent = "Settings saved.";
		setTimeout(function() {
		  status.textContent = '';
		}, 1000);
	});
}

// Retrieves settings from chrome.storage.local.
function restore_settings() {
	chrome.storage.local.get('settings', function(response) {
		var text = response.settings || "";
		document.getElementById('settings').value = text;
	});
}

// Clear all settings in chrome.storage.local
function clear_settings() {
	chrome.storage.local.clear(function() {
		var $textarea = document.getElementById('settings');
		$textarea.value = "";
		var $status = document.getElementById('status');
		$status.textContent = "Settings cleared.";
		setTimeout(function() {
		  status.textContent = '';
		}, 1000);
	});
}

// Restore settings when the DOM loads
document.addEventListener('DOMContentLoaded', restore_settings);
// Save settings when the save button is clicked.
document.getElementById('save').addEventListener('click', save_settings);
// Clear settings when the clear button is clicked.
document.getElementById('clear').addEventListener('click', clear_settings);
