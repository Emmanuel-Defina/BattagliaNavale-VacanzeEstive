"option-strict"

let Righe = 10;
 let Colonne = 10;ù

 let divGriglia;
 let divCelle;

 window.onload = function ()
 {
    divGriglia = document.getElementById("griglia");

    divGriglia.classList.add("griglia");

    divCelle = [];
    let g = 0;

    for(let i = 0; i < Righe; i++) {
        divCelle[i] = [];

        for (let j = 0; j < Colonne; j++) {
            let cella = document.createElement("div");
            cella.id = "c" + g;
            g = g + 1;
            cella.classList.add("cella");
            divGriglia.append(cella);
            divCelle[i][j] = cella
        }
    }
 }

 function avviaGioco()
 {
    for(let i = 0; i < 6; i++) 
        {
            
        }
 }