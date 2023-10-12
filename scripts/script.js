const setTheme = () => {
    const darkModeStatus = $("#darkModeSwitch").is(":checked");
    if (darkModeStatus) {
        $("body").attr("theme", "dark");
    } else {
        $("body").attr("theme", "light");
    }
}


$(function () {
    const $window = $(window);
    $window.on("scroll resize", () => {
        const win_h = $window.height();
        const win_top = $window.scrollTop();
        const win_bot = win_h + win_top;
        $.each($(".animationOnScroll"), function() {
            const e = $(this);
            const e_h = e.outerHeight();
            const e_top = e.offset().top;
            const e_bot = e_top + e_h;

            if (e_bot >= win_top && e_top <= win_bot) {
                e.addClass("inView");
            }
        });
    })

    $window.trigger('scroll');
    $("#darkModeSwitch").on("click", () => setTheme());
});