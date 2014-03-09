// Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    var frame = document.getElementsByTagName("iframe")[0].contentWindow.document.body.innerHTML
    sendResponse({ret: 0, data: frame});
  });
