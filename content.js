$(document).ready(function() {
	$form = $("<form id='form' method='post' action='javascript'></form>");
	$form.append("<input type='date' id='date'/>");
	$form.append("<input type='time' id='time'/>");
	$form.append("<input type='submit' value='Submit'/>");
	$form.insertBefore('#root');

	$('#form').bind('submit', function() {
		var date = document.getElementById('date').value;
		var time = document.getElementById('time').value;
		var epochTime = (new Date(date+' '+time)).getTime();
		var currentUrl = window.location.href;
		var messageIndex = currentUrl.indexOf('&');
		var messageUrl = currentUrl.substr(0,messageIndex);
		if (messageIndex == -1) {
			messageUrl = currentUrl;
		}
		window.location.href = messageUrl+'&last_message_timestamp='+epochTime;
		return false;
	});
});

/*
chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([
		{
			conditions: [
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: { hostSuffix: '.facebook.com'},
				})
			],
			actions: [ new chrome.declarativeContent.ShowPageAction() ]
		}]);
	});
});
*/
