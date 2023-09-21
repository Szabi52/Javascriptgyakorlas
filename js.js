
// Egy függvény, ami kiír valamit az "main" elembe
function kiir(valami){
    document.getElementById("main").innerHTML = valami;
}

// Egy függvény, ami két számot összead és meghív egy másik függvényt a eredménnyel
function osszead(num1, num2, fugg){
    let sum = num1 + num2;
    fugg(sum);
}

// Osszead függvény meghívása különböző módon
osszead(1, 2, kiir); // Kiírja az eredményt a "main" elembe
osszead(1, 2, function(x){ console.log(x) }); // A konzolon jeleníti meg az eredményt
osszead(1, 2, (x) => { console.log(x) }); // Arrow function használata

// setTimeout használata egy időzített művelet elindításához
setTimeout(() => console.log("alma"), 3000); // 3 másodperc múlva kiírja az "alma"-t a konzolon

// data tömbön forEach metódus használata, ami minden elemre alkalmaz egy függvényt
data.forEach((elem, i) => { console.log("i=" + i + " " + elem.name) });

// data tömbön map metódus használata, ami új tömböt hoz létre a meglévő tömb alapján
let data2 = data.map((x) => 2 * x.price);

// data tömbön sort metódus használata ár alapján rendezve
let data3 = data.sort((a, b) => a.price - b.price);

// data tömbön filter metódus használata ár szerinti szűréshez
let data4 = data.filter((x) => { return x.price > 300000 });

// data tömbön filter metódus használata szöveg alapján szűréshez
let data5 = data.filter((x) => { return x.name.indexOf("Monitor") > -1 });

// data tömbön find metódus használata egy elem kereséséhez (hanyadik helyen van)
console.log(data.find((x) => { return x.id == 3 }));

// data tömbön findIndex metódus használata egy elem indexének kereséséhez
console.log(data.findIndex((x) => x.id == 3));

// data tömbön map metódus használata az elemek átalakításához
let data10 = data.map((x) => { return `id:${x.id}, price:${10 * x.price}` });

// Egy függvény, ami frissíti az adatokat az "main" elemen keresztül
function refresh(tomb){
    tomb.forEach((x) => {
        document.getElementById("main").innerHTML +=
        `<tr>
            <td>${x.id}</td>
            <td>${x.name}</td>
            <td>${x.price}</td>
        </tr>`;
    });
}

// Egy függvény, ami szűri az adatokat és frissíti az "main" elemet
function szures(tag){
    let vissza = data.filter((x) => { return x.name.indexOf(`${tag}`) > -1 });
    refresh(vissza);
}
 

let myForm=document.forms[0];
console.log(myForm.adat.value);
console.log(myForm.ar1.value);
console.log(myForm.ar2.value);

const form = document.querySelector('form');

for(var i=0; i<form.elements.length;i++){
    let elem=form.elements[i];
    console.log(elem.name+" = "+elem.value);
}

const formInputs=document.querySelectorAll('form input');
formInputs.forEach( (x) => {console.log(x.name+" = "+elem.value) } );