function showPage(pageId){

  let pages = document.querySelectorAll(".page");

  pages.forEach(function(page){
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

function showSection(sectionId){

  let sections = document.querySelectorAll(".dashboard-section");

  sections.forEach(function(section){
    section.classList.remove("active-section");
  });

  document.getElementById(sectionId).classList.add("active-section");
}

function loginUser(){

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let role = document.getElementById("role").value;

  let errorMessage = document.getElementById("errorMessage");

  if(email === "" || password === "" || role === ""){

    errorMessage.innerHTML = "Please fill all the details *";

  }

  else{

    errorMessage.innerHTML = "";

    showPage("dashboardPage");

  }

}

function logoutUser(){

  showPage("homePage");

}