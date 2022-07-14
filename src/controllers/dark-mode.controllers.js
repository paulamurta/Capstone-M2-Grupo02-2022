class DarkMode {
	static toggle = document.querySelector(".toggle");
	static lightTheme = {
		"--color-body": "#ffffff",
		"--color-blue": "#415af3",
		"--color-background-header-top-figure": "#ffffff",
		"--color-background-modals-table": "#ffffff",
		"--color-background-table-header": "#ffffff",
		"--color-dark-blue": "#4150d2",
		"--color-light-blue": "#d7e4fb",
		"--color-light-blue-2": "#a0adf9",
		"--color-purple": "#9747ff",
		"--color-light-purple": "#a0adf9",
		"--color-gray-1": "#212529",
		"--color-gray-2": "#343a40",
		"--color-gray-3": "#adb5bd",
		"--color-gray-4": "#e9ecef",
		"--color-gray-5": "#f1f3f5",
		"--color-gray-6": "#f8f9fa",
		"--color-gray-7": "#a1a1a1",
		"--color-green": "#56cf8e",
		"--color-light-green": "#e6f8ee",
		"--color-red-1": "#e64445",
		"--color-red-2": "#f03839",
		"--color-red-3": "#e07b7b",
		"--color-white": "#ffffff",
		"--color-black": "#000000",
		"--color-success": "#17a057",
		"--color-success-background": "#56cf8e96",
		"--color-error-background": "#e6444481",
		"--color-light-pink": "#ebebeb",
	};
	static darkTheme = {
		"--color-body": "#0E1011",
		"--color-blue": "#415af3",
		"--color-background-header-top-figure": "#121212",
		"--color-background-table-header": "#242a2d",
		"--color-background-modals-table": "#343a40",
		"--color-dark-blue": "#4150d2",
		"--color-light-blue": "#d7e4fb",
		"--color-light-blue-2": "#a0adf9",
		"--color-purple": "#9747ff",
		"--color-light-purple": "#a0adf9",
		"--color-gray-1": "#f8f9fa",
		"--color-gray-2": "#f8f9fa",
		"--color-gray-3": "#f8f9fa",
		"--color-gray-4": "#343a40",
		"--color-gray-5": "#f1f3f5",
		"--color-gray-6": "#f8f9fa",
		"--color-gray-7": "#a1a1a1",
		"--color-green": "#56cf8e",
		"--color-light-green": "#e6f8ee",
		"--color-red-1": "#e64445",
		"--color-red-2": "#f03839",
		"--color-red-3": "#e07b7b",
		"--color-white": "#000000",
		"--color-black": "#ffffff",
		"--color-success": "#17a057",
		"--color-success-background": "#56cf8e96",
		"--color-error-background": "#e6444481",
		"--color-light-pink": "#ebebeb",
	};

	static toogleImage(event) {
		if (event.target.className == "toggleOff") {
			const toggleOff = document.querySelector(".toggleOff");
			DarkMode.toggle.removeChild(toggleOff);
			const toggleOn = document.createElement("div");
			DarkMode.toggle.appendChild(toggleOn);
			toggleOn.classList.add("toggleOn");
			toggleOn.innerHTML = `<img
                src="../assets/toggle-on-solid.svg"
                alt="toggle-on"
                class="toggleOn"
            />`;
		} else {
			const toggleOn = document.querySelector(".toggleOn");
			DarkMode.toggle.removeChild(toggleOn);
			const toggleOff = document.createElement("div");
			DarkMode.toggle.appendChild(toggleOff);
			toggleOff.classList.add("toggleOff");
			toggleOff.innerHTML = `<img
            src="../assets/toggle-off-solid.svg"
            alt="toggle-off"
            class="toggleOff"
        />`;
		}
	}

	static changeTheme(event) {
		DarkMode.toogleImage(event);
		event.target.className == "toggleOff"
			? DarkMode.changeProperties(DarkMode.darkTheme)
			: DarkMode.changeProperties(DarkMode.lightTheme);
	}

	static changeProperties(theme) {
		for (let key in theme) {
			document.documentElement.style.setProperty(key, theme[key]);
		}
	}
}
export default DarkMode;
