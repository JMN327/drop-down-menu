import "./styles.css";
import "./drop-down.css";
import storageAvailable from "./local-storage.js";
import MakeDropDown from "./drop-down.js";

console.log("Hello World!)");
console.log(`Storage available: ${storageAvailable("localStorage")}`);

const button1 = document.querySelector(".item1");
const list1 = document.querySelector(".list1");
const button2 = document.querySelector(".item2");
const list2 = document.querySelector(".list2");

MakeDropDown(button1, list1);
MakeDropDown(button2, list2);
