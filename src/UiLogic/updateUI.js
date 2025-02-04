import { newListTab, newReminderListDefault } from "../components/listTab";
import newList from "../components/newList";
import { newReminderComponent } from "../components/newReminder";
import { createDetails } from "../components/detailsPage";
import { getLists } from "../applicationLogic/listLogic";
import { listSelectPage } from "../components/listSelectPage";
import { reminderCard, reminderPage} from "../components/reminderPage";
import { editReminderPage } from "../components/editReminder";

const newListBtn = document.querySelector("button.add-list");
const newReminderBtn = document.querySelector("button.new-reminder");
const main = document.querySelector('.main');
const body = document.querySelector('body');
const mainContent = document.querySelector('.main-content');
const organizeDiv = document.querySelector('.organize');
const listsDiv = document.querySelector('.lists');
const searchBox = document.querySelector('.search');
const topTool = document.querySelector('.top-tool');
const btmTool = document.querySelector('.bottom-tool');
let listsDivBtm;
const btmToolTop = btmTool.getBoundingClientRect().top;

export const newListCard = function(event) {
    
    event.preventDefault();
    body.append(newList);
    requestAnimationFrame(() => {
        newList.style.height = `98dvh`;
        newList.style.transform = `translateY(-98%)`;  
        main.style.borderRadius = '10px';
        main.style.transform = `scale(0.95)`;
    });
}

export const checkBtmToolBorder = function () {

    if (listsDivBtm > btmToolTop) {
        btmTool.classList.add('top-border', 'white-bg');
    } else {
        btmTool.classList.remove('top-border', 'white-bg');
    }
}

// export const mainContenOnScroll = function(event) {
//     const topToolBtm = topTool.getBoundingClientRect().bottom;
//     const orgDivTop = organizeDiv.getBoundingClientRect().top;
//     const listsDivBtm = listsDiv.getBoundingClientRect().bottom;
//     const btmToolTop = btmTool.getBoundingClientRect().top;
//     const searchBoxBtm = searchBox.getBoundingClientRect().bottom;
//     event.preventDefault();
//     if (orgDivTop< searchBoxBtm) {
//         // first resize the search icon
//         searchIcon.style.fontSize = `calc(3dvh - ${Math.abs(searchBoxBtm-orgDivTop)}px)`;
//         // then set input placehold style to transparent
//         searchInput.style.fontSize = `calc(2dvh - ${Math.abs(searchBoxBtm-orgDivTop)}px)`;
//         // finally shrink the search box
//         searchInput.style.height = `calc(4dvh - ${Math.abs(searchBoxBtm-orgDivTop)}px)`;
//         const searchBoxHeightOriginal = searchBox.style.height;
//         searchBox.classList.add('bottom-border', 'white-bg');
//         topTool.classList.add('white-bg');
//     } else {
//         searchBox.classList.remove('bottom-border', 'white-bg');
//         topTool.classList.remove('white-bg');

//     }
//     if (listsDivBtm > btmToolTop) {
//         btmTool.classList.add('top-border', 'white-bg');
//     } else {
//         btmTool.classList.remove('top-border', 'white-bg');
//     }
// }

export const updateMyListUI = function () {
    // if no lists stored, hide My Lists h1
    const storedLists = getLists();
    const mylistsH1 = document.querySelector('h1.my-lists');
    const newReminder = document.querySelector('button.new-reminder');
    const listTabsWrap = document.querySelector('div.list-tabs');

    if (storedLists === null || storedLists.length === 0 ) {
        // hide My List h1
        // mylistsH1 = document.querySelector('h1.my-lists');
        mylistsH1.classList.add('hidden');

        // disable new reminder button
        newReminder.disabled = true;
        newReminder.children[0].style.backgroundColor = 'grey';
    } else {
        mylistsH1.classList.remove('hidden');
        newReminder.disabled = false;
        newReminder.children[0].style.backgroundColor = 'blue';

        listTabsWrap.innerHTML = '';
        // for each item in lists array, create a list tab and append them to 
        storedLists.forEach(json => {
            const ele = JSON.parse(json);
            const aTab = newListTab(ele.color, ele.name, ele.icon, ele.reminders
                .filter((reminder) => {
                    return reminder.isComplete === false;
            }).length);
            
            listTabsWrap.append(aTab);
        });
    }
    listsDivBtm = listsDiv.getBoundingClientRect().bottom
}

export const newReminderCard = function() {
    const reminderWrap = document.createElement('div');
    reminderWrap.classList.add('reminder-wrap');
    const newReminder = newReminderComponent();
    reminderWrap.append(newReminder);
    body.append(reminderWrap);
    const detailPage = createDetails();
    reminderWrap.append(detailPage);
    const listSelectCard = listSelectPage();
    reminderWrap.append(listSelectCard);

    requestAnimationFrame(() => {
        newReminder.style.height = `98dvh`;
        newReminder.style.transform = `translateY(-98%)`; 
        detailPage.style.height = `98dvh`;
        detailPage.style.transform = `translateY(-98%)`;  
        listSelectCard.style.height = `98dvh`;
        listSelectCard.style.transform = `translateY(-98%)`;  
        main.style.borderRadius = '10px';
        main.children[0].style.borderRadius = '10px'
        main.style.transform = `scale(0.98)`;
    });
}

export const updateSelectedListUI = function(selectedIdx, selectedList) {
    const list = document.querySelector('.lists-select-content');
    const check = list.querySelector('.material-symbols-outlined.selected-icon.check');
    check.remove();
    const selected = list.children[selectedIdx];
    selected.children[1].append(check);

    const newReminderDiv = document.querySelector('.new-reminder-div');
    const selectList = newReminderDiv.querySelector('.select-list');
    if (selectList) {
        selectList.remove();
    }
    const newSelectedList = newReminderListDefault(selectedList.color, selectedList.name, selectedList.icon);
    newSelectedList.addEventListener('click', () => {
        const listSelectWrap = document.querySelector('.list-select-wrap');
        const component = document.querySelector('.new-reminder-div');
        requestAnimationFrame(() => {
            listSelectWrap.style.zIndex = '12';
            listSelectWrap.style.opacity = '1';
            component.parentElement.style.transform = `translateX(-50%)`;  
        });
    });
    
    newReminderDiv.removeChild(newReminderDiv.lastChild);
    newReminderDiv.append(newSelectedList);
}

export const updateDetailTabInfo = function (dateInfo, timeInfo) {
    const detailTab = document.querySelector('div.detail-info');
    const detailInfo = document.createElement('p');
    let content;
    console.log(timeInfo);
    if (dateInfo && !timeInfo) {
        content = `${dateInfo}`;
    } else if (dateInfo && timeInfo) {
        content = `${dateInfo} at ${timeInfo}`;
    }
    detailInfo.textContent = content;

    detailTab.removeChild(detailTab.lastChild);
    detailTab.append(detailInfo);
}

export const buildReminderPage = function(idx) {
    const component = reminderPage(idx);
    body.append(component);
    requestAnimationFrame(() => {
        main.style.transform = 'translateX(-50%)';
        component.style.transform = 'translateX(-100%)';
    })
}

export const updateOrganizeCount = function() {
    const scheduled = getLists().map((ele) => JSON.parse(ele))
        .reduce((prev, curr) => {
        prev = prev.concat(curr.reminders.filter((rem)=> rem.date));
        return prev;
    },[]).filter((reminder) => {
        return reminder.isComplete === false;
    });

    const flagged = getLists().map((ele) => JSON.parse(ele))
    .reduce((prev, curr) => {
        prev = prev.concat(curr.reminders.filter((rem)=> rem.flag));
        return prev;
    },[]).filter((reminder) => {
        return reminder.isComplete === false;
    });

    const completed = getLists().map((ele) => JSON.parse(ele))
        .reduce((prev, curr) => {
        prev = prev.concat(curr.reminders.filter((rem)=> rem.isComplete));
        return prev;
    },[]);

    const all = getLists().map((ele) => JSON.parse(ele))
        .reduce((prev, curr) => {
        prev = prev.concat(curr.reminders);
        return prev;
    },[]).filter((reminder) => {
        return reminder.isComplete === false;
    });

    const scheduledCount = document.querySelector('.card.scheduled .item-count');
    const allCount = document.querySelector('.card.all .item-count');
    const flaggedCount = document.querySelector('.card.flagged .item-count');
    const completedCount = document.querySelector('.card.completed .item-count');

    scheduledCount.textContent = scheduled.length;
    allCount.textContent = all.length;
    flaggedCount.textContent = flagged.length;
    completedCount.textContent = completed.length;
}

export const updateReminderPage = function(idx) {
    const reminderContent = document.querySelector('.reminder-content');
    reminderContent.innerHTML = '';
    const reminders = JSON.parse(getLists()[idx]).reminders; // json
    reminders.filter((reminder) => {
        return reminder.isComplete === false;
    }).forEach((reminder) => {
        const newReminderCard = reminderCard(reminder, idx);
        reminderContent.append(newReminderCard)
    })
}

export const removeReminderPage = function() {
    const component = document.querySelector('.reminder-page');
    requestAnimationFrame(() => {
        main.style.transform = 'translateX(0%)';
        component.style.transform = 'translateX(0%)';
    })
    setTimeout(()=> {
        body.removeChild(body.lastChild);
    }, 300);
}

export const openEditor = function(reminder, idx) {
    const editReminder = editReminderPage(reminder, idx);
    const reminderPage = document.querySelector('.reminder-page');
    const main = document.querySelector('.main');
    body.append(editReminder);

    requestAnimationFrame(() => {
        main.style.transform = 'scale(0.1)'
        reminderPage.style.transform = 'scale(0.98) translateX(-102%)';
        reminderPage.style.borderRadius = '9px'
        editReminder.style.height = `98dvh`;
        editReminder.style.transform = `translateY(-98%)`; 
    })
}



