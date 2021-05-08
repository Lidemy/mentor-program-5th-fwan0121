## 請以自己的話解釋 API 是什麼

應用程式介面（Application Programming Interface），就是方便溝通、交換資料的管道，透過 api 可以讓雙方資料交換。

API 是應用程式、裝置之間資料的交換，但不一定要透過網路才能有 API，像是硬體上面 USB 與電腦交換資料，或是作業系統裡的 API，可以讀取、傳輸及寫入等等電腦上的操作。

Web API：是基於 http 協定下運作的 API，代表透過網路進行資料交換，像是會員登入系統，假圖 API 隨機產生出圖片，透過 API 能夠達到省時、便利、營利等優點。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

`202` Accepted 接受 - 伺服器已接受請求，但尚未處理。最終該請求可能會也可能不會被執行，並且可能在處理發生時被禁止。

`408` Request Timeout 請求逾時 - Server 在預計的等待時間內，並未收到完整的請求訊息，客戶端可以隨時再次提交這一請求而無需進行任何更改。

`429` Too Many Requests 過多請求 - User 在給定的時間內發送了過多的請求。

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

### Root URL

> GET https://restaurant.platforms.com.tw/api

|說明|Method|path|參數|範例|
|:----:|:----:|:----:|:----:|:----:|
|獲取所有餐廳|GET|/restaurants|_limit : 限制回傳資料數量|/restaurants?_limit=10|
|獲取單一餐廳|GET|/restaurants/:id|none|/restaurants/5|
|新增餐廳|POST|/restaurants|name : 餐廳名稱|none|
|刪除餐廳|DELETE|/restaurants/:id|none|none|
|更改餐廳資訊|PATCH|/restaurants/:id|name : 餐廳名稱|none|
