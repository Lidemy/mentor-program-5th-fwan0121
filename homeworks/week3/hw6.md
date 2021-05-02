# 解題心得

## hw1：好多星星

這一題剛好在JS101寫過，所以就很順利的完成巢狀迴圈了，花一點點時間改成可以在 LIOJ 上跑的格式。

## hw2：水仙花數

花了時間了解了一下甚麼是水仙花數，有時候很習慣直接寫在同一個 function 裡面，不過可能會很難讓自己或別人解讀，覺得要慢慢練習把每個不同功用的方法拆開寫，不僅可以重複使用，程式碼反而會更簡潔也更好懂。

## hw3：判斷質數

判斷數值是否為質數，除了 1 和該數本身以外，如果可以被其他自然數整除，就是合數，後來看到檢討原來檢查開根號會更快，學到了 ~

## hw4：判斷迴文

這題放在最後寫，發現也是裡面最簡單的，只要加字串反轉，去跟原本的比對，就能知道是不是迴文了。

## hw5：聯誼順序比大小

有注意到影片裡講的型態限制，int 的範圍是 -2147483648 ~ 2147483647。
然後 JavaScript 數字最大值是 Number.MAX_SAFE_INTERGER，所以如果直接比大小的話，是無法比的。

我其實花了最多時間在這題上面，在想要怎麼處理大數的部分，最後用 xor 來處理可以規避大數相加會溢位，不過一開始也碰了雷，因為JS字串乘上數字會轉乘數字，然後就爆了 QQ。

### 真值表

|a|b|a^b|
|:----:|:----:|:----:|
|True|True|False|
|True|False|True|
|False|True|True|
|False|False|False|

 xor 其實可同時執行邏輯與位元運算子的運算，而且特性非常多 ( 交換律、結合律等等 )，xor 可以反轉，也就是交換數值變數 ( 交換律 ) ，所以用xor其實可以不用多存第三個變數，也不會消耗額外的記憶體空間。可以運用在上次 week2 超級挑戰題的大數加法，還有這次大數比大小的上面。

``` javascript=
//一般寫法
temp = a
a = b
b = temp

//不用額外變數交換兩個整數的值
x = a ^ b
y = x ^ b
z = x ^ y

從上面推算出
y = (a ^ b) ^ b = a ^ b ^ b = a ^ (b ^ b) = a ^ 0 = a
z = (a ^ b) ^ a = a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b

所以
a = a ^ b
b = a ^ b  
a = a ^ b


```

``` javascript=
//初版
function solve(lines) {
  let groupNum = Number(lines[0])
  for (let i = 1; i<= groupNum; i++) {
    let [a,b,k] = lines[i].split(' ')
    console.log(compare(a,b,k))
  }
}


function compare(a, b, k) {
  if (a === b) {
    return "DRAW"
  }
  if (a.length != b.length) {
    return (a.length*k > b.length*k) ? "A" : "B"
  }
    // 不過這裡會卡大數的情況，js會把字串轉數字，所以超出了會出狀況
    // 這裡 a 跟 b 會轉換成數字，所以太大就會超出了
    // 例如 a = "1"
    // console.log(a) => "1"
    // console.log(a*(-1)) => "1" * -1 = -1
    return (a*k > b*k) ? "A" : "B"
}

//最終版
function solve(lines) {
  let groupNum = Number(lines[0])
  for (let i = 1; i<= groupNum; i++) {
    let [a,b,k] = lines[i].split(' ')
    console.log(compare(a,b,k))
  }
}

function compare(a, b, k) {
  if (a === b) {
    return "DRAW"
  }
  if (a.length != b.length) {
    return (a.length > b.length) ^ (k == -1) ? "A" : "B"
  }
    // (a > b) 這時候 js 的數字沒有上限(因為被當作字串)，然後 (a > b) 會輸出 true or false
    // 我們再利用 (true or false) 用邏輯運算跟 xor 配合，就會避開大數。
    // 首先我們比大，k = 1
    // 1 > 2  => false    k == -1 => false
    // false ^ false => false  => B贏
    return (a > b) ^ (k == -1) ? "A" : "B"
}
```
