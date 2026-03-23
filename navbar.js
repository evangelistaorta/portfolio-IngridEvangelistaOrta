fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

   
    const toggle = document.getElementById("menu-toggle");
    const links = document.getElementById("nav-links");

    if (toggle && links) {
      toggle.addEventListener("click", () => {
        links.classList.toggle("active");
      });
    }
  });

document.body.classList.toggle("menu-open");

toggle.addEventListener("click", () => {
    links.classList.toggle("active");
    document.body.classList.toggle("menu-open");
});
