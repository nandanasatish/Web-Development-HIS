var slideIndex = 1;
// showSlides(slideIndex);

function navSlides(n) {
  // console.log("Slide Index inside pluside fn:"+ slideIndex)
  showSlides(slideIndex += 1);
  // showSlides();
}

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
// function galleryDisplay(imgs) {
//   // var expClass = document.getElementsByClassName("mySlides");
//   var fullImage = expClass.getElementById("fullImage");
//   var imgDescr = expClass.getElementById("imgDescr");
//   fullImage.src = imgs.src;
//   imgDescr.innerHTML = imgs.alt;
//   fullImage.parentElement.style.display = "block";
// }
function galleryDisplay(imgs) {
  var fullImage = document.getElementById("fullImage");
  var imgDescr = document.getElementById("imgDescr");
  fullImage.src = imgs.src;
  imgDescr.innerHTML = imgs.alt;
  fullImage.parentElement.style.display = "block";
  var source = imgs.src;
  var filename = source.replace(/^.*[\\\/]/, '');
  var result = filename.replace(/\D/g,'');
  slideIndex = parseInt(result);
}

function showSlides(n) {
  var i;
  // let slides = document.getElementsByClassName("mySlides");
  var galleryImgClass = document.getElementsByClassName("galleryImg");
  // let slideIndex = galleryImgClass.length;
  var eImg = document.getElementById("fullImage");
  var num = document.getElementById("imgDescr");
  // let captionText = document.getElementById("caption");

  if (n > galleryImgClass.length) {
    slideIndex = 1
  }
  if (n < 1) {slideIndex = galleryImgClass.length}

  for (i = 0; i < galleryImgClass.length; i++) {
    eImg.parentElement.style.display = "none";
  }
  // for (i = 0; i < galleryImgClass.length; i++) {
  //   galleryImgClass[i].className = galleryImgClass[i].className.replace(" active", "");
  // }
  // slides[slideIndex-1].style.display = "block";
  // galleryImgClass[slideIndex-1].className += " active";
  eImg.parentElement.style.display = "block";
  eImg.setAttribute("src",galleryImgClass[slideIndex-1].src)
  // eImg.src = galleryImgClass[slideIndex-1].src;
  num.innerHTML = galleryImgClass[slideIndex-1].alt;
  captionText.innerHTML = galleryImgClass[slideIndex-1].alt;

}
