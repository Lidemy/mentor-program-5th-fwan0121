## 什麼是 Ajax？

Acynchronous JavaScript and XML，是一種在網頁背景中交換資料的方式，向 server 發送請求的時候，我們不用等在結果，而是可以做其他的事情，在不需要重新 render 頁面的情況下，能夠更新網頁上部分的內容。

## 用 Ajax 與我們用表單送出資料的差別在哪？

透過表單會跳轉畫面，然後 render 到瀏覽器
Ajax 不會換頁，會直接回傳 response 到頁面上，還有同源政策的差異

## JSONP 是什麼？

JSON with Padding，可以讓一個網頁從其他的網域請求資料，繞過 AJAX 因為有瀏覽器安全性限制無法跨網域使用的問題 (同源政策)，有些標籤不會受到同源政策的限制，例如 img 標籤，以及 script 標。

## 要如何存取跨網域的 API？

- 在node.js環境下無此問題
- 使用 JSONP 這種不受同源政策限制的方式
- CORS，伺服器端在 Response 的 header 裡面加上 `Access-Control-Allow-Oring`


## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

第四週是 Node.js 發送 request，沒有透過瀏覽器，這周因為在瀏覽器上發出 request，瀏覽器對資料的傳遞因為安全性的問題會有限制，像是同源政策。
