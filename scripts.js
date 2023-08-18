"use strict";

function handleSubmit() {
  // laays email
  const email = document.getElementById("email").value.toLocaleLowerCase();
  // lấy element của p khi lỗi
  const errorEmail = document.getElementById("error-email");
  // cấu trúc của 1 email
  const checkMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const check = email.match(checkMail);
  const userinfo = document.querySelector("#personal-info .info");
  const inp = document.querySelector(".email-submit");
  if (check !== null) {
    //Hiện thông tin & ẩn input
    userinfo.style.display = "block";
    inp.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = " Error email";
  }
}
function handleOnMouseOver(element) {
  const viewmore = element.querySelector(".control-view .view-more");

  viewmore.style.display = "inline-block";
}
function handleOnMouseOut(element) {
  const viewmore = element.querySelector(".control-view .view-more");
  viewmore.style.display = "none";
}
function handleViewMore(element) {
  const Parentelement = element.closest(".parent");

  const viewmore = Parentelement.querySelector(".control-view .view-more");

  if (viewmore.innerHTML == "View more") {
    const sectionContent = Parentelement.querySelectorAll(".section-content");
    sectionContent.forEach((element) => {
      element.style.display = "block";
      viewmore.innerHTML = "Less more";
    });
  } else {
    const sectionContent = Parentelement.querySelectorAll(".section-content");
    sectionContent.forEach((element) => {
      element.style.display = "none";
      viewmore.innerHTML = "View more";
    });
  }
}
