function setFontTheme(theme) {
  if (theme === "Mono") {
    document.body.classList.remove("theme--serif");
    document.body.classList.remove("theme--sans-serif");
    document.body.classList.remove("theme--cursive");
    document.body.classList.remove("theme--monospace"); // Remove monospace class
    if (!document.body.classList.contains("theme--mono")) {
      document.body.classList.add("theme--mono");
    }
    localStorage.setItem("font-theme", theme);
  } else if (theme === "Serif") {
    document.body.classList.remove("theme--mono");
    document.body.classList.remove("theme--sans-serif");
    document.body.classList.remove("theme--cursive");
    document.body.classList.remove("theme--monospace"); // Remove monospace class
    if (!document.body.classList.contains("theme--serif")) {
      document.body.classList.add("theme--serif");
    }
    localStorage.setItem("font-theme", theme);
  } else if (theme === "Sans Serif") {
    document.body.classList.remove("theme--serif");
    document.body.classList.remove("theme--mono");
    document.body.classList.remove("theme--cursive");
    document.body.classList.remove("theme--monospace"); // Remove monospace class
    if (!document.body.classList.contains("theme--sans-serif")) {
      document.body.classList.add("theme--sans-serif");
    }
    localStorage.setItem("font-theme", theme);
  } else if (theme === "Cursive") {
    document.body.classList.remove("theme--serif");
    document.body.classList.remove("theme--mono");
    document.body.classList.remove("theme--sans-serif");
    document.body.classList.remove("theme--monospace");
    if (!document.body.classList.contains("theme--cursive")) {
      document.body.classList.add("theme--cursive");
    }
    localStorage.setItem("font-theme", theme);
  } else if (theme === "Monospace") {
    document.body.classList.remove("theme--serif");
    document.body.classList.remove("theme--mono");
    document.body.classList.remove("theme--sans-serif");
    document.body.classList.remove("theme--cursive");
    if (!document.body.classList.contains("theme--monospace")) {
      document.body.classList.add("theme--monospace");
    }
    localStorage.setItem("font-theme", theme);
  }
}

const initialTheme = localStorage.getItem("font-theme") || "Sans Serif";
setFontTheme(initialTheme);

const fontThemeSelect = document.querySelector("[data-font-theme]");
fontThemeSelect.value = initialTheme;

fontThemeSelect.addEventListener("change", (evt) => {
  setFontTheme(evt.target.value);
});
