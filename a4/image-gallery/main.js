//Name: Javidan Hasanzade
//File: main.js
//Date: April 7, 2025
//Image gallery script file

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const image_list = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

/* Declaring the alternative text for each image file */
const image_alts = {
    'pic1.jpg' : 'Closeup of a human eye',
    'pic2.jpg' : 'Rock that looks like a wave',
    'pic3.jpg' : 'Purple and white pansies',
    'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
    'pic5.jpg' : 'Large moth on a leaf'
}

/* Looping through images */
for (const image of image_list) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', image_alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', clicked_img => {
      displayedImage.src = clicked_img.target.src;
      displayedImage.alt = clicked_img.target.alt;
    });
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    //Getting class value of btn
    const btn_class = btn.getAttribute('class');
    if (btn_class === 'dark') { //btn class is dark
      //updating button to lighten
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      //applying a darker overlay
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else { //btn class is light
      //updating button to dark
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      //applying a lighter overlay
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });