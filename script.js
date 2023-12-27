const filterList = document.querySelector('.filter');
const filterButtons = filterList.querySelectorAll('.filter-btn');
const conferences = document.querySelectorAll('.conference');

filterButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // change the active button
    updateActiveButton(e.target);

    // filter the list
    // filterEvents();
  });
});

function updateActiveButton(newButton) {
  // find the previously active button & remove the active class from it
  filterList.querySelector('.active').classList.remove('active');

  // add active class to our new button
  newButton.classList.add('active');
}
