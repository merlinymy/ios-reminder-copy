import listSelectPageStruct from './listSelectPage.html'
import { getLists, getSelectedList, setSelectedList } from '../applicationLogic/listLogic';
import { newReminderListSelect } from './listTab';
import { updateSelectedListUI } from '../UiLogic/updateUI';


export const listSelectPage = function () {
    const component = document.createElement('div');
    component.classList.add('list-select-wrap');
    component.innerHTML = listSelectPageStruct;
    const listSelectContent = component.querySelector('.lists-select-content');
    const storedLists = getLists();
    const selectedList = getSelectedList();

    storedLists.forEach(element => {
        const parsed = JSON.parse(element);
        if (parsed._id === selectedList._id) {
            listSelectContent.append(newReminderListSelect(parsed.color, parsed.name, parsed.icon, true));
        } else {
            listSelectContent.append(newReminderListSelect(parsed.color, parsed.name, parsed.icon));
        }
    });

    listSelectContent.childNodes.forEach((child) => {
        child.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedIdx = [...event.target.parentNode.children].indexOf(event.target);
            const selectedList = JSON.parse(getLists()[selectedIdx]);
            setSelectedList(selectedList);
            updateSelectedListUI(selectedIdx, selectedList);
        })
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