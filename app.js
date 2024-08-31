document.addEventListener('DOMContentLoaded', function() {
  const btnGrid = document.getElementById('btn_grid');
  const btnSquare = document.getElementById('btn_square');
  const mainContainer = document.getElementById('main-container');
  const secondContainer = document.getElementById('second-container');

  btnGrid.addEventListener('click', function() {
    btnGrid.classList.add('text-primary');
    btnSquare.classList.remove('text-primary');
    mainContainer.style.display = 'none';
    secondContainer.style.display = 'block';
  });

  btnSquare.addEventListener('click', function() {
    btnSquare.classList.add('text-primary');
    btnGrid.classList.remove('text-primary');
    mainContainer.style.display = 'block';
    secondContainer.style.display = 'none';
  });
});