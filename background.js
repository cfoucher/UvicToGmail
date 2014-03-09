if (typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function(str) {
		return this.indexOf(str) == 0;
	};
}

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
	var currentUrl = tab.url;
	if (currentUrl.startsWith("http://500px.com/photo") && !currentUrl.startsWith("http://500px.com/photos")) {
		chrome.pageAction.show(tabId);
	}
}
// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);