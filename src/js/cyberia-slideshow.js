// get benefit img and descriptions
const ownershipdescription = document.getElementById(
  "benefits-desc-long-ownership"
);
const additionaldescription = document.getElementById(
  "benefits-desc-long-additional"
);
const customizationdescription = document.getElementById(
  "benefits-desc-long-customization"
);
const utilitydescription = document.getElementById(
  "benefits-desc-long-utility"
);
const ownership = document.getElementById("benefits-imgs-ownership");
const additional = document.getElementById("benefits-imgs-additional");
const customization = document.getElementById("benefits-imgs-customization");
const utility = document.getElementById("benefits-imgs-utility");

// ownership show description on hover
//ownership.addEventListener("mouseover", function handleMouseOver() {
  //ownershipdescription.style.display = "table-row-group";
//z});
//hide on mouse out
//ownership.addEventListener("mouseout", function handleMouseOut() {
  //ownershipdescription.style.display = "none";
//});

// additional benefits description show on hover of pic
//additional.addEventListener("mouseover", function handleMouseOver() {
  //additionaldescription.style.display = "table-row-group";
//});
// hide on mouse out
//additional.addEventListener("mouseout", function handleMouseOut() {
  //additionaldescription.style.display = "none";
//});

// customization benefits description show on hover of pic
//customization.addEventListener("mouseover", function handleMouseOver() {
  //customizationdescription.style.display = "table-row-group";
//});
// hide on mouse out
//customization.addEventListener("mouseout", function handleMouseOut() {
  //customizationdescription.style.display = "none";
//});

//utility benefits description show on hover of pic
//utility.addEventListener("mouseover", function handleMouseOver() {
  //utilitydescription.style.display = "table-row-group";
//});
// hide on mouse out
//utility.addEventListener("mouseout", function handleMouseOut() {
  //utilitydescription.style.display = "none";
//});

// show apts on btn click
export function showsmallestate () {
  document.getElementById("first").style.display = "block";
  document.getElementById("second").style.display = "none";
  document.getElementById("third").style.display = "none";
  document.getElementById("fourth").style.display = "none";
};

export  function showmediumestate() {
  document.getElementById("second").style.display = "block";
  document.getElementById("first").style.display = "none";
  document.getElementById("third").style.display = "none";
  document.getElementById("fourth").style.display = "none";
};

export function showlargeestate  ()  {
  document.getElementById("third").style.display = "block";
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.display = "none";
  document.getElementById("fourth").style.display = "none";
};
export function showpenthouse  ()  {
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.display = "none";
  document.getElementById("third").style.display = "none";
  document.getElementById("fourth").style.display = "block";
};


