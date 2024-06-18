function kalorienBerechnen() {
    // Input-Felder auslesen
    const heightInput = Number(document.querySelector("#groesse").value);
    const ageInput = Number(document.querySelector("#alter").value);
    const weightInput = Number(document.querySelector("#gewicht").value);

    // Radio auslesen
    const genderRadio = document.querySelector(
        "input[name='geschlecht']:checked"
    ).value;

    // Pal-Faktor aus Select Option auslesen
    const palFactor = Number(document.querySelector("option:checked").value);

    // Variable Kalorien Grundumsatz
    let calorien;

    if (heightInput != 0 && ageInput != 0 && weightInput != 0) {
        // Kalorienbedarf für männlich oder weiblich ausrechnen
        if (genderRadio === "man") {
            calorien =
                66.47 + 13.7 * weightInput + 5 * heightInput - 6.8 * ageInput;
        } else {
            calorien =
                655.1 + 9.6 * weightInput + 1.8 * heightInput - 4.7 * ageInput;
        }
        calorien = Math.round(calorien);
    } else {
        window.alert("Formular vollständig ausfüllen");
    }

    let sumCalorien = Math.round(calorien * palFactor);
    const kJFactor = 4.1868;

    if (calorien != 0) {
        const kcalOutput = document.querySelector(".kcal-grund");
        const kcalAllOutput = document.querySelector(".kcal-gesamt");
        const kjOutput = document.querySelector(".kj-grund");
        const kjAllOutput = document.querySelector(".kj-gesamt");

        kcalOutput.innerText = `${calorien}`;
        kcalAllOutput.innerText = `${sumCalorien}`;
        kjOutput.innerText = `${Math.round(calorien * kJFactor)}`;
        kjAllOutput.innerText = `${Math.round(sumCalorien * kJFactor)}`;
    }
}

function clearAll() {
    document.querySelector("#groesse").value = "";
    document.querySelector("#alter").value = "";
    document.querySelector("#gewicht").value = "";
    document.querySelectorAll("tabelle p").value = "0";
    // document.querySelector(".kcal-grund").value = "0";
    // document.querySelector(".kcal-gesamt").value = "0";
    // document.querySelector(".kj-grund").value = "0";
    // document.querySelector(".kj-gesamt").value = "0";
}
