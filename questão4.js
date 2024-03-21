function inverteString(string) {
    let invertedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        invertedString += string[i];
    }
    return invertedString;
}

// Exemplo de utilização:
const stringOriginal = prompt("Digite uma string para inverter: ");
const stringInvertida = inverteString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
