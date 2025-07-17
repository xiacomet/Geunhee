/*
Theme Name: IAMX
Author: Trendy Theme
Author URL: trendytheme.net
*/

/*
    = Preloader
    = Animated scrolling / Scroll Up
    = Full Screen Slider
    = Sticky Menu
    = Back To Top
    = Countup
    = Progress Bar
    = More skill
    = Shuffle
    = Magnific Popup
    = Vidio auto play
    = Fit Vids
    = Google Map

*/

jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

    // (function () {
    //     $('a[href*=#]').bind("click", function (e) {
    //         var anchor = $(this);
    //         $('html, body').stop().animate({
    //             scrollTop: $(anchor.attr('href')).offset().top
    //         }, 1000);
    //         e.preventDefault();
    //     });
    // }());



    // -------------------------------------------------------------
    // Full Screen Slider
    // -------------------------------------------------------------
    (function () {
        $(".tt-fullHeight").height($(window).height());

        $(window).resize(function () {
            $(".tt-fullHeight").height($(window).height());
        });

    }());


    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function () {
        $('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        })
    }());




    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());


    // -------------------------------------------------------------
    // Countup
    // -------------------------------------------------------------
    $('.count-wrap').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------

    $('.skill-progress').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).unbind('inview');
        }
    });

    // -------------------------------------------------------------
    // More skill
    // -------------------------------------------------------------
    $('.more-skill').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                barColor: '#E86856',
                trackColor: '#F5F5F5',
                scaleColor: false,
                lineWidth: 13,
                size: 170,
                animate: 2000,
                onStep: function (from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                    var chartText = this.el.querySelector('.chart-text span');
                    if (chartText) {
                        chartText.style.display = 'block';
                    }
                }

            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Shuffle
    // -------------------------------------------------------------

    // (function () {

    //     var $grid = $('#grid');

    //     $grid.shuffle({
    //         itemSelector: '.portfolio-item'
    //     });

    //     /* reshuffle when user clicks a filter item */
    //     $('#filter a').click(function (e) {
    //         e.preventDefault();

    //         // set active class
    //         $('#filter a').removeClass('active');
    //         $(this).addClass('active');

    //         // get group name from clicked item
    //         var groupName = $(this).attr('data-group');

    //         // reshuffle grid
    //         $grid.shuffle('shuffle', groupName);
    //     });


    // }());


    // -------------------------------------------------------------
    // Magnific Popup
    // -------------------------------------------------------------

    // (function () {
    //     $('.image-link').magnificPopup({

    //         gallery: {
    //             enabled: true
    //         },
    //         removalDelay: 300, // Delay in milliseconds before popup is removed
    //         mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    //         type: 'image'
    //     });

    // }());



    // (function () {
    //     $('.popup-video').magnificPopup({
    //         disableOn: 700,
    //         type: 'iframe',
    //         mainClass: 'mfp-with-zoom',
    //         removalDelay: 300,
    //         preloader: false,
    //         fixedContentPos: false
    //     });
    // }());

    // -------------------------------------------------------------
    // Fit Vids
    // -------------------------------------------------------------
    (function () {
        $(".video-container").fitVids();
    }());



    // -------------------------------------------------------------
    // Vidio auto play
    // -------------------------------------------------------------
    (function () {

        /* Vimeo API: http://developer.vimeo.com/player/js-api */

        var iframe = document.getElementById('nofocusvideo');
        // $f == Froogaloop
        var player = $f(iframe);

        $('.modal').on('hidden.bs.modal', function () {
            player.api('pause');
        })

        $('.modal').on('shown.bs.modal', function () {
            player.api('play');
        })
    }());




    // -------------------------------------------------------------
    // STELLAR FOR BACKGROUND SCROLLING
    // -------------------------------------------------------------

    $(window).load(function () {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        } else {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    });

    // -------------------------------------------------------------
    // Popup JS
    // -------------------------------------------------------------

    $(function () {
        $('#popup01').click(function () {
            $('#pop01').show();
        });
        $('#popup02').click(function () {
            $('#pop02').show();
        });

        $('.popup i').click(function () {
            $('.popup').hide();
        });
    });

});


const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


ScrollTrigger.matchMedia({
    "(min-width: 767px)": function () {

        const box2 = gsap.timeline();
        box2.from(".intro h1 span:nth-child(1)", {
            y: -100,
            opacity: 0,
            filter: "blur(8px)",
            duration: 1.0,
            ease: "power1.out"
        }, "title")

            .from(".intro h1 span:nth-child(2)", {
                y: -100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power1.out"
            }, "title" + 0.3)
            .from(".intro h1 span:nth-child(3)", {
                y: -100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power.out"
            }, "title" + 0.6)
            .from(".intro h1 span:nth-child(4)", {
                y: -100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power1.out"
            }, "title" + 0.9)
            .from(".intro h1 span:nth-child(5)", {
                y: -100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power1.out"
            }, "title" + 1.2)
            .from(".intro h1 span:nth-child(6)", {
                y: -100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power1.out"
            }, "title" + 1.5)
            .from(".intro h1 span:nth-child(7)", {
                y: -100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power1.out"
            }, "title" + 1.8)
            .from(".intro h1 span:nth-child(8)", {
                y: -100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power1.out"
            }, "title" + 2.1)
            .from(".intro h1 span:nth-child(9)", {
                y: -100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power1.out"
            }, "title" + 2.4)
            .from(".intro h1 span:nth-child(10)", {
                y: -100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power1.out"
            }, "title" + 2.7)
            .from(".intro h1 span:nth-child(11)", {
                y: -100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power1.out"
            }, "title" + 3.0)
            .from(".intro h1 span:nth-child(12)", {
                y: -100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power1.out"
            }, "title" + 3.3)
            .from(".intro h1 span:nth-child(13)", {
                y: -100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power1.out"
            }, "title" + 3.6)
            .from(".intro h1 span:nth-child(14)", {
                y: -100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power1.out"
            }, "title" + 3.9)
            .from(".intro h1 span:nth-child(15)", {
                y: -100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power1.out"
            }, "title" + 4.2)
            .from(".intro h1 span:nth-child(16)", {
                y: -100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power1.out"
            }, "title" + 4.5)
            .from(".intro h1 span:nth-child(17)", {
                y: -100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power1.out"
            }, "title" + 4.8)
            .from(".intro p", {
                y: 100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.0,
                ease: "power1.out"
            }, "title" + 5.1);


        ScrollTrigger.create({
            animation: box2,
            trigger: "#home",
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true,
            anticipatePin: 1, // 핀 효과를 부드럽게 줄 수 있음.
            markers: true,
        });
    }
});
function fnCopyToClipboard() {
    const str = document.getElementById("phone-number").innerText;

    const tempElement = document.createElement("textarea");
    tempElement.value = str;
    document.body.appendChild(tempElement);

    tempElement.select();
    document.execCommand('copy');

    document.body.removeChild(tempElement);
    alert("복사되었습니다.");
}


// -------------------------------------------------------------
// WOW JS
// -------------------------------------------------------------

new WOW({
    mobile: false
}).init();


$(window).scroll(function () {

    if ($(this).scrollTop() > 100) {
        $("#scroll-up").addClass("on");
    }
    else {
        $("#scroll-up").removeClass("on");
    }

});

$("#scroll-up").click(function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);

function getAngle(diffX, diffY) {
    return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
    const distance = Math.sqrt(
        Math.pow(diffX, 2) + Math.pow(diffY, 2)
    );
    const maxSqueeze = 0.15;
    const accelerator = 1500;
    return Math.min(distance / accelerator, maxSqueeze);
}

const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const angle = getAngle(diffX, diffY);
    const squeeze = getSqueeze(diffX, diffY);

    const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
    const rotate = 'rotate(' + angle + 'deg)';
    const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

    cursor.style.transform = translate;
    cursorCircle.style.transform = rotate + scale;
};

function loop() {
    updateCursor();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

const cursorModifiers = document.querySelectorAll('a');

cursorModifiers.forEach(curosrModifier => {
    curosrModifier.addEventListener('mouseenter', function () {
        cursor.classList.add('cursor_on');
    });

    curosrModifier.addEventListener('mouseleave', function () {
        cursor.classList.remove('cursor_on');
    });
});

document.querySelectorAll('.intro h1 span').forEach((el) => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor_on_1');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor_on_1');
    });
});

document.querySelectorAll('.snsbox .tt-overlay').forEach((el) => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor_on_2');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor_on_2');
    });
});
