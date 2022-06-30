document.addEventListener("DOMContentLoaded", (e) => {
	fetch("../data.json")
		.then((response) => response.json())
		.then((data) => parseData(data))
		.catch((e) => console.log(e));
});

function parseData(data) {
	const values = document.querySelectorAll(".column__value");
	const bars = document.querySelectorAll(".column__bar");
	const days = document.querySelectorAll(".column__day");

	let max = data.reduce((prev, { amount: cur }) => Math.max(prev, cur), 0);

	for (let i = 0; i < data.length; i++) {
		days[i].textContent = data[i].day;
		values[i].textContent = "$" + data[i].amount;
		let height = data[i].amount / max;
		if (height > 0.99) bars[i].style.backgroundColor = "var(--cyan)";
		bars[i].style.height = (height * 150).toFixed(2) + "px";
	}
}
