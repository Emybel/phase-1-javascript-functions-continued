// Ddfine a function uding function Declaration
/* function razzle(lawyer = "Billy", target = "'em" ){
    console.log(`${lawyer} razzle-dazzeles ${target}!`);
}
razzle();
razzle("Methuselah", "T'challah"); */

function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`)
}
saturdayFun();
saturdayFun("bathe my dog");

const mondayWork = function(activity = "go to the office"){
    return (`This Monday, I will ${activity}.`)
}
mondayWork();
mondayWork("work from home");

function outer(greeting, msg = "It's a fine day to learn") {
    const innerFunction = function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction;
  }

  const storedFunction = outer("Hello");
storedFunction("student", "JavaScript");

function wrapAdjective(symbol){
    return function(adjective){
      return `You are ${symbol}${adjective}${symbol}!`
    }
  
}