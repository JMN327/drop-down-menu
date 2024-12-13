import "./styles.css";
import storageAvailable from "./local-storage.js";
import dropdown from "./drop-down.js";

console.log("Hello World!)");
console.log(`Storage available: ${storageAvailable("localStorage")}`);

const button1 = document.querySelector(".item1");
const list1 = document.querySelector(".list1");
const button2 = document.querySelector(".item2");
const list2 = document.querySelector(".list2");

const a = dropdown(button1, list1);
a.hoverable();
a.addFunctionToListItem(() => console.log("hello Worldy world world"), 2);
list1.addEventListener("listClick", (event) => {
  console.log(event.detail.text, event.detail.index);
});
const b = dropdown(button2, list2);
b.hoverable();
b.addFunctionToListItem(() => console.log("hello Worldy world world"), 1);
list2.addEventListener("listClick", (event) => {
  console.log(event.detail.text, event.detail.index);
});

const button3 = document.querySelector(".item3");
const list3 = document.querySelector(".list3");
const button4 = document.querySelector(".item4");
const list4 = document.querySelector(".list4");
const button5 = document.querySelector(".item5");
const list5 = document.querySelector(".list5");

const c = dropdown(button3, list3);
c.clickable();
c.addFunctionToListItem(() => console.log("hello Worldy world world"), 1);
list3.addEventListener("listClick", (event) => {
  console.log(event.detail.text, event.detail.index);
});
const d = dropdown(button4, list4).clickable();
list4.addEventListener("listClick", (event) => {
  console.log(event.detail.text, event.detail.index);
});
const e = dropdown(button5, list5).clickable();
list5.addEventListener("listClick", (event) => {
  console.log(event.detail.text, event.detail.index);
});
