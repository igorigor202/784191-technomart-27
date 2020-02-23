$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 30000,
      values: [ 0, 30000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( " " + ui.values[ 0 ] );
        $( "#amount-1" ).val( " " + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount-1" ).val( "" + $( "#slider-range" ).slider( "values", 1 ) );
} );