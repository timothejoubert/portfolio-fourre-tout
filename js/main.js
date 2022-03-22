
/* menu */
const projects = document.querySelectorAll(".project__item");
const wp = document.querySelector(".wrapper");
const IconCloseModal = document.querySelector(".modal__close");
const IconSettings = document.querySelector(".setting__icon");
const filterWp = document.querySelector(".filter");
const homeWp = document.querySelector("#home");
const ListProjectsWp = document.querySelector(".list__project");

//utils
function setStyles(element, styles) {
	for (const i in styles) element.style[i] = styles[i];
}



//event
projects.forEach(project => {
	project.addEventListener('click', ()=>{
		wp.classList.add('modal--open');
	})
})

IconCloseModal.addEventListener('click', ()=>{
	wp.classList.remove('modal--open');
})

IconSettings.addEventListener('click', ()=>{
	homeWp.classList.toggle('filter--open');
	homeWp.classList.contains('filter--open') ?
		setStyles(ListProjectsWp, {marginTop: filterWp.offsetHeight + "px"}) :
		setStyles(ListProjectsWp, {marginTop: 0})

})
