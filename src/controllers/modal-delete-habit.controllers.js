import Api from "../controllers/api.controllers.js";
import EditModalHabit from "./modal-edit-habit.controllers.js";
import ModalRequest from "./modal-requests.controllers.js";
import TableHabit from "./table-habits.controllers.js";
class DeleteModalHabit {
	static createModal(id) {
		const body = document.querySelector("body");

		const modalDiv = EditModalHabit.createElementModal("div", "edit-modal");
		body.append(modalDiv);

		const modalDelete = EditModalHabit.createElementModal(
			"div",
			"modal-delete"
		);

		const buttonClose = EditModalHabit.createElementModal(
			"button",
			"modal__button-close",
			"X"
		);
		modalDelete.append(buttonClose);

		buttonClose.addEventListener("click", function (event) {
			modalDiv.remove();
		});

		const modalContent = EditModalHabit.createElementModal(
			"div",
			"modal-delete__content"
		);

		modalDelete.append(modalContent);
		modalDiv.append(modalDelete);

		const title = EditModalHabit.createElementModal(
			"h3",
			"modal-delete__title",
			"Excluir hábito"
		);

		const subtitle = EditModalHabit.createElementModal(
			"h3",
			"modal-delete__subtitle",
			"Certeza que deseja excluir este hábito?"
		);

		const paragraph = EditModalHabit.createElementModal(
			"p",
			"modal-delete__text",
			"Após executar essa ação não será possível desfazer"
		);

		const buttonDelete = EditModalHabit.createElementModal(
			"button",
			"modal__button--edit button__delete-changes",
			"Sim, excluir este hábito"
		);

		buttonDelete.addEventListener("click", async () => {
			Api.deleteHabit(id);
			ModalRequest.modalSucess("Seu hábito foi deletado");

			modalDiv.classList.add("modal--transition-opacity");
			modalContent.classList.add("modal--transition-small");
			const newData = await Api.readAllHabits();
			TableHabit.listHabit(newData);

			setTimeout(() => {
				modalDiv.remove();
			}, 1000);
		});

		const buttonCancel = EditModalHabit.createElementModal(
			"button",
			"modal__button-cancel modal__button--edit",
			"Cancelar"
		);

		buttonCancel.addEventListener("click", function (event) {
			modalDiv.remove();
		});
		modalContent.append(
			title,
			title,
			subtitle,
			paragraph,
			buttonCancel,
			buttonDelete
		);
	}
}
export default DeleteModalHabit;
