$(document).ready(function () {

  let filterSlick = $('#filter');

  filterSlick.slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  $('input[name="dia"]').change(function() {
    let d = $(this).val();
    let c = $('#op-categoria').val();
    filtra( d, c );
  });

  $('#op-categoria').change(function() {
    let d = $('input[name="dia"]:checked').val();
    let c = $(this).val();
    filtra( d, c );
  });

  function filtra( d, c ) {
    filterSlick.slick('slickUnfilter');
    filterSlick.slick( 'slickFilter', function() {

      let retorno;

      if ( d === 'all' && c !== 'all' ) {
        retorno = ( $('input[name="dia"]').val() === d ) && $(this).hasClass( c );
      } else if ( d !== 'all' && c === 'all' ) {
        retorno = ( $(this).data('dia') === parseInt( d ) ) && $('#op-categoria').val() === c;
      } else if ( d !== 'all' && c !== 'all' ) {
        retorno = ( $(this).data('dia') === parseInt( d ) ) && $(this).hasClass( c );
      } else {
        retorno = true;
      }

      return retorno;
    } );
  }

});

