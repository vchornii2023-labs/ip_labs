function functionTask1() {
  desc =
    "Тут у нас такий результат тому що змінна var має hoisting \
    і її оголошення спливає до гори, навідмінну від let та const. \
    А const та let не мають такого hoisting і виведиться помилка \
    Uncaught ReferenceError:";
  console.log(desc);
  console.log(a);
  var a = 10;
  console.log(b);
  let b = 20;
  console.log(c);
  const c = 30;
}
function functionTask2() {
  function testScope() {
    if (true) {
      var x = 5;
      let y = 10;
      const z = 15;
    }
    console.log(x); // ?
    console.log(y); // ?
    console.log(z); // ?
  }
  testScope();
  desc =
    "Тут змінна типу x виведеться, оскільки вона не є обмеженою блочник if, на відміну від let та const \
  і виведеться помилка Uncaught ReferenceError";
  console.log(desc);
}
function functionTask3() {
  desc =
    "тут принципі все працює як я і +- очікував. Лише я не розумію чому \
    undefined + 1 дорівнює NaN? І Тут постає два питання. Перше, чи NaN може бути як значення якоїсь \
    змінної. І друге що таке власне NaN (Як я розумію це означає що результат не є числом.)";
  console.log(desc);
  console.log('5 + "5" ', 5 + "5"); // "55"
  console.log('"5" - 2 ', "5" - 2); // 3
  console.log("true + false ", true + false); // true
  console.log("true * false ", true * false); // false
  console.log("null + 1 ", null + 1); // 1
  console.log("undefined + 1 ", undefined + 1); // undefined
  console.log("0 == false ", 0 == false); // true
  console.log("0 === false ", 0 === false); // false
}
function functionTask4() {
  desc =
    "На скільки я розумію тут працює правило що якщо посилання на обєкт зберігається \
  у змінній const, то змінити обєкт на інший. Тобто замінити поточне посилання у стеку на інше\
  ми не можемо. Але переходити за посиланням і змінювати сам обєкт. А Object,freeze() запобігає \
  навіть цьому. І викидує помилку Uncaught TypeError";

  const person = {
    name: "John",
    age: 30,
  };
  Object.freeze(person);
  person.age = 31;
  person.city = "New York";
  console.log(person); // ?
  person = { name: "Alice", age: 25 }; // Чи спрацює?
}

function functionTask5() {
  desc =
    "Тут працює все як я очікував. Єдине питання може не по темі закоментоване у самому коді.\
  Власне чому я не можу викликати? Адже я начепто її оголосив і просто присвоїв. \
  Вона втрачається? що з нею відбувається?";
  function checkType(value) {
    return typeof value;
  }
  console.log(checkType2(10)); // "number"
  console.log(checkType("Hello")); // "string"
  console.log(checkType(null)); // "object"

  //   let checkType = function checkType2(value) {
  //     return typeof value;
  //   }
  //   console.log(checkType2(10)); // "number"
  //   console.log(checkType("Hello")); // "string"
  //   console.log(checkType(null)); // "object"
  // }
}
