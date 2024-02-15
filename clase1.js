let texto = "hernando";
let resultado = "";

for (let letra of texto) {
    switch (letra) {
        case 'a':
            resultado += '1';
            break;
        case 'e':
            resultado += '2';
            break;
        case 'i':
            resultado += '3';
            break;
        case 'o':
            resultado += '4';
            break;
        case 'u':
            resultado += '5';
            break;
        default:
            resultado += letra;
    }
}

console.log(resultado);
