# 交作業流程

1. 先到 GitHub classroom 設定 GitHub repo

2. cd 到本地端你要放此專案的地方

3. `git clone [url]`

4. `git status` - 會還有顯示已修改的檔案名稱，還有確定一下自己在哪個 branch 底下

5. `git branch week1` - 開一個新的 branch

6. `git checkout week1` - 切換到 week1

    > `git checkout -b week1` - 第 4 跟 5 其實可以用一句指令就下完了，新建 branch 並且切換到新的 branch

7. 寫作業

8. `git add .` - 將所有新增或修改過的檔案加入暫存區

9. `git commit -am "finish week1"` - commit 暫存區的檔案

10. `git push -u origin week1` - 將本地端 Repository （week1） 的 commit 發佈到遠端

11. 到自己的 repo 發請 PR（Pull Request）。通知人發個請求，說把 week1 merge 到 master 裡面

12. 複製 Pull Request 的 url 到學習系統上繳交作業

13. 助教改完作業並且確認過沒問題後會 merge 到 master

14. `git checkout master` - 接著接換到 master

15. `git pull origin master` - 把改好的作業拉下來本地端，更新同步你本地的 master

16. `git branch -d week1` - 刪掉 week1 的分支
