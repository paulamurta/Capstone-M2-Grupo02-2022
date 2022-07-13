import Api from "../controllers/api.controllers.js";
import FilterHabits from "../controllers/filter-habits.controllers.js";
import TableHabit from "../controllers/table-habits.controllers.js";
import Header from "../controllers/header.controllers.js";
import EditModalHabit from "../controllers/modal-edit-habit.controllers.js";
import EditModalUser from "../controllers/modal-edit-user-controller.js"

Header.headerInfoUser();
//! Login para carregar a página, apagar depois

Api.login({
	email: "grupo2RafaelK@mail.com",
	password: "8ad51ba84da177f2de190940dda6c9bc",
});

await Api.readAllHabits();
FilterHabits.createFilters(await Api.readAllHabits());
TableHabit.listHabit(await Api.readAllHabits());

//Apenas para teste
//const testeUpdate = document.querySelector(".header-top__img")
//testeUpdate.addEventListener("click", EditModalUser.createModal);

//! Deletar depois => Só para ver o modal edit.
//const teste = document.querySelector(".button__add");
//teste.addEventListener("click", CreateModalHabit.createModal);


//Api.deleteHabit(549);

// teste.addEventListener("click", EditModalHabit.createModal);

//=======Teste de novo Post


/* const newPost = {
    habit_title: "Fazer o riscado na tarefa",
    habit_description: "Quando finalizado, a tarefa vem riscada",
    habit_category: "estudos"
}

let testePost = await Api.createHabit(newPost);
console.log(testePost);
 */

//==========Teste de deletar Post

//let postDeletado = await Api.deleteHabit(121)
