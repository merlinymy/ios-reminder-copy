import List from "../List";

function createNewList(icon, color, name) {
    const newList = new List(name, color, icon);
    const jsonList = JSON.stringify(newList);
    return jsonList;
}

function storeNewList(list) {
    const listArray = JSON.parse(localStorage.getItem('lists')) || [];
    console.log(listArray);
    listArray.push(list);
    localStorage.setItem('lists', JSON.stringify(listArray));
}

export {createNewList, storeNewList};