import "./styles.css";
import storageAvailable from "./local-storage.js";
import MakeDropDown from "./drop-down.js";

console.log("Hello World!)");
console.log(`Storage available: ${storageAvailable("localStorage")}`);

const button1 = document.querySelector(".item1");
const list1 = document.querySelector(".list1");
const button2 = document.querySelector(".item2");
const list2 = document.querySelector(".list2");


const a = MakeDropDown(button1, list1)
a.hoverable();
list1.addEventListener("listClick", (event)=>{console.log(event.detail.text, event.detail.index)})
const b = MakeDropDown(button2, list2).hoverable();
list2.addEventListener("listClick", (event)=>{console.log(event.detail.text, event.detail.index)})

const button3 = document.querySelector(".item3");
const list3 = document.querySelector(".list3");
const button4 = document.querySelector(".item4");
const list4 = document.querySelector(".list4");
const button5 = document.querySelector(".item5");
const list5 = document.querySelector(".list5");

const c = MakeDropDown(button3, list3).clickable();
list3.addEventListener("listClick", (event)=>{console.log(event.detail.text, event.detail.index)})
const d = MakeDropDown(button4, list4).clickable();
list4.addEventListener("listClick", (event)=>{console.log(event.detail.text, event.detail.index)})
const e = MakeDropDown(button5, list5).clickable();
list5.addEventListener("listClick", (event)=>{console.log(event.detail.text, event.detail.index)})
