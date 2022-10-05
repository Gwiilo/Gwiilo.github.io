function lightMode() {
  var body = document.getElementsByTagName("body")[0];
  if (!body.classList.contains("changed")) {
    // LIGHT MODE
    body.style.setProperty("--color-background", "#E6E5E0");
    body.style.setProperty("--color-background-secondary", "#e4ded1");
    body.style.setProperty("--color-primary", "#888E96");
    body.style.setProperty("--color-secondary", "#525A60");
    body.style.setProperty("--color-accent", "#2C3035");
    body.style.setProperty("--color-fonts-primary", "#0f1427");
    body.style.setProperty("--color-fonts-secondary", "#f0ebd8");
    body.style.setProperty("--color-frequent", "#a8dadc");
    body.classList.add("changed");
  } else {
    // DARK MODE
    body.style.setProperty("--color-background", "#0d1321");
    body.style.setProperty("--color-background-secondary", "#1B212E");
    body.style.setProperty("--color-primary", "#748CAB");
    body.style.setProperty("--color-secondary", "#3E5C76");
    body.style.setProperty("--color-accent", "#1D2D44");
    body.style.setProperty("--color-fonts-primary", "#f0ebd8");
    body.style.setProperty("--color-fonts-secondary", "#0f1427");
    body.style.setProperty("--color-frequent", "#a8dadc");
    body.classList.remove("changed");
  }
}
