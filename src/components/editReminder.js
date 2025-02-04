import editReminderHtml from './editReminder.html'
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';
import { updateReminder } from '../applicationLogic/reminderLogic';
import { closeEditor, updateReminderPage } from '../UiLogic/updateUI';

export const editReminderPage = function(reminder, idx) {
    const reminderPage = document.querySelector('.reminder-page');

    const component = document.createElement('div');
    component.classList.add('edit-reminder-page');
    component.innerHTML = editReminderHtml;

    const doneBtn = component.querySelector('button.done');
    const cancelBtn = component.querySelector('button.cancel');

    cancelBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        playAnimation();
        // wrapper.addEventListener('transitionend', removeWrapper);
    });

    const title = component.querySelector('#title');
    title.value = reminder.title;
    const notes = component.querySelector('#notes');
    notes.value = reminder.notes;

    const dateDiv = component.querySelector('.date');
    const dateToggle = component.querySelector('#date-checkbox');
    let dateToggleState;
    const timeToggle = component.querySelector('#time-checkbox');
    let timeToggleState;
    const dateInput = document.createElement('input');
    const dateInfoP = component.querySelector('.date-info>p');
    dateInput.id = 'date-input';
    dateInput.setAttribute('type', 'text');
    const calendarWrap = document.createElement('div');
    calendarWrap.classList.add('calendar-wrap');
    const calendar = new AirDatepicker(calendarWrap, {
        selectedDates: [new Date()],
        locale: localeEn,
        dateFormat:'EEEE, MMMM d, yyyy',
        onSelect() {
            dateInput.value = calendarWrap.value;
        }
    });
    dateDiv.after(calendarWrap);
    dateToggle.addEventListener('change', (event) => {
        if (event.target.checked) {
            dateToggleState = true;
            dateInfoP.after(dateInput);
            calendarWrap.style.maxHeight = '500px';
            calendarWrap.childNodes[0].style.opacity = '1';
            calendarWrap.childNodes[0].style.zIndex = '10';
            calendar.selectDate(new Date());
            dateInput.value = calendarWrap.value;
        } else {
            dateToggleState = false;
            if (timeToggleState) {
                timeToggle.click();
            }
            calendarWrap.style.maxHeight = '0';
            calendarWrap.style.transition = 'all 200ms ease-in-out';
            calendarWrap.childNodes[0].style.opacity = '0';
            calendarWrap.childNodes[0].style.zIndex = '-10';
            dateInput.remove();
            dateInput.value = '';
            calendar.clear();
        }
    });

    const timeInput = document.createElement('input');
    const timeInfoP = component.querySelector('.time-info>p');
    timeInput.id = 'time-input';
    timeInput.setAttribute('type', 'time');
    timeInput.setAttribute('step', 300)
    timeInput.addEventListener('focus', (event) => {
        event.target.showPicker();
    });

    const timeWrap = document.createElement('div');
    timeWrap.classList.add('time-wrap');

    timeToggle.addEventListener('change', (event) => {
        if (event.target.checked) {
            if (!dateToggleState) {
                // console.dir(dateToggle)
                dateToggle.click();
            }
            timeToggleState = true;
            timeInfoP.after(timeInput);
            timeInput.focus();
        } else {
            timeToggleState = false;
            timeInput.value = '';
            timeInput.remove();
        }
    });

    if (reminder.date) {
        dateToggle.click();
        dateToggleState = true;
        dateInfoP.after(dateInput);
        calendarWrap.style.maxHeight = '500px';
        calendarWrap.childNodes[0].style.opacity = '1';
        calendarWrap.childNodes[0].style.zIndex = '10';
        calendar.selectDate(new Date(reminder.date));
        dateInput.value = reminder.date;
    }

    if (reminder.time) {
        timeToggle.click();
        timeToggleState = true;
        timeInfoP.after(timeInput);
        timeInput.value = reminder.time;
    }
    const flagToggle = component.querySelector('#flag-checkbox');

    if (reminder.flag) {
        flagToggle.click();
    }
    const prioritySelect = component.querySelector('#priority');

    if (reminder.priority) {
        prioritySelect.value = reminder.priority;
    }

    doneBtn.addEventListener('click', (event) => {
        event.preventDefault();
        reminder.title = title.value;
        reminder.notes = notes.value;
        reminder.date = dateInput.value;
        reminder.time = timeInput.value;
        reminder.flag = flagToggle.checked;
        reminder.priority = prioritySelect.value;
        updateReminder(reminder);
        updateReminderPage(idx);
        playAnimation();
    });

    const playAnimation = function () {
        const reminderPage = document.querySelector('.reminder-page');
        const main = document.querySelector('.main');
        requestAnimationFrame(()=>{
            main.style.transform = 'scale(1)';
            reminderPage.style.transform = 'scale(1) translateX(-100%)';
            reminderPage.style.borderRadius = '0px'
            component.style.transform = `translateY(10%)`;
        });
        const removeWrapper = function() {
            // const wrapper = component.parentElement.parentElement.children[1];
            component.remove();
        };
        
        setTimeout(removeWrapper, 300);
    }

    return component
}