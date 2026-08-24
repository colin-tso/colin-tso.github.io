// Theme toggle. The initial data-theme attribute is already set
// by the blocking script in <head> (before first paint); this
// just wires up the switch and keeps localStorage + the
// system-preference listener in sync, mirroring the pattern
// used in the tubesheet-generator app's ThemeProvider.
(function () {
  var THEME_KEY = "theme-preference";
  var THEME_COLOR_DARK = "#0a1a28";
  var THEME_COLOR_LIGHT = "#f3f0e7";
  var docEl = document.documentElement;
  var input = document.getElementById("theme-switch");
  var meta = document.getElementById("theme-color-meta");

  function readStored() {
    try {
      var v = localStorage.getItem(THEME_KEY);
      return v === "dark" || v === "light" ? v : null;
    } catch (e) {
      return null;
    }
  }

  function applyTheme(theme) {
    docEl.setAttribute("data-theme", theme);
    if (meta)
      meta.setAttribute(
        "content",
        theme === "dark" ? THEME_COLOR_DARK : THEME_COLOR_LIGHT,
      );
    if (input) input.checked = theme === "dark";
  }

  // Sync the checkbox to whatever the blocking script already set.
  applyTheme(docEl.getAttribute("data-theme") === "light" ? "light" : "dark");

  if (input) {
    input.addEventListener("change", function () {
      var next = input.checked ? "dark" : "light";
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (e) {
        // localStorage can throw in private browsing or when
        // quota is exceeded; the in-memory theme still applies.
      }
    });
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", function (e) {
      if (readStored() === null) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });
})();
