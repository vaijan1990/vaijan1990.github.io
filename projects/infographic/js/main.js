new WOW().init();
// Variables declaration
var $spanElement;
var $paraElement;

$(document).ready(function(){
  //Toggling the circle element
$('circle').each(function() {
$(this).hide(1000);
$(this).show(3000);

$(this).hover(function(){
  // console.log($(this));
  $( this ).toggle( "clip" );
});

});
// Header name and role
$("h3, .fancy").delay(2000).animate({
    width: "55%",
     opacity: 0.4,
     marginLeft: "2%",
     fontSize: "200%",
     borderWidth: "10px"
   }, 1500 );
});

// Summary section

function toggleContextOnHover($spanElement, $paraElement) {
  // console.log($spanElement);
  // console.log($paraElement);
    $($spanElement).hide();
    $($paraElement).css("visibility", "visible");
}

function toggleContextMouseLeave($spanElement, $paraElement){
  $($spanElement).show();
  $($paraElement).css("visibility", "hidden");
}

$(".summary").hover(function() {
  var $summaryParent = $(this);
  $spanElement = $summaryParent.children()[1];
  $paraElement = $summaryParent.children()[2];  
  // console.log($paraElement);
  // console.log($spanElement);
  //Function call
toggleContextOnHover($spanElement, $paraElement);
}).mouseleave(function(){
    toggleContextMouseLeave($spanElement, $paraElement);
});

// //Ceritification section
// $(".certification").hover(function() {
//  var imageElement =  $(this).children()[1];
//  console.log(imageElement);
//   $(imageElement).attr("src", "images/ocjp.jpg");
// });

//Start function
// $("#start").click(function(){
//   var start = $(this)
//   var position = start.position();
//   var positionTop = position.top;
//
//   for(var i=0; i<10; i++){
//       positionTop += 3;
//   }
//   console.log(positionTop);
//     if(positionTop<200){
//   start.parent().css({position: 'relative'});
//   start.css({top: positionTop, position:'absolute'});
// }
// });
