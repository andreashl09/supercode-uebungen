function checkAdult() {
    const age = 18;
    const ageInput = Number(document.querySelector("#age").value);
    const outputAgeCheck = document.querySelector(".outputAgeCheck");

    // console.log(outputAgeCheck);

    if (ageInput <= age) {
        outputAgeCheck.innerText = "Nein, du darfst keine Shisha rauchen!";
    } else {
        outputAgeCheck.innerText = "Ja, du darfst Shisha rauchen!";
    }
}
