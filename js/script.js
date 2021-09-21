// ------------------------ DARK/LIGHT THEME BTN -------------------------------

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
document.querySelector("aside").appendChild(themeBtn);

// ------------------------ FUNCTIONS -----------------------------

function displaySection(e){
  let type = e.target.classList[0];
  const articles = document.querySelectorAll("article");
  for (article of articles){
    parent = article.parentNode;
    if (parent.classList.contains(type)){
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  }
}

// ------------------------ CREATING SECTIONS -----------------------------

const courses = ["Pizza", "Pasta", "Desserts", "Drinks"];

const nav = document.createElement("nav");
const courseList = document.createElement("ul");
nav.appendChild(courseList);
document.querySelector("main").appendChild(nav);
for (elem of courses) {
  const item = document.createElement("li");
  const itemBtn = document.createElement("button");
  itemBtn.classList.add(elem);
  itemBtn.addEventListener("click", displaySection);
  const name = document.createTextNode(elem);
  itemBtn.appendChild(name);
  item.appendChild(itemBtn);
  courseList.appendChild(item);


  const course = document.createElement("section");
  course.classList.add(elem);
  document.querySelector("main").appendChild(course);
}

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
  } else if (elem.type === "Drink") {
    document.getElementsByClassName("Drinks")[0].appendChild(dish);
  }
}

// console.log(MENU);

const select = document.querySelector(".select");
const articleImages = document.querySelectorAll("article");
function displayImages() {
  if (select.innerHTML === "All"){
    for (const iterator of articleImages) {
      iterator.style.display = "block";
    }
  }
}

select.addEventListener("click", displayImages);




// ------------------------ SHOPPING CART --------------------------------------
// Select all buy buttons
let cartBtns = document.getElementsByClassName("cartBtn");

for (let i = 0; i < cartBtns.length; i++) {
  console.log(cartBtns[i]);
};
