// Sosyal medya ikonları için hover efekti
$(document).ready(function() {
    // Sayfa yüklendiğinde ilk kontrol
    function checkElements() {
        $('.skill-row, .info-card').each(function() {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (elementPos < topOfWindow + windowHeight - 50) {
                $(this).addClass('animate');
            }
        });
    }

    // Sayfa yüklendiğinde çalıştır
    setTimeout(function() {
        checkElements();
    }, 100);

    // Scroll sırasında çalıştır
    $(window).scroll(function() {
        checkElements();
    });

    // Diğer mevcut kodlar...
    $('.carousel').carousel({
        interval: 3000,
        pause: 'hover',
        wrap: true
    });

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        );
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });

    $('.social-icons .icon img').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.2)',
                'filter': 'brightness(1.2)',
                'cursor': 'pointer'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1)',
                'filter': 'brightness(1)'
            });
        }
    );
});