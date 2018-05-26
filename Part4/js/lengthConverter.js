function convert_lengths(source, value) {
    let numberVal = parseFloat(value);
    let inputFeet = document.getElementById("inputFeet");
    let inputMeters = document.getElementById("inputMeters");
    let inputInches = document.getElementById("inputInches");
    let inputCentimeters = document.getElementById("inputCentimeters");
    let inputYards = document.getElementById("inputYards");
    let inputKilo = document.getElementById("inputKilo");
    let inputMiles = document.getElementById("inputMiles");

    if (source === "inputFeet"){
        inputMeters.value = (numberVal/3.2808).toFixed(5);
        inputInches.value = (numberVal*12).toFixed(5);
        inputCentimeters.value = (numberVal/0.032808).toFixed(5);
        inputYards.value = (numberVal*.33333).toFixed(5);
        inputKilo.value = (numberVal/3280.8);
        inputMiles.value = (numberVal*0.00018939).toFixed(5);
    }
    if (source === "inputMeters"){
        inputFeet.value = (numberVal*3.2808).toFixed(5);
        inputInches.value = (numberVal*39.370).toFixed(5);
        inputCentimeters.value = (numberVal/0.01).toFixed(5);
        inputYards.value = (numberVal*1.0936).toFixed(5);
        inputKilo.value = (numberVal/1000);
        inputMiles.value = (numberVal/0.00062137).toFixed(5);
    }
    if (source === "InputInches"){
        inputMeters.value = (numberVal/39.370).toFixed(5);
        inputFeet.value = (numberVal*0.083333).toFixed(5);
        inputCentimeters.value = (numberVal/0.39370).toFixed(5);
        inputYards.value = (numberVal*.02778).toFixed(5);
        inputKilo.value = (numberVal/39370);
        inputMiles.value = (numberVal/0.000015783).toFixed(5);
    }
    if (source === "inputCentimeters"){
        inputMeters.value = (numberVal/100).toFixed(5);
        inputInches.value = (numberVal*0.39370).toFixed(5);
        inputFeet.value = (numberVal*0.032808).toFixed(5);
        inputYards.value = (numberVal*0.010936).toFixed(5);
        inputKilo.value = (numberVal/100000);
        inputMiles.value = (numberVal*0.0000062137).toFixed(5);
    }
    if (source === "inputYards"){
        inputMeters.value = (numberVal/1.0936).toFixed(5);
        inputInches.value = (numberVal*36).toFixed(5);
        inputCentimeters.value = (numberVal/0.010936).toFixed(5);
        inputFeet.value = (numberVal*3).toFixed(5);
        inputKilo.value = (numberVal/1093.6);
        inputMiles.value = (numberVal/0.00056818).toFixed(5);
    }
    if (source === "inputKilo"){
        inputMeters.value = (numberVal*1000).toFixed(5);
        inputInches.value = (numberVal*39370).toFixed(5);
        inputCentimeters.value = (numberVal*100000).toFixed(5);
        inputYards.value = (numberVal*1093.6).toFixed(5);
        inputFeet.value = (numberVal*3280.8);
        inputMiles.value = (numberVal*0.62137).toFixed(5);
    }
    if (source === "inputMiles"){
        inputMeters.value = (numberVal/0.00062137).toFixed(5);
        inputInches.value = (numberVal*63360).toFixed(5);
        inputCentimeters.value = (numberVal/0.0000062137).toFixed(5);
        inputYards.value = (numberVal*1760).toFixed(5);
        inputKilo.value = (numberVal*0.62137);
        inputFeet.value = (numberVal*5280).toFixed(5);
    }
}