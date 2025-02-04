import reminderStruct from './reminderPage.html';
import {newReminderCard, removeReminderPage, updateMyListUI, updateReminderPage} from '../UiLogic/updateUI';
import { getLists } from '../applicationLogic/listLogic';
import { storeReminder, storeReminderByListIdx, updateReminder } from '../applicationLogic/reminderLogic';
import { openEditor } from '../UiLogic/updateUI';
import { newReminderComponent } from './newReminder';
import Reminder from '../Reminder';

export const reminderPage = function(idx) {
    const component = document.createElement('div');
    component.classList.add('reminder-page');
    component.innerHTML = reminderStruct;

    const reminderContent = component.querySelector('.reminder-content');
    const reminders = JSON.parse(getLists()[idx]).reminders; // json
    reminders.filter((reminder) => {
        return reminder.isComplete === false;
    }).forEach((reminder) => {
        const newReminderCard = reminderCard(reminder, idx);
        reminderContent.append(newReminderCard)
    })

    const doneBtn = component.querySelector('.done');
    doneBtn.style.display = 'block';
    doneBtn.addEventListener('click', () => {
        removeReminderPage();
    });

    const backBtn = component.querySelector('.cancel');
    backBtn.addEventListener('click', () => {
        removeReminderPage();
    })

    const newReminderBtn = component.querySelector('button.new-reminder');
    newReminderBtn.addEventListener('click', (event)=>{
        const list = JSON.parse(getLists()[idx]);
        event.preventDefault();
        const newReminder = new Reminder('','','','',false,'', 
            list.name, list._id, false
        );
        storeReminderByListIdx(newReminder, idx);
        const newReminderCard = reminderCard(newReminder, idx);
        reminderContent.append(newReminderCard);
        const titleInput = newReminderCard.querySelector('.reminder-title');
        titleInput.click();
        updateMyListUI();
    })
    return component;
}

export const reminderCard = function(reminder, idx) {
    const cardWrap = document.createElement('div');
    cardWrap.classList.add('reminder-card-wrap');
    const checkBox = document.createElement('input');
    checkBox.id = 'is-reminder-complete';
    checkBox.setAttribute('type', 'checkbox');
    const checkBoxCustomize = document.createElement('label');
    checkBoxCustomize.classList.add('round-check');
    const checkBoxInner = document.createElement('span');
    checkBoxInner.classList.add('check-box-inner');
    checkBoxCustomize.append(checkBox, checkBoxInner);
    let completeReminder;

    checkBox.addEventListener('change', (event) => {        
        const wrapperEle = event.target.parentElement.parentElement;
        if (checkBox.checked) {
            completeReminder = setTimeout(() => {
                reminder.isComplete = true;
                updateReminder(reminder);
                wrapperEle.style.display = 'none';
                updateMyListUI();
            }, 3000);
        } else {
            clearTimeout(completeReminder);
            reminder.isComplete = false;
            console.log(reminder)
        }
    })


    const reminderInfo = document.createElement('div');
    reminderInfo.classList.add('reminder-info-wrap');

    cardWrap.append(checkBoxCustomize, reminderInfo);

    const titleWrap = document.createElement('div');
    titleWrap.className = 'reminder-title-wrap';

    const title = document.createElement('textarea');
    // title.setAttribute('type', 'text');
    title.classList.add('reminder-title');
    title.value = reminder.title;
    // title.style.height = `${title.scrollHeight}px`;
    titleWrap.append(title);
    reminderInfo.append(titleWrap);

    let newTitle;

    title.addEventListener('input', (event) => {
        newTitle = event.target.value;
        event.target.style.height = '';
        event.target.style.height = `${event.target.scrollHeight + 1}px`;
    });

    title.addEventListener('focusout', (event) => {
        reminder.title = newTitle || reminder.title;
        editBtn.classList.add('hidden');
        editBtn.classList.remove('block');
        updateReminder(reminder);
    });

    let newNotes = '';

    // if (reminder.notes) {
    const notes = document.createElement('textarea');
    // notes.setAttribute('type', 'text');
    notes.classList.add('reminder-notes');
    notes.value = reminder.notes;
    reminderInfo.append(notes);

    notes.addEventListener('input', (event) => {
        newNotes = event.target.value;
        event.target.style.height = '';
        event.target.style.height = `${event.target.scrollHeight + 1}px`;    
    });
    notes.addEventListener('focusout', (event) => {
        reminder.notes = newNotes || reminder.notes;  
        editBtn.classList.add('hidden');
        editBtn.classList.remove('block');
        updateReminder(reminder);
    });

    if (!reminder.notes) {
        notes.placeholder = 'Add Notes';
        notes.classList.add('hidden');
    }

    // }

    if (reminder.flag) {
        const flagSpan = document.createElement('span');
        flagSpan.classList.add('material-symbols-outlined', 'flag-icon');
        flagSpan.textContent = 'flag_2';
        titleWrap.append(flagSpan);
    }

    if (reminder.priority) {
        switch (reminder.priority.toLowerCase()) {
            case 'low':
                titleWrap.prepend(lowPriority());
                break;
            case 'medium':
                titleWrap.prepend(midPriority());
                break;
            case 'high':
                titleWrap.prepend(highPriority());
                break;
        }
    }

    if (reminder.date) {
        const date = document.createElement('p');
        date.classList.add('reminder-date');
        date.textContent = reminder.date;
        reminderInfo.append(date);
    }

    if (reminder.time) {
        const time = document.createElement('p');
        time.classList.add('reminder-time');
        time.textContent = reminder.time;
        reminderInfo.append(time);
    }

    const editBtn = document.createElement('span');
    editBtn.className = 'material-symbols-outlined reminder-edit-btn hidden';
    editBtn.textContent = 'info';
    titleWrap.append(editBtn);

    reminderInfo.addEventListener('click', (event) => {
        event.preventDefault();
        editBtn.classList.remove('hidden');
        editBtn.classList.add('block');
        if (event.target.className !== 'reminder-notes' ) {
            title.focus();
            notes.classList.remove('hidden');
        }
    });

    cardWrap.addEventListener('click', (event)=> {
        const target = cardWrap.querySelector('.reminder-edit-btn.block');
        if (event.target.contains(target)) {
            openEditor(reminder, idx);
        }
    })

    return cardWrap;
}


export const lowPriority = function () {
    return exclamation(1);
}
export const midPriority = function () {
    return exclamation(2);
}
export const highPriority = function () {
    return exclamation(3);
}

export const exclamation = function (count) {
    const component = document.createElement('div');
    component.className = 'priority-icon';
    for (let i = 0; i < count; i++) {
        const span = document.createElement('span');
        span.className = 'material-symbols-outlined';
        span.textContent = 'exclamation';
        component.append(span);
    }
    return component;
}