$(document).ready(
    function(){
        
        TweenLite.to(
            (".animateName"),
            2,
            {
                x: '10px',
                easing: 'linear',
                autoAlpha: 1
            }
        );
        TweenLite.to(
            (".animateTitles"),
            2,
            {
                x: '-10px',
                easing: 'linear',
                autoAlpha: 1
            }
        );
        TweenLite.to(
            (".animateBtns"),
            2,
            {
                autoAlpha: 1
            }
        );
        TweenLite.to(
            (".animatePic"),
            2,
            {
                autoAlpha: 1
            }
        );

        $("body").scrollspy({target: "#navbarResponsive"});

        $(".navbar-collapse ul li a[href^='#']").on('click', function(e){

            target = this.hash;
            e.preventDefault();

            $('html, body').animate({
                scrollTop : $(this.hash).offset().top
            }, 600, function(){
                window.location.hash = target;
            });
        });
    }
)