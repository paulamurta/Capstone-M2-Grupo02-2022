import Api from "./api.controllers.js";
import TableHabit from "./table-habits.controllers.js";
import CreateModalHabit from "./modal-create-habit.controllers.js";
import EditModalHabit from "./modal-edit-habit.controllers.js";

export default class FilterHabits {

    static async createFilters(habitData) {
        const section = document.querySelector('section');
        section.classList.add('filters')

        const titulo = document.createElement('div');
        titulo.classList.add('fiters__title');
        const h3 = document.createElement('h3');
        h3.innerText = 'Tarefas';
        titulo.append(h3)

        const divButtons = document.createElement('div');
        divButtons.classList.add('containerButtons');

        const buttonAll = document.createElement('button');
        buttonAll.classList.add('button');
        buttonAll.classList.add('button__filter');
        buttonAll.innerText = 'Todos';
        buttonAll.addEventListener('click', () => {
            document.querySelector('.habits__body').innerHTML = "";
            TableHabit.listHabit(habitData);
        })

        const buttonCompleted = document.createElement('button');
        buttonCompleted.classList.add('button');
        buttonCompleted.classList.add('button__filter');
        buttonCompleted.innerText = 'Concluídos';
        buttonCompleted.addEventListener('click', () => {
            const habitComplete = []
            habitData.forEach(habit => {
                if (habit.habit_status == true) habitComplete.push(habit);
            })

            document.querySelector('.habits__body').innerHTML = "";
            TableHabit.listHabit(habitComplete);
        })

        const buttonAdd = document.createElement('button');
        buttonAdd.classList.add('button');
        buttonAdd.classList.add('button__add');
        buttonAdd.innerText = 'Criar';

        buttonAdd.addEventListener('click', () => {
            CreateModalHabit.createModal();
        })

        divButtons.append(buttonAll, buttonCompleted, buttonAdd);

        section.append(titulo, divButtons);

    }
}