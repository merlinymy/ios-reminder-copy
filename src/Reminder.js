export default class Reminder {
    // #id;
    constructor (title, notes, date, time, tags, flag, priority, list, subtasks, image, isComplete) {
        this._id = Reminder.generateId();
        this.title = title;
        this.notes = notes;
        this.date = date;
        this.time = time;
        this.tags = tags;
        this.flag = flag;
        this.priority = priority;
        this.list = list;
        this.subtasks = subtasks;
        this.image = image;
        this.isComplete = isComplete;
    }

    static generateId() {
        return Date.now();
    }

    get id() {
        return this._id;
    }
}