/*
This projects are created by Ashraf Morningstar
GitHub Profile: https://github.com/AshrafMorningstar
*/

var goku_images = [
	"https://github.com/WilliamBardon/WilliamBardon/blob/main/goku-to-blue/0.jpg?raw=true",
	"https://github.com/WilliamBardon/WilliamBardon/blob/main/goku-to-blue/1.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/goku-to-blue/2.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/goku-to-blue/3.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/goku-to-blue/4.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/goku-to-blue/5.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/goku-to-blue/6.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/goku-to-blue/7.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/goku-to-blue/8.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/goku-to-blue/9.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/goku-to-blue/10.jpg?raw=true"
];

var vegeta_images = [
	"https://github.com/WilliamBardon/WilliamBardon/blob/main/vegeta-rage/0.jpg?raw=true",
	"https://github.com/WilliamBardon/WilliamBardon/blob/main/vegeta-rage/1.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/vegeta-rage/2.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/vegeta-rage/3.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/vegeta-rage/4.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/vegeta-rage/5.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/vegeta-rage/6.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/vegeta-rage/7.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/vegeta-rage/8.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/vegeta-rage/9.jpg?raw=true",

	"https://github.com/WilliamBardon/WilliamBardon/blob/main/vegeta-rage/10.jpg?raw=true"
];

let slider = document.getElementById("slider");
console.log("slider ", slider)
	slider.oninput = () => {
		let vegetaImageElement = document.getElementById("over-9000-img");
		let gokuImageElement = document.getElementById("goku-img");
		
		const step = slider.valueAsNumber;
		console.log(step)
		vegetaImageElement.src = vegeta_images[step];
		gokuImageElement.src = goku_images[step];
		
		let ki = document.getElementById("saiyan");
		if (step === 10) {
			ki.style.visibility = "visible"
		} else {
			ki.style.visibility = "hidden"
		}
	};