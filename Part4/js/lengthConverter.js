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
        inputMeters.value = (numberVal/3.2808).toFixed(2);
        inputInches.value = (numberVal*12).toFixed(2);
        inputCentimeters.value = (numberVal/0.032808).toFixed(2);
        inputYards.value = (numberVal*.33333).toFixed(2);
        inputKilo.value = (numberVal/3280.8);
        inputMiles.value = (numberVal*0.00018939).toFixed(2);
    }
    if (source === "inputMeters"){
        inputFeet.value = (numberVal*3.2808).toFixed(2);
        inputInches.value = (numberVal*39.370).toFixed(2);
        inputCentimeters.value = (numberVal/0.01).toFixed(2);
        inputYards.value = (numberVal*1.0936).toFixed(2);
        inputKilo.value = (numberVal/1000);
        inputMiles.value = (numberVal/0.00062137).toFixed(2);
    }
    if (source === "InputInches"){
        inputMeters.value = (numberVal/39.370).toFixed(2);
        inputFeet.value = (numberVal*0.083333).toFixed(2);
        inputCentimeters.value = (numberVal/0.39370).toFixed(2);
        inputYards.value = (numberVal*.02778).toFixed(2);
        inputKilo.value = (numberVal/39370);
        inputMiles.value = (numberVal/0.000015783).toFixed(2);
    }
    if (source === "inputCentimeters"){
        inputMeters.value = (numberVal/100).toFixed(2);
        inputInches.value = (numberVal*0.39370).toFixed(2);
        inputFeet.value = (numberVal*0.032808).toFixed(2);
        inputYards.value = (numberVal*0.010936).toFixed(2);
        inputKilo.value = (numberVal/100000);
        inputMiles.value = (numberVal*0.0000062137).toFixed(2);
    }
    if (source === "inputYards"){
        inputMeters.value = (numberVal/1.0936).toFixed(2);
        inputInches.value = (numberVal*36).toFixed(2);
        inputCentimeters.value = (numberVal/0.010936).toFixed(2);
        inputFeet.value = (numberVal*3).toFixed(2);
        inputKilo.value = (numberVal/1093.6);
        inputMiles.value = (numberVal/0.00056818).toFixed(2);
    }
    if (source === "inputKilo"){
        inputMeters.value = (numberVal*1000).toFixed(2);
        inputInches.value = (numberVal*39370).toFixed(2);
        inputCentimeters.value = (numberVal*100000).toFixed(2);
        inputYards.value = (numberVal*1093.6).toFixed(2);
        inputFeet.value = (numberVal*3280.8);
        inputMiles.value = (numberVal*0.62137).toFixed(2);
    }
    if (source === "inputMiles"){
        inputMeters.value = (numberVal/0.00062137).toFixed(2);
        inputInches.value = (numberVal*63360).toFixed(2);
        inputCentimeters.value = (numberVal/0.0000062137).toFixed(2);
        inputYards.value = (numberVal*1760).toFixed(2);
        inputKilo.value = (numberVal*0.62137);
        inputFeet.value = (numberVal*5280).toFixed(2);
    }
}

function convert_area(source, value){
    let numberVal = parseFloat(value);
    let inputFeet = document.getElementById("inputSquareFeet");
    let inputMeters = document.getElementById("inputSquareMeters");
    let inputInches = document.getElementById("inputSquareInches");
    let inputYards = document.getElementById("inputSquareYards");
    let inputKilo = document.getElementById("inputSquareKilos");
    let inputMiles = document.getElementById("inputSquareMiles");

    if (source === "inputSquareFeet"){
        inputMeters.value = (numberVal/10.764).toFixed(2);
        inputInches.value = (numberVal*144).toFixed(2);
        inputYards.value = (numberVal*0.11111).toFixed(2);
        inputKilo.value = (numberVal/10764000).toFixed(2);
        inputMiles.value = (numberVal*0.000000035870).toFixed(2);
    }

    if(source === "inputSquareMeters"){
        inputFeet.value = (numberVal*10.764).toFixed(2);
        inputInches.value = (numberVal*1550).toFixed(2);
        inputYards.value = (numberVal*1.1960).toFixed(2);
        inputKilo.value = (numberVal/1000000).toFixed(2);
        inputMiles.value = (numberVal*0.00000038610).toFixed(2);
    }

    if(source === "inputSquareKilos"){
        inputFeet.value = (numberVal*10764000).toFixed(2);
        inputInches.value = (numberVal*1550000000).toFixed(2);
        inputYards.value = (numberVal*1196000).toFixed(2);
        inputMeters.value = (numberVal/0.0000010000).toFixed(2);
        inputMiles.value = (numberVal*0.38610).toFixed(2);
    }

    if(source === "inputSquareMiles"){
        inputFeet.value = (numberVal*27878000).toFixed(2);
        inputInches.value = (numberVal*4014500000).toFixed(2);
        inputYards.value = (numberVal*3097600).toFixed(2);
        inputKilo.value = (numberVal/.38610).toFixed(2);
        inputMeters.value = (numberVal/0.00000038610).toFixed(2);
    }

    if(source === "inputSquareYards"){
        inputFeet.value = (numberVal*9).toFixed(2);
        inputInches.value = (numberVal*1296).toFixed(2);
        inputMeters.value = (numberVal/1.1960).toFixed(2);
        inputKilo.value = (numberVal/1196000).toFixed(2);
        inputMiles.value = (numberVal*0.00000032283).toFixed(2);
    }

    if(source === "inputSquareInches"){
        inputFeet.value = (numberVal*0.0069444).toFixed(2);
        inputMeters.value = (numberVal/1550).toFixed(2);
        inputYards.value = (numberVal*0.00077160).toFixed(2);
        inputKilo.value = (numberVal/1550000000).toFixed(2);
        inputMiles.value = (numberVal*0.00000000024910).toFixed(2);
    }
}

function convert_weight(source, value) {
    let numberVal = parseFloat(value);
    let inputGrams = document.getElementById("inputGrams");
    let inputMilligrams = document.getElementById("inputMilligrams");
    let inputKilograms = document.getElementById("inputKilograms");
    let inputOunces = document.getElementById("inputOunces");
    let inputPounds = document.getElementById("inputPounds");
    let inputTonnes = document.getElementById("inputTonnes");

    if (source === "inputGrams"){
        inputMilligrams.value = (numberVal/0.0010000).toFixed(2);
        inputKilograms.value = (numberVal/1000).toFixed(2);
        inputOunces.value = (numberVal*0.035274).toFixed(2);
        inputPounds.value = (numberVal/0.0022046).toFixed(2);
        inputTonnes.value = (numberVal/1000000).toFixed(2);
    }

    if (source === "inputMilligrams"){
        inputGrams.value = (numberVal/1000).toFixed(2);
        inputKilograms.value = (numberVal/1000000).toFixed(2);
        inputOunces.value = (numberVal*0.000035274).toFixed(2);
        inputPounds.value = (numberVal/0.0000022046).toFixed(2);
        inputTonnes.value = (numberVal/1000000000).toFixed(2);
    }

    if (source === "inputKilograms"){
        inputGrams.value = (numberVal/0.0010000).toFixed(2);
        inputMilligrams.value = (numberVal/0.0000010000).toFixed(2);
        inputOunces.value = (numberVal*35.274).toFixed(2);
        inputPounds.value = (numberVal/2.2046).toFixed(2);
        inputTonnes.value = (numberVal/1000).toFixed(2);
    }
    if (source === "inputOunces"){
        inputGrams.value = (numberVal/0.035274).toFixed(2);
        inputMilligrams.value = (numberVal/0.000035274).toFixed(2);
        inputKilograms.value = (numberVal/35.274).toFixed(2);
        inputPounds.value = (numberVal*0.062500).toFixed(2);
        inputTonnes.value = (numberVal/35274).toFixed(2);
    }

    if (source === "inputPounds"){
        inputGrams.value = (numberVal/0.0022046).toFixed(2);
        inputMilligrams.value = (numberVal/0.0000022046).toFixed(2);
        inputKilograms.value = (numberVal/2.2046).toFixed(2);
        inputOunces.value = (numberVal*16).toFixed(2);
        inputTonnes.value = (numberVal/2204.6).toFixed(2);
    }

    if (source === "inputTonnes"){
        inputGrams.value = (numberVal/0.0000010000).toFixed(2);
        inputMilligrams.value = (numberVal/0.0000000010000).toFixed(2);
        inputKilograms.value = (numberVal/0.0010000).toFixed(2);
        inputOunces.value = (numberVal*35274).toFixed(2);
        inputPounds.value = (numberVal*2204.6).toFixed(2);
    }

}