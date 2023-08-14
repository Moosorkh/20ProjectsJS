// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(pAequor) {
      let commonBaseCount = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          commonBaseCount++;
        }
      }
      const percentageCommon = (
        (commonBaseCount / this.dna.length) *
        100
      ).toFixed(2);
      console.log(
        `specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentageCommon}% DNA in common`
      );
    },
    willLikelySurvive() {
      let cgBaseCount = 0;
      for (let d of this.dna) {
        if (d === "C" || d === "G") cgBaseCount++;
      }
      const percentage = ((cgBaseCount / this.dna.length) * 100).toFixed(2);
      return percentage >= 60;
    },
  };
};

//Generating 30 instances of DNAs for experiment purposes
let instances = [];
let specimenNum = 1;
while (instances.length < 30) {
  let potentialInstance = pAequorFactory(specimenNum, mockUpStrand());
  if (potentialInstance.willLikelySurvive()) {
    instances.push(pAequorFactory(mockUpStrand(), returnRandBase()));
    specimenNum++;
  }
}
console.log(instances);
