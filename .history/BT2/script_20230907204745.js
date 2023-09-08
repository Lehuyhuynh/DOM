const form = document.querySelector("#form");
form.addEventListener("submit", function(event) {

    event.preventDefault();
    console.log(1, event.preventDefault())

    const moneyInput = form.elements["height"];
    console.log(1, moneyInput)

    
});
