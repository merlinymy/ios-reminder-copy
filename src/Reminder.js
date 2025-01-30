export default class Reminder {
    // #id;
    constructor (title, notes, date, time, flag, priority, listName, listId, isComplete) {
        this._id = Reminder.generateId();
        this.title = title;
        this.notes = notes;
        this.date = date;
        this.time = time;
        this.flag = flag;
        this.priority = priority;
        this.listName = listName;
        this.listId = listId;
        this.isComplete = isComplete;
    }

    static generateId() {
        return Date.now();
    }

    get id() {
        return this._id;
    }
}