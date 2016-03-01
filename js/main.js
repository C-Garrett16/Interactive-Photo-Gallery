//Problem: When user clicks link, goes to dead end
//Solution: When user clicks link, show a lightbox.

var $search = $("#filter");

$(".photoGallery li").ready(function(){
  $search.keyup(function(){
   
    // Retrieve the input field text
    var filter = $(this).val();
    
    // Loop through the photo gallery
    $(".photoGallery img").each(function(){
      // If the list item does not contain the title attr, fade it out
      if ($(this).attr("alt").search(new RegExp(filter, "i")) < 0) {
        $(this).hide("fast");
        // Show the list item if the phrase matches
      } else {
        $(this).show("fast");
      }
    });
  });
});


$(".photoGallery").lightGallery({
  width: '700px',
    height: '470px',
    mode: 'lg-fade',
    addClass: 'fixed-size',
    counter: false,
    download: false,
    startClass: '',
    enableSwipe: false,
    enableDrag: false,
    speed: 500,
    thumbnail : false
});

