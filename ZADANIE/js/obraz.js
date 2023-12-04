function showFullScreenImage(imageSrc) {
    var fullScreenImage = document.getElementById('fullScreenImage');
    var fullScreenImageContent = fullScreenImage.querySelector('img');
    
    fullScreenImageContent.src = imageSrc;
    fullScreenImage.style.display = 'flex';
  }

  function hideFullScreenImage() {
    var fullScreenImage = document.getElementById('fullScreenImage');
    fullScreenImage.style.display = 'none';
  }