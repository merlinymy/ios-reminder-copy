import Reminder from "./Reminder";
import List from "./List";
import './styles.css';
import * as updateUI from "./UiLogic/updateUI";

const newListBtn = document.querySelector("button.add-list");
const mainContent = document.querySelector('.main-content');

newListBtn.addEventListener('click', (event) => {
    updateUI.newListCard(event);
});

mainContent.addEventListener('scroll', (event)=>{
    updateUI.mainContenOnScroll(event);
});

updateUI.updateMyListUI();
updateUI.checkBtmToolBorder();

// window.Reminder = Reminder;
// window.List = List;

// const rem = new Reminder('test1');