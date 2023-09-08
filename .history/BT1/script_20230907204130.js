const form = document.querySelector("#form");
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const heightInput = form.elements["height"];
    console.log(222, heightInput)
    const weightInput = form.elements["weight"];
    console.log(222, weightInput)
    const genderInput = form.elements["gender"];
    console.log(222, genderInput)

    const height = heightInput.value;
    console.log(222, height)
    const weight = weightInput.value;
    const gender = genderInput.value;


    if (!height || !weight || !gender){
        return alert("Xin vui lòng nhập lại!");
    }

    let bmi = Number(weight) / (Number(height) * Number(height));
    let result = "";

    if( gender == 'male'){
        switch (true) {
            case bmi < 20.7:
                result = 'Gầy'
                break;
            case bmi < 26.4:
                result = 'Bình thường'
                break; 
            case bmi < 27.8:
                result = 'Thừa cân nhẹ'
                break;
            case bmi < 31.1:
                result = 'Trên lý tưởng'
                break;
            case bmi > 31.1:
                result = 'Béo phì'
                break;



            default:
                result = 'Béo phì'
                break;
        }

    }else{
        switch (true) {
            case bmi < 19.1:
                result = 'Gầy'
                break;
            case bmi < 25.8:
                result = 'Bình thường'
                break; 
            case bmi < 27.3:
                result = 'Thừa cân nhẹ'
                break;
            case bmi < 32.3:
                result = 'Trên lý tưởng'
                break;
            case bmi > 32.3:
                result = 'Béo phì'
                break;



            default:
                result = 'Béo phì'
                break;

    }
    }
    console.log(bmi, result);
    
} );
