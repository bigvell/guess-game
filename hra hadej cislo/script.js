// proměnné
const inputNumber =
  document.getElementById("input");
const btn = document.getElementById("btn");
const container =
  document.querySelector(".container");
const result = document.querySelector(".result");
const counter =
  document.querySelector(".counter");

//proměnná pro uloženi inputu
let cislo;
//proměnná na určitýpočet pokusů
let pokusy = 0;

//náhodně generované čislo
const randomNumber = Math.ceil(
  Math.random() * 10
);
//console log nechávám pro ujištění že to funguje
//pokud by to bylo pro klienta tak to samozřejmě smažu
console.log(randomNumber);

//button
btn.addEventListener("click", () => {
  //uloží do proměnné číslo - hodnotu kterou jsme vepsali do inputu
  cislo = inputNumber.value;

  console.log(pokusy);
  if (isNaN(cislo)) {
    result.innerHTML =
      "Napište platnou hodnotu - ČÍSLO!";
  } else if (cislo > 10) {
    result.innerHTML =
      "Od 1 do 10, co na tom nechápeš ty jelito ?";
  } else {
    //pokusy +1
    pokusy = 0
    pokusy++;
    counter.innerHTML = pokusy;
    if (cislo < randomNumber) {
      result.innerHTML =
        "Zadaná hodnota se neshoduje, zkuste vyšší hodnotu";
    } else if (cislo > randomNumber) {
      result.innerHTML =
        "Zadaná hodnota se neshoduje, zkuste nižší hodnotu";
    } else if (pokusy === 5) {
      btn.style.visibility = "hidden";
      result.innerHTML =
        "Překročili jste maximální počet pokusů, hra končí";
    } else {
      result.innerHTML =
        "Uhodli jste! Gratulujeme, hra končí.";
      btn.style.visibility = "hidden";
    }
  }
});
