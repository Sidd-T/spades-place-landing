let x = 0,
  y = 0,
  dirX = 1,
  dirY = 1;
const speed = 2;
let toast = document.getElementById("bouncing-toast");

const toastWidth = toast.clientWidth;
const toastHeight = toast.clientHeight;

const effectiveWidth = 64;  
const effectiveHeight = 64; 

const offsetX = (toastWidth - effectiveWidth) / 2;
const offsetY = (toastHeight - effectiveHeight) / 2;

function animate() {
  const screenHeight = window.innerHeight;  
  const screenWidth = window.innerWidth; 

  if (y + offsetY + effectiveHeight >= screenHeight || y + offsetY < 0) {
    dirY *= -1;
  }
  if (x + offsetX + effectiveWidth >= screenWidth || x + offsetX < 0) {
    dirX *= -1;
  }
  x += dirX * speed;
  y += dirY * speed;
  toast.style.left = x + "px";
  toast.style.top = y + "px";
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);