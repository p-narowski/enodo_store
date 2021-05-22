const ITEMS_KEY = "ITEMS";
const TOPICS_ITEMS_ID = "topics-items";
const NEW_ITEM_ID = "new-topic";
const PRICE_TAG_ID = "price";
const TIME_TAG_ID = "timing";
const WARNING_ID = "warning-items";

const lsItems = localStorage.getItem(ITEMS_KEY);
let items = lsItems ? JSON.parse(lsItems) : [];
const itemsListElement = document.getElementById(TOPICS_ITEMS_ID);
const newItemInput = document.getElementById(NEW_ITEM_ID);
const priceTag = document.getElementById(PRICE_TAG_ID);
const timeTag = document.getElementById(TIME_TAG_ID);
const warningTag = document.getElementById(WARNING_ID);
function checkList() {
  items.length == 0
    ? (warningTag.innerHTML = "Nie ma żadnych tematów na liście!")
    : (warningTag.innerHTML = "");
}
function addItem() {
  items.includes(newItemInput.value)
    ? alert("Ten temat jest już na liście.")
    : (items = [...items, newItemInput.value]);
  const stringifiedItems = JSON.stringify(items);
  localStorage.setItem(ITEMS_KEY, stringifiedItems);
  newItemInput.value = "";
  updateItems();
}
function removeFromArray(array, value) {
  return array.filter(function (element) {
    return element != value;
  });
}
function removeItem() {
  changedItems = removeFromArray(items, newItemInput.value);
  const stringifiedItems = JSON.stringify(changedItems);
  localStorage.setItem(ITEMS_KEY, stringifiedItems);
  newItemInput.value = "";
  updateItems();
}
function updateItems() {
  function itemGenerator(item) {
    return `<li>${item}</li>`;
  }
  const itemsElements = items.map(itemGenerator);
  itemsListElement.innerHTML = itemsElements.join("");
}
function calculatePrice() {
  let price = items.length * 2000;
  priceTag.innerHTML = `${price} zł`;
}
function calculateTime() {
  let time = items.length;
  timeTag.innerHTML = `${time} dni`;
}

module.exports = {
  updateItems,
  addItem,
  removeItem,
  calculatePrice,
  calculateTime,
  checkList,
  warningTag
};
