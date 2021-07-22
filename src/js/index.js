import { Project, ProjectItem } from './modules/project.js';
import UI from './modules/newUI.js';

const ui = new UI({
	saveProject
});

let totalProjects = [];

function saveProject(name) {
	const project = new Project(name);

	const newItem = new ProjectItem({
		title: "Default Item",
		dueDate: "21/01/2022",
		priority: "low"
	});

	project.addItem(newItem);
	
	const container = ui.createProject(project);
	project.container = container;

	totalProjects.push(project);
}

function removeProject(container) {
	totalProjects.forEach(project => {
		if (project.container === container) {
			const index = totalProjects.indexOf(project);
			totalProjects.splice(index, 1);
		}
	})
}

function saveItem() {

}

function removeItem() {

}

function getProjectItems(container) {
	totalProjects.forEach(project => {
		if (project.container === container) {
			ui.displayProject(project.name, project.items)
		}
	})
}