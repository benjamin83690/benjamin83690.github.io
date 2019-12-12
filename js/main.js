let boiteSlider = document.querySelector('.slider');
let slider = document.querySelector('#slider');
let images = document.querySelectorAll('#slider img');
let boites = document.querySelectorAll('#slider .item');
let uneBoite = document.querySelector('#slider .item');
let longueurImages = (uneBoite.offsetWidth * boites.length - (4 * uneBoite.offsetWidth)) + 1;
let ref = 0;
let activeSlide;

function slide() {
    if (ref > -longueurImages) {
        ref -= uneBoite.offsetWidth;
        slider.style.left = ref + "px";
    } 
    if (ref <= -longueurImages) {
        ref = 0;
        slider.style.left = "0px";
    }
}

function slideOn() {
    activeSlide = window.setInterval(slide,6000);
}

function slideOff() {
    activeSlide = window.clearInterval(activeSlide);
}

window.onload = () => {
    slideOn();
    slider.addEventListener('mouseover', slideOff);
    slider.addEventListener('mouseleave', slideOn);
}


$(function(){

    $('[data-toggle="tooltip"]').tooltip()

    $(document).scroll(function () {
        var $nav = $("#mainNav");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });

    $(".navbar a, footer a").on("click", function(event){
    
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 1000 , function(){window.location.hash = hash;})
        
    });

    $('#contact-form').submit(function(e) {
        e.preventDefault();
        $('.comments').empty();
        var postdata = $('#contact-form').serialize();
        
        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                 
                if(json.isSuccess) 
                {
                    $('#contact-form').append("<p class='thank-you'>Votre message a bien Ã©tÃ© envoyÃ©. Merci de m'avoir contactÃ© :)</p>");
                    $('#contact-form')[0].reset();
                }
                else
                {
                    $('#firstname + .comments').html(json.firstnameError);
                    $('#name + .comments').html(json.nameError);
                    $('#email + .comments').html(json.emailError);
                    $('#phone + .comments').html(json.phoneError);
                    $('#message + .comments').html(json.messageError);
                }                
            }
        });
    });

    const sr = ScrollReveal();

    sr.reveal('.navbar',{
    	origin: 'left',
    	distance: '100px',
    	duration: 2000,
    	easing:'ease',
    });

    sr.reveal('.rounded-circle',{
    	origin: 'top',
    	distance: '100px',
    	duration: 2000,
    	scale: 0.4,
    	easing:'ease',
    });

    sr.reveal('.heading',{
    	duration: 1500,
    	easing:'linear',
    	delay: 300,
    	reset: true
    });

    sr.reveal('.progress',{
    	duration: 1000,
    	easing:'linear',
    	delay: 500,
    	reset: true
    });

    sr.reveal('.timeline-panel-container-inverted',{
        origin: 'right',
        distance: '20px',
        duration: 2000,
        easing:'ease',
        reset: true
    });

    sr.reveal('.timeline-panel-container',{
        origin: 'left',
        distance: '20px',
        duration: 2000,
        easing:'ease',
        reset: true
    });

    sr.reveal('.projet',{
    	duration: 2000,
    	easing:'linear',
    	reset: true
    }, 500);

    sr.reveal('.educ',{
    	duration: 1000,
    	easing:'linear',
    	delay: 500,
    	reset: true
    });

    sr.reveal('.form-box',{
        duration: 1000,
        easing:'linear',
        delay: 500,
        reset: true
    });

})

