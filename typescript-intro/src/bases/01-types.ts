export let nombre = "Ramiro";
export const age: number = 35;
const isValid = true;

console.log(nombre);

export const templateString = ` Esto es un string
multilínea
que puede tener
" comillas dobles
' simples
inyectar valores: ${ nombre }
expresiones: ${ 1 + 1 }
números: ${ age }
booleanos: ${ isValid }
`

console.log(templateString);