const form = document.querySelector("#form");
form.addEventListener("submit", function(event) {

    event.preventDefault();
    console.log(1, event.preventDefault())

    const moneyInput = form.elements["money"];
    console.log(2, moneyInput)

    
});
