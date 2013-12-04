// seconds (bounce)


$(document).ready(function () {
    function animateCircle() {
        $('#circle').animate({
            borderTopWidth: 15,
            borderRightWidth: 15,
            borderBottomWidth: 15,
            borderLeftWidth: 15,
			marginTop: 60 // must be more than marginTop in section below to stay in position

        }, 500) //half a second bounce out 
    
            .animate({
			borderTopWidth: 30,
            borderRightWidth: 30,
            borderBottomWidth: 30,
            borderLeftWidth: 30,
			marginTop: 40

        }, 500, animateCircle); 
    }
    animateCircle(); //loops the function set above to tick every second
});


//minutes 

var loader = document.getElementById('loader')
  , border = document.getElementById('border')
  , α = 40 // starting point for demo
  , π = Math.PI
  , t = 9600; //  duration (160 = second x 60) ticks every 10 secs)

(function draw() {
 var date = new Date();
  α = date.getMinutes() * 6;
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
  , αb = 240 // starting point for demo
  , π = Math.PI
  , tb = 576000; // duration (160 = second x 60 x 9600 ) ticks every hour)

(function draw() {
 var date = new Date();
  // 24-hr version - hours from 0 - 23 (24 hrs)
  // αb = date.getHours()/23 * 360;
  
  // 12 hr version - hours from 0 - 11 (12 hrs)
  αb = (date.getHours() % 12)/11 * 360;
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