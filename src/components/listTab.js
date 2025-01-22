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

    return component;
}

export {newListTab};