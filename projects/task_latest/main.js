//For scrolling down

$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
var idArray = [];
//For reusing HTML
$(window).load(function() {
  var html = '<div class="row header">';
  html += '<div class="col-sm-3">';
  html += '<img src="images/people.png" alt="Mountain View"></div>';
  html += '<div class="col-sm-9"> <ul> <div class="row">' ;
  html += '<li><span>First Name</span></li></div>';
  html += '<div class="row"> <li><span>Last Name</span></li> </div>';
  html += '<div class="row"> <li><span>Nummber<span></li> </div>';
  html += '<div class="row"> <li><span>Email</span></li>  </div> </div> </div> ';

//Dynamically adding to each parent

  $('.parent').each(function () {
      var ar = this.id;
      idArray.push(ar);
  });
numberOfParent = idArray.length;
if(numberOfParent != 0) {
  for(var i = 0; i < numberOfParent; i +=1) {
  $('#'+idArray[i]).append(html);
}
}
});
