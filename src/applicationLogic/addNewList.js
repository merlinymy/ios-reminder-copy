import List from "../List";

function createNewList(icon, color, name) {
    const newList = new List(name, color, icon);
    const jsonList = JSON.stringify(newList);
    return jsonList;
}

function storeNewList(list) {
    const listArray = JSON.parse(localStorage.getItem('lists')) || [];
    listArray.push(list);
    localStorage.setItem('lists', JSON.stringify(listArray));
}

function getLists() {
    const result = JSON.parse(localStorage.getItem('lists'));
    return result;
}

export {createNewList, storeNewList, getLists};