
let user = document.getElementById("userForm");
let enter = document.getElementById("userBtn");

let formName = document.getElementById("form_name");
let formEmail = document.getElementById("form_email");
let formPassword = document.getElementById("form_password");
let formSubmit = document.getElementById("form_submit");

let name = document.getElementById("name");


let closeBtnUser = document.getElementById("closeBtnUser");
let userСabinet = document.getElementById("userСabinet");
let history = document.getElementById("lastOder");


enter.addEventListener("click", () => {
  if (user.style.display == "flex") {
    user.style.display = "none";
  } else {
    user.style.display = "flex";
  }
});

user.addEventListener("click", () => {
  event.stopPropagation(); 
});

function checkName() {
  if (formName.value.length > 3 && formName.value.trim() !== "") {
    alert(`Здравствуйте ${formName.value}`);
    return true;
  } else {
    alert("Введите имя  ");
  }
}

function checkEmail() {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(formEmail.value) !== false) {
    return true;
  } else {
    alert("Введите почту");
  }
}
function checkPassword() {
  let reg = /[0 - 9]/;
  if (formPassword.value.length > 4 && reg.test(formPassword.value) == false) {
    return true;
  } else {
    alert("Введите пороль больше 4");
  }
}

formSubmit.addEventListener("click", () => {
  if (checkName() == true && checkEmail() == true && checkPassword() == true) {
    let person = new Person(
      formName.value,
      formEmail.value,
      formPassword.value
    );
    console.log(person);
    name.innerHTML ='Вы вошли под именем: ' + formName.value;
    userСabinet.style.display = "flex";
    user.style.display = "none";
  } else {
    alert("Попробуй еще");
  }
});

class Person {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

closeBtnUser.addEventListener("click", () => {
  userСabinet.style.display = "none";
  promo.style.display = "flex";
});

history.addEventListener("click", () => {
  alert('Пока нет:(');
});


