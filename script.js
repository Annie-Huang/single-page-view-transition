const filterList = document.querySelector('.filter');
const filterButtons = filterList.querySelectorAll('.filter-btn');
const conferences = document.querySelectorAll('.conference');

filterButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const filter = e.target.getAttribute('data-filter');
    // console.log(filter);

    // change the active button
    updateActiveButton(e.target);

    // filter the list
    filterConf(filter);
  });
});

function updateActiveButton(newButton) {
  // find the previously active button & remove the active class from it
  filterList.querySelector('.active').classList.remove('active');

  // add active class to our new button
  newButton.classList.add('active');
}

function filterConf(confFilter) {
  // get each conference category
  conferences.forEach((conf) => {
    const confCategory = conf.getAttribute('data-category');

    // check if that category matches the filter
    if (confFilter === confCategory) {
      // if it matches, show that conf
      conf.removeAttribute('hidden');
    } else {
      // if not, hide that conf
      conf.setAttribute('hidden', '');
    }
  });
}
