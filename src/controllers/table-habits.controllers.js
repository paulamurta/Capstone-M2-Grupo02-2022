import Api from "./api.controllers.js";
import EditModalHabit from "./modal-edit-habit.controllers.js";
export default class TableHabit {
	static async listHabit(habitsData) {
		const table = document.querySelector(".habits__body");

		habitsData.forEach((habit) => {
			const tr = document.createElement("tr");

			const td1 = document.createElement("td");
			const checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			if (habit.habit_status == true) {
				checkbox.checked = true;
			}
			checkbox.classList.add("habits__checkbox");

			checkbox.addEventListener("click", async () => {
				if (checkbox.checked == true) {
					titulo.style.textDecoration = "line-through";
					await Api.completeHabit(habit.habit_id);
					// window.location.reload(true);
				} else {
					titulo.style.textDecoration = "none";
					// abro o modal de editar?
				}
			});
			td1.append(checkbox);

			const td2 = document.createElement("td");
			const titulo = document.createElement("span");
			titulo.classList.add("habits__title");
			titulo.innerText = habit.habit_title;
			td2.append(titulo);

			const td3 = document.createElement("td");
			const description = document.createElement("p");
			description.classList.add("habits__description");
			description.innerText = habit.habit_description;
			td3.append(description);

			const td4 = document.createElement("td");
			const category = document.createElement("span");
			category.classList.add("habits__category");
			category.innerText = habit.habit_category;
			td4.append(category);

			const td5 = document.createElement("tr");
			const button = document.createElement("button");
			button.classList.add("button");
			button.classList.add("button__editHabit");
			button.innerText = ". . .";
			button.addEventListener("click", (event) => {
				console.log(habit.habit_id);
				EditModalHabit.createModal(habit.id);
				//vai chamar o modal de editar habit
			});

			td5.append(button);

			tr.append(td1, td2, td3, td4, td5);
			table.append(tr);

			//esses 'td' aí é porque eu tava sem ideia, vou trocar os nomes depois
		});
	}
}
