// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
// 3 . crear un objeto que contenga specimenNum y dna
 
const pAequorFactory = (num, basesArr) => { // objeto de fabrica
    return {
      _specieNum: num,
      _dna: basesArr,
      
      set dna(newDna) { // modifica dna 
        this._dna = newDna
      },

      mutate () { // mutador al azar 
        let index = Math.floor(Math.random() * this_dna.length);
        this._dna[index] = returnRandBase()
      },
      
      compareDNA (otherpAquor) {
        let totalSame = 0
        for (let i = 0; i < this._dna.length; i++) {
          if (this._dna[i] === otherpAquor._dna[i])  {
              totalSame++
          } // if 
        } // for 1
        let sameCalculated = (totalSame / this_dna.length * 100).toFixed(2); 
        console.log(`specimen #1 and specimen #2 have ${sameCalculated} DNA in common.`);
      }, // compareDNA

      willLikelySurvive () { // porcentajes de G y C en la DNA
        let baseStore = this._dna.filter(base => base === 'G' || base === 'C');
        let totalBaseStore = baseStore.length;
        return totalBaseStore / this._dna.length >= 0.6;
      }, // willLikelySurvive
    }// return 
}// pAequorFactory

let pAequorInstances = [];
let id = 1;

while (pAequorInstances.length < 30) {
  let newPAequor = pAequorFactory(id, mockUpStrand());
  if (newPAequor.willLikelySurvive()) {
    pAequorInstances.push(newPAequor);
  }
  id++;
}
/// para verlo en la consola

pAequorInstances.forEach((instance, index) => {
  console.log(`Instance ${index + 1}:`);
  console.log(`Specimen Number: ${instance._specieNum}`);
  console.log(`DNA: ${instance._dna.join('')}`);
});