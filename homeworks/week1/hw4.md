
# 跟你朋友介紹 Git

## **版本控制**

- 多人共同合作時，不會把別人的檔案程式覆蓋掉
- 可隨時復原修改的內容，回到之前的版本
- 可得知今天寫的程式跟昨天的差異
- 針對所發行的軟體，可以分成維護版跟開發版管理
- 保留修改歷史紀錄，包括修改者和理由，以供查詢

## **儲存檔案庫（Repository）**

- 存放所有規格文件、設計文件、原始程式碼、測試報告等
- 暫存檔、記錄檔、程式編譯後的檔案等可以不存入
- 儲存庫中檔案變化的歷史記錄
- 資訊放在 .git 資料夾

## **三種檔案區域**

<img src="https://i.imgur.com/xjwjWn2.jpg" width="500px">

- 工作區（ Working Directory ）: 尚未被追蹤控制的檔案區域
- 暫存區（ Staging Area ）： 被追蹤控制的檔案區域
- 儲存區（ Repository ）：存放版控的檔案

## **四種檔案狀態 1**

<img src="https://i.imgur.com/HhpPJ7J.jpg" width="500px">

## **四種檔案狀態 2**

<img src="https://i.imgur.com/4YnYfFZ.jpg" width="500px">

### `git init` : 初始化，在當前位置建立 .git 的資料夾，也就是建立 Git Respository（檔案庫），目的是初始化這個目錄，對這個目錄版本控制

### `git status` : 版控當前版本狀態

- Untracked : 沒有納入版本控制範圍內德檔案
- Modified not stage : 沒變動
- Modified to be committed : 有變動尚未 commit 的檔案
- Committed : 儲存區中的檔案

### `git add` : 決定是否加入版本控制

- `untracked` : 不加入，沒有納入版本控制範圍內的檔案
- `staged` : 加入版本控制
- `git rm --cached code.js` : 從 staged 移回到 untracked
- `git add .` : 把所有檔案加入版本控制
- `git add [file-name]`

### `git commit` : 新建一個版本

- `git commit -m "first commit"` : -m 這次版本的訊息
- `git commit -am "commit"` : -a 等於 -al，添加 -a 參數，就可以檢測出有修改的檔案（不包括新增的檔案），將其加入索引並提交。這些操作只要一個指令就可以完成了。

### `git log` : 查看 commit 的歷史紀錄，可以看到 commit 的紀錄像是版本 id 、版本 message 等等

### `git checkout` : 回到上一個版本

- 可先 git log 得知之前的版本號，複製之後下 git checkout xxx（版本號）
- `git checkout master` : 回到最新狀態底下主幹上
- `git chechkout [branch-name]` : 切換到別的branch
- `git checkout -b [branch-name]` : 建立並跳到該分支

### `.gitignore` : 把不想加入版本控制的檔案名稱紀錄在裡面，系統就會自動忽略這些檔案

### `git branch`

- `git branch -v` : 看到目前有哪些 branch
- `git branch [branch-name]` : 建立新的 branch
- `git branch -d [branch-name]` : 刪除 branch

### `git merge` : 合併

- `git merge new-feature` : 把 new-feature 合併進來

### `git conflict` : 衝突，當 branch 在合併的時候檔案出現衝突，發現同一個檔案的同個地方有不一樣， git 不知道該以哪一個為準則，Git 把有衝突的段落標記出

- 修改記得先下
    `git add [conflict_file_name]`
- 接下來
    `git commit -am "conflict fixed"`

### `git push` : 將本地端 Repository 的 commit 發佈到遠端

- `git push -u origin [branch-name]` : 發佈至遠端指定的分支（Branch） -u 可省略

### `git pull` : 把遠端的拉下來到本地端，更新同步你本地程式瑪

- `git pull origin master[主幹]` : 把東西從遠端抓下來，如果衝突就 merge 解決

### `git clone` : 把專案複製下來

- `git clone 專案的 url`

### 為甚麼我們需要 branch 呢

一條線的開發模式，當在維護的時候呢，發生 bug 的時候我們很難去追蹤到底發生錯誤的是哪段，也很容易發生檔案衝突，這就是為什麼我們要有分支，除了容易管理，大家可以各自做自己的事情，也不會影響到穩定版的東西，等到開發完成，再個別 commit 並且 merge 到穩定版本裡面。

蔡哥可以使用 branch 的概念來管理他的笑話，他可以在不同的分支來新增或是更改他的笑話，然後做的任何改變也不會改到最原始版的笑話（master），不用擔心原來的笑話版本會不見，隨時想要看看過去更改的歷紀錄也可以使用 `git log` 來看看笑話的演進，如果隨時想到回到任一個版本也是可以的只要下 `git checkout [版本號]`查看，任何的更改跟最新的版本蔡哥都可以輕鬆的管理他的笑話囉，
