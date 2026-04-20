function handleIconClick(icon) {
  switch(icon) {
    case 'cafe':
      window.open("https://spades-place.netlify.app/", "_blank");
      break;
    case 'portfolio':
      window.open("https://portfolio-n510.vercel.app/", "_blank");
      break;
    default:
      console.log('Unknown icon clicked');
  }
}

// Toggle toast visibility
function toggleToast() {
  const toast = document.getElementById('bouncing-toast');
  const button = document.getElementById('toggle-toast-btn');

  if (toast.style.display === 'none') {
    toast.style.display = 'block';
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
  } else {
    toast.style.display = 'none';
    button.classList.remove('active');
    button.setAttribute('aria-pressed', 'false');
  }
}

// Zoom effect on load
document.addEventListener('DOMContentLoaded', function() {
  const bgOverlay = document.querySelector('.bg-overlay');
  const enterOverlay = document.getElementById('enter-overlay');
  const enterText = document.getElementById('enter-text');

  // On click enter, zoom out
  enterText.addEventListener('click', function() {
    bgOverlay.style.transform = 'scale(1)';
    bgOverlay.style.transformOrigin = 'center center';
    enterOverlay.style.display = 'none';
  });
});