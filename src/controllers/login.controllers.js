import Api from "./api.controllers.js";
import ModalRequest from "../controllers/modal-requests.controllers.js";

export default class Login {
	static formSubmit() {
		const form = document.querySelector("#formLogin");
		form.addEventListener("submit", async (event) => {
			event.preventDefault();
			let userData = new FormData(form);
			userData = {
				email: userData.get("email"),
				password: userData.get("password"),
			};

			const result = await Api.login(userData);
			if (result.token) {
				ModalRequest.modalSucess("O usuário foi logado");
				setTimeout(() => {
					window.location.pathname = "../src/views/home.html";
				}, 1000);
			} else {
				let message = result.message;
				ModalRequest.modalError(
					message.charAt(message.length - 1) === "."
						? message.charAt(0).toUpperCase() + message.slice(1)
						: message.charAt(0).toUpperCase() + message.slice(1) + "."
				);
			}
		});
	}
}
