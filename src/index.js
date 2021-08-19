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
    let pureMorze = [];
    let pureMorzeCode = '';
    for (let i=0;i < expr.length; i+=10){
        let j = 1;
        let code = expr.slice(i, i+11);
        if (code[0] === '*') {
            result += ' ';}
        else {
        pureMorze = code.slice(code.indexOf('1')).split('');
        pureMorzeCode = '';
                while(j < pureMorze.length){
                    pureMorze[j] === '1' ? pureMorzeCode += '-' : pureMorzeCode += '.';
                    j += 2;
                }
                result += MORSE_TABLE[pureMorzeCode];
            }
    }
return result;    
}
module.exports = {
    decode
}