// ------------------------ DARK/LIGHT THEME BTN (victor)-------------------------------

// Creation [themeBtn] Light/Dark Theme
const themeBtn = document.createElement("button");

// Add CLASS to the [themeBtn]
themeBtn.classList.add("themeBtn");
themeBtn.classList.add("darkTheme");

// Add Text in the [themeBtn]
themeBtn.innerHTML = "Go Dark";

// Add [addEventListener] + [function] flechee qui switch theme dark/light
themeBtn.addEventListener("click", () => {
  const allBtn = document.querySelectorAll("button");
  for (let btn of allBtn) {
    btn.classList.toggle("darkTheme");
  }

  document.body.classList.toggle("darkTheme");

  // condition pour changer text "go dark" -> "go light"
  if (!themeBtn.classList.contains("darkTheme")) {
    themeBtn.innerHTML = "Go Light";
  } else if (themeBtn.classList.contains("darkTheme")) {
    themeBtn.innerHTML = "Go Dark";
  }
});

// Deplacement [themeBtn] in <aside>
const shoppingcartBtn = document.getElementById("shopping-cart-btn");
const vraiAside = document.getElementById("vraiAside");
vraiAside.insertBefore(themeBtn, shoppingcartBtn);

// ------------------------ FUNCTIONS -----------------------------

function prevSiblings(target) {
  var siblings = [],
    n = target;
  while ((n = n.previousElementSibling)) siblings.push(n);
  return siblings;
}

function nextSiblings(target) {
  var siblings = [],
    n = target;
  while ((n = n.nextElementSibling)) siblings.push(n);
  return siblings;
}

function getSiblings(target) {
  var prev = prevSiblings(target) || [],
    next = nextSiblings(target) || [];
  return prev.concat(next);
}

function activate(e) {
  let type = e.target.classList[0];

  const selected = document.getElementsByClassName(type + "Section")[0];
  if (e.target.classList.contains("inactive")) {
    e.target.classList.remove("inactive");
    e.target.classList.add("active");
    selected.classList.add("active");
    e.target.style.background = "hsl(229, 100%, 76%)";
    e.target.style.color = "white";
  } else if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    e.target.classList.add("inactive");
    selected.classList.remove("active");
    e.target.style.background = "inherit";
    e.target.style.color = "inherit";
  }

  let siblingsSelected = getSiblings(selected);
  for (let siblingSel of siblingsSelected) {
    if (siblingSel.classList.contains("active")) {
      siblingSel.classList.remove("active");
    }
  }

  let siblings = getSiblings(e.target.parentNode);
  for (let sibling of siblings) {
    if (sibling.firstChild.classList.contains("active")) {
      sibling.firstChild.classList.remove("active");
      sibling.firstChild.classList.add("inactive");
      sibling.firstChild.style.background = "inherit";
      sibling.firstChild.style.color = "inherit";
    }
  }
}

function activate2(e) {
  let type = e.target.classList[0];

  if (e.target.classList.contains("inactive")) {
    e.target.classList.remove("inactive");
    e.target.classList.add("active");
    e.target.style.background = "hsl(229, 100%, 76%)";
    e.target.style.color = "white";
  } else if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    e.target.classList.add("inactive");
    e.target.style.background = "inherit";
    e.target.style.color = "inherit";
  }

  let siblings = getSiblings(e.target.parentNode);
  for (let sibling of siblings) {
    if (sibling.firstChild.classList.contains("active")) {
      sibling.firstChild.classList.remove("active");
      sibling.firstChild.classList.add("inactive");
      sibling.firstChild.style.background = "inherit";
      sibling.firstChild.style.color = "inherit";
    }
  }
}

function displaySection(e) {
  activate(e);

  let type = e.target.classList[0];
  const articles = document.querySelectorAll(".food");
  if (e.target.classList.contains("active")) {
    for (article of articles) {
      let parent = article.parentNode;
      if (parent.classList.contains(type + "Section")) {
        const filters = document.querySelectorAll("li a");
        if (
          filters[4].classList.contains("inactive") &&
          filters[5].classList.contains("inactive") &&
          filters[6].classList.contains("inactive")
        ) {
          article.style.display = "flex";
        } else if (article.classList.contains("active")) {
          article.style.display = "flex";
        } else {
          article.style.display = "none";
        }
      } else {
        article.style.display = "none";
      }
    }
  } else {
    for (article of articles) {
      let parent = article.parentNode;
      if (parent.classList.contains(type + "Section")) {
        article.style.display = "none";
      }
    }
  }
}

function displayFiltered(e) {
  activate2(e);

  let filter = e.target.classList[0];
  const articles = document.querySelectorAll(".food");
  if (e.target.classList[1] === "active") {
    for (article of articles) {
      let parent = article.parentNode;
      if (
        parent.classList.contains("active") &&
        article.classList.contains(filter)
      ) {
        article.style.display = "flex";
      } else {
        article.style.display = "none";
      }
    }
  } else {
    const filters = document.querySelectorAll("li a");
    if (
      filters[4].classList.contains("inactive") &&
      filters[5].classList.contains("inactive") &&
      filters[6].classList.contains("inactive")
    ) {
      for (article of articles) {
        let parent = article.parentNode;
        if (parent.classList.contains("active")) {
          article.style.display = "flex";
        }
      }
    }
  }
}

// ------------------------ CREATING SECTIONS -----------------------------

const courses = ["All", "Pizza", "Pasta", "Desserts"];

const courseList = document.createElement("ul");
courseList.classList.add("meals");
const menuSelect = document.querySelector(".selectMenu");
menuSelect.appendChild(courseList);

const menuArticles = document.createElement("section");
menuArticles.classList.add("menuArticle");

for (elem of courses) {
  const item = document.createElement("li");
  const itemBtn = document.createElement("a");
  const image = document.createElement("img");
  itemBtn.setAttribute("href", "javascript:void()");
  itemBtn.classList.add(elem);
  itemBtn.classList.add("inactive");
  itemBtn.addEventListener("click", displaySection);
  itemBtn.setAttribute("href", "javascript:void(0);");
  const name = document.createTextNode(elem);
  image.setAttribute("src", "./Images/" + elem + ".png");
  itemBtn.appendChild(image);
  itemBtn.appendChild(name);
  item.appendChild(itemBtn);
  courseList.appendChild(item);

  const course = document.createElement("section");
  course.classList.add(elem + "Section");
  document.querySelector(".menuArticle").appendChild(course);
}

for (let elem of MENU) {
  const dish = document.createElement("article");
  dish.classList.add("food");

  for (let feature of elem.categories) {
    if (feature === "Comfort food") {
      feature = "Comfort";
    }
    dish.classList.add(feature);
  }

  const figure = document.createElement("figure");
  const image = document.createElement("img");
  image.setAttribute("src", elem.image);
  const caption = document.createElement("figcaption");
  const name = document.createTextNode(elem.name);
  figure.appendChild(image);
  caption.appendChild(name);
  figure.appendChild(caption);
  dish.appendChild(figure);

  const info = document.createElement("p");
  info.innerHTML = "Ingredients: ";
  for (let i = 0; i < elem.ingredients.length - 1; i++) {
    info.innerHTML += elem.ingredients[i] + ", ";
  }
  info.innerHTML += elem.ingredients[elem.ingredients.length - 1];
  dish.appendChild(info);

  const price = document.createElement("p");
  price.innerHTML = "€" + elem.price;
  dish.appendChild(price);

  const buy = document.createElement("button");
  buy.classList.add("cartBtn"); // VICTOR ADD THIS CLASS [cartBtn] FOR THE SHOPPING CART
  buy.addEventListener("click", () => {
    cartFunction(elem);
  });
  buy.innerHTML = "Add to cart";
  dish.appendChild(buy);

  const cloned = dish.cloneNode(true);
  document.getElementsByClassName("AllSection")[0].appendChild(cloned);
  if (elem.type === "Pizza") {
    document.getElementsByClassName("PizzaSection")[0].appendChild(dish);
  } else if (elem.type === "Pasta") {
    document.getElementsByClassName("PastaSection")[0].appendChild(dish);
  } else if (elem.type === "Desserts") {
    document.getElementsByClassName("DessertsSection")[0].appendChild(dish);
  }
}

//-------------------------------- EXTRA FILTER BUTTONS --------------------------

const filter = ["Vegetarian", "Spicy", "Comfort Food"];

const filterList = document.createElement("ul");
filterList.classList.add("filters");
const selectorMenu = document.querySelector(".selectMenu");
selectorMenu.appendChild(filterList);
for (elem of filter) {
  const item = document.createElement("li");
  const itemBtn = document.createElement("a");
  const image = document.createElement("img");
  const name = document.createTextNode(elem);
  if (elem === "Comfort Food") {
    elem = "Comfort";
  }
  image.setAttribute("src", "./Images/" + elem + ".png");
  itemBtn.classList.add(elem);
  itemBtn.classList.add("inactive");
  itemBtn.appendChild(image);
  itemBtn.appendChild(name);
  item.appendChild(itemBtn);
  filterList.appendChild(item);
  itemBtn.setAttribute("href", "javascript:void(0);");
  itemBtn.addEventListener("click", displayFiltered);
}

//------------------------------ LEFT-SIDE NAV ----------------------------------

// /* //console.log(MENU);
//     document.getElementsByClassName("Desserts")[0].appendChild(dish);
//   } // else if (elem.type === "Drink") {
//   //   document.getElementsByClassName("Drinks")[0].appendChild(dish);
//   // }
// }*/

// for (let elem of MENU) {
//   const dish = document.createElement("article");

//   const figure = document.createElement("figure");
//   const image = document.createElement("img");
//   image.setAttribute("src", elem.image);
//   const caption = document.createElement("figcaption");
//   const name = document.createTextNode(elem.name);
//   figure.appendChild(image);
//   caption.appendChild(name);
//   figure.appendChild(caption);
//   dish.appendChild(figure);

//   const info = document.createElement("p");
//   info.innerHTML = "Ingredients: ";
//   for (let i = 0; i < elem.ingredients.length - 1; i++) {
//     info.innerHTML += elem.ingredients[i] + ", ";
//   }
//   info.innerHTML += elem.ingredients[elem.ingredients.length - 1];
//   dish.appendChild(info);

//   const price = document.createElement("p");
//   price.innerHTML = "€" + elem.price;
//   dish.appendChild(price);

//   // const buy = document.createElement("button");
//   // buy.classList.add("cartBtn"); // VICTOR ADD THIS CLASS [cartBtn] FOR THE SHOPPING CART
//   // buy.innerHTML = "Add to cart";
//   // dish.appendChild(buy);

//   if (elem.type === "Pizza") {
//     document.getElementsByClassName("Pizza")[0].appendChild(dish);
//   } else if (elem.type === "Pasta") {
//     document.getElementsByClassName("Pasta")[0].appendChild(dish);
//   } else if (elem.type === "Desserts") {
//     document.getElementsByClassName("Desserts")[0].appendChild(dish);
//   } // else if (elem.type === "Drink") {
//   //   document.getElementsByClassName("Drinks")[0].appendChild(dish);
// }

// // const select = document.querySelector(".select");
// // const articleImages = document.querySelectorAll("article");
// // function displayImages() {
// //   if (select.innerHTML === "All") {
// //     for (const iterator of articleImages) {
// //       iterator.style.display = "block";
// //     }
// //   }
// // }

// // select.addEventListener("click", displayImages);

// ------------------------ SHOPPING CART (victor) --------------------------------------
let arrayRespons = [];

// Selection elements a pointer dans js
let cartBtns = document.querySelectorAll(".cartBtn"); // Select all buy buttons
let achatsContainer = document.querySelector("#achats-container");
let clearAll = document.querySelectorAll(".clearAll"); // Select all .clearAll buttons
let shoppingCartBtn = document.querySelector("#shopping-cart-btn");
let totalDiv = document.querySelector("#total-price");

// -- €$TOTAL$€ --
let total = 0;
totalDiv.innerHTML = `Your total: ${total}€`;

// -- CREATION FUNCTIONS --
// Creation FUNCTION [disparuFunction] for display the shopping-cart
function disparuFunction() {
  achatsContainer.parentNode.classList.toggle("disparu");
}

// Creation FUNCTION [cartFunction]

function cartFunction(leMenu) {
  const newDivQuantity = document.createElement("div");
  // COMPTAGE DES ITEM EN DOUBLE, TRIPLE, ETC DANS LE PANIER (part1)
  const fnTrouverPizza = (element) => element.name === leMenu.name;

  const elemePizza = arrayRespons.find(fnTrouverPizza);
  if (elemePizza !== undefined) {
    elemePizza.quantity++;
    newDivQuantity.innerHTML = elemePizza.quantity;
  }
  // Copie de element clické dans arrayRespons
  arrayRespons.push(leMenu);

  // Creation article + Add class
  const newArticleCart = document.createElement("article");
  newArticleCart.classList.add("article-test");
  newArticleCart.classList.add("article-cart");

  // Creation 4 DIV pour flex: nombreitem/img/infos/removeBtn
  const newDivImg = document.createElement("div");
  const newDivInfos = document.createElement("div");
  const newDivRemoveBtn = document.createElement("div");

  // Creation image pour article + Add src
  const newImageCart = document.createElement("img");
  newImageCart.setAttribute("src", leMenu.image);
  newImageCart.classList.add("article-cart");

  // Creation titre pour article
  const newTitleCart = document.createElement("h6");
  newTitleCart.innerHTML = leMenu.name;
  newTitleCart.classList.add("article-cart");

  // Creation prix pour article + Add the item PRICE to the TOTAL
  const newPrixCart = document.createElement("h6");
  newPrixCart.innerHTML = "€" + leMenu.price;
  newPrixCart.classList.add("article-cart");
  total += leMenu.price;
  totalDiv.innerHTML = `Your total: ${total}€`;

  // Creation removeItem btn
  const removeItemBtn = document.createElement("button");
  removeItemBtn.innerText = "Remove";
  removeItemBtn.classList.add("article-cart");
  removeItemBtn.addEventListener("click", () => {
    newArticleCart.remove();
    total -= leMenu.price;
    totalDiv.innerHTML = `Your total: ${total}€`;
  });

  // Deplacement img + titre + prix + removeBtn dans la DIV correspondante
  newDivImg.appendChild(newImageCart);
  newDivInfos.appendChild(newTitleCart);
  newDivInfos.appendChild(newPrixCart);
  newDivRemoveBtn.appendChild(removeItemBtn);

  // Deplacement des 4 DIV dans [newArticleCart]
  newArticleCart.appendChild(newDivQuantity);
  newArticleCart.appendChild(newDivImg);
  newArticleCart.appendChild(newDivInfos);
  newArticleCart.appendChild(newDivRemoveBtn);

  // Deplacement de [newArticleCart] dans <div.achats-container>
  achatsContainer.appendChild(newArticleCart);

  newDivQuantity.innerHTML = elemePizza.quantity;
}

// -- CREATION EVENTLISTENER --

// LOOP creation [eventListener] on each [clearAll] button  ===>>>  Function for clear shopping list + call disparuFunction + display an alert
for (let boutton of clearAll) {
  boutton.addEventListener("click", (i) => {
    disparuFunction();

    if (i.target.innerHTML == "acheter" && achatsContainer.hasChildNodes()) {
      alert(
        "Commande enregistrée, vous allez être redirigé vers la page de votre banque pour effectuer le paiement."
      );
    } else if (
      i.target.innerHTML == "clear cart" &&
      achatsContainer.hasChildNodes()
    ) {
      alert("Panier supprimé !");
    }

    let articleTest = document.querySelectorAll(".article-test"); // ? QUESTION POUR LE COACH
    for (let i = 0; i < articleTest.length; i++) {
      articleTest[i].remove();
      total = 0;
      totalDiv.innerHTML = `Your total: ${total}€`;
    }
  });
}
// Creation [eventListener] on #shopping-cart-btn  ===>>>  Function for call disparuFunction
shoppingCartBtn.addEventListener("click", () => {
  disparuFunction();
});
