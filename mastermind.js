//Generaaating the code
function generatCode () {
    const digits = [];
    while (digits.length < 4) {
        const digit = Math.floor(Math.random() * 10)
        if (!digits.includes(digit)) {
            digit.push(digit)
        }
    }
    return digits.join('')
}

// Calculate the hit based on guess
function calculateHint(secretCode, guess) {
    let correctPossions = 0;
    let correctDigits = 0;

    for (let i = 0; i < 4; i++) {
        if (secretCode[i] === guess[i]) {
            correctPossions++;
        } else if (secretCode.includes(guess[i])) {
            correctDigits++
        }
    }

    return `${correctPossions}-${correctDigits}`;
}

const args = process.argv.slice(2);
const secretCode = args[0];
const numberOfGuesses = parseInt(args[1]);
const guesses = args.slice(2);

for (let i = 0; i < numberOfGuesses; i++) {
    const hint = calculateHint(secretCode, guesses[i]);
    process.stdout.write(hint);

    if (i < numberOfGuesses - 1) {
        process.stdout.write(" ");
    }
    
}




process.stdout.write("\n");

/// here 
// $ node mastermind.js 1492 5 2013 1865 1234 4321 7491
// // Output: 0-2 1-0 1-2 0-3 2-1

// here
// $ node mastermind.js 5142 10 0327 4572 9037 7021 2409 4720 3970 5091 3071 1347
// // Output: 0-1 1-2 0-0 0-2 0-2 0-2 0-0 1-1 0-1 1-1


//  node mastermind.js <-------




