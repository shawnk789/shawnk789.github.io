$(function(){

  function switchImage($img){
    var window_W = $(window).width(),
        suffix,
        src      = $img.attr('src');

    //window幅
    if (window_W >= 769){
      suffix = '_pc';
    } else if (768 >= window_W) {
      suffix = '_sp';
    }

    var check = new RegExp(suffix + '(\\.\\w+)$');

    if(check.test(src)) return;

    var extension = src.match(/\.\w+$/);
    var reg       = src.replace(/_(pc|sp|tb)(\.\w+)$/, suffix + '$2');

    $img.attr('src', reg);

  }

  function setImages(){
    var $img = $('img.respon');
    $img.each(function(index, element){
      switchImage($(element));
    });
  }

  $(window).resize(function() {
    setImages();
  });

  setImages()

});




