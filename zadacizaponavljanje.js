//zad1.
console.log("Hello, World!")

//zad2.
let broj1 = 7;
let broj2 = 5;

let rezultat = broj1 + broj2;

console.log("Zbroj je " + rezultat);

//zad3.
function kvadrat(broj){
    let rezultat = broj * broj;
    return rezultat;
}
let broj = Number(prompt("Unesi broj:"));

console.log("Kvadrat broja" + broj + "je" + kvadrat(broj));

//zad4.
for (let i = 1; i <= 10; i++){
    console.log(i);
}

//zad5.
let broj = Number(prompt("Unesi broj:"));

if (broj % 2 === 0){
    console.log("Broj " + broj + "je paran");
} else{
    console.log("Broj" + broj + "je neparan");
}

//zad6.
let niz = {
    Number(prompt("Prvi broj:")),
    Number(prompt("Drugi broj:")),
    Number(prompt("treci broj:"))
};

console.log(niz[0] + niz[1] + niz[2]);

//zad7.
let a = Number(prompt("Prvi broj:"));
let b = Number(prompt("drugi broj:"));
let c = Number(prompt("treci broj:"));

console.log(Math.max(a,b,c));

//zad8.
function samoglasnici(string){
    let broj = 0;

    for (let slovo of string.toLowerCase()){
        if("aeiou" .includes(slovo)) broj++; 
    }
    return broj;
}
console.log(samoglasnici("meow"));

//zad9.
let ime = prompt("Unesi ime:");
let prezime = prompt("Unesi prezime:");

console.log(`Bok, $(ime) $(prezime)!`);

//zad10.
let prvi = 10;
let drugi = 6;

console.log("Veći:" Math.max(a,b));
console.log("Veći:" Math.min(a,b));
