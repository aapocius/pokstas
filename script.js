'use script';

// //returning promices

// new Promise(function (resolve, reject){

//     setTimeout(function(){
//         console.log('paleido');
//    resolve();

// }, 1000)

// }).then (
//     result => {
//         return new Promise(function(resolve, reject){
//             setTimeout(function(){
//                 console.log('paleido');
//                 resolve();
//             }, 1000)
//         })
//     }
// )


// function show(){
//     alert('promise');
// }
// show();


// var promise = new Promise (function (resolve, reject){
//     alert('promise');
// });
// var promise = new Promise (function (resolve, reject){
//     setTimeout(() =>  alert('promise'), 1000);
    
// });



// var promise = new Promise (function (resolve, reject){
//     setTimeout(() =>  resolve('done'), 1000);
    
// }).then (
//     result => console.log(result)
// )

// var promise = new Promise (function (resolve, reject){
//     setTimeout(() =>  reject('not done'), 1000);
    
// }).then (
//     error => console.log(error)
// )

// //catch skirtas pagauti klaidom

// var promise = new Promise (function (resolve, reject){
//     setTimeout(() =>  reject('not done'), 1000);
    
// }).catch (
//     error => console.log(error)
// )

// //finally - skirtas paleist koda nepaisant uzkrovimo salygu

// var promise = new Promise (function (resolve, reject){
//     setTimeout(() =>  reject('not done'), 1000);
    
// }).catch (
//     error => console.log(error)
// ).finally (
//     () => console.log('Finally')
// )


// new Promise (function(resolve, reject){
//     setTimeout(()=> resolve('done'), 1000)
// }).then (
//     result => {
//         alert(result);
//         return result
//     }
// ).then (
//      result => {
//         alert(result);
//         return result
//     }
// )

// // returning promises

// new Promise (function(resolve, reject){
//     setTimeout(()=> resolve(1), 1000);
// }).then(
//     result => {
//         alert(result);
//         return new Promise(function(resolve, reject){
//             setTimeout(()=> resolve(2), 1000);
//         });
//     }
// ).then(
//     result => {
//         alert(result);
//         return new Promise(function(resolve, reject){
//             setTimeout(()=> resolve(3), 1000);
//         });
//     }
// ).then (
//     result => alert(result)
// )


//deivido
// var promices =new Promise(function(resolve, reject){
//     var skaicius = alert('Parasykite savo skaiciu');
//     skaicius = Number(skaicius);
//     setTimeout(()=> {
//        if (isNaN(skaicius)){
//            reject();

//        } else {
//            resolve(skaicius);
//        }
//     }, 1000)
// }).then (
//     result=> alert(result),
//     error => alert('ivestas ne skaicius')
// )

//cao nd lesson 20


// Para??ykite pa??ad??, kuris visada resolve'insis po 5 sekund??i??. Jam resolve - i??oka alert "yes, veikia!". Pa??ado apra??yme teks naudoti setTimeOut - daugiau apie j?? ??ia.
// Pakoreguokite pirm?? pratim??, kad b??t?? 4/5 tikimyb??, jog resolve'ins po 5 sekund??i??, ir 1/5 tikimyb??, kad po 5 sekund??i?? bus reject.
// Then bendrauja su kitu then. Pakoreguokite antr?? pratim??, kad jei resolve'inasi pirmas pa??adas - pasileid??ia then(), kuris papras??iausiai gr????ina ??inut?? "this is a message", ??i?? ??inut?? pagauna antrasis then() ir j?? alertina. Prisiminkime - k?? then() returnina, t?? pasigauna kitas then() kaip parametr??. Nelabai ai??ku? Pasi??i??r??k ??ia apie teorij?? - o jei ne, u??mesk ak?? ?? atsakymus.

// var mygtykas = document.getElementById('mygtukas');

function myFunction() {

    var promises =new Promise(function(resolve, reject){
    var skaicius = Math.floor(Math.random() * 5)+1;
    // skaicius = Number(skaicius);
    setTimeout(()=> {
       if (skaicius===1) {
           reject();

       } else {
           resolve('Nooooooot :)');
       }
    }, 500)
}).then (
    result=> alert(result),
    error => alert('Ok, kietas, kietas :D')
)


}

