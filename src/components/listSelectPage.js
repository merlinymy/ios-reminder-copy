import listSelectPageStruct from './listSelectPage.html'
import { getLists } from '../applicationLogic/addNewList';
import { newReminderListSelect } from './listTab';
export const listSelectPage = function () {
    const component = document.createElement('div');
    component.classList.add('list-select-wrap');
    component.innerHTML = listSelectPageStruct;
    const storedLists = getLists();
    storedLists.forEach(element => {
        const parsed = JSON.parse(element);
        console.log(parsed);
        const tab = newReminderListSelect(parsed.color, parsed.name, parsed.icon);
        component.append(tab);
    });

    const backBtn = component.querySelector('button.cancel');
    backBtn.addEventListener('click', (event) => {
        playAnimation();
    });



    const playAnimation = function () {
        requestAnimationFrame(()=>{
            component.style.zIndex = '0';

            component.parentElement.style.transform = `translateX(0%)`;
    })};
    return component;
}