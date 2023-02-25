const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNames = [
    'images/pic1.jpg',
    'images/pic2.jpg',
    'images/pic3.jpg',
    'images/pic4.jpg',
    'images/pic5.jpg'
]

/* Declaring the alternative text for each image file */
const fileAlt = [
    'Closeup of a human eye',
    'A rock that looks like a wave',
    'Purple and white pansies',
    'Section of wall from a pharoah\'s tomb',
    'Large moth on a leaf'
]

/* Looping through images */
for (var i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', fileNames[i]);
    newImage.setAttribute('alt', fileAlt[i]);
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', newImage.src);
        displayedImage.setAttribute('alt', newImage.alt);
    });
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.getAttribute('class') === 'light') {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Lighten';
        overlay.setAttribute('style', 'background-color: rgba(0, 0, 0, 0.5)');
    } else {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Darken';
        overlay.setAttribute('style', 'background-color: rgba(0, 0, 0, 0)');
    }
});
