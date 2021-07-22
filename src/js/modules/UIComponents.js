export default class UIComponents {
	newProjectInputComponent() {
		const inputContainer = document.createElement("div");
		inputContainer.classList.add('new__project');

		const input = document.createElement('input');
		input.classList.add('project__name');

		const addButton = document.createElement('button');
		addButton.classList.add('add');
		addButton.textContent = 'Add';

		const cancelButton = document.createElement('button');
		cancelButton.classList.add('cancel');
		cancelButton.textContent = 'Cancel';

		inputContainer.appendChild(input);
		inputContainer.appendChild(addButton);
		inputContainer.appendChild(cancelButton);

		return {
			container: inputContainer,
			children: {
				input,
				addButton,
				cancelButton
			}
		}
	}

	newProjectComponent(name) {
		const project = document.createElement('div');
		project.classList.add('project');

		const projectSelect = document.createElement('div');
		projectSelect.classList.add('project__select');

		const title = document.createElement('p');
		title.textContent = name;
		projectSelect.appendChild(title);

		const projectDelete = document.createElement('div');
		projectDelete.classList.add('delete');

		const deleteIcon = document.createElement('i');
		deleteIcon.classList.add('bx', 'bx-trash');
		projectDelete.appendChild(deleteIcon);

		project.appendChild(projectSelect);
		project.appendChild(projectDelete);
	
		return {
			container: project,
			children: {
				projectSelect: {
					container: projectSelect,
					title
				},
				projectDelete
			}
		}
	}

	newItem(itemName) {
		const item = document.createElement('div');
		item.classList.add('item');

		const title = document.createElement('p');
		title.classList.add('item__title');
		title.textContent = itemName;

		item.appendChild(title);

		return {
			container: item,
			children: {
				title
			}
		}
	}

	newAddItemButton() {
		const button = document.createElement('button');
		button.classList.add('new__item');

		button.innerHTML = "<i class='bx bx-plus'></i>Add";

		return {
			container: button
		}
	}
}