function setLanguage(lang) {
  document.querySelectorAll('.lang').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  localStorage.setItem("siteLang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("siteLang") || "ta";
  setLanguage(savedLang);
});
