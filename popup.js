// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function setChildTextNode(elementId, text) {
  document.getElementById(elementId).innerText = text;
}

// Tests the roundtrip time of sendRequest().
function sendMessage() {
  setChildTextNode("resultsRequest", "running...");

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    chrome.tabs.sendRequest(tab.id, {counter: 1}, function handler(response) {
      if (response.ret === 0) {
        console.log(response.data);
        setChildTextNode("resultsRequest","complete!");
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#sendMessage').addEventListener(
      'click', sendMessage);
});