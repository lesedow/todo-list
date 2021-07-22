import UIComponents from './UIComponents.js';

export default function UI(callbacks) {

	const { saveProject } = callbacks;

	const uiComps = new UIComponents();

	const newProjectButton = document.querySelector('.add__project');
	const projectsContainer = document.querySelector('.projects__container');
	const mainContent = document.querySelector('.main');
	const itemsSection = mainContent.querySelector('.items__section');

	const sideNav = document.querySelector('.side__bar');
	const sideNavToggler = document.querySelector('.menu__toggler');

	let isNewButtonActive = false;

	newProjectButton.addEventListener('click', () => {
		if (isNewButtonActive) return;
		isNewButtonActive = true;
		addProjectInput(); 
	});

	sideNavToggler.addEventListener('click', () => {
		sideNav.classList.toggle('hide');
	});

	const loadProjectsOnPageLoad = () => {
	}	

	const addProjectInput = () => {
		const newProjectInput = uiComps.newProjectInputComponent();
		projectsContainer.appendChild(newProjectInput.container);

		const {input, addButton, cancelButton} = newProjectInput.children;
		
		addProjectButtonsHandler(input, addButton, cancelButton, newProjectInput.container);
	}

	const addProjectButtonsHandler = (input, add, cancel, container) => {
		add.addEventListener('click', () => {
			const name = input.value;
			if (name < 1) return;

			saveProject(name);

			projectsContainer.removeChild(container);
			isNewButtonActive = false;

		});
		cancel.addEventListener('click', () => {
			projectsContainer.removeChild(container);
			isNewButtonActive = false;
		});
	}

	const createProject = (project) => {
		const {name, items} = project;
		const newProject = uiComps.newProjectComponent(name);
		const {projectSelect, projectDelete} = newProject.children;

		projectsContainer.appendChild(newProject.container);

		const projectSelectButton = projectSelect.container;
		projectSelectHandler(projectSelectButton, name, items);
	}

	const projectSelectHandler = (button, name, items) => {
		button.addEventListener('click', () => {
			displayProjectContent(name, items);
		});
	}

	const displayProjectContent = (name, items) => {
		const mainTitle = mainContent.querySelector('p');
		const itemElements = itemsSection.querySelectorAll('.item');
		const addButton = mainContent.querySelector('.new__item');

		if (itemElements && addButton) cleanPreviousContent(itemElements, addButton);

		mainTitle.textContent = name;
		if (items.length > 0) {
			items.forEach(item => {
				const newItem = uiComps.newItem(item.title);
				itemsSection.appendChild(newItem.container);
			});
		}

		const addNewItemButton = uiComps.newAddItemButton();
		mainContent.appendChild(addNewItemButton.container);
	}

	const cleanPreviousContent = (itemElements, addButton) => {
		mainContent.removeChild(addButton);
		itemElements.forEach(item => {
			itemsSection.removeChild(item);
		});
	}

	const deleteProject = () => {

	}

	return {createProject}

}