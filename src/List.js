export default class List {
    constructor(name, color, icon) {
        this._id = List.generateId();
        this.name = name;
        this.color = color;
        this.icon = icon;
        this.reminders = [];
    }

    addReminder(reminder) {
        this.reminders.push(reminder);
    }

    static generateId() {
        return Date.now();
    }


    removeReminder(id) {
        const newArray = this.reminders.filter(item => {
            item.id === id;
        });
        this.reminders = newArray;
    }
}