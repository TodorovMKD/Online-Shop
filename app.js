const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

leftButton.addEventListener('click', function() {
  leftButton.style.backgroundColor = 'orange';
  rightButton.style.backgroundColor = 'black';
});

rightButton.addEventListener('click', function() {
  leftButton.style.backgroundColor = 'black';
  rightButton.style.backgroundColor = 'orange';
});
