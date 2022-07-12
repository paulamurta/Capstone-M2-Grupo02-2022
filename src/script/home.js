import { Header } from "../controllers/header.controllers.js";
import { EditModalHabit } from "../controllers/modal-edit-habit.controllers.js";

Header.headerInfoUser();
const teste = document.querySelector(".button__add");

teste.addEventListener("click", EditModalHabit.createModal);
