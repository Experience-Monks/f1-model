var test = require( 'tape' );
var f1Model = require( './..' )[ 0 ];

test( 'copying values', function( t ) {

  t.plan( 2 );

  var into1 = {};
  var into2 = { x: 0, y: { z: 0 } };
  var from = { x: 33, y: { z: 333 } };

  f1Model( into1, from );
  f1Model( into2, from );

  t.deepEqual( into1, from, 'copied without props' );
  t.deepEqual( into2, from, 'copied with props' );
});