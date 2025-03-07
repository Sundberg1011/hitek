
function oppstart() {   //lager en funksjon som heter oppstart og alt under skjer
    document.getElementById("summer").onclick = summerPris; // setter slik at "summer" knappen fra et html dokument har en funksjon som her summerPris
}

function summerPris() {// ny funksjon som heter SummerPris
// Hent verdi fra vare1
let Vare = document.getElementById("vare1").value;
// Hent verdi fra pris1
let Pris = document.getElementById("pris1").value;
// Hent verdi fra ant1
let Antall = document.getElementById("ant1").value;

// Beregn totalpris
let Totalpris = Pris * Antall;
// Logg totalpris
console.log("Totalpris:", Totalpris);

// Oppdater oversikt
document.getElementById("oversikt").innerHTML = "Du har handlet:" + " " + Antall + " " + Vare;
// Oppdater sum
document.getElementById("Sum").innerHTML = "Totalprisen er:" + Totalpris + "kr";
// Tom linje (ikke nødvendig)
document.getElementById("Bestill").innerHTML;

}

