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
    console.log(3, years);

    // years = Number(years)/100
    // console.log(4, years)

    const time = timeInput.value;
    console.log(3, time)

    if(!money || !years || !time){
      return alert("Mong quý khách nhập thông tin! ")
    }

    const month = Number(years)/12;
    console.log(month);



    // const MonthlyInput = form.elements["Monthly"];
    // console.log(2, MonthlyInput)

    // const amountInput = form.elements["amount"];
    // console.log(2, amountInput)

    // const totalProfitInput = form.elements["totalProfit"];
    // console.log(2, totalProfitInput)

    // MonthlyInput = Math.pow(1+ interest, )
});
