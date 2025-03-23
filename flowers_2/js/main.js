$(document).ready(function () {
    let menuOpen = false;

    // Обработчик клика на бургер-кнопку
    $(".menu-button").on("click", function () {
        if (!menuOpen) {
            $(".mobile-menu").fadeIn();
            $(this).addClass("active");
            $("body").addClass("no-scroll");
            menuOpen = true;
        } else {
            closeMenu();
        }
    });

    // Закрыть меню при клике вне его области
    $(document).on("click", function (e) {
        if (
            !$(e.target).closest(".menu-button").length &&
            !$(e.target).closest(".mobile-menu").length &&
            menuOpen
        ) {
            closeMenu();
        }
    });

    // Обработчик изменения размера окна
    $(window).on("resize", function () {
        const windowWidth = $(window).width();

        if (windowWidth > 600) {
            if (menuOpen) {
                closeMenu();
            }
        }
    });

    // Обработчик скролла
    $(window).on("scroll", function () {
        if (menuOpen) {
            closeMenu();
        }
    });

    // Функция для закрытия меню
    function closeMenu() {
        $(".mobile-menu").fadeOut();
        $(".menu-button").removeClass("active");
        $("body").removeClass("no-scroll");
        menuOpen = false;
    }
});