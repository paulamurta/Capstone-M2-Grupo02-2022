import CreateModalHabit from "./modal-create-habit.controllers.js";
import Api from "./api.controllers.js";
import User from "../models/user.js";

export default class EditModalUser {
	static createModal() {
		const body = document.querySelector("body");

		const modalEditUser = CreateModalHabit.createElementModal(
			"div",
			"editUser-modal"
		);
		body.append(modalEditUser);

		const contentEditUser = CreateModalHabit.createElementModal(
			"div",
			"editUser-modal__content"
		);
		modalEditUser.append(contentEditUser);

		const btnClose = CreateModalHabit.createElementModal(
			"button",
			"modal__button-close",
			"X"
		);
		contentEditUser.append(btnClose);

		btnClose.addEventListener("click", function (event) {
			modalEditUser.remove();
		});

		const formEditUser = CreateModalHabit.createElementModal(
			"form",
			"editUser-modal__form"
		);

		const titleUser = CreateModalHabit.createElementModal(
			"h3",
			"editUser-modal__title",
			"Editar Perfil"
		);

		const labelUserForm = CreateModalHabit.createElementModal(
			"label",
			"editUser-modal__label label__title",
			"Nome"
		);
		const inputUserForm = CreateModalHabit.createElementModal(
			"input",
			"editUser-modal__input input__title"
		);
		inputUserForm.type = "text";
		inputUserForm.placeholder = "Digitar nome";
		inputUserForm.name = "usr_name";

		const labelImageForm = CreateModalHabit.createElementModal(
			"label",
			"editUser-modal__label label__image",
			"URL da imagem do perfil"
		);
		const inputImageForm = CreateModalHabit.createElementModal(
			"input",
			"editUser-modal__input input__image"
		);
		inputImageForm.type = "url";
		inputImageForm.placeholder = " URL da Imagem";
		inputImageForm.name = "usr_image";

		const btnSaveEdit = CreateModalHabit.createElementModal(
			"button",
			"editUser__button",
			"Salvar alterações"
		);
		btnSaveEdit.type = "submit";
		btnSaveEdit.name = "submitButton";

		formEditUser.append(
			titleUser,
			labelUserForm,
			inputUserForm,
			labelImageForm,
			inputImageForm,
			btnSaveEdit
		);
		contentEditUser.append(formEditUser);
		EditModalUser.updateUser();
	}

	static async updateUser() {
		const userName = JSON.parse(
			localStorage.getItem("@habits-kenzie:user")
		).usr_name;
		const userImage = JSON.parse(
			localStorage.getItem("@habits-kenzie:user")
		).usr_image;

		const inputUserName = document.querySelector(".editUser-modal__input");
		inputUserName.value = userName;
		inputUserName.innerText = userName;
		inputUserName.disabled = true;

		const formEditUser = document.querySelector(".editUser-modal__form");
		formEditUser.addEventListener("submit", async (event) => {
			event.preventDefault();

			const formValue = [...event.target];
			const data = {
				usr_image: formValue[1].value,
			};
			const response = await Api.updateProfile(data);
			const infoUser = new User(
				response.usr_email,
				response.usr_name,
				response.usr_image
			);

			localStorage.setItem("@habits-kenzie:user", JSON.stringify(infoUser));
			window.location.reload(true);
		});
	}
}
