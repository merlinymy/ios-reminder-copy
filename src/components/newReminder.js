import newReminderHtml from './newReminder.html'
import { newListTab, newReminderListDefault } from './listTab';
import * as updateUI from '../UiLogic/updateUI';
import { createDetails } from "../components/detailsPage";
import { setCanAdd, getCanAdd } from '../util';
import { getLists } from '../applicationLogic/listLogic';
import { listSelectPage } from './listSelectPage';
import * as listLogic from '../applicationLogic/listLogic';

export const newReminderComponent = (() => {
    const main = document.querySelector('.main');
    const body = document.querySelector('body');
    const component = document.createElement('div')
    component.classList.add('new-reminder-div');
    component.innerHTML = newReminderHtml;

    const doneBtn = component.querySelector('button.done');
    const cancelBtn = component.querySelector('button.cancel');
    const selectList = component.querySelector('div.select-list');
    const storageLists = localStorage.getItem('lists');
    const titleInput = component.querySelector('textarea#title');
    const notesArea = component.querySelector('textarea#notes');
    const detailTab = component.querySelector('.reminder-details-tab');

    let reminderTitle;
    let reminderNotes;

    doneBtn.disabled = true;

    detailTab.addEventListener('click', () => {
        requestAnimationFrame(() => {
            component.parentElement.style.transform = `translateX(-50%)`;  
            
        });
    });

    titleInput.addEventListener('input', (event) => {
        event.target.style.height = '';
        event.target.style.height = `${event.target.scrollHeight}px`;
        let value = event.target.value;
        if ( value !== '' && value !== undefined && value !== null ) {
            doneBtn.disabled = false;
            reminderTitle = event.target.value;
            setCanAdd(true);
        } else {
            doneBtn.disabled = true;
            setCanAdd(false);
        }
    });

    notesArea.addEventListener('input', (event) => {
        event.target.style.height = '';
        event.target.style.height = `${event.target.scrollHeight}px`;
    })
    if (storageLists) {
        const firstList = JSON.parse(listLogic.getLists()[0]);
        const defaultList = listLogic.getSelectedList() || firstList;
        listLogic.setSelectedList(defaultList);
        console.log(firstList);
        selectList.append(newReminderListDefault(defaultList.color, defaultList.name, defaultList.icon))
    }

    selectList.addEventListener('click', () => {
        const listSelectWrap = document.querySelector('.list-select-wrap');
        requestAnimationFrame(() => {
            listSelectWrap.style.zIndex = '12';
            listSelectWrap.style.opacity = '1';
            component.parentElement.style.transform = `translateX(-50%)`;  
        });
    });
    
    const playAnimation = function () {
        requestAnimationFrame(()=>{
            component.style.transform = `translateY(10%)`;
            main.style.transform = `scale(1)`;
            main.style.borderRadius = '0px';
        });
        const removeWrapper = function() {
            const wrapper = component.parentElement.parentElement.children[1];
            console.log(wrapper);
            wrapper.remove();
        };
        
        setTimeout(removeWrapper, 300);
    }

    cancelBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        playAnimation();
        // wrapper.addEventListener('transitionend', removeWrapper);
    });

    doneBtn.addEventListener('click', (e) => {
        e.preventDefault();
        playAnimation();
        try {
            // json object
            // const newList = createNewList(selectedIcon, selectedColor, newListName);
            // store in local storage
            // storeNewList(newList);

            // list tab UI element
            updateMyListUI();
        } catch (e) {
            console.log(e);
        }
        // updateUI();
    });

    return component;
});


