/* File: options.js
 * ----------------
 * This file gives an example implementation of a program
 * that saves and restores options from a form to Chrome's
 * local storage.
 *
 * You won't need to update this function for the base
 * hackpack, but it provides a flexible way to let your users
 * customize the behavior of your application.
 *
 * If you do update this method, make sure that your changes
 * appear in both save_options() and restore_options()
 * 
 * Full credit to Chromium authors.
 */

// Saves options to chrome.storage.local.
function save_options() {
  var color = document.getElementById('color').value;
  var likesColor = document.getElementById('like').checked;
  chrome.storage.local.set({
    'favoriteColor': color,
    'likesColor': likesColor
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.local.get({
    'favoriteColor': 'red',
    'likesColor': true
  }, function(items) {
    document.getElementById('color').value = items.favoriteColor;
    document.getElementById('like').checked = items.likesColor;
  });
}

/************************************************/
// Don't change code below this line!

// Restore settings when the DOM loads
document.addEventListener('DOMContentLoaded', restore_options);
// Save settings when the save button is clicked.
document.getElementById('save').addEventListener('click', save_options);