fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });

document.addEventListener("click", function (e) {
  const toggle = document.getElementById("menu-toggle");
  const links = document.getElementById("nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("active");
    });
  }
});
