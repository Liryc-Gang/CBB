(function ($) {
    'use strict';

    // Testimonials Slides Active Code
    if ($.fn.owlCarousel) {
        $(".testimonials-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 5,
            nav: true,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>']
        })
    }
    
    // Search Btn Active Code
    $('#search-btn, #closeBtn').on('click', function () {
        $('body').toggleClass('search-form-on');
    });

    // Progress Bar Active Code
    if ($.fn.barfiller) {
        $('#bar1').barfiller({
            tooltip: true,
            duration: 1000,
            animateOnResize: true
        });
        $('#bar2').barfiller({
            tooltip: true,
            duration: 1000,
            animateOnResize: true
        });
        $('#bar3').barfiller({
            tooltip: true,
            duration: 1000,
            animateOnResize: true
        });
        $('#bar4').barfiller({
            tooltip: true,
            duration: 1000,
            animateOnResize: true
        });
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
        });
    }

    // Sticky Active Code
    if ($.fn.sticky) {
        $("#header").sticky({
            topSpacing: 0
        });
    }

    // Video Active Code
    if ($.fn.magnificPopup) {
        $('.video--play--btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }

    // matchHeight Active Code
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    var $window = $(window);

    // Preloader active code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);



filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


