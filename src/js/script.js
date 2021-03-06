// // HETIC div information
// var information_div = document.querySelector('.informationDiv');
//
// function follow_mouse(evenement) {
//   information_div.style.left = (evenement.pageX-201)+'px';
//   information_div.style.top = (evenement.pageY+37)+'px';
// }
// document.onmousemove = follow_mouse;


// Toggle display of the div information
// var togglerClass = document.querySelector("#catchPhrase");
//
// togglerClass.onmouseenter = function() {
//     information_div.classList.add('display');
// }
// togglerClass.onmouseleave = function() {
//     information_div.classList.remove('display');
// }

// Animation when click on logo
var logo = document.querySelector('.groupLogo');

logo.onclick = function() {
    if (logo.classList.contains('clickEvent'))
        return;
    logo.classList.add('clickEvent');

    setTimeout(function() {
        logo.classList.remove('clickEvent');
    }, 800);
};

$(document).ready(function(){
    $('a[href^="#skills"]').click(function(){
        var the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 1500, "easeInOutCubic");
        return false;
    });
});

$(document).ready(function(){
    $('a[href^="#projects"]').click(function(){
        var the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 1500, "easeInOutCubic");
        return false;
    });
});

$(document).ready(function(){
    $('a[href^="#contact"]').click(function(){
        var the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 1500, "easeInOutCubic");
        return false;
    });
});


// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});
