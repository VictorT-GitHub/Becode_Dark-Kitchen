const courses = ["Pizza", "Pasta", "Desserts", "Drinks"]

for (elem of courses){
    const docMain = document.querySelector("main");
    const course = document.createElement("section");
    course.classList.add(elem);
    docMain.appendChild(course);
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