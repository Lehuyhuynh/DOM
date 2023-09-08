const form = document.querySelector("#form");
form.addEventListener("submit", function(event) {

    event.preventDefault();
    

    const moneyInput = form.elements["mone"];
    console.log(2, moneyInput)

    const yearsInput = form.elements["years"];
    console.log(2, yearsInput)

    const timeInput = form.elements["time"];
    console.log(2, timeInput)

    const money = moneyInput.value;
    console.log(3, money)

    const years = yearsInput.value;
    console.log(3, years)

    const time = timeInput.value;
    console.log(3, time)

    if(!money || !years || !time)

});
