// Create a function that receives a list as input.
// If the list is empty, it should print a message saying "Empty list".
// Otherwise, it should display the elements of the list.

let fruits = [
  "apple",
  "banana",
  "orange",
  "strawberry",
  "grape",
  "watermelon",
  "pineapple",
  "mango",
  "kiwi",
  "pear",
];

const printList = (list) => {
  if (list.length === 0) {
    console.log("Empty list");
  } else {
    console.log(list);
  }
};

printList(fruits);