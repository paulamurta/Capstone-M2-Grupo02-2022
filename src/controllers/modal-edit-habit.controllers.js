//! Ainda preciso terminar de fazer a requisição e entender esse css.
import Api from "../controllers/api.controllers.js";
import Habit from "../models/habit.model.js";
import DeleteModalHabit from "./modal-delete-habit.controllers.js";
import CreateModalHabit from "./modal-create-habit.controllers.js";
import ModalRequest from "./modal-requests.controllers.js";

class EditModalHabit {
	static createModal(habit) {
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
			"modal__button-close modal-edit__button--close",
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
		labelName.setAttribute;

		const inputName = EditModalHabit.createElementModal(
			"input",
			"edit-modal__input input__name"
		);
		inputName.type = "text";
		inputName.name = "habitTitle";

		labelName.setAttribute("for", "habitTitle");
		inputName.id = "habitTitle";
		inputName.value = habit.habit_title;

		const labelDescription = EditModalHabit.createElementModal(
			"label",
			"edit-modal__label label__description",
			"Descrição"
		);

		const inputDescription = EditModalHabit.createElementModal(
			"textarea",
			"edit-modal__input  input__description"
		);
		inputDescription.name = "habitDescription";
		inputDescription.value = habit.habit_description;

		const categoryLabel = EditModalHabit.createElementModal(
			"label",
			"edit-modal__label  label__category",
			"Categoria"
		);
		labelDescription.setAttribute("for", "description");
		inputDescription.id = "description";

		const options = CreateModalHabit.createOptionsDropDown();
		options.classList.add("select__category");

		const status = EditModalHabit.createElementModal(
			"label",
			"edit-modal__label label__status",
			"Status"
		);
		status.setAttribute("for", "status");

		const statusCheck = EditModalHabit.createElementModal(
			"input",
			"edit-modal__check input__status"
		);
		statusCheck.type = "checkbox";
		statusCheck.name = "status";
		statusCheck.id = "status";
		if (habit.habit_status) {
			statusCheck.setAttribute("checked", "true");
			statusCheck.setAttribute("disabled", "true");
		}
		const buttonSave = EditModalHabit.createElementModal(
			"button",
			"modal__button--edit button__save-changes",
			"Salvar alterações"
		);
		buttonSave.type = "submit";

		form.addEventListener("submit", async (event) => {
			event.preventDefault();
			const habitName = document.getElementsByName("habitTitle")[0].value;
			const habitDescription =
				document.getElementsByName("habitDescription")[0].value;
			const habitContent = new Habit(habitName, habitDescription, "saude");
			const statusCheck = document.getElementsByName("status")[0].checked;

			const res = await Api.updateHabit(habit.habit_id, habitContent);
			if (statusCheck) await Api.completeHabit();

			ModalRequest.modalSucess("Seu hábito foi alterado");

			setTimeout(() => {
				document.location.reload(true);
			}, 1000);
		});

		const buttonDelete = EditModalHabit.createElementModal(
			"button",
			"modal__button--edit modal__button-delete",
			"Excluir"
		);

		buttonDelete.addEventListener("click", async (event) => {
			event.preventDefault();
			const modalEdit = document.querySelector(".edit-modal");
			if (modalEdit) modalEdit.remove();
			DeleteModalHabit.createModal(habit.habit_id);
		});

		form.append(
			title,
			labelName,
			inputName,
			labelDescription,
			inputDescription,
			categoryLabel,
			options,
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
}

export default EditModalHabit;
