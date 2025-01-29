import detailPageStruct from './detailsPage.html';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';
import { getCanAdd } from '../util';

export const createDetails = function() {

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
    prioritySelect.addEventListener('change', (event) => {
        console.log(event.target.value);
    })

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
            timeInput.remove();
        }
    });

    const detailsTab = document.querySelector('.reminder-details-tab');
    const addBtn = component.querySelector('button.done');
    addBtn.disabled = true;
    detailsTab.addEventListener('click', () => {
        console.log('animation')
        if (getCanAdd()) {
            console.log('what')
            addBtn.disabled = false;
        } else {
            addBtn.disabled = true;
        }
    });



    const backBtn = component.querySelector('button.cancel');
    backBtn.addEventListener('click', (event) => {
        playAnimation();

    });

    const playAnimation = function () {
        requestAnimationFrame(()=>{
            component.parentElement.style.transform = `translateX(0%)`;
        });
        // const removeWrapper = function() {
        //     body.removeChild(component);
        // };
        
        // setTimeout(removeWrapper, 300);
    }

    return component;
};