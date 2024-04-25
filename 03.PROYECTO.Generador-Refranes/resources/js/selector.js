// 

const refranes = require('./refranes.js'); // Importa el módulo refranes.js



const stringToNumb = (str) => { // 
    return str
        .filter(item => isNaN(Number(item))) // Filtra las cadenas que no son números
        .map((item, index) => {
            return `${index + 1}. ${item}`;
        });
}
const refraneroV1 = stringToNumb(refranes.refranero()); // resultado funcion stringToNumb

const selectRefran1 = () => { // Selecciona un refrán aleatorio 1
    let selectRefran1 = []
    const num = Math.floor(Math.random() * refraneroV1.length);
    selectRefran1.push( refraneroV1[num]);
    return selectRefran1
};

const selectRefran2 = () => { // Selecciona un refrán aleatorio 2
    let selectRefran2 = []
    const num = Math.floor(Math.random() * refraneroV1.length);
    selectRefran2.push( refraneroV1[num]);
    return selectRefran2
};
/*const selectRefran3 = () => { // Selecciona un refrán aleatorio 2
    let selectRefran3 = []
    const num = Math.floor(Math.random() * refraneroV1.length);
    selectRefran3.push( refraneroV1[num]);
    return selectRefran3
};*/
// siguiemtes pasos:
// serparar las  selectRefran1 y selectRefran2 cada una , un 'que' o 'y' 3 array del refran:
// se dividen por la coma si la tienen 
// si no tienen coma por letra palabra 'que' o 'y'  3 array del refran

const refranSlider1 = (refran1) => { 
    let refranA1 = refran1.map(word => {
        if (word.includes(',')) {
            return word.split(',')[1];
        } else if (word.includes('que')) {
            return word.split('que')[1]  ;
        } else if (word.includes(' y ')) {
            return word.split('y')[1];
        } 
    });

    return refranA1
};

const refranSlider2 = (refran2) => { 
    let refranA2 = refran2.map(word => {
        if (word.includes(',')) {
            return word.split(',')[0];
        } else if (word.includes('que')) {
            return word.split('que')[0]  ;
        } else if (word.includes(' y ')) {
            return word.split('y')[0];
        } 
    });////////////////////////////////////////// me quedo por que tengo que unirlo y no se como

    return refranA2
};



// comprobaciones
const refranPaste = () => { 
    let refran1 = selectRefran1();
    let refran2 = selectRefran2();
    let refranA1 = refranSlider1(refran1);
    let refranA2 = refranSlider2(refran2);
    let refranPaste = refranA1.concat(refranA2);
    return refranPaste;
};

console.log(refranPaste());
//console.log(selectRefran3());
const longitud = refraneroV1.length;
console.log('Numero total de refranes: ' + longitud);