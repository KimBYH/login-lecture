"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  pwd = document.querySelector("#pwd"),
  confirmPwd = document.querySelector("#confirm-pwd"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  const req = {
    id: id.value,
    name: name.value,
    pwd: pwd.value,
    confirmPwd: confirmPwd.value,
  };

  console.log(req);

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => console.error(new Error("회원가입 중 에러 발생")));

  //then => 프론트단에서 응답받은 데이터를 가져옴
}
