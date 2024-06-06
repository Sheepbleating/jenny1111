function displayFinalImage() {
    var finalImage = document.createElement('img');
    finalImage.src = '20.jpg';
    finalImage.width = '60%';
    finalImage.alt = '';
    
    var footer = document.getElementById('footer');
    footer.appendChild(finalImage);
}
// JavaScript Document