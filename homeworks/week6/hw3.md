# 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

表格除了 table、tr、th、td，還可以加下面的標籤 - 表頭、表身、表尾，可以讓表格的結構更清楚，雖然不加，瀏覽器會自動幫你生成，不過這時候當要控制表格的 CSS，選取器可能會失效，因為在瀏覽器你的結構已改變了。

所以添加結構的好處除了可以立於維護以及閱讀，還可以在列印時，能夠設定重複列印的表頭及表尾，也有利於 CSS 的撰寫。

> `<thead>`、`<tbody>`、`<tfoot>`內一定要有一個或多個`<tr>`

`<caption>` - 說明，表格的標題

`<thead>` - 表頭

`<tbody>` - 表身

`<tfoot>` - 表尾

## 結構

![](https://i.imgur.com/BL8y5kH.jpg)

## 程式碼

```html
<table border="3">
    <caption>表格標題</caption>
    <thead>
        <tr>
            <th scope="col">姓名</th>
            <td scope="col">數學</td>
            <td scope="col">國文</td>
            <td scope="col">英文</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">A</th>
            <td>90</td>
            <td>50</td>
            <td>55</td>
        </tr>
        <tr>
            <th scope="row">B</th>
            <td>40</td>
            <td>70</td>
            <td>65</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th scope="row">平均</th>
            <td>75</td>
            <td>60</td>
            <td>60</td>
        </tr>
        <tr>
            <th>備註</th>
            <!-- 合併儲存格 -->
            <td colspan="3">
                Lorem ipsum dolor sit ame consectetur, adipisicing elit.
            </td>
        </tr>
    </tfoot>
</table>
```

# 請問什麼是盒模型（box model）

## box model

HTML 的每個元素都可以被視為是一個盒子，所有網頁上的物件都像是一個一個被盒子裝起來後，擺放在頁面上。這些盒子就是 Box Ｍodel，由物件內到外是由margin、border、padding、content 所組成的。

![](https://i.imgur.com/HzGdIFq.jpg)

> 取自[MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)

盒模型很重要是因為用了不同的模式會影響到 CSS 採用的排版方式。一是 Box Model 與計算物件尺寸的方式有關（box-sizing），二是 Box Model 有兩種不同模式， block box 跟 inline box。

## box-sizing

### `box-sizing` 是控制盒模型的計算模式，簡單的來說控制的就是寬度值 width 要指定給誰哪個範圍。

### `box-sizing` 有兩種計算模式 `border-box` 和 `content-box`

#### 1. `border-box` - 要把寬度值設定給邊框（border）到邊框（border）的尺寸，所以 padding 或是 border 會往內縮。

#### 2. `content-box` - 採用傳統的計算方式，寬度是指定給內容物，所以 padding 或是 border 就會往外加。

# 請問 display: inline, block 跟 inline-block 的差別是什麼？

### `inline` 

- 元素與為並排同一行顯示，其容器大小以內容物判，靠內容撐開，無法設定寬高。

- 只能設定左右外距，無法設定上下外距。

- 元素不會自動換行，會在同一列一直顯示至空間不足才會換到下一行。

- 相鄰的文字（同一列中）和 inline 元素之間可以垂直置中對齊。

- 例如`<a>`、`<span>`、`<em>`、`<strong>`、`<b>`等等。

>img 是一種置換元素 (Replaced element)，瀏覽器根據元素的標簽和屬性，來決定元素的具體顯示內容。。他的 display 属性的默认值是 inline，但是有別於一般的 inline 元素，他本身是擁有寬度、高度、寬高比，所以可以顯現的像是 inline-block 一樣。`<img>` 可以 border/border-radius、padding/margin、width、height 等等的 CSS 屬性。


### `block`

- 元素寬度預設會撐到最大，使其占滿整個容器，區塊可設定寬高，上下內外距等屬性。

- 元素會由上而下自動換行。

- 無法設定垂直對齊（vertical-align）屬性，元素內容(文字)會永遠靠上對齊。

- 例如 `<div>`、`<ul>`、`<ol>`、`<p>`、`<h1-h6>`等等。

### `inline-block`

- 繼承了上面 inline 以及 inline-block 的特性，以 inline 的方式呈現不會自動換行，但同時擁有block的屬性，可以設定寬高，上下內外距等屬性。

- 可在父元素設定 text-align 屬性，能指定區塊在父元素中的水平對齊方式。

- 可以設定垂直對齊（vertical-align）屬性，指定垂直對齊的方式。

- 例如 `<input>`、`<select>`、`<button>`等等。

# 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

### `static`（預設值）- 套用 position: static 的元素，**不會被特別定位**在頁面上特定位置，而是照著瀏覽器預設的配置自動排版在頁面上，無法定義 top、left、bottom 與 right 的值。

### `relative`（相對定位）- 在沒有設定任何屬性的情況下，會和 Static 的呈現方式一樣，但他和 Static 不同的地方就在於，他可以透過 top、left、bottom 與 right 的數值來改變他的位置，簡單來說可以想成是偏移，但無論它在頁面上移動了多少位置，都不會影響其他元素的位置。

### `absolute`（絕對定位）- absolute 與 fixed 的行為很像，不一樣的地方在於 absolute 會以屬性是 Relative 的父層為基準往上找，若沒有指定基準元素的話，預設是以 body 元素（整個視窗）為基準。

### `fixed`（固定定位）- Fixed 的元素會以瀏覽器視窗（可視範圍）來定位，即便頁面捲動，它還是會固定在相同的位置，網頁的導覽列（navigation）就是個很好的例子。
