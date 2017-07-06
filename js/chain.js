// var affixElement = '#navbar-main';

// $(affixElement).affix({
//   offset: {
//     // Distance of between element and top page
//     top: function () {
//       return (this.top = $(affixElement).offset().top)
//     },
//     // when start #footer 
//     bottom: function () { 
//       return (this.bottom = $('#footer').outerHeight(true))
//     }
//   }
// });

// function(){
//   $('#navId li a').click(function(){
//     $('#navId li').removeClass();
//     $($(this).attr('href')).addClass('active');

//   });

  
  

// }


$('#sidebar').affix({
  offset: {
    top: 50
  }
});