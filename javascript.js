document.addEventListener("DOMContentLoaded", function() {

  // dokumentin KAIKKI a-elementit
  linkit = document.getElementsByTagName("a");

  for (var a = 0; a < linkit.length; a++) {
    if (document.location.href.match(linkit[a].href)) {

      // a-elementti ilman href-attribuuttia on validi
      linkit[a].removeAttribute("href");
    }
  }
}, false);
