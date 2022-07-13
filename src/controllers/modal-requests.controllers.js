export default class ModalRequest {
	static modalSucess(message) {
		let body = document.querySelector("body");
		let div = document.createElement("div");
		div.classList.add("modal", "modal-sucess");
		let i = document.createElement("i");
		i.classList.add("bx", "bxs-check-circle", "bx-tada");
		let main = document.createElement("main");
		let h3 = document.createElement("h3");
		h3.innerText = "Sucesso!";
		let p = document.createElement("p");
		p.innerText = message;
		main.append(h3, p);
		div.append(i, main);
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
		let i = document.createElement("i");
		i.classList.add("bx", "bxs-x-circle", "bx-tada");
		let main = document.createElement("main");
		let h3 = document.createElement("h3");
		h3.innerText = "Erro!";
		let p = document.createElement("p");
		p.innerText = message;
		main.append(h3, p);
		div.append(i, main);
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
