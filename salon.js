const btn = document.querySelector(".nav-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".closeBtn");
const items = document.querySelector(".menu-list li");

btn.onclick = () => sidebar.classList.add("open");
closeBtn.onclick = () => sidebar.classList.remove("open");

document.getElementById("home").onclick = () => {
  location.href = "index.html";
};

document.getElementById("about").onclick = () => {
  location.href = "aboutus.html";
};

document.getElementById("services").onclick = () => {
  location.href = "services.html";
};

document.getElementById("contact").onclick = () => {
  location.href = "whatsapp://send?phone=9555987317&text=Hi";
};

//form js //

const openpopupBtn = document.getElementById("openpopupBtn");
if (openpopupBtn) {
  openpopupBtn.onclick = () => {
    location.href = "form.html";
  };
}

//footer panel 1
const aboutPage = document.getElementById("about-page");
if (aboutPage) {
  aboutPage.onclick = () => {
    location.href = "aboutus.html";
  };
}

const servicePage = document.getElementById("service-page");
if (servicePage) {
  servicePage.onclick = () => {
    location.href = "services.html";
  };
}

const formPage = document.getElementById("form-page");
if (formPage) {
  formPage.onclick = () => {
    location.href = "form.html";
  };
}

//footer panel 2
const privacyPage = document.getElementById("privacy-page");
if (privacyPage) {
  privacyPage.onclick = () => {
    location.href = "privacy.html";
  };
}

const accessPage = document.getElementById("access-page");
if (accessPage) {
  accessPage.onclick = () => {
    location.href = "accessibility.html";
  };
}

const termsPage = document.getElementById("terms-page");
if (termsPage) {
  termsPage.onclick = () => {
    location.href = "terms.html";
  };
}

/* social */

const insta = document.getElementById("insta");
if (insta) {
  insta.onclick = () => {
    location.href = "https://www.instagram.com/_saheb_khan_1/";
  };
}

const facebook = document.getElementById("facebook");
if (facebook) {
  facebook.onclick = () => {
    location.href = "https://www.facebook.com/share/1FH1W1GPvX/";
  };
}

const whatsapp = document.getElementById("whatsapp");
if (whatsapp) {
  whatsapp.onclick = () => {
    location.href = "https://wa.me/9555987317?text=Hi";
  };
}
