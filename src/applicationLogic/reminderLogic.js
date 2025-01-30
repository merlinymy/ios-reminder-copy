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