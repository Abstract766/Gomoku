/*
//alert('Hello');

console.log('Helo');
console.error('hiba van!');
console.warn('lehet hiba');
*/
// let, const, var
//const= nem változik
let kor = 20;
kor = 21;
console.log(kor);


const nev = 'Zsolt';
const kor2 = 20;
console.log(nev, kor2);

const date = new Date();
console.log(date);

const x = null;
const y = undefined;

//Típust ad vissza
console.log(typeof nev);

//modern szabvány összefűzésre ALTGR+7
console.log(`${nev} ${kor}`);

console.log(nev.length);
console.log(nev.toUpperCase());
// egy szöveg betűit levágja
console.log(nev.substring(0,3));
//listát spliteljük
let lista = 'alma,körte,banán';
console.log(lista.split(','));
//lista 0 eleme
console.log(lista.split(',')[0]);
//Hanyadik nap a hétnek
console.log(date.getDay());
//Hanyadika van?
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getMonth()+1);
//Idő változtatás
date.setHours(4);

console.log(date.toISOString());

const x1 = 12;
const x2 = '12';

// A három egyenlő típusonként is összehasonlítsa az értékeket
if (x1 === x2) {
    console.log('IGAZ');
}else{
    console.log('HAMIS');
}

switch(x1){
    case 10:
        console.log('IGAZ');
        break;
    case 11:
        console.log('IGAZ');
        break;
    default:
        console.log('NEM IGAZ');
    
}

//logikai állítás
const color = x1 > 10 ? 'piros' : 'kek';
console.log(color);

//TÖMBÖK

const allatok = ['kutya', 'macska', 'ló'];
console.log(allatok);
console.log(allatok.length);
allatok[3] = 'kacsa';
console.log(allatok);
//tömb végére szúr be
allatok.push('tigris');
//tömb elejére szír be
allatok.unshift('cica');
console.log(allatok);
//tömb elem kiszedés egy változóba, az utolsó elemet
let elem = allatok.pop();
console.log(elem);
console.log(allatok);
//hol van egy bizonyos elem a tömbben
console.log(allatok.indexOf('kutya'));

//OBJECT
const ember = {
    name: 'Zsolt',
    age: 20,
    hobbies: ['snowboard'],
    address: {
        street: 'valami utca',
        city: 'budapest'
    }
};

//Objectum utó hozzáadás
ember.email = 'valami@email.hu';
console.log(ember);
console.log(ember.name);

//JSON stringben kiírja az egészet
console.log(JSON.stringify(ember));

//ÚTVONAL es6 új fonkció
const {name, age, address:{street}} = ember;
//így csak elég a street
console.log(street);

const todo = [
    {
        id: 1,
        text: 'szöveg'
    },
    {
        id: 2,
        text: 'szöveg2'
    }
];
console.log(todo);
console.log(todo[0].id);

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}
//tömb kiíratás for ciklussal
for (let i = 0; i < todo.length; i++) {
    console.log(todo[i]);
}
// a benne lévő szöveget írja ki
for(let cuccok of todo){
    console.log(cuccok.text);
}

todo.forEach(function(todo){
    console.log(todo);
})

const todoId = todo.map(function(todo){
    return todo.id;
});
console.log('map: '+todoId);


const filtered = todo.filter(function (todo){
    return todo.id == 1;
});
console.log(filtered);

//FUNCTIONS

function osszeadas(szamx, szamy){
    return szamx +szamy;
}
let eredmeny = osszeadas(10,2);
console.log(eredmeny);
console.log(osszeadas());
//ugyanaz ami felette van
const osszeadas2 = (szamx,szamy) => {return szamx + szamy;}

console.log(osszeadas2('he','lo'));

//OBJECT

function Ember(nev, kor, aktiv){
    this.nev = nev;
    this.kor = kor;
    this.aktiv2 = aktiv;

    this.getNev = function (elotag){
        return `${elotag} ${nev}`;
    }
}
const emb1 = new Ember('Zsolt',20, true);
console.log(emb1);

console.log(emb1.getNev('Mr.'));

// átláthatóbb
class Allat{
    constructor(nev,kor){
        this.nev = nev;
        this.kor = kor;
    }
    //függvények
    getSzulEv(){
        return new Date(). getFullYear() - this.kor;
    }
}
const allat1 = new Allat('kutya', 5);
console.log(allat1.getSzulEv());