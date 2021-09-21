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
const shoppingcartBtn = document.getElementById('shopping-cart-btn');
const vraiAside = document.getElementById('vraiAside');
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
  if (e.target.classList.contains("inactive")) {
    e.target.classList.remove("inactive");
    e.target.classList.add("active");
    e.target.style.background = "green";
    e.target.style.color = "white";
  } else {
    e.target.classList.remove("active");
    e.target.classList.add("inactive");
    e.target.style.background = "inherit";
    e.target.style.color = "inherit";
  }

  let siblings = getSiblings(e.target.parentNode);
  console.log(e.target.parentNode);
  console.log(siblings);
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
  if (e.target.classList.contains("inactive")) {
    e.target.classList.remove("inactive");
    e.target.classList.add("active");
    e.target.style.background = "green";
    e.target.style.color = "white";
  } else {
    e.target.classList.remove("active");
    e.target.classList.add("inactive");
    e.target.style.background = "inherit";
    e.target.style.color = "inherit";
  }
}

function displaySection(e) {
  activate(e);

  let type = e.target.classList[0];
  const articles = document.querySelectorAll("article");
  if (type === "All") {
    for (article of articles) {
      article.style.display = "flex";
    }
  } else {
    if (e.target.classList.contains("active")) {
      for (article of articles) {
        let parent = article.parentNode;
        if (parent.classList.contains(type + "Section")) {
          article.style.display = "flex";
        } else {
          article.style.display = "none";
        }
      }}}
}

//       function displaySection(e) {
//         let type = e.target.classList[0];
//         const articles = document.querySelectorAll("article");
//         for (article of articles) {
//           parent = article.parentNode;
//           if (parent.classList.contains(type)) {
//             article.style.display = "block";
//           } else {
//             for (article of articles) {
//               let parent = article.parentNode;
//               if (parent.classList.contains(type + "Section")) {
//                 article.style.display = "none";
//               }
//             }
//           }
//         }
//       }

      function displayFiltered(e) {
        activate2(e);
        console.log(e.target.classList);
        let filter = e.target.classList[0];
        const articles = document.querySelectorAll("article");
        if (e.target.classList[1] === "active") {
          for (article of articles) {
            if (article.classList.contains(filter)) {
              article.classList.add("active");
              article.style.display = "flex";
            } else {
              article.style.display = "none";
            }
          }
        } else {
          for (article of articles) {
            let parent = article.parentNode;
            if (article.classList.contains(filter)) {
              article.classList.remove("active");
            }
            if (
              article.classList.contains(filter) &&
              parent.classList.contains("inactive")
            ) {
              article.style.display = "none";
            }
          }
        }
      }

      // ------------------------ CREATING SECTIONS -----------------------------

      const courses = ["All", "Pizza", "Pasta", "Desserts"];

      const courseList = document.createElement("ul");
      courseList.classList.add("meals");
      document.querySelector(".selectMenu").appendChild(courseList);

      const menuArticles = document.createElement("section");
      menuArticles.classList.add("menuArticle");

      for (elem of courses) {
        const item = document.createElement("li");
        const itemBtn = document.createElement("a");
        itemBtn.setAttribute("href", "#");
        itemBtn.classList.add(elem);
        itemBtn.classList.add("inactive");
        itemBtn.addEventListener("click", displaySection);
        const name = document.createTextNode(elem);
        itemBtn.appendChild(name);
        item.appendChild(itemBtn);
        courseList.appendChild(item);

        const course = document.createElement("section");
        course.classList.add(elem + "Section");
        document.querySelector(".menuArticle").appendChild(course);
      }

      for (let elem of MENU) {
        const dish = document.createElement("article");

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
        buy.innerHTML = "Add to cart";
        dish.appendChild(buy);

        document.getElementsByClassName("AllSection")[0].appendChild(dish);
        if (elem.type === "Pizza") {
          document.getElementsByClassName("PizzaSection")[0].appendChild(dish);
        } else if (elem.type === "Pasta") {
          document.getElementsByClassName("PastaSection")[0].appendChild(dish);
        } else if (elem.type === "Desserts") {
          document
            .getElementsByClassName("DessertsSection")[0]
            .appendChild(dish);
        }
      }

      //-------------------------------- EXTRA FILTER BUTTONS --------------------------

      const filter = ["Vegetarian", "Spicy", "Comfort Food"];

      const filterList = document.createElement("ul");
      filterList.classList.add("filters");
      document.querySelector(".selectMenu").appendChild(filterList);
      for (elem of filter) {
        const item = document.createElement("li");
        const itemBtn = document.createElement("a");
        const image = document.createElement("img");
        itemBtn.setAttribute("href", "#");
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
        itemBtn.addEventListener("click", displayFiltered);
      }

      //------------------------------ LEFT-SIDE NAV ----------------------------------

      //console.log(MENU);
    // document.getElementsByClassName("Desserts")[0].appendChild(dish);
  // else if (elem.type === "Drink") {
  //   document.getElementsByClassName("Drinks")[0].appendChild(dish);
  // }


      for (let elem of MENU) {
        const dish = document.createElement("article");

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
        buy.innerHTML = "Add to cart";
        dish.appendChild(buy);

        if (elem.type === "Pizza") {
          document.getElementsByClassName("Pizza")[0].appendChild(dish);
        } else if (elem.type === "Pasta") {
          document.getElementsByClassName("Pasta")[0].appendChild(dish);
        } else if (elem.type === "Desserts") {
          document.getElementsByClassName("Desserts")[0].appendChild(dish);
        } // else if (elem.type === "Drink") {
        //   document.getElementsByClassName("Drinks")[0].appendChild(dish);
      }

    const select = document.querySelector(".select");
    const articleImages = document.querySelectorAll("article");
    function displayImages() {
      if (select.innerHTML === "All") {
        for (const iterator of articleImages) {
          iterator.style.display = "block";
        }
      }
    }

    select.addEventListener("click", displayImages);






// ------------------------ SHOPPING CART (victor) --------------------------------------
// Selection elements a pointer dans js 
const achatsContainer = document.getElementById('achats-container');

// Creation FUNCTION [cartFunction]
function cartFunction(MENU) {
  // Creation article + Add class
  const newArticleCart = document.createElement('article');
  newArticleCart.classList.add('article-cart');
  
  // Creation 2 DIV pour flex img/infos
  const newDivImg = document.createElement('div');
  const newDivInfos = document.createElement('div');

  // Creation image pour article + Add src
  const newImageCart = document.createElement('img');
  newImageCart.setAttribute("src", MENU.image);
  newImageCart.classList.add('article-cart');

  // Creation titre pour article
  const newTitleCart = document.createElement('h6');
  newTitleCart.innerHTML = MENU.name;
  newTitleCart.classList.add('article-cart');

  // Creation prix pour article
  const newPrixCart = document.createElement('h6');
  newPrixCart.innerHTML = "€" + MENU.price;
  newPrixCart.classList.add('article-cart');

  // Creation removeItem btn
  const removeItemBtn = document.createElement('button');
  removeItemBtn.innerText = "Remove";
  removeItemBtn.classList.add('article-cart');
  removeItemBtn.addEventListener('click', () => { 
    newArticleCart.remove();
  })
  
  // Deplacement img + titre + prix + removeBtn dans la DIV correspondante
  newDivImg.appendChild(newImageCart);
  newDivInfos.appendChild(newTitleCart);
  newDivInfos.appendChild(newPrixCart);
  newDivInfos.appendChild(removeItemBtn);

  // Deplacement des 2 DIV dans [newArticleCart]
  newArticleCart.appendChild(newDivImg);
  newArticleCart.appendChild(newDivInfos);

  // Deplacement de [newArticleCart] dans <div.achats-container>
  achatsContainer.appendChild(newArticleCart);

  console.log("test");
}

// Select all buy buttons
let cartBtns = document.querySelectorAll(".cartBtn");

// LOOP creation [eventListener] on each [cartBtn]
for (let i = 0; i < cartBtns.length; i++) {
  cartBtns[i].addEventListener('click', () => {
    cartFunction(MENU[i]);
  } )
};
