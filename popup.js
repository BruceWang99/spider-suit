console.log('This is a popup!');
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('insert-button').addEventListener('click', function() {
	  console.log('insert-button click', chrome.tabs);
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		console.log('tabs', tabs);
		if (tabs[0].url.match('https:\/\/chat.openai.com\/.*')) {
			chrome.tabs.sendMessage(tabs[0].id, {action: 'insert_text'});
		}
	  });
	});
  });