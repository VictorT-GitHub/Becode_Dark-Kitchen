// ------------------------ DARK/LIGHT THEME BTN -------------------------------

// Creation [themeBtn] Light/Dark Theme
const themeBtn = document.createElement("button");

// Add CLASS to the [themeBtn]
//themeBtn.classList.add("");
themeBtn.classList.add("darkTheme");

// Add Text in the [themeBtn]
themeBtn.innerHTML = "Go Dark";

    // Add [addEventListener] + [function] flechee qui switch theme dark/light
    themeBtn.addEventListener('click', () => {
        themeBtn.classList.toggle("darkTheme");
        // condition pour changer text "go dark" -> "go light"
        if (!themeBtn.classList.contains("darkTheme")){
            themeBtn.innerHTML = "Go Light";
        } else if (themeBtn.classList.contains("darkTheme")){
            themeBtn.innerHTML = "Go Dark";
            }
        
        // document.body.classList.toggle("");
        // for (let item of collection) {
        //     .classList.toggle("darkTheme");
        });

// Deplacement [themeBtn] in <aside>
const darkAside = document.createElement("aside");
document.querySelector("main").appendChild(darkAside);
darkAside.appendChild(themeBtn);

// ------------------------ BUTTONS ---------------------------------------

/*function minusBtn(nom){
    /*console.log(e.target.nextSibling.innerHTML);
    let n = e.target.nextSibling.innerHTML.value;
    if (n > 0){
        e.target.nextSibling.innerHTML -= 1;
    }
    nom--;
    num = document.querySelector("number");
    num.innerHTML = parseInt(nom);
}

function plusBtn(nom){
    nom++;
    console.log(nom);
    num = document.querySelector("number");
    console.log(num);
    num.innerHTML = parseInt(nom);
}*/

function filter(){
    const options = document.querySelector("categories");
    let veg = 0;
    let spicy = 0;
    let comfort = 0;
    console.log(options);
    for (elem of options.children){
        console.log(elem);
    }
}

function catSelection(e){
    type = e.target.classList[0];
    console.log(type);
    if (e.target.classList.contains("active")){
        e.target.style.backgroundColor = "inherit";
        e.target.style.color = "inherit";
        e.target.classList.remove("active");
        filter();
    } else {
        e.target.style.backgroundColor = "green";
        e.target.style.color = "white";
        e.target.classList.add("active");
        filter();
        /*for (let elem of MENU){
            for (let one of elem.categories){
                if (one === type){
                    filter();
                }
            }
        }*/
    }
}

// ------------------------ CREATING SECTIONS -----------------------------

const cats = ["Vegetarian", "Spicy", "Comfort"];
const cat_imgs = ["https://w7.pngwing.com/pngs/962/539/png-transparent-green-leaf-illustration-vegetarian-cuisine-veggie-burger-veganism-vegetarianism-symbol-vegan.png", "https://www.clipartmax.com/png/middle/254-2545382_chili-icon-png.png", 
"https://image.flaticon.com/icons/png/512/150/150399.png"]

const categories = document.createElement("ul");
categories.classList.add("categories");
document.querySelector("main").appendChild(categories);
for (let i = 0; i < cats.length; i++){
    const elem = document.createElement("li");
    categories.appendChild(elem);
    const btn = document.createElement("button");
    elem.appendChild(btn);
    btn.classList.add(cats[i]);
    btn.innerHTML = cats[i];
    btn.addEventListener("click", catSelection);
}

const courses = ["Pizza", "Pasta", "Desserts", "Drinks"]

for (let elem of courses){
    //const tab = document.createElement("")

    const course = document.createElement("section");
    course.classList.add(elem);
    document.querySelector("main").appendChild(course);
    const title = document.createElement("h2");
    const name = document.createTextNode(elem);
    title.appendChild(name);
    course.appendChild(title);
}

for (let elem of MENU){
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
    for (let i = 0; i < elem.ingredients.length - 1; i++){
        info.innerHTML += elem.ingredients[i] + ", ";
    }
    info.innerHTML += elem.ingredients[elem.ingredients.length - 1];
    dish.appendChild(info);

    const price = document.createElement("p");
    price.innerHTML = "€" + elem.price;
    dish.appendChild(price);

    const amount = document.createElement("div");
    const minus = document.createElement("button");
    minus.innerHTML = "-";
    const number = document.createElement("span");
    number.classList.add("number");
    const plus = document.createElement("button");
    plus.innerHTML = "+";
    amount.appendChild(minus);
    amount.appendChild(number);
    amount.appendChild(plus);
    dish.appendChild(amount);
    let nom = 1;
    number.innerHTML = parseInt(nom);
    /*let nom = 1;
    console.log(nom);
    number.innerHTML = parseInt(nom);
    plus.addEventListener("click", plusBtn(nom));
    minus.addEventListener("click", minusBtn(nom));*/

    const buy = document.createElement("button");
    buy.innerHTML = "Add to cart";
    dish.appendChild(buy);

    if (elem.type === 'Pizza'){
        document.getElementsByClassName("Pizza")[0].appendChild(dish);
    } else if (elem.type === 'Pasta'){
        document.getElementsByClassName("Pasta")[0].appendChild(dish);
    } else if (elem.type === 'Dessert'){
        document.getElementsByClassName("Desserts")[0].appendChild(dish);
    } else if (elem.type === 'Drink'){
        document.getElementsByClassName("Drinks")[0].appendChild(dish);
    }
}