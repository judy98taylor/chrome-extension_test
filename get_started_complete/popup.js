// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict'

let changeColor = document.getElementById('changeColor')

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color
  changeColor.setAttribute('value', data.color)
})

changeColor.onclick = function(element) {
  console.log(1)
  alert(1)
  // return
  // let color = element.target.value
  // chrome.tabs.executeScript(tabs[0].id, {
  //   code: 'document.body.style.backgroundColor = "' + color + '";'
  // })
}

// 1. popup.js如何调用background.js的方法？
// chrome.extension.getBackgroundPage()可以获取background.js的window对象。

// 1content_scripts 嵌入脚本（嵌入在浏览页面中，可访问浏览页面元素）类似JS注入。
// 2background 后台脚本，可以理解为一个后台程序
// 3嵌入脚本可以和后台脚本直接通信，调用其方法，这个用的不多
// 4嵌入脚本可以和后台脚本间接通信，后台监听事件，前台调用事件，主要就用这个
// 5chrome调试 打开发人员工具，maintab:Source->subtab:[Source,Content scripts,Snippets]嵌入代码在Content scripts中

// 难点在于chrome的数据传输方式，它硬性规定content script.js 和 background.js 不能直接共享数据，于是sendMeessage和onMessage（监听动作），以及storage.sync.set 和 storage.sync.get（存取数据）

// alert(JSON.stringify({ a: 1, b: [1, 2] }))
alert(window.location.href)
