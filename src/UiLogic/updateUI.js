import { newListTab } from "../components/listTab";

const updateUI = function () {
    // if no lists stored, hide My Lists h1
    const storedLists = localStorage.getItem('lists');
    if (storedLists === null || storedLists.length === 0 ) {
        // hide My List h1
        const mylistsH1 = document.querySelector('h1.my-lists');
        mylistsH1.classList.add('hidden');

        // disable new reminder button
        const newReminder = document.querySelector('button.new-reminder');
        newReminder.disabled = true;
        newReminder.children[0].style.backgroundColor = 'grey';
    } else {
        // for each item in lists array, create a list tab and append them to 
        const listTabsWrap = document.querySelector('div.list-tabs');
        
    }
}

export {updateUI};