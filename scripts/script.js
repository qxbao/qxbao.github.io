const setTheme = () => {
    const darkModeStatus = $("#darkModeSwitch").is(":checked");
    if (darkModeStatus) {
        $("body").attr("theme", "dark");
    } else {
        $("body").attr("theme", "light");
    }
}

$(function () {
    $("#darkModeSwitch").on("click", () => setTheme());
});