console.log("working");

let input = prompt("What do you want to do?").toLowerCase();
let todoList = [];

while (input !== "quit") {
  if (input === "new") {
    item = prompt("Enter Item").toLowerCase();
    todoList.push(item);
    console.log(`${item} added to the list`);
    console.log("***************");
  } else if (input === "list") {
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i}: ${todoList[i]}`);
    }
    console.log("***************");
  } else if (input === "delete") {
    let del = parseInt(prompt("What item number?"));
    if (!Number.isNaN(del)) {
      const deleted = todoList.splice(del, 1);
      console.log(`Todo ${del}, ${deleted},removed`);
      console.log("***************");
    } else {
      console.log("Unknown Item Number");
    }
  }
  input = prompt("What do you want to do?").toLowerCase();
}
alert("Ok, Quitting");
