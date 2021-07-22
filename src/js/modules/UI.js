import UIComponents from './UIComponents.js';

export default function UI(callbacks) {
	const uiComps = new UIComponents();
	const { saveProject, removeProject, saveItem, removeItem, getProjectItems } = callbacks;

	const newProjectButton = document.querySelector('.add__project');
	const projectsContainer = document.querySelector('.projects__container');
	const main = document.querySelector('.main');
	const mainTitle = main.querySelector('p');
	const itemsSection = document.querySelector('.items__section');

	let isAddButtonPressed = false;
	let currentlyActive;

	const addProjectInput = () => {
		if (isAddButtonPressed) return;
		isAddButtonPressed = true;

		const newProjectInput = uiComps.newProjectInputComponent();
		projectsContainer.appendChild(newProjectInput.container);
		const {input, addButton, cancelButton} = newProjectInput.children;

		cancelButton.addEventListener('click', () => {
			projectsContainer.removeChild(newProjectInput.container);
			isAddButtonPressed = false;
		});	

		addButton.addEventListener('click', () => {
			if (!input.value.length > 0) return;

			isAddButtonPressed = false;
			projectsContainer.removeChild(newProjectInput.container);
			saveProject(input.value);

		});
	}

	const createNewProject = ({name}) => {
		const createdProject = uiComps.newProjectComponent();
		const projects = projectsContainer.querySelector('.projects'); 
		projects.appendChild(createdProject.container);

		const {projectSelect, projectDelete} = createdProject.children;
		
		projectSelect.title.textContent = name;

		projectDelete.addEventListener('click', () => {
			projects.removeChild(createdProject.container);
			removeProject(createdProject.container);
		});

		projectSelect.container.addEventListener('click', (e) => {
			if (currentlyActive != undefined && currentlyActive != projectSelect.container) {
				currentlyActive.classList.remove('active');
			}

			if (currentlyActive == projectSelect.container) return; 

			currentlyActive = projectSelect.container;
			projectSelect.container.classList.add('active');

			//displayProject(name, createdProject.container);
			getProjectItems(createdProject.container)

		});

		return createdProject.container;

	}

	const displayProject = (projectName, items) => {
		mainTitle.textContent = projectName;
		if (!items.length < 1) {
			items.forEach(item => {
				const newItem = uiComps.newItem();
				itemsSection.appendChild(newItem.container);

				const { title } = newItem.children;
				title.textContent = item.title;
			});
		}

		const addItemButton = uiComps.newAddItemButton();
		main.appendChild(addItemButton.container);
	}

	const updateDisplay = () => {

	} 

	const createNewItem = () => {

	}

	newProjectButton.addEventListener('click', addProjectInput);

	return {createNewProject, displayProject};
}