//seconds 

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



// html time

// bouncing seconds

$(document).ready(function () {
    function animateCircle() {
        $('#circle').animate({
            borderTopWidth: 35,
            borderRightWidth: 35,
            borderBottomWidth: 35,
            borderLeftWidth: 35,
        }, 500) //half a second bounce out
            .animate({

			
			borderTopWidth: 25,
            borderRightWidth: 25,
            borderBottomWidth: 25,
            borderLeftWidth: 25,
        }, 500, animateCircle); //half a second bounce in
    }
    animateCircle(); //loops the function set above
});

// current time in text
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();


