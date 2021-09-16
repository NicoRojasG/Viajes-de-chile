$(function(){

    $("a").click(function(event){
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function(){
                window.location.hash = gato;
            });
            
        }

    });
  
    // cambio de color
    $(window).scroll(function(){
        if ($("#menu").offset().top >400) {
            $("#menu").addClass("bg-info");
            
        } else {
            $("#menu").removeClass("bg-info");
            
        }

    });


});