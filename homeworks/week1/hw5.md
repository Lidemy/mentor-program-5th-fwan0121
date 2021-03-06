# 請解釋後端與前端的差異

## **前端**

前端簡單的來說就是使用者看到的畫面、圖片、網頁互動功能像按鈕、連結等等。

- 網頁的整體外觀、內容 HTML
- 美觀 CSS
- 網頁互動 JavaScript

但在前端其實也可以存放一些東西，還有檢查一些驗證，比如說欄位一定要填寫 eamil 或是數字等（不需要經過後端伺服器或是資料庫去驗證等，可以減少 Request 的請求，減少 server 的壓力，也可以提升用戶體驗 -> 反饋快）。

## **後端**

後端就是網站的伺服器（server），主要是處理系統商業邏輯的部分，與跟資料庫（DB）溝通做資料存取等等，通常是用者看不到的。

比如說註冊會員，實際上是透過前端填寫註冊表單內容，送出表單後會發出 request 到後端 server ，然後 server 會把資料存到資料庫裡面，並回傳 response ，成功的話使用者就會看到註冊成功。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情

1. 當瀏覽器送出關鍵字「JavaScript」到 Google 的 Server

2. 會先透過 DNS Server（8.8.8.8） 問 Google.com 在哪

    > 電腦在溝通的時候是用 IP 位置，電腦不知道域名（Domain）是什麼，只知道 IP 位置，所以 DNS Server 負責把域名轉換成 IP 位置

3. DNS Server（8.8.8.8） 回傳 172.217.160.78

4. 瀏覽器發 request 發送到 172.217.160.78

5. Google server 收到資訊後，去資料庫存取查詢，取得搜尋結果

6. Google server 把搜尋結果回傳到前端頁面

7. 瀏覽器顯示搜尋結果

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

### `tac` : 從最後一行顯示到第一行，跟 `cat` 相反

```js
`cat test.txt`
123
345
789

`tac test.txt`
789
345
123
```

### `nl` : 顯示的時候，會顯示出第幾行

```js
 `nl test.txt`
 1  123
 2  456
 3  789
```

### `od` : 以二進位的方式讀取檔案內容，也就要給電腦看的

```js
 `od test.txt`
 0000000 031061 006463 032012 033065 005015 034067 000071 0000015
```
