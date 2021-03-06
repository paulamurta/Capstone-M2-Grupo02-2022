class Header {
	static async headerInfoUser() {
		const userName = JSON.parse(localStorage.getItem("@habits-kenzie:user")).usr_name;
		const userImage = JSON.parse(localStorage.getItem("@habits-kenzie:user")).usr_image;

		const imgHeaderTop = document.querySelector(".header-top__img");
		imgHeaderTop.src = userImage;
		const imgHeaderBottom = document.querySelector(".header-bottom__img");
		imgHeaderBottom.src = userImage;

		const userNameHeader = document.querySelector(".header__username");
		userNameHeader.innerText = userName;
	}

	static logout() {
		const logoutButton = document.querySelector("#logout-button");
		logoutButton.addEventListener("click", () => {
			localStorage.clear();
			window.location.href = window.location.href.replace(window.location.pathname.slice(-20), "");
		});
	}
}

export default Header;
