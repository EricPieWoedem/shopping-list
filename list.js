const input = document.querySelector("input");
const btn = document.querySelector("#btn");
const ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  const itemText = input.value;
  if(itemText === "") {
    alert("Please enter an item");
    return;
  }

  const list = document.createElement("li");
  list.textContent = itemText; 

  const removeButton = document.createElement("button");
  removeButton.textContent = "Delete Item";
  removeButton.addEventListener("click", () => list.remove());


  list.appendChild(removeButton);

  ul.appendChild(list);

  input.value = "";



});



