import './drop-down.css'

export default function MakeDropDown(button, list) {
    if (!(button || list)) {
        return;        
    }

    button.classList.add("drop-down__button");
    list.classList.add("drop-down__list");

}

/*     const xList = document.createElement("div")
    xList = list

    window.addEventListener

    button.addeventlistener("mouseup", showList)

    function showList(){
        xList.style.display = "flex"
        xList.style.flexDirection = "column"
    }

    function hideList(){
        list.style.display = "none"
    } */

