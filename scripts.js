$(function () {
  let currentTab = "homeTab";

  // Fetch current featured products
  async function displayFeaturedProducts() {
    let { featuredProducts } = await fetch(
      "featuredProducts.json"
    ).then((res) => res.json());

    featuredProducts.forEach(({ productName, featuredPosition, productID }) => {
      $(`#${featuredPosition}`).text(productName);
      let buttonName = featuredPosition + "Button";
      document.getElementById(buttonName).value = productID;
    });
  }

  displayFeaturedProducts();

  // This function makes navbar stay at top of screen
  let navbar = document.getElementById("nav");
  let offset = navbar.offsetTop;

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
  let b = window.matchMedia("(max-width: 613px)");
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

  function changeUI(mode) {
    document.getElementById(currentTab).style.display = "none";
    switch (mode) {
      case "homeTab":
        currentTab = "homeTab";
        break;
      case "nintendoTab":
        currentTab = "nintendoTab";
        break;
      case "playStationTab":
        currentTab = "playStationTab";
        break;
      case "xboxTab":
        currentTab = "xboxTab";
        break;
      case "aboutUsTab":
        currentTab = "aboutUsTab";
        break;
      case "contactTab":
        currentTab = "contactTab";
        break;
      case "viewAllProducts":
        currentTab = "allProducts";
        break;
    }

    document.getElementById(currentTab).style.display = "block";
  }

  /*** BUTTONS  */

  $("#homeButton").on("click", function () {
    changeUI("homeTab");
  });

  $("#nintendoButton").on("click", function () {
    changeUI("nintendoTab");
  });

  $("#aboutUsButton").on("click", function () {
    changeUI("aboutUsTab");
  });

  $("#playStationButton").on("click", function () {
    changeUI("playStationTab");
  });

  $("#xboxButton").on("click", function () {
    changeUI("xboxTab");
  });

  $("#contactUsButton").on("click", function () {
    changeUI("contactTab");
  });

  $("#viewAllProducts").on("click", function () {
    changeUI("viewAllProducts");
  });

  $(".moreinfo").on("click", function () {
    let productId = this.value;
    console.log(productId);
    showMoreInfo(productId);
  });

  async function showMoreInfo(productId) {
    console.log(productId);
    let productsJSON = await fetch("items.json").then((res) =>
      res.json()
    );

    let productObj = productsJSON.products[productId - 1];
    let productName = productObj.productName;
    let system = productObj.system;
    let price = productObj.price;
    let image = 'images/' + productObj.image + '.jpg';
    window.alert

    $("#mtitle").text(productName);
    $("#mbody").html("Price: " + price + "<br>" + "System: " + system + '<br><center><img width="auto" height="250px" src="' + image + '"' + '</img></center>');
    $("#moreInfoModal").modal("show");
  }

 
});
