// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];
const batchValid = [valid1, valid2, valid3, valid4, valid5]
const batchInvalid = [invalid1, invalid2, invalid3, invalid4, invalid5]
const batchMystery = [mystery1, mystery2, mystery3, mystery4, mystery5]

// Add your functions below:

const validateCred = (arr) => {
    

    const multipArray = () => { /*contar a la inversa| contar desde el penultimo de 2 en 2| multiplicar x2  */
        
    let counter = 0;
        let multipArray = [];  
        for (let i = arr.length -2; i >= 0 ; i -= 2) {
            counter ++
            multipArray.push(arr[i] * 2)
        } //for 
        return multipArray;
    }; // multipArray

    const regularArray = () => { /*contar inversa |contar desde el ultimo de 2 en 2  */
        
    let regularArray = [];
        let counter = 0;
        for (let i = arr.length -1; i >= 0 ; i -= 2) {
            counter ++
            regularArray.push(arr[i])
        } //for 
        return regularArray
    }; // regularArray

    const sumTwoDigit = () => {  // si es mayor que >= 10  restaremos - 9  
        
        let sumTwoDigit = [];   // devuelve multiplArray modificada 
        let multipArrayResult = multipArray();
        multipArrayResult.forEach( num => {
            if ( num >= 10) {
                sumTwoDigit.push(num -9);
            } else { 
                sumTwoDigit.push(num)
            }   
        }); //forEach
        return sumTwoDigit
    }; // sumTwoDigit

    const sumArrays = () => { // suma array y divide por 100, debe devolver 0 para ser true
        
        let sumTwoResult = sumTwoDigit();
        let regularResult = regularArray();
        let togetherArr = sumTwoResult.concat(regularResult);
        const suma = togetherArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) % 100
        return  Math.floor(suma);
    } // sumArrays
    
    
    if (sumArrays() % 10 === 0 ) { // comprueba si la suma de los digitos es acaba en 0
        return true
    } else {
        return false 
    }
  
} //validateCred


//const result = validateCred(mystery2);
//console.log(result)

const findInvalidCard = (arr) => { // toma una lista de tarjetas y almacena las invalidas
    let invalidCards = arr.filter(card => !validateCred(card));
    return invalidCards;
} // finInvalidCard

invalidResult = findInvalidCard(batchInvalid ); /// introduce aqui las tarjetas <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
console.log(invalidResult)

// Credit Card Companies:
const companies = {
    'Amex (American Express)': 3,
    'Visa': 4,
    'MasterCard': 5,
    'Discover': 6
};

const idInvalidCardCompanies = (arr1, arr2) => {
    let loopResults =  [];
    for (let i  in arr1 ) {
        for (let j  in arr2 ) {
            if (arr1[i] === arr2[j][0]) { 
               if (!loopResults.includes(i)) {
                    loopResults.push(i);
                } // if 2
            } // if
        } //for 2
    } //for 1
    if (loopResults.length === 0 ) {
        console.log('Company not found') 
      };
     return loopResults;
       
}
let idInvalidCardCompanie = idInvalidCardCompanies(companies, invalidResult)
console.log(idInvalidCardCompanie)
