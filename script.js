const filterList = document.querySelector('.filter');
const filterButtons = filterList.querySelectorAll('.filter-btn');
const conferences = document.querySelectorAll('.conference');

let conferenceIndex = 0;

// This will see each <li> has change position in the height, and since it got individual 'view-transition-name' property.
// it will do animation on individual <li> as well, so it create the collapse | open effect.
conferences.forEach((conference) => {
  // Add like this: <li class="conference" data-category="fullstack" style="view-transition-name: conf-1;">
  conference.style.viewTransitionName = `conf-${++conferenceIndex}`;
});

filterButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const filter = e.target.getAttribute('data-filter');
    // console.log(filter);

    // Add the fall back:
    if (!document.startViewTransition) {
      updateActiveButton(e.target);
      filterConf(filter);
    }

    // Not supported in safari and firefox
    // This add in the fade in | fade out of the page content when you click different button to switch the tab
    // Both the button and the tab and the side bar below (mobile view) will fade in | fade out.
    document.startViewTransition(() => {
      // change the active button
      updateActiveButton(e.target);

      // filter the list
      filterConf(filter);
    });
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
    if (confFilter === 'all' || confFilter === confCategory) {
      // if it matches, show that conf
      conf.removeAttribute('hidden');
    } else {
      // if not, hide that conf
      conf.setAttribute('hidden', '');
    }
  });
}
