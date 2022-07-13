export default class ModalRequest {
	static modalSucess(message) {
		let body = document.querySelector("body");
		let div = document.createElement("div");

		div.classList.add("modal", "modal-sucess");
		let img = document.createElement("img");
		if (window.location.href.includes("home")) {
			img.src = "../assets/check-circle.png";
		} else {
			img.src = "./src/assets/check-circle.png";
		}

		let main = document.createElement("main");
		let h3 = document.createElement("h3");

		h3.innerText = "Sucesso!";
		let p = document.createElement("p");
		p.innerText = message;
		main.append(h3, p);
		div.append(img, main);
		body.appendChild(div);

		setTimeout(() => {
			div.style.opacity = "1";
		}, 100);
		setTimeout(() => {
			div.style.opacity = "0";
		}, 3000);
		setTimeout(() => {
			div.remove();
		}, 4000);
	}

	static modalError(message) {
		let body = document.querySelector("body");
		let div = document.createElement("div");
		div.classList.add("modal", "modal-error");
		let img = document.createElement("img");
		if (window.location.href.includes("home")) {
			img.src = "../assets/x-circle.png";
		} else {
			img.src = "./src/assets/x-circle.png";
		}

		console.log(img);

		let main = document.createElement("main");
		let h3 = document.createElement("h3");
		h3.innerText = "Erro!";
		let p = document.createElement("p");
		p.innerText = message;
		main.append(h3, p);
		div.append(img, main);
		body.appendChild(div);
		setTimeout(() => {
			div.style.opacity = "1";
		}, 100);
		setTimeout(() => {
			div.style.opacity = "0";
		}, 3000);
		setTimeout(() => {
			div.remove();
		}, 4000);
	}
}
