


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