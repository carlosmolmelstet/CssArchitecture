const toggleSwitch = document.querySelector('.themeSwitch input[type="checkbox"]');

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