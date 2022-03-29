
/* menu */
const projects = document.querySelectorAll(".project__item");
const wp = document.querySelector(".wrapper");
const IconCloseModal = document.querySelector(".modal__close");
const modalProject = document.querySelector("#modal");
const modalProjectChilds = document.querySelectorAll("#modal > *");
const IconSettings = document.querySelector(".setting__icon");
const filterWp = document.querySelector(".filter");
const homeWp = document.querySelector("#home");
const ListProjectsWp = document.querySelector(".list__project");
const footer = document.querySelector("footer");
const titleFooter = footer.querySelector(".name");
const btnsColor = document.querySelectorAll(".btn--color input");
const resetBtn = document.querySelector("#reset--btn");
const sliderGrid = document.querySelector("#slider--size");


//utils
function setStyles(element, styles) {
	for (const i in styles) element.style[i] = styles[i];
}
function getCssProp(propName){
	return getComputedStyle(document.documentElement).getPropertyValue(propName);
}
function setCssProp(propName, value){
	return document.documentElement.style.setProperty(propName, value);
}


function changeColorTheme(e){
	setCssProp(e.target.getAttribute('data-var-color'), e.target.value)
}
function changeGridSize(e){
	setCssProp('--size-card', e.target.value + 'px')
}

function switchProject(){
	let delay = 500;
	//delay depend of scrollPosition
	// if no scroll => no delay
	modalProject.scrollTo({top: 0, behavior: "smooth"})
	window.setTimeout(() => {
		modalProjectChilds.forEach((childsNode, i) => {
			childsNode.style.animation = `switchProject ${getCssProp("--transi-max")} ${i * 20}ms ease-in-out`;
		})
	}, delay);

}
function removeStyle(){
	console.log('animation end');
	this.setAttribute('style', '');
}
modalProjectChilds.forEach((childsNode, i) => {
	childsNode.addEventListener("animationend", removeStyle);
	childsNode.addEventListener("webkitAnimationEnd", removeStyle);
});

//////////////////// EVENT

// Open Modal project
projects.forEach(project => {
	project.addEventListener('click', () => {
		// need check if project clicked is current projectModal display
		wp.classList.contains('modal--open') && switchProject();
		wp.classList.add('modal--open');
	})
})

// Close Modal project
IconCloseModal.addEventListener('click', ()=>{
	wp.classList.remove('modal--open');
	modalProject.classList.remove('switch--project');
})


// Toggle filter
IconSettings.addEventListener('click', ()=>{
	homeWp.classList.toggle('filter--open');
	homeWp.classList.contains('filter--open') ?
		setStyles(ListProjectsWp, {marginTop: filterWp.offsetHeight + "px"}) :
		setStyles(ListProjectsWp, {marginTop: 0})
})

//filters events
const starterColors = {
	'--dark-color': "#131212",
	'--light-color': "#DBE6EC",
	'--accent-color': "#E3FD41",
}
btnsColor.forEach(btn => {
	btn.addEventListener('input', changeColorTheme)
});
resetBtn.addEventListener('click', () => {
	for(let color in starterColors){
		console.log(color)
		setCssProp(color, starterColors[color]);
	}
})
sliderGrid.addEventListener('input', changeGridSize)


// Hover Footer
let TitleFooter = ['Timothé Joubert', 'En savoir plus']
footer.addEventListener("mouseenter", swapTitleFooter, false);
footer.addEventListener("mouseleave", swapTitleFooter, false);
function swapTitleFooter(){
	titleFooter.innerHTML === TitleFooter[0] ? titleFooter.innerHTML = TitleFooter[1] : titleFooter.innerHTML = TitleFooter[0];
}