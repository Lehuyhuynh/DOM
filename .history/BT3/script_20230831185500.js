const input = document.querySelector("#keyboard")
console.log("input")

input.addEventListener = ("keydown", function(e){
	const value = e.target
	console.log(222, e)
})