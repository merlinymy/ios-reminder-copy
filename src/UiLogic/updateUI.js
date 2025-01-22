import { newListTab } from "../components/listTab";

const updateMyListUI = function () {
    // if no lists stored, hide My Lists h1
    const storedLists = JSON.parse(localStorage.getItem('lists'));
    const mylistsH1 = document.querySelector('h1.my-lists');
    const newReminder = document.querySelector('button.new-reminder');
    const listTabsWrap = document.querySelector('div.list-tabs');

    if (storedLists === null || storedLists.length === 0 ) {
        // hide My List h1
        mylistsH1 = document.querySelector('h1.my-lists');
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
}

export {updateMyListUI};