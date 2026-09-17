// Andreas javascvript kod exemepl

const addTodoBtn = document.querySelector("button");
const list = document.querySelector("ul");
const input = document.querySelector("#input1");

//listener för knappen
addTodoBtn.addEventListener(
"click",
addTodoItem
);




// funktioner - lägga till saker i en löista med knappen
function addTodoItem(){

    console.log("Function is running");

    const text = input.value;

    const item =document.createElement("li");
    list.appendChild(item);


    const itemLabel = document.createElement("span");
    itemLabel.textContent = text;
    item.appendChild(itemLabel);
}