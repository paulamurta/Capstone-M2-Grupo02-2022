import Api from "./api.controllers.js";
import ModalRequest from "./modal-requests.controllers.js";

export default class CreateModalHabit {
	static createModal() {
		const body = document.querySelector("body");

		const modalCreate = CreateModalHabit.createElementModal(
			"div",
			"create-modal"
		);
		body.append(modalCreate);

		const contentCreate = CreateModalHabit.createElementModal(
			"div",
			"create-modal__content"
		);
		modalCreate.append(contentCreate);

		const btnClose = CreateModalHabit.createElementModal(
			"button",
			"modal__button-close",
			"X"
		);
		contentCreate.append(btnClose);

		btnClose.addEventListener("click", function (event) {
			modalCreate.remove();
		});

		const formCreate = CreateModalHabit.createElementModal(
			"form",
			"create-modal__form"
		);
		const titleForm = CreateModalHabit.createElementModal(
			"h3",
			"create-modal__title",
			"Criar Hábito"
		);

		const labelTitleForm = CreateModalHabit.createElementModal(
			"label",
			"create-modal__label label__title",
			"Título"
		);
		const inputTitleForm = CreateModalHabit.createElementModal(
			"input",
			"create-modal__input input__title"
		);
		inputTitleForm.type = "text";
		inputTitleForm.placeholder = "Digitar título";
		inputTitleForm.name = "habit_title";

		const labelDescriptionForm = CreateModalHabit.createElementModal(
			"label",
			"create-modal__label label__description",
			"Descrição"
		);
		const inputDescriptionForm = CreateModalHabit.createElementModal(
			"input",
			"create-modal__input input__description"
		);
		inputDescriptionForm.type = "text";
		inputDescriptionForm.placeholder = "Digitar descrição";
		inputDescriptionForm.name = "habit_description";

		const labelCategoryForm = CreateModalHabit.createElementModal(
			"label",
			"create-modal__label label_category",
			"Categoria"
		);
		const divDropdown = this.createOptionsDropDown();

		const btnSave = CreateModalHabit.createElementModal(
			"button",
			"modal__button",
			"Inserir"
		);
		btnSave.type = "submit";
		btnSave.name = "submitBtn";
		// btnSave.addEventListener("click", async (event) => {
		// 	event.preventDefault();
		// 	const response = await Api.createHabit(data);
		// 	const formValues = [...event.target.form];
		// 	const data = {};

		// 	formValues.forEach((input) => {
		// 		if (input.value != "") {
		// 			data[input.name] = input.value;
		// 		}
		// 	});
		// 	console.log(data.habit_category);
		// 	data.habit_category = data.habit_category.toLowerCase().replace("ú", "u");
		// 	response.message === "habit_category obrigatório"
		// 		? setTimeout(() => {
		// 				ModalRequest.modalError("Você deve selecionar alguma categoria");
		// 		  }, 1000)
		// 		: (window.location.reload(true),
		// 		  setTimeout(() => {
		// 				ModalRequest.modalSucess("Seu hábito foi alterado");
		// 		  }, 1000));
		// });
		formCreate.append(
			titleForm,
			labelTitleForm,
			inputTitleForm,
			labelDescriptionForm,
			inputDescriptionForm,
			labelCategoryForm,
			divDropdown,
			btnSave
		);
		contentCreate.append(formCreate);

		CreateModalHabit.createNewHabit();
	}

	static createElementModal(elem, className, innerText = "") {
		const element = document.createElement(elem);
		element.className = className;
		if (innerText) element.innerText = innerText;
		return element;
	}

	static createOptionsDropDown() {
		const divDropdown = CreateModalHabit.createElementModal(
			"div",
			"create-modal__div"
		);
		const spanDropdown = CreateModalHabit.createElementModal(
			"span",
			"create-modal__span",
			"Selecione a categoria"
		);
		const ulDropdown = CreateModalHabit.createElementModal(
			"ul",
			"create-modal__ul"
		);
		const inputDropdown = CreateModalHabit.createElementModal(
			"input",
			"create-modal__input input__dropdown"
		);
		inputDropdown.type = "hidden";
		inputDropdown.name = "habit_category";

		const liWork = CreateModalHabit.createElementModal(
			"li",
			"create-modal__li"
		);
		const spanWork = CreateModalHabit.createElementModal(
			"span",
			"create-modal-li__span",
			"Trabalho"
		);
		const imgWork = CreateModalHabit.createElementModal(
			"img",
			"create-modal__img"
		);
		imgWork.src = "../assets/work.png";

		const liHome = CreateModalHabit.createElementModal(
			"li",
			"create-modal__li"
		);
		const spanHome = CreateModalHabit.createElementModal(
			"span",
			"create-modal-li__span",
			"Casa"
		);
		const imgHome = CreateModalHabit.createElementModal(
			"img",
			"create-modal__img"
		);
		imgHome.src = "../assets/user.png";

		const liStudy = CreateModalHabit.createElementModal(
			"li",
			"create-modal__li"
		);
		const spanStudy = CreateModalHabit.createElementModal(
			"span",
			"create-modal-li__span",
			"Estudos"
		);
		const imgStudy = CreateModalHabit.createElementModal(
			"img",
			"create-modal__img"
		);
		imgStudy.src = "../assets/study.png";

		const liHobby = CreateModalHabit.createElementModal(
			"li",
			"create-modal__li"
		);
		const spanHooby = CreateModalHabit.createElementModal(
			"span",
			"create-modal-li__span",
			"Lazer"
		);
		const imgHobby = CreateModalHabit.createElementModal(
			"img",
			"create-modal__img"
		);
		imgHobby.src = "../assets/hobby.png";

		const liHealth = CreateModalHabit.createElementModal(
			"li",
			"create-modal__li"
		);
		const spanHealth = CreateModalHabit.createElementModal(
			"span",
			"create-modal-li__span",
			"Saúde"
		);
		const imgHealth = CreateModalHabit.createElementModal(
			"img",
			"create-modal__img"
		);
		imgHealth.src = "../assets/health.png";

		liWork.append(imgWork, spanWork);
		liHome.append(imgHome, spanHome);
		liStudy.append(imgStudy, spanStudy);
		liHobby.append(imgHobby, spanHooby);
		liHealth.append(imgHealth, spanHealth);

		inputDropdown.name = "habit_category";
		liWork.addEventListener("click", () => {
			spanDropdown.innerText = liWork.innerText;
			inputDropdown.value = spanDropdown.innerText;
		});

		liHome.addEventListener("click", () => {
			spanDropdown.innerText = liHome.innerText;
			inputDropdown.value = spanDropdown.innerText;
		});

		liStudy.addEventListener("click", () => {
			spanDropdown.innerText = liStudy.innerText;

			inputDropdown.value = spanDropdown.innerText;
		});

		liHobby.addEventListener("click", () => {
			spanDropdown.innerText = liHobby.innerText;
			inputDropdown.value = spanDropdown.innerText;
		});

		liHealth.addEventListener("click", () => {
			spanDropdown.innerText = liHealth.innerText;
			inputDropdown.value = spanDropdown.innerText;
		});

		ulDropdown.append(liHome, liStudy, liHobby, liWork, liHealth);
		divDropdown.append(inputDropdown, spanDropdown, ulDropdown);

		return divDropdown;
	}
	static createNewHabit() {
		const buttonInsert = document.querySelector(".modal__button");
		buttonInsert.addEventListener("click", async (event) => {
			event.preventDefault();
			const formValues = [...event.target.form];
			const data = {};

			formValues.forEach((input) => {
				if (input.value != "") {
					data[input.name] = input.value;
				}
			});
			const modalCreate = document.querySelector(".create-modal");
			const response = await Api.createHabit(data);

			if (data.habit_category !== undefined) {
				data.habit_category = data.habit_category
					.toLowerCase()
					.replace("ú", "u");
			}

			if (
				response.message === "habit_category obrigatório" ||
				response.message === "habit_title obrigatório" ||
				response.message === "habit_description obrigatório"
			) {
				ModalRequest.modalError("Você deve informar todos os campos");
			} else {
				ModalRequest.modalSucess("Seu hábito foi criado");
				modalCreate.remove();
				setTimeout(() => {
					window.location.reload(true);
				}, 1200);
			}
		});
	}
}
