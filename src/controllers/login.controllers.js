export default class Login {
	static baseUrl = "https://habits-kenzie.herokuapp.com/api/userLogin";

	static async userLogin(userData) {
		await fetch(this.baseUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);

				if (response.message === undefined) {
					localStorage.setItem("@kenzie-habits:username", response.response.usr_name);
					localStorage.setItem("@kenzie-habits:token", response.token);
					window.location.href = "./src/views/home.html";
				}
			})
			.catch((error) => console.log(error));
	}

	static formSubmit() {
		const form = document.querySelector("#formLogin");

		form.addEventListener("submit", async (event) => {
			event.preventDefault();

			let userData = new FormData(form);
			userData = {
				email: userData.get("email"),
				password: userData.get("password"),
			};

			await this.userLogin(userData);
		});
	}

}
