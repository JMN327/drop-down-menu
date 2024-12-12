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

  handleListClicks(list);
}

export function clickable(
  button = document.createElement("div"),
  list = document.createElement("div")
) {
  if (!(button || list)) {
    return;
  }

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
    console.log("hiding list");
    const openList = document.querySelector(".list-show");
    if (openList) {
      openList.classList.remove("list-show");
      openList.classList.add("list-hide");
    }
    const openButton = document.querySelector(".button-show");
    if (openButton) {
      openButton.classList.remove("button-show");
      openButton.classList.add("button-hide");
    }
  }

  function toggleListVisibility() {
    if (list.classList.contains("list-hide")) {
      hideList();
      showList();
    } else {
      hideList();
    }
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

  handleListClicks(list);
}

function handleListClicks(list) {
  const ItemArray = Array.from(list.children);

  ItemArray.forEach((item) => {
    item.classList.add("drop-down-list__item");
  });

  list.addEventListener("mouseup", (event) => {
    const clickedItem = event.target.closest(".drop-down-list__item");
    const listClickEvent = new CustomEvent("listClick", {
      detail: {
        text: clickedItem.textContent,
        index: ItemArray.indexOf(clickedItem) + 1,
      },
    });
    return list.dispatchEvent(listClickEvent);
  });
}
