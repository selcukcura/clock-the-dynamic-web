// seconds (bounce)

$(document).ready(function () {
    function animateCircle() {
        $('#circle').animate({
            borderTopWidth: 15,
            borderRightWidth: 15,
            borderBottomWidth: 15,
            borderLeftWidth: 15,
			marginTop: 60 // must be less than marginTop in section below to stay in position

        }, 500) //half a second bounce out all 3 totals 1 sec
    
            .animate({
			borderTopWidth: 30,
            borderRightWidth: 30,
            borderBottomWidth: 30,
            borderLeftWidth: 30,
			marginTop: 40

        }, 500, animateCircle); 
    }
    animateCircle(); //loops the function set above
});


//minutes 

var loader = document.getElementById('loader')
  , border = document.getElementById('border')
  , α = 40 // starting point
  , π = Math.PI
  , t = 9600; // duration (160 = second x 60))

(function draw() {
  α++;
  α %= 360; //draws degrees
  var r = ( α * π / 180 )
    , x = Math.sin( r ) * 125
    , y = Math.cos( r ) * - 125
    , mid = ( α > 180 ) ? 1 : 0
    , anim = 'M 0 0 v -125 A 125 125 1 ' 
           + mid + ' 1 ' 
           +  x  + ' ' 
           +  y  + ' z';
  //[x,y].forEach(function( d ){
  //  d = Math.round( d * 1e3 ) / 1e3;
  //});
 
  loader.setAttribute( 'd', anim );
  border.setAttribute( 'd', anim );
  
  setTimeout(draw, t); // Redraw
})();


// hours
// renamed 'α' to 'αb' otherwise starting points stay the same and apply to both

var hourloader = document.getElementById('hourloader')
  , hourborder = document.getElementById('hourborder')
  , αb = 240 // starting point
  , π = Math.PI
  , tb = 160000; // duration (160 = 1 second x 1000)

(function draw() {
  αb++;
  αb %= 360; //draws degrees
  var r = ( αb * π / 180 )
    , x = Math.sin( r ) * 125
    , y = Math.cos( r ) * - 125
    , mid = ( αb > 180 ) ? 1 : 0
    , anim = 'M 0 0 v -125 A 125 125 1 ' 
           + mid + ' 1 ' 
           +  x  + ' ' 
           +  y  + ' z';
  //[x,y].forEach(function( d ){
  //  d = Math.round( d * 1e3 ) / 1e3;
  //});
 
  hourloader.setAttribute( 'd', anim );
  hourborder.setAttribute( 'd', anim );
  
  setTimeout(draw, tb); // Redraw
})();