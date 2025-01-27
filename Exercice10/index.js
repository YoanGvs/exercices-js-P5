//votre code ici
let result = '';

function printNumbers(n){
    for (let i = 1; i <= n; i++) {
        result += i + ' ';
    }
    return result.trim();
}

export default printNumbers