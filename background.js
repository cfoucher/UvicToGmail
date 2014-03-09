if (typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function(str) {
		return this.indexOf(str) == 0;
	};
}

//Get end of the URL for Comparisons
function endsWith(str, suffix) {
	var test = str.indexOf(suffix);
    return str.indexOf(suffix) !== -1;
}

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
	var currentUrl = tab.url;
	var index = endsWith(currentUrl, "CrseSchdDetl");
	if (currentUrl.startsWith("https://www.uvic.ca/mypage/")) {
		if(index){
			chrome.pageAction.show(tabId);
		}
	}
}
// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);