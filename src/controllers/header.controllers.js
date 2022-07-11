import { Api } from "./api.controllers.js";

class Header {
	static async headerInfoUser() {
		//! Ver nome da variável salva no storage; pode ter sido salva de maneira diferente
		const userName = localStorage.getItem("@kenzie-habits:user_name");
		const userImage = localStorage.getItem("@kenzie-habits:user_image");

		const imgHeaderTop = document.querySelector(".header-top__img");
		imgHeaderTop.src = userImage;
		const imgHeaderBottom = document.querySelector(".header-bottom__img");
		imgHeaderBottom.src = userImage;

		const userNameHeader = document.querySelector(".header__username");
		userNameHeader.innerText = userName;
	}
}

export { Header };
