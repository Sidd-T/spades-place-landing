function handleIconClick(icon) {
  switch(icon) {
    case 'cafe':
      window.open("https://spades-place.netlify.app/", "_blank");
      break;
    case 'blog':
      // Add code for blog action
      console.log('Blog icon clicked');
      break;
    case 'links':
      // Add code for links action
      console.log('Links icon clicked');
      break;
    case 'tutorials':
      // Add code for tutorials action
      console.log('Tutorials icon clicked');
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