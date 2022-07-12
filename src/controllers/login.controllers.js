import Api from "./api.controllers.js";
import ModalRequest from "../controllers/modal-requests.controllers.js";
export default class Login {
	static baseUrl = "https://habits-kenzie.herokuapp.com/api/userLogin";

	static formSubmit() {
		const form = document.querySelector("#formLogin");

		form.addEventListener("submit", async (event) => {
			event.preventDefault();

			let userData = new FormData(form);
			userData = {
				email: userData.get("email"),
				password: userData.get("password"),
			};

			await Api.login(userData)
				.then((res) => {
					if (res.token) {
						ModalRequest.modalSucess("O usuário foi logado");
					} else {
						let message = res.message;
						ModalRequest.modalError(message.charAt(message.length-1) === "." ? message.charAt(0).toUpperCase() + message.slice(1) : message.charAt(0).toUpperCase() + message.slice(1)  + ".");
					}
				});
		});
	}

}
