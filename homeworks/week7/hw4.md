## 什麼是 DOM？

DOM（Document Object Model），文件物件模型
簡單的來說就是把一個 document 轉換成 object，是一種用於HTML和XML文件的程式設計介面。它給文件提供了一種結構化的表示方法，讓可以更動其中的內容及可見物，本質上是建立網頁與 JavaScript 或程式語言溝通的橋梁。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

事件傳遞機制共分為三大階段
- 捕獲階段 (Capture Phase) : DOM 的事件在傳播時，會先從根節點開始往下傳遞到 target，如果加上事件的話，就會處於CAPTURING_PHASE，捕獲階段。

- 目標階段 (Target Phase) : target就是你所點擊的那個目標。
- 冒泡階段 (Bubbling Phase) : 事件再往上從子節點一路逆向傳回去根節點，這時候就叫做 BUBBLING_PHASE。

先捕獲，再冒泡，但當事件傳到 target 本身，沒有分捕獲跟冒泡，還有當 addEventListener 設定第三個參數時，true 或 false 可以決定監聽要在捕獲階段或是冒泡階段觸發。


## 什麼是 event delegation，為什麼我們需要它？

event delegation 是將事件監聽新增到父元素，而不是每個子元素單獨設定監聽器，當觸發子元素時，事件會冒泡到父元素，監聽器就會觸發。會有事件代理主要是因為，當我們同時要對有很多DOM element都有相同的event handler的時候方關統一處理，過多的監聽器，除了會影響到網站出要處理過多的事件，要 remove 事件也要一個一個的處理，非常的麻煩。事件代理只需要一個父元素的事件處理程式，而無需為每個後代元素都設定事件處理程式。


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

- event.preventDefault() : 是處理瀏覽器的預設行為

- event.stopPropagation() : 阻止冒泡事件，因為事件的傳遞被停止，所以剩下的 listener 都不會再收到任何事件。但若是在同一個節點上有不只一個 listener，還是會被執行到。

