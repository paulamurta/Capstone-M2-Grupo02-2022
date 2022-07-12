import Api from "./api.controllers.js";
import EditModalHabit from "./modal-edit-habit.controllers.js";
export default class TableHabit {
	static async listHabit(habitsData) {
		const table = document.querySelector(".habits__body");

		habitsData.forEach((habit) => {
			const tr = document.createElement("tr");
			tr.classList.add('habits__body__line');

			const td1 = document.createElement("td");
			td1.classList.add('habits__checkbox');

			const checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			if (habit.habit_status == true) {
				checkbox.checked = true;
				checkbox.disabled = 'true';
			}
			checkbox.classList.add("habits__checkbox");

			checkbox.addEventListener("click", async () => {
				if (checkbox.checked == true) {
					await Api.completeHabit(habit.habit_id);
					window.location.reload(true);
					
					
				} else {
					titulo.style.textDecoration = "none";
					// abro o modal de editar?
				}
			});
			td1.append(checkbox);

			const td2 = document.createElement("td");
			td2.classList.add('habits__title')
			const titulo = document.createElement("span");
			titulo.innerText = habit.habit_title;
			if(checkbox.checked == true){
				titulo.style.textDecoration = "line-through";
			}
			td2.append(titulo);

			const td3 = document.createElement("td");
			td3.classList.add('habits__description')
			const description = document.createElement("p");
			description.innerText = habit.habit_description;
			td3.append(description);

			const td4 = document.createElement("td");
			td4.classList.add('habits__category');
			const category = document.createElement("span");
			category.innerText = habit.habit_category;
			td4.append(category);

			const td5 = document.createElement("tr");
			td5.classList.add("button");
			td5.classList.add("button__edit__habit");

			const button = document.createElement("button");
			button.innerText = "...";
			if(checkbox.checked == false){
				button.addEventListener("click", (event) => {
					console.log(event);
					EditModalHabit.createModal();
					//vai chamar o modal de editar habit
				});
			}
			
			td5.append(button);

			if(checkbox.checked == true){
				tr.classList.add('line__checked');
			}
			tr.append(td1, td2, td3, td4, td5);
			table.append(tr);

			//esses 'td' aí é porque eu tava sem ideia, vou trocar os nomes depois
		});
	}
}