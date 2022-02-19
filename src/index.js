const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' '
};

function decode(expr) {
    const arrBin = [],
        arrSym = [];
    let char = '',
        result = '';
        counter = 0;

    for (let i = 0; i < expr.length; i++) {
        char += expr[i];
        counter++;
        if (counter === 10) {
            arrBin.push(char);
            counter = 0;
            char = '';
        }
    }
    arrBin.forEach(function (item) {
        if (item[0] === '*') {
            arrSym.push(' ');
        }
        for (let i = 0; i < item.length; i += 2) {
            if (item[i] + item[i + 1] === '11') {
                char += '-';
            } else if (item[i] + item[i + 1] === '10') {
                char += '.';
            }
        }
        if (char !== '') {arrSym.push(char);}
        char = '';
    });

    arrSym.forEach(function(item){
        for (let key in MORSE_TABLE) {
            if (key === item) {
              result += MORSE_TABLE[key];
            }
        }
    })

    return result;
}

module.exports = {
    decode
}