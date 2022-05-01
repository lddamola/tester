#!/bin/bash

files=($(git ls-tree -l HEAD | awk '{print $5 "|" $4}'))

# x=$(cut -d'|' -f1 <<< ${files[0]})

# echo x

for i in "${files[@]}"
# 36|.babelrc
do
    fileName=$(cut -d'|' -f1 <<< $i)
    filesize=$(cut -d'|' -f2 <<< $i)
    
    str=$(git log -1 --format="%cr|%cn|%s" $fileName)
    printf "%-${MAXLEN}s|%s|%s\n" "$fileName" "$str" "$filesize" 
done
