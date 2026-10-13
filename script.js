// Live energy simulation

function updateEnergy() {

    let power =
        (Math.random() * 2 + 1).toFixed(2);

    let energy =
        (Math.random() * 3 + 5).toFixed(2);

    let powerElement =
        document.getElementById("power");

    let energyElement =
        document.getElementById("energy");

    if (powerElement) {
        powerElement.innerText =
            power + " kW";
    }

    if (energyElement) {
        energyElement.innerText =
            energy + " kWh";
    }
}

setInterval(updateEnergy, 3000);


// Appliance ON/OFF

function toggle(button) {

    if (button.innerText === "ON") {

        button.innerText = "OFF";
        button.classList.add("off");

    } else {

        button.innerText = "ON";
        button.classList.remove("off");

    }
}


// Bill Calculator

function calculateBill() {

    let units =
        parseFloat(
            document.getElementById("units").value
        );

    let rate =
        parseFloat(
            document.getElementById("rate").value
        );

    if (isNaN(units) || isNaN(rate)) {

        alert("Please enter units and rate.");

        return;
    }

    let bill = units * rate;

    document.getElementById("result")
        .innerText =
        "Estimated Cost: ৳ " +
        bill.toFixed(2);
}


// Settings

function saveSettings() {

    document.getElementById("saveMsg")
        .innerText =
        "✅ Settings saved successfully.";

}
