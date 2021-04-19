# 教你朋友 CLI

在教學之前先了解一下 CLI

## Command Line 是什麼呢

簡單來說是一種操作電腦的方法，而操作電腦的方法又分為兩種。

- **1. GUI（Graphical User Interface，圖形化介面）：** 我們常見的滑鼠右鍵像是新增資料夾、改名稱、刪除等等

- **2. CLI（Command Line Interface，命令列介面）：** 文字視窗，透過純文字來操縱電腦。

## CLI 基本指令介紹

### `pwd`（Print Working Directory）：印出所在位置

### `ls`（List）：印出當前資料夾底下檔案，非隱藏檔的檔名、 以檔名進行排序及檔名代表的顏色

- `ls -al` : 列出檔案詳細資訊以及顯示隱藏檔案
- `ls -a` : 顯示隱藏檔案與目錄
- `ls -l` : 顯示檔案與目錄的詳細資訊

### `cd`（Change Directory）： 切換資料夾

- `cd ..` : 回到上一層資料夾
- `cd ~` : 表示回到自己的家目錄
- `cd -` : 回到（上一個動作）剛剛的那個目錄
- `cd /` : 回到根目錄
- `cd（相對路徑或是絕對路徑）`

### `touch`： 建立檔案或更改時間，如果檔案不存在就會自動建立檔案

### `rm`（Remove）： 刪除檔案

- `rmdir xxx（資料夾名稱）` 刪除資料夾
- `rm -f` 把當前資料夾底下的資料都刪掉，使用時要注意，也不會詢問是某要刪除
- `rm -r directory-name`

### `mkdir`（Make Directory）：建立資料夾

- `mkdir folde-name`

### `rv`（Move）：移動檔案或是改名

- `mv hello folder` 如找到該資料夾，檔案會移到資料夾裡面
- `mv hello test` 當找不到該資料夾時，則會更改檔案名稱 hello 變成 test

### `cp`（copy）：複製檔案

- `cp -r deep deep2` 複製資料夾必須要加上 -r

### `vim` 文字編輯器

- `:q` 退出
- `:wq` 存檔並退出
- 按 `i` 進入編輯模式
- 按 `esc` 進入普通模式

### `cat`：查看整個檔案的內容

### `grep`（globally search for RE and print it）：抓取特定關鍵字

### `wget`：下載檔案

- `wget https://www.google.com.tw/`

### `curl`：送出request，可用來測試api

- `curl -i 網址` 列出 header 的資訊

### `echo`：印出字串

### `redirection`：重新導向 input output （會把檔案蓋掉）

- `ls -al > list_result` 把 ls 列出來的 輸出到 list_result 裡面
- `echo "123" > 123.txt` 把 123 的數字輸入到 123.txt 裡面

- 如果只想新增內容，而不是覆蓋的話，則是需要用兩個箭頭 >>（append 加上去）  例：`echo "append to the end of the file" >> 123.txt`

### `|`（pipe）：把前面的輸出變成後面的輸入

- `cat hellp | grep o`

### `date`： 印出現在時間

### `top`（Table of Processes）： 印出所有的 process

### `cat`（Catenate）：連接檔案

### `less`（Catenate）：分頁式印出檔案，按 q 離開畫面

## 最後教學

1. 打開 git bash 開始使用 command line

2. `pwd` 可以確認目前的位置，然後移動到目標路徑在打 `cd 目標路徑`

3. 建立 wifi 的資料夾 : `mkdir wifi`

4. 進到剛新建的資料夾裡面 : `cd wifi`

5. 新增 afu.js 檔案在 wifi 資料夾裡面 `touch afu.js`
