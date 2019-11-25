$(function(){

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
                    $('#contact-form').append("<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
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
    	// scale: 0.4,
    	// rotate: {x:180, y:45, z:20},
    	easing:'ease',
    	// reset: true
    });

    sr.reveal('.rounded-circle',{
    	origin: 'top',
    	distance: '100px',
    	duration: 2000,
    	scale: 0.4,
    	// rotate: {x:180, y:45, z:20},
    	easing:'ease',
    	// reset: true
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
        distance: '100px',
        duration: 2500,
        easing:'ease',
        delay: 500,
        reset: true
    });

    sr.reveal('.timeline-panel-container',{
        origin: 'left',
        distance: '100px',
        duration: 3500,
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

$(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

