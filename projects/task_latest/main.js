//Declarations
var idArray = [];

//For smooth scrolling down function
$(function() {
    $('body').on('click', 'a', function(event) {
        var $anchor = $(this);
      event.preventDefault();
        $('html, body').animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
    });
});

//For reusing HTML block
$(window).load(function() {
  var html = '<div class="row header">';
  html += '<div class="col-md-3">';
  html += '<img src="images/people.png" alt="Mountain View"></div>';
  html += '<div class="col-md-9"> <ul> <div class="row">' ;
  html += '<li><span>First Name</span></li></div>';
  html += '<div class="row"> <li><span>Last Name</span></li> </div>';
  html += '<div class="row"> <li><span>+46(0)8244220<span></li> </div>';
  html += '<div class="row"> <li><span>support@medinet.se</span></li>  </div> </div> </div> ';

//Dynamically adding to each parent
  $('.parent').each(function () {
      var ar = this.id;
      idArray.push(ar);
  });
numberOfParent = idArray.length;
if(numberOfParent != 0) {
  for(var i = 0; i < numberOfParent; i +=1) {
    $('#'+idArray[i]).append(html);

// Resizing the header under each parent depending on the width.
// Note: The formula can be altered based on height of parent or combination of both depending on application requirement
    var width = .05 * $('#'+idArray[i]).width();
    $('#'+idArray[i]).css('font-size', width+"px" );

    // while( $('#'+idArray[1]).find(".header").height() > 60 ){
    //     console.log($('#'+idArray[1]).find(".header").height());
    //      console.log($('#'+idArray[1]).height()*0.2);
    //      $('#'+idArray[1]).find(".header").css('font-size', (parseInt($('#'+idArray[1]).find(".header").css('font-size')) - 1) + "px" );
    //     //  $('#'+idArray[1]).find("img").css('width', (parseInt($('#'+idArray[1]).find("img").css('width')) - 5) + "%" );
    //      console.log($('#'+idArray[1]).find(".header").height());
    //      console.log($('#'+idArray[1]).find(".header").css('font-size'));
    //     //  console.log((parseInt($('#'+idArray[1]).find("img").css('width')) - 1) + "%" );
    //   }
    }
  }
});
