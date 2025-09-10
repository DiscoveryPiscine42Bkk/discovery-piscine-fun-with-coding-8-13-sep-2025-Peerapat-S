if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

for arg in "$@"; do
    dir="ex$arg"
    if [ ! -d "$dir" ]; then
        mkdir "$dir"
    fi
done