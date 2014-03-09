// Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
  
chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
    port.postMessage({counter: 5});
  });
});

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
   // var test = $('iframe').load(function(){ alert($(this).contents().find('body').html());});
    var frame = document.getElementsByTagName("iframe")[0].contentWindow.document.body.innerHTML;
    //sendResponse({counter: 5, data: document.getElementById('u30l1n6').contentWindow.document.body.innerHTML});
    sendResponse({ret: 0, data: frame});
    //document.getElementById('main').style.display = 'none';
	//document.getElementById('main').style.display = 'block';
    //sendResponse({counter: 5, data: document.body.innerHTML});
    //sendResponse({counter: 5, data: $('#u30l1n6').contents().find('html').html()});
  });
