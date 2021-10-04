// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, dnaArray) => {
  return {
  specimenNum: number,
  dna: dnaArray,
  mutate() {
  let randomIndex = Math.floor(Math.random() * this.dna.length);
  let mutatedBase = returnRandBase();
  while (mutatedBase === randomIndex) {
    let mutatedBase = returnRandBase();
  }
  this.dna[randomIndex] = mutatedBase;
  return this.dna;
  },
  compareDNA(pAquor) {
  let sameCount = 0;
  for (let a = 0; a < this.dna.length; a++) {
    if(this.dna[a] === pAquor.dna[a]){
      sameCount++;
    }
  }
  let percentage = (sameCount / this.dna.length) * 100;
  return percentage;
  },
  willLikelySurvive() {
   let cAndgCount = 0;
   for (let j = 0; j < this.dna.length; j++){
     if (this.dna[j] === 'C' || this.dna[j]=== 'D'){
       cAndgCount++;
     }
   }
    const survivalRate = ((cAndgCount / this.dna.length) * 100) >= 60;
   },
  }
};

const buildSampleInstances = () =>{
let sampleInstances = [];
let sampleIndex = 1;
while (sampleInstances.length < 30) {
  let currentInstance = pAequorFactory(sampleIndex, mockUpStrand());
  if (currentInstance.willLikelySurvive()){
    sampleInstances.push(currentInstance);
    sampleIndex++;
  }
}
return sampleInstances;
};

buildSampleInstances();
 


