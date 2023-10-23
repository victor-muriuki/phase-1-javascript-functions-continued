
function saturdayFun (defau= "roller-Skate"){
    console.log(`This Saturday, I want to ${defau}!`)
}

saturdayFun("bathe my dog!")

function mondayWork(defaul= "go to the office"){
    console.log (`This Monday, I will ${defaul}`)
}

mondayWork("work from home")

function outer(greeting, msg = "It's a fine day to learn") {
    const innerFunction = function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction;
  }
  console.log (outer("hello")("student", "javascript"))


function wrapAdjective (def="*"){
    const inner = function (special){
        return  `You are ${def} ${special}`
    }
    return inner()
}
wrapAdjective(("%")("a dedicated programmer"))
