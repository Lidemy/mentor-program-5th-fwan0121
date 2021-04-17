#!/bin/bash
# 寫法一
for i in $(seq 1 $1)
do
    touch "${i}.js";
done
echo "檔案新增成功";

# 寫法二
for (( i=1; i<=$1; i++ ))
do
    touch "${i}.js";
done
echo "檔案新增成功";

# 嘗試過 for in 似乎不支援生成序列，所以沒有成功。

