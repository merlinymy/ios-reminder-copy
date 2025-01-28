import detailPageStruct from './detailsPage.html';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';


export const createDetails = function() {
    const body = document.querySelector('body');
    const newReminderPage = document.querySelector('.new-reminder-div');
    const newReminderTitle = newReminderPage.querySelector('textarea#title');
    const component = document.createElement('div');
    component.classList.add('details-wrap')
    component.innerHTML = detailPageStruct;

    const dateDiv = component.querySelector('.date');
    const dateToggle = component.querySelector('#date-checkbox');
    const timeToggle = component.querySelector('#time-checkbox');
    const flagToggle = component.querySelector('#flag-checkbox');
    const prioritySelect = component.querySelector('#priority');

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
            dateInfoP.after(dateInput);
            calendarWrap.style.maxHeight = '500px';
            calendarWrap.childNodes[0].style.opacity = '1';
            calendarWrap.childNodes[0].style.zIndex = '10';
            calendar.selectDate(new Date());
            dateInput.value = calendarWrap.value;
        } else {
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
    timeInput.setAttribute('type', 'text');

    const timeWrap = document.createElement('div');
    timeWrap.classList.add('time-wrap');

    timeToggle.addEventListener('change', (event) => {

    });
    
    const addBtn = component.querySelector('button.done');
    if (newReminderTitle.value) {
        addBtn.disabled = false;
    } else {
        addBtn.disabled = true;
    }

    const backBtn = component.querySelector('button.cancel');
    backBtn.addEventListener('click', (event) => {
        playAnimation();

    });

    const playAnimation = function () {
        requestAnimationFrame(()=>{
            component.style.transform = `translate(100%, -198%)`;
            newReminderPage.style.transform = 'translateY(-98%) translateX(0%)'
        });
        const removeWrapper = function() {
            body.removeChild(component);
        };
        
        setTimeout(removeWrapper, 300);
    }

    return component;
};