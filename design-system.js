function showNav() {
    let mainNav = document.getElementById("main-nav");
    let navbarToggle = document.getElementById("navbar-toggle");

    if (navbarToggle.classList.contains("active")) {
        mainNav.style.display = "none";
        navbarToggle.classList.remove("active");
    } else {
        mainNav.style.display = "flex";
        navbarToggle.classList.add("active");
    }
}