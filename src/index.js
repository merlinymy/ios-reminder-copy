import Reminder from "./Reminder";
import List from "./List";
import './styles.css';
import * as updateUI from "./UiLogic/updateUI";
import { buildSocialLinkDiv } from "./components/socialLinks";
const newListBtn = document.querySelector("button.add-list");
const newReminderBtn = document.querySelector('button.new-reminder');
const mainContent = document.querySelector('.main-content');
const scheduled = document.querySelector('.card.scheduled');
const all = document.querySelector('.card.all');
const flagged = document.querySelector('.card.flagged');
const completed = document.querySelector('.card.completed');
const menu = document.querySelector('.top-tool span.pending');
// let menuState = 
menu.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const topTool = document.querySelector('.main > .top-tool');
    const socialDiv = buildSocialLinkDiv();
    socialDiv.classList.add('social-wrap');
    const links = socialDiv.childNodes[0];
    topTool.append(socialDiv);
    requestAnimationFrame(() => {
        links.style.transform = 'scale(1)';
        // links.style.top = '0%';
        menu.style.color = 'grey';
    })

    socialDiv.addEventListener('click', ()=> {
        requestAnimationFrame(() => {
            links.style.transform = 'scale(0)';
            // links.style.bottom = '0%';
            // links.style.right = '-85%'
            menu.style.color = 'royalblue';
        })
        setTimeout(()=> {
            socialDiv.remove();
        }, 300)
        
    })
})

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

// mainContent.addEventListener('scroll', (event)=>{
//     updateUI.mainContenOnScroll(event);
// });

updateUI.updateMyListUI();
updateUI.checkBtmToolBorder();
if (localStorage.getItem('lists')) {
    updateUI.updateOrganizeCount();
}
// window.Reminder = Reminder;
// window.List = List;

// const rem = new Reminder('test1');