// votre code ici


function checkAge (age){
    if (age < 18){
        return 'Vous êtes mineur.';
    }
    else if (age > 18 && age < 65){
        return 'Vous êtes majeur.';
    }
    else if (age > 65) {
        return 'Vous êtes senior.';
    }
    else {
        return 'Veuillez renseigner votre age'
    }
}


export default checkAge;

