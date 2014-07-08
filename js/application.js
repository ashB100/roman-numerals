/**
 * Created by ashnita on 07/07/2014.
 */

function validate(event){
    var key = null;
    if (window.event) {
        key = event.keyCode;
    } else {
        key = event.which;
    }
    if (key < 48 || key > 57) {
        if(key == 8)
        {
            return true;
        }
        else{
            return false;
        }
    }
}

//Numeral Converter project
function integerRoman(n){
    var table = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    var roman_numeral = '';
    for (var i=0; i<table.length; i++) {
        while (n - table[i][1] >= 0) {
            n-= table[i][1];
            roman_numeral += table[i][0];
        }
        if (n === 0) {
            return roman_numeral;
        }
    }
}

function displayRomanNum() {
    var inputVal = document.getElementById("tempInput").value;
    console.log(inputVal);
    if (inputVal != undefined) {
        document.getElementById("tempOutput").value = integerRoman(inputVal);
    }
}