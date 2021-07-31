const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        result.textContent += e.target.id;
        // operateur += il ajoute au lieu d'ecraser comme =
    });
});


// equal etant un id en peut l'appeller sans passer par une variable
equal.addEventListener('click', () => {
    // eval permet de caculer tous ce qui est à l'intérieure 
    result.textContent = eval(result.textContent); 
})

// clear etant un id en peut l'appeller sans passer par une variable
clear.addEventListener('click', () => {
    result.textContent = "0";
    // en renitialise result.textContent ,quand on clique sur C ,il affiche 0
})