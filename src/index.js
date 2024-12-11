import "./styles.css";
import storageAvailable from "./local-storage.js";
import * as MakeDropDown from "./drop-down.js";

console.log("Hello World!)");
console.log(`Storage available: ${storageAvailable("localStorage")}`);

const button1 = document.querySelector(".item1");
const list1 = document.querySelector(".list1");
const button2 = document.querySelector(".item2");
const list2 = document.querySelector(".list2");

MakeDropDown.hoverable(button1, list1);
MakeDropDown.hoverable(button2, list2);

const button3 = document.querySelector(".item3");
const list3 = document.querySelector(".list3");
const button4 = document.querySelector(".item4");
const list4 = document.querySelector(".list4");
const button5 = document.querySelector(".item5");
const list5 = document.querySelector(".list5");

MakeDropDown.clickable(button3, list3);
MakeDropDown.clickable(button4, list4);
MakeDropDown.clickable(button5, list5);
