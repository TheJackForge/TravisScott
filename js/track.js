
const rodeoAlbum = document.querySelector('.rodeo-track-listing');
const rodeoToggle = document.querySelector('.album-1-toggle');
const albumHero = document.querySelector('.album-hero');
const albumHeroToggle = document.querySelector('.album-hero-toggle');
const albumHero2 = document.querySelector('.album-hero-2');
const albumHeroToggle2 = document.querySelector('.album-hero-toggle-2');

rodeoToggle.addEventListener('click', () => {
 if (rodeoAlbum.style.display && rodeoAlbum.style.display !== 'none') {
   rodeoAlbum.style.display = 'none';
 } else {
   rodeoAlbum.style.display = 'block';
 }
});

const birdsAlbum = document.querySelector('.birds-track-listing');
const birdsToggle = document.querySelector('.album-2-toggle');

birdsToggle.addEventListener('click', () => {
  if (birdsAlbum.style.display && birdsAlbum.style.display !== 'none') {
    birdsAlbum.style.display = 'none';
  } else {
    birdsAlbum.style.display = 'block';
  }
});

const astroworldAlbum = document.querySelector('.astroworld-track-listing');
const astroworldToggle = document.querySelector('.album-3-toggle');

astroworldToggle.addEventListener('click', () => {
  if (astroworldAlbum.style.display && astroworldAlbum.style.display !== "none") {
    astroworldAlbum.style.display = 'none';
  } else {
    astroworldAlbum.style.display = 'block';
  }
});

const jackboysAlbum = document.querySelector('.jackboys-track-listing');
const jackboysToggle = document.querySelector('.album-4-toggle');

jackboysToggle.addEventListener('click', () => {
  if (jackboysAlbum.style.display && jackboysAlbum.style.display !== 'none') {
    jackboysAlbum.style.display = 'none';
  } else {
    jackboysAlbum.style.display = 'block';
  }
});

const hunchojackAlbum = document.querySelector('.hunchojack-track-listing');
const hunchojackToggle = document.querySelector('.album-5-toggle');

hunchojackToggle.addEventListener('click', () => {
  if (hunchojackAlbum.style.display && hunchojackAlbum.style.display !== 'none') {
    hunchojackAlbum.style.display = 'none';
  } else {
    hunchojackAlbum.style.display = 'block';
  }
});
