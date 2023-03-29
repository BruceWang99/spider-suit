chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.action === 'insert_text') {
	  var inputElements = document.getElementsByTagName('textarea');
	  console.log(inputElements[0]);
	  inputElements[0].innerText = 'Inserted Text';
	}
  });

   