/**
 * Created by tkasa on 14/05/2018.
 */
var sliteImages = document.querySelectorAll('.slide');
var arrowLeft = document.querySelector('#arrow-left');
var arrowRight = document.querySelector('#arrow-right');
var current = 0;

//Clear all images
function reset() {
    for(var i=0;i< sliteImages.length; i++){
        sliteImages[i].style.display = 'none';
    }
}
//init slider
function startSlide() {
    reset();
    sliteImages[0].style.display='block';

}
//show prev
function slideLeft() {
    reset();
    sliteImages[current-1].style.display = 'block';
    current --;
}
//show next
function slideRight() {
    reset();
    sliteImages[current+1].style.display = 'block';
    current ++;
}
//left arrow click
arrowLeft.addEventListener('click', function () {
    if(current === 0){
        current = sliteImages.length;
    }
    slideLeft();
});
//Right
arrowRight.addEventListener('click', function () {
    if(current === sliteImages.length-1){
        current = -1;
    }
    slideRight();
});

startSlide();