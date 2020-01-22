const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';//увеличенное изображение
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
const HIDDEN_DETAIL_CLASS = 'hidden-detail';
const ESC_KEY = 27;
const DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
const TINY_EFFECT_CLASS = 'is-tiny';
let firstThumbnail = document.querySelector(THUMBNAIL_LINK_SELECTOR);

function setDetails(imageUrl, titleText) {
  let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);
  detailTitle.textContent = titleText;
}
function imageFromThumb(thumbnail){
  return thumbnail.getAttribute('data-image-url');
}
function titleFromThumb(thumbnail){
  return thumbnail.getAttribute('data-image-title');
}
function setDetailsFromThumb(thumbnail) {
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}
function addThumbClickHandler(thumb){
  thumb.addEventListener('click', function(event){
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();``
  })
}
function getThumbnailsArray(){
  let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  let thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function hideDetails(){
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}
function showDetails(){
  let frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function(){
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 100);
  
}

function addKeyPressHandler(){
    document.body.addEventListener('keyup', function(event){
    event.preventDefault();
    console.log(event.keyCode);
      if(event.keyCode === ESC_KEY){
        hideDetails();
      }
  });
}

function initializeEvents() {
  let thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}
initializeEvents();
