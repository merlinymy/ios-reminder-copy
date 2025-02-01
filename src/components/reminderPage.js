import reminderStruct from './reminderPage.html';
import {removeReminderPage, updateMyListUI} from '../UiLogic/updateUI';
import { getLists } from '../applicationLogic/listLogic';
import { updateReminder } from '../applicationLogic/reminderLogic';
import { openEditor } from '../UiLogic/updateUI';

export const reminderPage = function(idx) {
    const component = document.createElement('div');
    component.classList.add('reminder-page');
    component.innerHTML = reminderStruct;

    const reminderContent = component.querySelector('.reminder-content');
    const reminders = JSON.parse(getLists()[idx]).reminders; // json
    reminders.filter((reminder) => {
        return reminder.isComplete === false;
    }).forEach((reminder) => {
        const newReminderCard = reminderCard(reminder);
        reminderContent.append(newReminderCard)
    })


    const backBtn = component.querySelector('.cancel');
    backBtn.addEventListener('click', () => {
        removeReminderPage();
    })

    return component;
}

const reminderCard = function(reminder) {
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
                wrapperEle.style.visibility = 'hidden';
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
        reminder.notes = newNotes;        
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
    editBtn.className = 'material-symbols-outlined reminder-edit-btn';
    editBtn.textContent = 'info';
    titleWrap.append(editBtn);

    editBtn.addEventListener('click', openEditor(reminder));

    reminderInfo.addEventListener('click', (event) => {
        event.preventDefault();
        editBtn.style.display = 'block';
        const doneBtn = document.querySelector('.reminder-page button.done');
        doneBtn.style.display = 'block';
        doneBtn.addEventListener('click', () => {
            // close page
        });
        if (event.target.className !== 'reminder-notes' ) {
            title.focus();
            notes.classList.remove('hidden');
        }
    })

    return cardWrap;
}


const lowPriority = function () {
    return exclamation(1);
}
const midPriority = function () {
    return exclamation(2);
}
const highPriority = function () {
    return exclamation(3);
}

const exclamation = function (count) {
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