if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    for i in "$@"; do
        echo "$i"
    done | head -n 3
fi