#!/bin/bash
# 從來沒寫過shell script，花不少持間查正則表示法還有處理字串的語法，覺得用很暴力的解法解了，還是有點小問題，關於 bio 跟 blog 的順序並不會照 grep 的順序出來

# 暴力解
user_id="https://api.github.com/users/$1";
echo $user_id;
curl $user_id | grep -e '"name": ".*"\|"bio": ".*"\|"location": ".*"\|"blog": ".*"' | sed -e 's/^.*: "//g' -e 's/",//g' -e 's/null//g';


# 經過朋友題點後的優化，可以全用 grep 處理，給了很多建議然後學到新的正則表示法，lookahead 和 lookbehind ，這兩個方法確實可以解決匹配字串問題

# 優化版
data=`curl https://api.github.com/users/$1 -s`;
value="";
for value in name bio location blog
do
    echo $data | grep -oP '(?<="'$value'": ")[^"]*';
done

# -o 是輸出匹配的部分， P 則是 pattern 
# 例如 echo "helloworld123456"|grep -oP '/d+' => 我要匹配所有的數字，/d 是指 0~9 ， + 則是匹配前的正則表達式一次或是多次
# 輸出 123456

# 先來了解什麼是往前找匹配 (lookahead the match) 跟往後找匹配 (lookbehind the match)，並拆解成 ?=、?<=、?!、?<! 的使用區別，先看到有 ! 是指不是，可以理解成否定的意思。
# 1. ?=     exp1(?=exp2)：查找 exp2 前面的 exp1。
# 2. ?<=    (?<=exp2)exp1：查找 exp2 後面的 exp1。   
# 3. ?!     exp1(?!exp2)：查找後面不是 exp2 的 exp1。
# 4. ?<!    (?<!exp2)exp1：查找前面不是 exp2 的 exp1

# 除了用 for in 迴圈來找要指定要的內容，最關鍵的地方還是在 (?<="'$value'": ")[^"]* 這一串，這邊使用的 lookbehind 往後匹配
# 舉例 "name": "yen"，(?<="'$value'": ") 是指我要匹到 "name": " 後面的東西 ==> yen"，有沒有發現我們後面還有一個 " 要處理
# [^"]* 則是說當遇到 " 就停下來 ==> ^" 是指我們不要 " 後面的東西，加上 * 就是之後的全部都不要。
# 所以當匹配到 "name": " 時，首先我們要往後找，然後能碰到下一個 " 時，之後的東西全不要，我們就能取到我們要的字串囉。

# 在舉個簡單的例子 350 in USD350，我們要從 USD350 取得我們要的 350
# (?<=USD)\d{3} ==> 往 USD 後面找 3 個 0~9 中的任一數字