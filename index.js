
function saturdayFun (defau= "roller-skate"){
    console.log(`This Saturday, I want to ${defau}!`)
}
saturdayFun()
saturdayFun("bathe my dog")
//This Saturday, I want to roller-skate!
//This Saturday, I want to bathe my dog!

function mondayWork(defaul= "go to the office"){
    console.log (`This Monday, I will ${defaul}`)
}
mondayWork()
mondayWork("work from home")
//This Monday, I will go to the office
//This Monday, I will work from home

function outer(greeting, msg = "It's a fine day to learn") {
    const innerFunction = function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction;
  }
  console.log (outer("hello")("student", "javascript"))
  //hello, student! It's a fine day to learn javascript


// function wrapAdjective (def="*"){
//     const inner = function (special){
//         return  `You are ${def} ${special}`
//     }
//     return inner("a dedicated programer")
// }
// console.log (wrapAdjective())
// console.log (wrapAdjective("%")("a dedicated programer"))


function wrapAdjective (def="*"){
    const inner = function (special){
        return  `You are ${def} ${special}`
    }
    return inner
}

console.log (wrapAdjective("%")("a dedicated programer"))
//You are % a dedicated programer
