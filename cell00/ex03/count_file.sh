
find . -maxdepth 1 \( -type f -o -type d \) | grep -v '/\.' | wc -l
