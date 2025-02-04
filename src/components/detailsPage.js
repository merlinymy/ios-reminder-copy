import detailPageStruct from './detailsPage.html';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';
import { getCanAdd, setCanAdd } from '../util';
import { updateDetailTabInfo, updateOrganizeCount } from '../UiLogic/updateUI';
import * as listLogic from '../applicationLogic/listLogic';
import { createReminder, storeReminder } from '../applicationLogic/reminderLogic';
import {updateMyListUI} from '../UiLogic/updateUI';

export const createDetails = function() {
    const main = document.querySelector('.main');
    const component = document.createElement('div');
    component.classList.add('details-wrap');
    component.innerHTML = detailPageStruct;

    const dateDiv = component.querySelector('.date');
    const dateToggle = component.querySelector('#date-checkbox');
    let dateToggleState;
    const timeToggle = component.querySelector('#time-checkbox');
    let timeToggleState;
    const flagToggle = component.querySelector('#flag-checkbox');
    let flagState;

    const prioritySelect = component.querySelector('#priority');
    let priorityState;


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

    const detailsTab = document.querySelector('.reminder-details-tab');
    const addBtn = component.querySelector('button.done');
    addBtn.disabled = true;
    detailsTab.addEventListener('click', () => {
        if (getCanAdd()) {
            addBtn.disabled = false;
        } else {
            addBtn.disabled = true;
        }
    });

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let reminderTitle = document.querySelector('textarea#title').value;
        let notes = document.querySelector('textarea#notes').value;
        const dateInput = document.querySelector('input#date-input');
        let date;
        if (dateInput) {
            date = dateInput.value;
        }
        const timeInput = document.querySelector('input#time-input');
        let time;
        if (timeInput) {
            time = timeInput.value;
        }
        const flag = document.querySelector('input#flag-checkbox').checked;
        const priority = document.querySelector('select#priority').value;
        const list = listLogic.getSelectedList();
        const params = [reminderTitle, notes, date, time, flag
            , priority, list.name, list._id, false];
        const reminder = createReminder(params);
        // console.log(reminder);
        storeReminder(reminder);
        updateMyListUI();
        updateOrganizeCount();
        playAnimationOnSubmit();
        setCanAdd(false);

        // updateUI();
    });


    const backBtn = component.querySelector('button.cancel');
    backBtn.addEventListener('click', (event) => {
        updateDetailTabInfo(dateInput.value, timeInput.value)
        playAnimation();
    });

    const playAnimation = function () {
        requestAnimationFrame(()=>{
            component.parentElement.style.transform = `translateX(0%)`;
        });
    }

    const playAnimationOnSubmit = function () {
        requestAnimationFrame(()=>{
            component.style.transform = `translateY(10%)`;
            main.style.transform = `scale(1)`;
            main.style.borderRadius = '0px';
        });
        const removeWrapper = function() {
            const wrapper = component.parentElement.parentElement.children[1];
            wrapper.remove();
        };
        
        setTimeout(removeWrapper, 300);
    }

    return component;
};