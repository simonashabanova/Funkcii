function sobiranje(a,b) { //definicija na funkcija - function signature- potpis na funkcijata
    c= a + b;
    console.log(c);
}

sobiranje(3, 6);

//funkcii sto ne vrakaat vrednost se vikaat "void" funkcii.

function odzemanje(a, b) {
    var c = a - b;
    return c;
}
 var d = odzemanje (4, 9);
 console.log(d);

var res = parNepar(2);
console.log(res);// par

res - parNepar(7);
console.log(res);// nepar

function parNepar(a) {
 if (a % 2 == 0) {
     return 'par';
 }else {
     return 'nepar';
 } 
}

res = ubavMesec('Dekemvri'); //Dekemvri ima paren broj na bukvi zatoa e ubav mesec
console.log(res); // da

res= ubavMesec('Januari');  //Januari ima neparen broj na bukvi zatoa ne e ubav mesec
console.log(res); // ne

function ubavMesec(m) {
    if (m.length % 2 == 0) { //dali goleminata na mesecot  Dekemvri ima ostatok koga go delime so 2 ,za da vidime dali e paren ili ne paren sekogas delime so 2. Dekemvri ima 8 bukvi, 8 / 2 = 4 , sto znaci nema ostatok i e PAR.  
        return 'da';
    } else {
        return 'ne';
    }
}

var delenje = function(a, b) { //anonimna funkcija , nema ime na funkcijata
    return a/b;
}

delenje(3,6);
console.log(res);
//



var plostina = function(a,b) { //mora da ja definiras prvo funkcijata
    return a*b;
}
res = plostina(2, 13);
console.log(res);

res=plostina(57, 298);
console.log(res);



var calc1 = function(a,b,c){
    var d = a * b;
    return c(d);
}

var calc2 = function(a) {
    return a * a;
}

res = calc1 (3,6,calc2);
console.log(res);

res = calc1(4,7, function(a) { //4* 7 = 28 a = 28 a * a = 28 * 28 = 784  !
    return a * a;
});
console.log(res);



var iminja = ['Vesna', 'Ana', 'Jasna'];
console.log(iminja[0]);
console.log(iminja[1]);
console.log(iminja[2]);

var f = 2;
console.log(iminja[f]);

var dolzina = iminja.length;
console.log(dolzina);

iminja[3] = 'Pero'; //dodavanje na element vo nizata  na cetvrtata pozicija.
console.log(iminja);

iminja[2] = 'Janko';// ova pravi promena na vrednosta so index 2 (Jasna)
console.log(iminja);

var max = iminja.length;
iminja[max] = 'Stojko';
console.log(iminja);

iminja.push('Marko');// avtomatsko dodavanje na krajot od nizata
console.log(iminja);

iminja[80] = 'Tamara';
iminja.push('Kristina');
console.log(iminja);
console.log(iminja.length);//ima 81 elementi zatoa sto tamara se naogja na 80-ta pozicija. 

//Nizite vo js mozat da sodrzat razlicni tipovi na podatoci

var niza = [345, 'Text', 'Pak string', 'I pak string', false, true, false, max, 11, 12, iminja];
console.log(niza);

niza = [345, 'Text', 'Pak string', 'I pak string', false, true, false, max, 11, 12];
for(var i = 0; i < 100; i = i + 1) {
    console.log('JS', i);
}

for(var i = 0; i < niza.length; i++) {
    // if(Number.isInteger(niza[i])){ // vraka integeri (broevi)
    // console.log(niza[i]);
    // }
    if(typeof niza[i] == "string"){ //vraka stringovi (tekst)
        console.log(niza[i]);
    }
}

if(2 == '2') {
    console.log("2 e ednakvo na '2' ")
}

if (2 === '2') {
    console.log("2 e ednakvo na '2' ")
}


//domasna 







    