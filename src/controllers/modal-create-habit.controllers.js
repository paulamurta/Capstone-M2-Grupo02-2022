import Api from "./api.controllers.js";
import ModalRequest from "./modal-requests.controllers.js";
import TableHabit from "./table-habits.controllers.js";

export default class CreateModalHabit {
	static async createModal() {
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
			modalCreate.classList.add("modal--transition-opacity");
			contentCreate.classList.add("modal--transition-small");
			setTimeout(() => {
				modalCreate.remove();
			}, 1000);
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

			if (data.habit_category !== undefined) {
				data.habit_category = data.habit_category
					.toLowerCase()
					.replace("ú", "u");
			}
			console.log(data.habit_category);
			const response = await Api.createHabit(data);

			if (
				response.message === "habit_category obrigatório" ||
				response.message === "habit_title obrigatório" ||
				response.message === "habit_description obrigatório"
			) {
				ModalRequest.modalError("Você deve informar todos os campos");
			} else {
				ModalRequest.modalSucess("Seu hábito foi criado");
				const contentCreate = document.querySelector(".create-modal__content");
				contentCreate.classList.add("modal--transition-small");
				modalCreate.classList.add("modal--transition-opacity");
				setTimeout(async () => {
					modalCreate.remove();
					const habit = await Api.readAllHabits();
					TableHabit.listHabit(habit);
				}, 1000);
			}
		});
	}

	static modalCreatInputFeedback() {
		let inputTitle = document.querySelector(".input__title");
		let inputDescription = document.querySelector(".input__description");
		let span = document.createElement("span");

		span.classList.add("input__feedback-error");
		span.innerText = "Você deve informar o título";
		inputTitle.insertAdjacentElement("afterend", span);
		span.style.display = "none";

		inputDescription.addEventListener("click", (event) => {
			if (inputTitle.value === "") {
				span.style.display = "block";
				inputTitle.style.borderColor = "var(--color-red-1)";
			} else {
				span.style.display = "none";
				inputTitle.style.borderColor = "var(--color-gray-5)";
			}
		});
	}
}
