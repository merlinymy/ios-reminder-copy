import { newListTab } from "../components/listTab";
import newList from "../components/newList";
import { reminderUI } from "../components/reminderPage";
import { newReminderComponent } from "../components/newReminder";
import { createDetails } from "../components/detailsPage";
import { getLists } from "../applicationLogic/addNewList";
import { listSelectPage } from "../components/listSelectPage";

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
const topToolBtm = topTool.getBoundingClientRect().bottom;
let mainContentTop = mainContent.getBoundingClientRect().top;
let listsDivBtm;
const btmToolTop = btmTool.getBoundingClientRect().top;
const searchBoxBtm = searchBox.getBoundingClientRect().bottom;
const searchInput = document.querySelector('input.search-input'); 
const searchIcon = document.querySelector('span.search');

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

export const mainContenOnScroll = function(event) {
    const topToolBtm = topTool.getBoundingClientRect().bottom;
    const orgDivTop = organizeDiv.getBoundingClientRect().top;
    const listsDivBtm = listsDiv.getBoundingClientRect().bottom;
    const btmToolTop = btmTool.getBoundingClientRect().top;
    const searchBoxBtm = searchBox.getBoundingClientRect().bottom;
    event.preventDefault();
    if (orgDivTop< searchBoxBtm) {
        // first resize the search icon
        searchIcon.style.fontSize = `calc(3dvh - ${Math.abs(searchBoxBtm-orgDivTop)}px)`;
        // then set input placehold style to transparent
        searchInput.style.fontSize = `calc(2dvh - ${Math.abs(searchBoxBtm-orgDivTop)}px)`;
        // finally shrink the search box
        searchInput.style.height = `calc(4dvh - ${Math.abs(searchBoxBtm-orgDivTop)}px)`;
        const searchBoxHeightOriginal = searchBox.style.height;
        searchBox.classList.add('bottom-border', 'white-bg');
        topTool.classList.add('white-bg');
    } else {
        searchBox.classList.remove('bottom-border', 'white-bg');
        topTool.classList.remove('white-bg');

    }
    if (listsDivBtm > btmToolTop) {
        btmTool.classList.add('top-border', 'white-bg');
    } else {
        btmTool.classList.remove('top-border', 'white-bg');
    }
}

export const updateMyListUI = function () {
    // if no lists stored, hide My Lists h1
    const storedLists = JSON.parse(localStorage.getItem('lists'));
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
            const aTab = newListTab(ele.color, ele.name, ele.icon, ele.reminders.length);
            
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



