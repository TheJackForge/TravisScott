
const wishContent = document.querySelector('.wish');
const wishToggle = document.querySelector('.wish-toggle');

wishToggle.addEventListener('mouseenter', () => {
  wishContent.style.color = '#53ba43';
  wishContent.style.filter = 'blur(4px)';
});

const youContent = document.querySelector('.you');
const youToggle = document.querySelector('.you-toggle');

youToggle.addEventListener('mouseenter', () => {
  youContent.style.color = '#e44f98';
  youContent.style.filter = 'blur(4px)';
});

const wereContent = document.querySelector('.were');
const wereToggle = document.querySelector('.were-toggle');

wereToggle.addEventListener('mouseenter', () => {
  wereContent.style.color = '#53ba43';
  wereContent.style.filter = 'blur(4px)';
});

const hereContent = document.querySelector('.here');
const hereToggle = document.querySelector('.here-toggle');

hereToggle.addEventListener('mouseenter', () => {
  hereContent.style.color = '#e44f98';
  hereContent.style.filter = 'blur(4px)';
});

wishToggle.addEventListener('click', () => {
  wishContent.style.color = 'white';
  wishContent.style.filter = 'blur(0px)';
});

youToggle.addEventListener('click', () => {
  youContent.style.color = 'white';
  youContent.style.filter = 'blur(0px)';
});

wereToggle.addEventListener('click', () => {
  wereContent.style.color = 'white';
  wereContent.style.filter = 'blur(0px)';
});

hereToggle.addEventListener('click', () => {
  hereContent.style.color = 'white';
  hereContent.style.filter = 'blur(0px)';
});
