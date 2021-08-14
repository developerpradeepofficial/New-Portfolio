let themeDots = document.getElementsByClassName("theme-dot");

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

for (var i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Option clicked:", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-color").href = "style.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-color").href = "blue-theme.css";
  }

  if (mode == "green") {
    document.getElementById("theme-color").href = "green-theme.css";
  }

  if (mode == "purple") {
    document.getElementById("theme-color").href = "purple-theme.css";
  }

  localStorage.setItem("theme", mode);
}
