import { buildReminderPage } from "../UiLogic/updateUI";

const newListTab = function (color, name, icon, length) {
    const component = document.createElement('div');
    const leftWrap = document.createElement('div');
    const rightWrap = document.createElement('div');
    const iconSpan = document.createElement('span');
    const listNameP = document.createElement('p');
    const itemLengthP = document.createElement('p');
    const arrowIconSpan = document.createElement('span');

    leftWrap.append(iconSpan, listNameP);
    leftWrap.classList.add('left-wrap');
    rightWrap.append(itemLengthP, arrowIconSpan);
    rightWrap.classList.add('right-wrap');

    component.classList.add('list-card');
    iconSpan.classList.add('material-symbols-outlined', 'list-tab-icon', 'circle');
    iconSpan.textContent = icon;
    iconSpan.style.backgroundColor = color;
    listNameP.classList.add('list-name');
    listNameP.textContent = name;
    itemLengthP.textContent = length || 0;
    arrowIconSpan.classList.add('material-symbols-outlined', 'list-tab-icon');
    arrowIconSpan.textContent = 'arrow_forward_ios';
    component.append(leftWrap, rightWrap);

    //TODO: sliding, right click and hold to open options
    // , drag to rearange, left click and tap to open
    component.addEventListener('click', (event) => {
        const idx = [...event.target.parentNode.children].indexOf(event.target);
        buildReminderPage(idx);
    }) 

    return component;
}

const newReminderListDefault = function (color, name, icon) {
    const component = document.createElement('div');
    const leftWrap = document.createElement('div');
    const rightWrap = document.createElement('div');
    const iconSpan = document.createElement('span');
    const listP = document.createElement('p');
    listP.textContent = 'List';
    const listNameP = document.createElement('p');
    const arrowIconSpan = document.createElement('span');

    leftWrap.append(iconSpan, listP);
    leftWrap.classList.add('left-wrap');
    rightWrap.append(listNameP, arrowIconSpan);
    rightWrap.classList.add('right-wrap');

    component.classList.add('list-card', 'list-card-select');
    iconSpan.classList.add('material-symbols-outlined', 'list-tab-icon', 'circle');
    iconSpan.textContent = icon;
    iconSpan.style.backgroundColor = color;
    listNameP.classList.add('list-name');
    listNameP.textContent = name;
    arrowIconSpan.classList.add('material-symbols-outlined', 'list-tab-icon');
    arrowIconSpan.textContent = 'arrow_forward_ios';
    component.append(leftWrap, rightWrap);

    return component;
}

const newReminderListSelect = function (color, name, icon, isSelect) {
    const component = document.createElement('div');
    const leftWrap = document.createElement('div');
    const rightWrap = document.createElement('div');
    const iconSpan = document.createElement('span');
    const listNameP = document.createElement('p');
    const selectedIconSpan = document.createElement('span');

    leftWrap.append(iconSpan, listNameP);
    leftWrap.classList.add('left-wrap');
    if (isSelect) {
        rightWrap.append(selectedIconSpan);
    }

    component.classList.add('list-card');
    iconSpan.classList.add('material-symbols-outlined', 'list-tab-icon', 'circle');
    iconSpan.textContent = icon;
    iconSpan.style.backgroundColor = color;
    listNameP.classList.add('list-name');
    listNameP.textContent = name;
    selectedIconSpan.classList.add('material-symbols-outlined', 'selected-icon', 'check');
    selectedIconSpan.textContent = 'check';
    component.append(leftWrap, rightWrap);

    return component;
}

export {newListTab, newReminderListDefault, newReminderListSelect};