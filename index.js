"option-strict"

 let Righe = 10;
 let Colonne = 10;

 const nNavi = [2,3,4,5,6];

let matNavi = [];


 window.onload = function ()
 {

    let divGriglia;
    let divCelle;

    divGriglia = document.getElementById("griglia");

    divGriglia.classList.add("griglia");

    divCelle = [];
    let g = 0;

    for(let i = 0; i < Righe; i++) {
        divCelle[i] = [];

        for (let j = 0; j < Colonne; j++) {
            let cella = document.createElement("div");
            cella.id = i + "-" + j;
            cella.classList.add("cella");
            cella.addEventListener("click", function() {
                controlloVittoria(cella.id);
            });
            divGriglia.append(cella);
            divCelle[i][j] = cella
        }
    }

    for(let i = 0; i < Righe; i++)
    {
        matNavi[i] = [];

        for(let j = 0; j < Colonne; j++)
        {
            matNavi[i][j] = 0;
        }
    }
 }

 function avviaGioco()
 {
    
    let bntGioco = document.getElementById("Start");

    bntGioco.disabled = true;

    let lungh = 0;

    let modDiPos; 

    let posX;
    let posY;

    for(let i = 0; i < nNavi.length; i++)
    {
        lungh = nNavi[i];

        let rigOcol = Math.floor(Math.random() * 2);

        if(rigOcol == 0)
        {
            modDiPos = "riga";
        }
        else
        {
            modDiPos = "colonna";
        }

        do
        {

        posX = Math.floor(Math.random() * Righe);
        posY = Math.floor(Math.random() * Colonne);

        }while(!controlloPosizione(lungh, posX, posY, modDiPos));

        posizionaNave(lungh, posX, posY, modDiPos);

    }

    console.log("Matrice delle navi:");
    console.table(matNavi);
 }

 function controlloPosizione(lungh, posX, posY, modDiPos)
 {
    if(modDiPos === "riga")
    {
        if(posX + lungh > Righe)
        {
            return false;
        }

        for(let k = 0; k < lungh; k++)
        {
            if(matNavi[posX + k][posY] === 1)
            {
                return false;
            }
        }
    }
    else
    {
        if(posY + lungh > Colonne)
        {
            return false;
        }

        for(let k = 0; k < lungh; k++)
        {
            if(matNavi[posX][posY + k] === 1)
            {
                return false;
            }
        }
    }

    return true;
 }

 function posizionaNave(lungh, posX, posY, modDiPos)
 {
    if(modDiPos === "riga")
    {
        for(let k = 0; k < lungh; k++)
        {
            matNavi[posX + k][posY] = 1;
        }
    }
    else
    {
        for(let k = 0; k < lungh; k++)
        {
            matNavi[posX][posY + k] = 1;
        }
    }
 }

 function controlloVittoria(idCella)
 {
    let parti = idCella.split("-");
    let riga = Number(parti[0]);
    let colonna = Number(parti[1]);

    let cella = document.getElementById(idCella);

    if(matNavi[riga][colonna] === 1)
    {
        cella.style.backgroundColor = "green";
    }
    else
    {
        cella.style.backgroundColor = "red";
    }
 }