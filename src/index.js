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
};

function decode(expr) {
    let result = '';
    let symbol = '';
    for (let i=0;i<expr.length;i+10){
        let j = 1;
        let code = expr.slice(i, i+10);
        let pureMorze = code.slice(code.indexOf('1', i)).split('');
        pureMorze[0] === '*' ? result += ' ' : '';
        let pureMorzeCode = '';
        
        while(pureMorze[0] !== '*' && j < pureMorze.length){
            pureMorze[j] === '1' ? pureMorzeCode += '-' : pureMorzeCode += '.';
            j+=2;
        }
        symbol = MORSE_TABLE[pureMorzeCode];
        result += symbol;
    }

return console.log(result);
}


decode ("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010");

// module.exports = {
//     decode
// }