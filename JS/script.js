

//! READ MORE

function myFunction() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  //! SCROLL UP

  window.onscroll = function () {
    toggleScrollUpButton();
  };
  
  function toggleScrollUpButton() {
    const scrollUpButton = document.querySelector(".upArrow");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollUpButton.style.display = "block";
    } else {
      scrollUpButton.style.display = "none";
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  

  //! MENU

  const OpenMenu = document.querySelector(".menu");
  const CloseMenu = document.querySelector(".close-menu");
  const Mobile_Menu = document.querySelector(".nav-bar");
  
  Mobile_Menu.classList.add("hidden");
  CloseMenu.classList.add("hidden");
  
  let isOpen = false;
  
  OpenMenu.addEventListener("click", () => {
    if (!isOpen) {
      CloseMenu.classList.remove("hidden");
      Mobile_Menu.classList.remove("hidden");
      OpenMenu.classList.add("hidden");
      document.body.classList.add("menu-open");
    }
  });
  
  CloseMenu.addEventListener("click", () => {
    Mobile_Menu.classList.add("hidden");
    CloseMenu.classList.add("hidden");
    OpenMenu.classList.remove("hidden");
    document.body.classList.remove("menu-open")
  });
  
  