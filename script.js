// ------------------------ DARK/LIGHT THEME BTN -------------------------------

// Creation [themeBtn] Light/Dark Theme
const themeBtn = document.createElement("span");

// Add CLASS to the [themeBtn]
themeBtn.classList.add("");
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
document.querySelector("aside").appendChild(themeBtn);