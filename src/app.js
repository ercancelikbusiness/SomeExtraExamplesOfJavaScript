

let student = { id: 1 , name:"hasan"}

let students = [student, {id:2 , name:"ercan"}, "Ankara" , {city: "Konya"}]


// aşağıdaki ... konusu "rest" konusudur -> Js 'deki karşılığı
 //params -> c# 
 // varArgs -> Java

let showProducts = function (id,...products){ // products bir array kabul edilir ... ile içine istediğini at
    console.log(id)
    console.log(products[0]) 
}
//console.log(typeof showProducts) // typeof'dan sonra yazılanın türünü belirtdir burada function yazacaktır
//showProducts(10, ["elma","armut","karpuz "]) // ...products zaten array idi array içine array atarsan
                                             // products değişkeninde arrayin tüm elemanları 0 ıncı index'de olur
                                             // yani products[0] ın içinde tüm elemanlar çıkar arrayın ilk elemanı degıl

//aşağıda "spread" konusu işlenecek  rest ve spread'de ... kullanılıo ama kullanım yerine göre işlem değişiyor
// *Math.max metodu sayıların en büyüğünü yazdırır
let points = [ 1,2,22,4,7,55,42]
console.log(...points) // point  bir arraydi bu arrayi parçalara ayırdık
console.log(Math.max(...points)) // normalde math max içine array atamayız ayrı sayılar atmamız lazım ama spread ile bunu çözdük
console.log(..."ABC", "d" ,..."EFG") // çıktı A B C d E F G

//aşağıda Destructuring konusu işlenecek
/*
let populations = [10000,20000,30000]
let [small,medium,high] = populations // smal medium high değişkenlerine, population değişkeninin verilerini dağıttık

console.log(small + medium + high) // 60000
*/

let populations = [10000,20000,30000,[40000,10000]]
let [small,medium,high,[veryHigh,Maximum]] = populations // yada sadece parantezsiz veryHigh olsaydı 40k ve 10k içine giderdi

function someFunction([small1], number){
console.log(small1) 
}
someFunction(populations) // burda small1 in içinde sadece 10000 vardır... diceksinki someFunction paremetresinde [small1]
//yazarak bu paremetrenin array olacağını belirttik diceksin ama hayır JS de tip belirtme yok bunu typeScript ile yapabilir
//iz burda [small1] yerine small1 yazsaydık paremetreyi, ve metoda yine populations'u gönderseydik bu sefer
//tüm elemanları gönderebilirdik  [small1] yaparsak bunun destruction olduğunu belirtmiş oluruz ve bir dizi
//gelirse ilk elemanı small1 in içinde olacagını söylemiş oluruz

// aşağıda bisey.id gibi kullanılabilen bir durumu göstereceğim

let category = {id: 1 , name:"ercan"}
console.log(category.id)
console.log(category["id"]) // bu iki gösterimde aynıdır.

//şimdi yukardaki objeyi destruct edelim

let {id,name}= category
console.log(id)
console.log(name)

// /////////////////////////// öğretici örnek../////////////////
let a =  [..."ABC","D",..."EFG","H"]

 let [x,y,z,t] = a

 console.log(t);  // burdaki t  çıktısı D dir cunkü a "A" , "B" ... şekline dönüşür
 // ////////////////////////// ////////////////////////////////////////////////



 /////////// öğretici örnek 2 /////////////////

console.log(Math.max(..."ABC","D",..."EFG","H")) // math max harflerde çalışmaz

 // o yüzden aşağıdaki gibi yaparız ;
 let letters = ['A', 'B', 'C'];

let maxChar = String.fromCharCode(Math.max(...letters.map(letter => letter.charCodeAt(0))));

console.log(maxChar); // Çıktı: C

//////////////////////////////////////////////////////////////////////////////////////
 



























/*
console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{ <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> /

console.log(konutKredileri)
*/