import Reminder from "../Reminder";
import { getLists, updateLists } from "./listLogic";
export function createReminder(params) {
    return new Reminder(...params);
}

export function storeReminder(reminder) {
    const list = getLists();
    const parsedList = list.map((ele) => JSON.parse(ele));
    parsedList.forEach(element => {
        if (element._id === reminder.listId) {
            element.reminders.push(reminder);
        }
    });
    const serialized = parsedList.map((ele) => JSON.stringify(ele));
    updateLists(serialized);
    // console.log(lists);
} 

export function updateReminder(reminder) {
    
    const lists = getLists().map((ele) => JSON.parse(ele))
    lists.forEach(list => {
        if (list._id === reminder.listId) {
            list.reminders.forEach((item) => {
                if (item._id === reminder._id) {
                    Object.assign(item, reminder);
                    
                }
            })
        }
    });
    const serialized = lists.map((ele) => JSON.stringify(ele));
    updateLists(serialized);
}