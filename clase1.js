const vocales = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
};

let texto = "hernando";
let resultado = "";

for (let letra of texto) {
    resultado += vocales[letra] || letra;
}

console.log(resultado);
