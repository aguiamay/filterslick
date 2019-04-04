$(document).ready(function () {

  $('#filter').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2
  });

  $('#filter').slick('slickFilter', function(){
    //return jQuery':even';
  });

});