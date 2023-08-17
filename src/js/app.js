//--btn scroll starts
window.onscroll = function () {
  myFunction()
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  // document.getElementsByClassName("bar").style.width = scrolled + "%";
  $('.bar').css({
    "height": scrolled + '%'
  });
}
//-btn scroll ends

//swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
});

//form validation
document.getElementById("submit").addEventListener("click", function(event) {
alert("hello");
});

function checkData() {
  var name = document.getElementById("name");
  var mail = document.getElementById("mail");
  var phone = document.getElementById("phone");
  var nationality = document.getElementById("nationality");

  var nameValue = name.value.trim();
  var emailValue = mail.value.trim();
  var phoneValue = phone.value.trim();
  var nationalityValue = nationality.value.trim();

  if (nameValue === "") {
      setError(name, "This field is required");
  } else {
      setSuccess(name);
  }

  if (emailValue === "") {
      setError(mail, "This field is required");
  } else if (!isValidEmail(emailValue)) {
      setError(mail, "Please enter a valid email address");
  } else {
      setSuccess(mail);
  }

  if (phoneValue === "") {
      setError(phone, "This field is required");
  } else {
      setSuccess(phone);
  }

  if (nationalityValue === "") {
      setError(nationality, "This field is required");
  } else {
      setSuccess(nationality);
  }

  if (nameValue !== "" && emailValue !== "" && phoneValue !== "" && nationalityValue !=="" ) {
      displaySuccessMessage();
      hideForm();
  }
}

function setError(inputElement, msg) {
  var errorBox = inputElement.nextElementSibling;
  errorBox.textContent = msg;
  errorBox.classList.add("error-text");
}

function setSuccess(inputElement) {
  var errorBox = inputElement.nextElementSibling;
  errorBox.textContent = "";
  errorBox.classList.remove("error-text");
}

function isValidEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function displaySuccessMessage() {
  var successMessage = document.getElementById("successMessage");
  successMessage.style.display = "flex";
}

function hideForm() {
  var formHeading = document.querySelector(".registration");
  formHeading.style.display = "none";
}

function redirectToHomePage() {
window.location.href = "index.html"; 
}

