import Reminder from "./Reminder";
import List from "./List";
import './styles.css';
import newList from "./components/newList";
import { updateUI } from "./UiLogic/updateUI";

const newListBtn = document.querySelector("button.add-list");
const newReminderBtn = document.querySelector("button.new-reminder");
const main = document.querySelector('.main');
const body = document.querySelector('body');

updateUI();

newListBtn.addEventListener('click', (event) => {
    event.preventDefault();
    body.append(newList);
    requestAnimationFrame(() => {
        newList.style.height = `98dvh`;
        newList.style.transform = `translateY(-98%)`;  
        main.style.borderRadius = '10px';
        main.style.transform = `scale(0.95)`;
    });
 
})

// window.Reminder = Reminder;
// window.List = List;

// const rem = new Reminder('test1');