function random_color() {
    var hex = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

$(document).ready(function () {
    $(".button").click(function () {
        $("body").css("background-color", random_color());
    });
});
