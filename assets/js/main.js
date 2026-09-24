(function () {
  var toggle = document.querySelector(".menu-toggle");
  var navigation = document.querySelector("#site-nav");

  if (!toggle || !navigation) return;

  toggle.addEventListener("click", function () {
    var isOpen = navigation.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
})();