import Reminder from "./Reminder";
import List from "./List";
import './styles.css';
import newList from "./components/newList";

const newListBtn = document.querySelector("button.add-list");
const newReminderBtn = document.querySelector("button.new-reminder");
const main = document.querySelector('.main');
const body = document.querySelector('body');



newListBtn.addEventListener('click', (event) => {
    event.preventDefault();
    body.append(newList);
    requestAnimationFrame(() => {
        newList.style.height = `95vh`;
        newList.style.transform = `translateY(-95%)`;  
      });
 
})

// window.Reminder = Reminder;
// window.List = List;

// const rem = new Reminder('test1');