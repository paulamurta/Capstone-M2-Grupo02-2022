//! Ainda preciso terminar de fazer a requisição e entender esse css.
class EditModalHabit {
	static createModal() {
		const body = document.querySelector("body");

		const modalDiv = EditModalHabit.createElementModal("div", "edit-modal");
		body.append(modalDiv);

		const modalContent = EditModalHabit.createElementModal(
			"div",
			"edit-modal__content"
		);
		modalDiv.append(modalContent);

		const buttonClose = EditModalHabit.createElementModal(
			"button",
			"modal__button-close",
			"X"
		);
		modalContent.append(buttonClose);

		buttonClose.addEventListener("click", function (event) {
			modalDiv.remove();
		});

		const form = EditModalHabit.createElementModal("form", "edit-modal__form");

		const title = EditModalHabit.createElementModal(
			"h3",
			"edit-modal__title",
			"Editar hábito"
		);

		const labelName = EditModalHabit.createElementModal(
			"label",
			"edit-modal__label label__name",
			"Título"
		);

		const inputName = EditModalHabit.createElementModal(
			"input",
			"edit-modal__input input__name"
		);
		inputName.type = "text";

		const labelDescription = EditModalHabit.createElementModal(
			"label",
			"edit-modal__label label__description",
			"Descrição"
		);

		const inputDescription = EditModalHabit.createElementModal(
			"input",
			"edit-modal__input  input__description"
		);
		inputDescription.type = "text";

		const categoryLabel = EditModalHabit.createElementModal(
			"label",
			"edit-modal__label  label__category",
			"Categoria"
		);

		const categorySelect = EditModalHabit.createElementModal(
			"select",
			"edit-modal__select select__category"
		);

		const options = [
			["Casa", "fa-solid fa-user"],
			["Estudo", "../assets/study.png"],
			["Lazer", "../assets/hobby.png"],
			["Trabalho", "../assets/work.png"],
			["Saúde", "../assets/health.png"],
		];

		options.forEach((option) => {
			const optionElement = EditModalHabit.createElementModal(
				"option",
				"edit-modal__option",
				option[0]
			);

			categorySelect.append(optionElement);
		});

		const status = EditModalHabit.createElementModal(
			"label",
			"edit-modal__label label__status",
			"Status"
		);
		status.setAttribute("for", "status");
		status.id = "status";
		status.name = "status";

		const statusCheck = EditModalHabit.createElementModal(
			"input",
			"edit-modal__check input__status"
		);
		statusCheck.type = "checkbox";

		const buttonSave = EditModalHabit.createElementModal(
			"button",
			"modal__button button__save-changes",
			"Salvar alterações"
		);
		buttonSave.type = "submit";
		buttonSave.addEventListener("submit", function (event) {
			//salvar alterações de edição, e listar novamente as tarefas
		});

		const buttonDelete = EditModalHabit.createElementModal(
			"button",
			"modal__button button__delete-changes",
			"Excluir"
		);
		buttonDelete.addEventListener("click", function (event) {
			//deletar na API o post, e listar novamente as tarefas
		});

		form.append(
			title,
			labelName,
			inputName,
			labelDescription,
			inputDescription,
			categoryLabel,
			categorySelect,
			status,
			statusCheck,
			buttonDelete,
			buttonSave
		);

		modalContent.append(form);
	}

	static createElementModal(elem, className, innerText = "") {
		const element = document.createElement(elem);
		element.className = className;
		if (innerText) element.innerText = innerText;
		return element;
	}

	static createEventModal() {
		const modalButton = EditModalHabit.createModal();
		modalButton.addEventListener("click", EditModalHabit.removeModal);
		return;
	}
}

export default EditModalHabit;
