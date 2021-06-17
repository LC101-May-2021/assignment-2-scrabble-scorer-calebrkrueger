// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let word2Score = "";

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 };
/*function newScrabbleScore(word) {
  word = word.toLowerCase();
  let letterPoints = 0;
  for(let i=0; i<word.length; i++) {
    if (newPointStructure.includes(word[i]) {
      letterPoints = letterPoints + newPointStructure[word][i];
    }
  }
  return letterPoints;
}*/
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some Scrabble!\n");
   word2Score = input.question('Enter a word to score:');
   //console.log(oldScrabbleScorer(word2Score));
   return word2Score;
};

let simpleScore = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: function(word){
  word = word.toUpperCase();
  let score = 0;
  return score = word.length;
  }
};

/*function vowelBonusScore(word){
  word = word.toUpperCase();
  let score = 0;
  for(i=0; i<word.length; i++){
    if(word[i] === "A" || word[i] === "E" ||word[i] === "I" ||word[i] === "O" ||word[i] === "U"){
      score = score+3;
    }else score = score+1;
  }
  return score;
};*/

let vowelBonusScore = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts. consonants are 1 pt.",
  scoringFunction: function(word){
  word = word.toUpperCase();
  let score = 0;
  for(i=0; i<word.length; i++){
    if(word[i] === "A" || word[i] === "E" ||word[i] === "I" ||word[i] === "O" ||word[i] === "U"){
      score = score+3;
    }else score = score+1;
  }
  return score;
}
};


let scrabbleScore = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction: function(word){
    word = word.toLowerCase();
    let letterPoints = 0;
    for(let i=0; i<word.length;i++){
    letterPoints += Number(newPointStructure[word[i]]);
    }
    return letterPoints;
  }
  };

const scoringAlgorithms = [simpleScore, vowelBonusScore, scrabbleScore];

function scorerPrompt(word) {
console.log(`Which scoring algorithm would you like to use?

0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}`);
let algorithmSelection = input.question("Enter 0, 1, or 2:");
console.log(`Score for '${word2Score}': ${scoringAlgorithms[algorithmSelection].scoringFunction(word2Score)}
`);

};

function transform(object) {
  let newScoreObj = {};
  for (item in object) {
    for(i=0; i<object[item].length; i++) {
      newScoreObj[object[item][i].toLowerCase()] = item;
    }
  }
  return newScoreObj;
};

let newPointStructure = transform(oldPointStructure);

newPointStructure[" "] = 0;

function runProgram() {
   initialPrompt();
   scorerPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

