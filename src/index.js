import Reminder from "./Reminder";
import List from "./List";
import './styles.css';
import * as updateUI from "./UiLogic/updateUI";

const newListBtn = document.querySelector("button.add-list");
const newReminderBtn = document.querySelector('button.new-reminder');
const mainContent = document.querySelector('.main-content');
const scheduled = document.querySelector('.card.scheduled');
const all = document.querySelector('.card.all');
const flagged = document.querySelector('.card.flagged');
const completed = document.querySelector('.card.completed');

scheduled.addEventListener('click', (event) => {
    updateUI.buildReminderPage('scheduled');
});

all.addEventListener('click', (event) => {
    updateUI.buildReminderPage('all');
});

flagged.addEventListener('click', (event) => {
    updateUI.buildReminderPage('flagged');
});

completed.addEventListener('click', (event) => {
    updateUI.buildReminderPage('completed');
});

newListBtn.addEventListener('click', (event) => {
    updateUI.newListCard(event);
});

newReminderBtn.addEventListener('click', (event) => {
    event.preventDefault();
    updateUI.newReminderCard();
});

mainContent.addEventListener('scroll', (event)=>{
    updateUI.mainContenOnScroll(event);
});

updateUI.updateMyListUI();
updateUI.checkBtmToolBorder();
if (localStorage.getItem('lists')) {
    updateUI.updateOrganizeCount();
}
// window.Reminder = Reminder;
// window.List = List;

// const rem = new Reminder('test1');