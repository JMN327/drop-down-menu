import "./drop-down.css";

export function hoverable(
  button = document.createElement("div"),
  list = document.createElement("div")
) {
  if (!(button || list)) {
    return;
  }

  button.classList.add("drop-down-hover__button");
  list.classList.add("drop-down-hover__list");

  handleListClicks();
}

export function clickable(
  button = document.createElement("div"),
  list = document.createElement("div")
) {
  if (!(button || list)) {
    return;
  }
  hideList();

  button.classList.add("drop-down-click__button");
  button.classList.add("button-hide");
  list.classList.add("drop-down-click__list");
  list.classList.add("list-hide");

  window.addEventListener("mousedown", (event) => checkClick(event.target));

  button.addEventListener("mouseup", toggleListVisibility);

  function showList() {
    if (!list.classList.contains("list-hide")) {
      return;
    }
    console.log("showing list");
    list.classList.remove("list-hide");
    list.classList.add("list-show");
    button.classList.remove("button-hide");
    button.classList.add("button-show");
  }

  function hideList() {
    if (!list.classList.contains("list-show")) {
      return;
    }
    console.log("hiding list");
    list.classList.remove("list-show");
    list.classList.add("list-hide");
    button.classList.remove("button-show");
    button.classList.add("button-hide");
  }

  function toggleListVisibility() {
    list.classList.contains("list-hide") ? showList() : hideList();
  }

  function checkClick(target) {
    if (!target.closest(".drop-down-click__button")) {
      hideList();
    }
    if (target.classList.contains(".drop-down-click__button")) {
      console.log(`dropdown clicked`);
      hideList();
    }
  }

  handleListClicks();
}

function handleListClicks() {}
