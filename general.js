const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('click', () => {
    const projectName = project.id + '.html';
    window.location.href = projectName;
  });
});

const htmlOverflow = document.documentElement;
const hamburger = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('#mobileMenu');
hamburger.addEventListener('click', () => {
	//add class to menu so it can open // if statement to close
	if (mobileMenu.classList.contains('openMenu')) {
    mobileMenu.classList.remove('openMenu');
		htmlOverflow.classList.remove('menuoverflow');
  } else {
    mobileMenu.classList.add('openMenu');
		htmlOverflow.classList.add('menuoverflow');
  }
});


window.addEventListener('scroll', function() {
  const hideOnScroll = document.getElementById('rightMenu');
	const showOnScroll = document.getElementById('back2Top')
  if (window.scrollY > 1 && window.innerWidth < 1023) {
    hideOnScroll.classList.add('hide');
  } else {
    hideOnScroll.classList.remove('hide');
  }

	if (window.scrollY > 500 ) {
    showOnScroll.classList.add('scrolled');
  } else {
    showOnScroll.classList.remove('scrolled');
  }
});

const backToTop = document.getElementById('back2Top')
backToTop.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

