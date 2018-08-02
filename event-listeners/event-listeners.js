// YOUR TASK: Add more pictures!
var pictures = ['./imgs/1499767087682.jpg','./imgs/kave+310.jpg'];
var currentIndex = 0;
document.getElementsByTagName("img")[0].addEventListener("click",showNextPicture)
function showNextPicture(event) {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  document.getElementsByTagName("img")[0].src = pictures[currentIndex]
  // YOUR TASK: Finish this function!
}