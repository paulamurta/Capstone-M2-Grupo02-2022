import Api from "./api.controllers.js";
import EditModalHabit from "./modal-edit-habit.controllers.js";

export default class TableHabit {
	static postNumber = 10;

	static async listHabit(habit, filter = "") {
		const table = document.querySelector(".habits__body");
		table.innerHTML = "";
		let posts = TableHabit.postNumber;

		const buttonNext = document.querySelector(".button__next");
		if (filter === "finished") {
			posts = habit.length;
			buttonNext.style.display = "none";
		} else if (TableHabit.postNumber >= habit.length) {
			buttonNext.style.display = "none";
		} else {
			buttonNext.style.display = "block";
		}

		posts = posts > habit.length ? habit.length : posts;
		for (let i = 0; i < posts; i++) {
			const tr = document.createElement("tr");
			tr.classList.add("habits__body__line");

			const td1 = document.createElement("td");
			td1.classList.add("habits__checkbox");

			const checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			if (habit[i].habit_status == true) {
				checkbox.checked = true;
				checkbox.disabled = "true";
			}
			checkbox.classList.add("habits__checkbox");

			checkbox.addEventListener("click", async () => {
				if (checkbox.checked == true) {
					await Api.completeHabit(habit[i].habit_id);
					const habits = await Api.readAllHabits();
					TableHabit.listHabit(habits);
					// window.location.reload(true);
				} else {
					titulo.style.textDecoration = "none";
				}
			});
			td1.append(checkbox);

			const td2 = document.createElement("td");
			td2.classList.add("habits__title");
			const titulo = document.createElement("span");
			titulo.innerText = habit[i].habit_title;
			if (checkbox.checked == true) {
				titulo.style.textDecoration = "line-through";
			}
			td2.append(titulo);

			const td3 = document.createElement("td");
			td3.classList.add("habits__description");
			const description = document.createElement("p");
			description.innerText = habit[i].habit_description;
			td3.append(description);

			const td4 = document.createElement("td");
			td4.classList.add("habits__category");
			const category = document.createElement("span");
			switch (habit[i].habit_category) {
				case "estudos":
					category.innerText = "Estudo";
					break;
				case "casa":
					category.innerText = "Casa";
					break;
				case "trabalho":
					category.innerText = "Trabalho";
					break;
				case "saude":
					category.innerText = "Saúde";
					break;
				case "lazer":
					category.innerText = "Lazer";
					break;
				default:
					category.innerText = habit[i].habit_category;
			}

			td4.append(category);

			const td5 = document.createElement("tr");
			td5.classList.add("button__edit__habit");

			const button = document.createElement("button");
			button.innerText = "...";
			button.classList.add("button__editHabit");

			button.addEventListener("click", (event) => {
				EditModalHabit.createModal(habit[i]);
			});

			td5.append(button);

			if (checkbox.checked == true) {
				tr.style.backgroundColor = "var(--color-gray-4)";

				tr.classList.add("line__checked");
			}
			tr.append(td1, td2, td3, td4, td5);
			table.append(tr);
		}
	}

	static verifyPostNumber() {
		const buttonNext = document.querySelector(".button__next");
		if (TableHabit.postNumber < 10) {
			buttonNext.style.display = "none";
		}
	}
}
