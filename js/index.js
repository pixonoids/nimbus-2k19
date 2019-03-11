


document.addEventListener('DOMContentLoaded', function() {
    var clubs = document.querySelectorAll('.clubs-con-img');
    var popupBacks = document.querySelectorAll('.popup');
    
    clubs.forEach((club, i)=>{
      club.addEventListener('click', function(){
        popupBacks[i].style.opacity = 1;
        popupBacks[i].style.visibility = 'visible';
      })
    })
    
    var closes = document.querySelectorAll('.popup__close');
    console.log(popupBacks);
    closes.forEach((close, i)=>{
      close.addEventListener('click', function(){
        popupBacks[i].style.opacity = 0;
        popupBacks[i].style.visibility = 'hidden';
      });
    })
    $('.clubs-con-img').each(function(i){
      var row = $(this);
      setTimeout(function() {
        row.css('transform',"translate(0px)");
        row.css('opacity','1');
      }, 500*i)
    });
});


// $('[has-ripple="true"]').click(function () {
// $(this).toggleClass('clicked');
// $('.menu').toggleClass('open');
// });

// $(document).ready()

// $('.menu a').each(function (index) {
// var thismenuItem= $(this);

// thismenuItem.click(function (event) {
//     event.preventDefault();
//     console.log('hey');
    // $('.menuitem-wrapper').eq(index).addClass('spin');
    
    // var timer = setTimeout(function () {
    // $('body').removeAttr('class').addClass('bg-'+index);
    // $('.menuitem-wrapper').eq(index).removeClass('spin');
    // $('.menu').removeClass('open');
    // $('.menu-btn').removeClass('clicked');
    // }, 800);
// });
// });
// $('navigation_icon').click(function(){
//     console.log('hey');
// })