import "./drop-down.css";

let windowEventListenerInitiated = false;

export function MakeDropDownHover(button, list) {
  if (!(button || list)) {
    return;
  }

  button.classList.add("drop-down-hover__button");
  list.classList.add("drop-down-hover__list");
}

export function MakeDropDownClick(button = document.createElement("div"), list = document.createElement("div")) {
  if (!(button || list)) {
    return;
  }

  hideList();

  button.classList.add("drop-down-click__button");
  list.classList.add("drop-down-click__list");

  if (!windowEventListenerInitiated) {
    window.addEventListener("mousedown", (event) => hideList(event));
    windowEventListenerInitiated = true;
  }

  button.addEventListener("mouseup", showList);

  function showList() {
    console.log("showing list")
    list.classList.remove("hide")
    list.classList.add("show")
  }

  function hideList(event) {
    list.classList.remove("show")
    list.classList.add("hide")
    
  }
}
