const toggleSwitch = document.querySelector('.themeSwitch input[type="checkbox"]');
$('.my-select').selectpicker();

if (localStorage.getItem('theme') == "dark") {
    toggleSwitch.checked = true;
}   

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

function Copy(id) {
    var value = document.getElementById(id).value;
    navigator.clipboard.writeText(value);
}

function ShowCard(id) {
    var card = document.getElementById(id);
    var icon = document.getElementById(`${id}-icon`);

    if(icon.classList.contains("card__hide")) {
        icon.classList.remove("card__hide");
        card.style.display = "none";

    } else {
        icon.classList.add("card__hide");
        card.style.display = "flex";
    }

}