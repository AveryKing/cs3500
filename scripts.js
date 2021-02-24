$(function () {
  // This function makes navbar stay at top of screen
  var navbar = document.getElementById("nav");
  var offset = navbar.offsetTop;
  window.onscroll = function () {
    fixedNavBar();
  };
  function fixedNavBar() {
    if (window.pageYOffset >= offset) {
      navbar.classList.add("fixednav");
    } else {
      navbar.classList.remove("fixednav");
    }
  }
  var b = window.matchMedia("(max-width: 613px)");
  b.addEventListener("change", setNavBarSize);
  if (b.matches) {
    setNavBarSize(b);
  }

  /**This function alters the menu if screen cannot
   * fit all navbar items in their standard display
   */
  function setNavBarSize(b) {
    if (b.matches) {
      document.getElementById("mobileMenu").style.display = "block";
      document.getElementById("homeButton").style.display = "none";
      document.getElementById("productsButton").style.display = "none";
      document.getElementById("aboutUsButton").style.display = "none";
      document.getElementById("contactUsButton").style.display = "none";
    } else {
      document.getElementById("mobileMenu").style.display = "none";
      document.getElementById("homeButton").style.display = "block";
      document.getElementById("productsButton").style.display = "block";
      document.getElementById("aboutUsButton").style.display = "block";
      document.getElementById("contactUsButton").style.display = "block";
    }
  }

  /***   NAVBAR BUTTONS  */

  $("#homeButton").on("click", function () {
    document.getElementById("tab4").style.display = "none";
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab3").style.display = "none";
    document.getElementById("tab1").style.display = "block";
  });

  $("#productsButton").on("click", function () {
    document.getElementById("tab4").style.display = "none";
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab3").style.display = "none";
    document.getElementById("tab2").style.display = "block";
  });

  $("#aboutUsButton").on("click", function () {
    document.getElementById("tab4").style.display = "none";
    document.getElementById("tab3").style.display = "block";
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab1").style.display = "none";
  });

  $("#contactUsButton").on("click", function () {
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab3").style.display = "none";
    document.getElementById("tab4").style.display = "block";
  });

  /*** "More Info" Button
   *  Loads item data from JSON in items.json
   *  Put the products ID in "value" attribute for more info button.
   */
  $(".moreinfo").on("click", function () {
    var productId = this.value;
    $("#mbody").load("items.json", function (itemsData) {
      var itemsObj = JSON.parse(itemsData);
      $("#mtitle").html(itemsObj.products[productId - 1].productName);
      $("#mbody").html(itemsObj.products[productId - 1].productDescription);
    });
    $("#moreInfoModal").modal("show");
  });
});

/**
 * I updated this 5:04pm 2/24 
 *
 */
