$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  arrows: false
});

//Smooth scrolling 
$(document).ready(function(){
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          //$target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            //$target.focus(); // Set focus again
          };
        });
      }
    }
  });

  //tabs
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
  })
  
  if($(window).width() <= 1024){
    $(".menu--inner >ul").addClass("mobile");

    $( ".hamburger" ).click(function() {
      $(".menu--inner >ul").toggleClass("open");
    });
  }

});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll <= 50) {
      $("nav.menu").addClass("transparent");
  } else {
      $("nav.menu").removeClass("transparent");
  }
});

$(window).resize(function() {
  if($( window ).width() <= 1024){
    $(".menu--inner >ul").addClass("mobile");
  }else{
    $(".menu--inner >ul").removeClass("mobile");
    $(".menu--inner >ul").removeClass("open");
  }
})