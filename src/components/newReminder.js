import newReminderHtml from './newReminder.html'
import { newListTab, newReminderListSelect } from './listTab';

export const newReminderComponent = (() => {
    const main = document.querySelector('.main');

    const component = document.createElement('div')
    component.classList.add('new-reminder-div');
    component.innerHTML = newReminderHtml;

    const doneBtn = component.querySelector('button.done');
    const cancelBtn = component.querySelector('button.cancel');
    const selectList = component.querySelector('div.select-list');
    const firstList = JSON.parse(JSON.parse(localStorage.getItem('lists'))[0]);
    const defaultList = localStorage.getItem('last-choice') || firstList;
    const titleInput = component.querySelector('textarea#title');
    const notesArea = component.querySelector('textarea#notes');

    let reminderTitle;
    let reminderNotes;

    doneBtn.disabled = true;

    titleInput.addEventListener('input', (event) => {
        event.target.style.height = '';
        event.target.style.height = `${event.target.scrollHeight}px`;
        let value = event.target.value;
        if ( value !== '' && value !== undefined && value !== null ) {
            doneBtn.disabled = false;
            reminderTitle = event.target.value;
        } else {
            doneBtn.disabled = true;
        }
    })

    notesArea.addEventListener('input', (event) => {
        event.target.style.height = '';
        event.target.style.height = `${event.target.scrollHeight}px`;

    })

    selectList.append(newReminderListSelect(defaultList.color, defaultList.name, defaultList.icon))
    
    const playAnimation = function () {
        requestAnimationFrame(()=>{
            component.style.transform = `translateY(10%)`;
            main.style.transform = `scale(1)`;
            main.style.borderRadius = '0px';
        });
        const removeWrapper = function() {
            component.parentElement.removeChild(component);
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
})();


