export class Project {
	constructor(name) {
		this.name = name;
		this.items = [];
	}

	addItem(item) {
		this.items.push(item);
	}
}

export class ProjectItem {
	constructor(projectInfo) {
		const {title, dueDate, priority} = projectInfo;
		this.title = title;
		this.dueDate = dueDate;
		this.priority = priority;
	}
}