const sentence = require("./information.js")

const cowsay = require("cowsay");

console.log(cowsay.say({
	// text : "je fais des prouts",
	text : sentence(),
	e : "Oo",
	T : " U"
}))