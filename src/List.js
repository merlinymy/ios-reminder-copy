export default class List {
    constructor(name) {
        this.name = name;
        this.reminders = [];
    }

    addReminder(reminder) {
        this.reminders.push(reminder);
    }

    removeReminder(id) {
        const newArray = this.reminders.filter(item => {
            item.id === id;
        });
        this.reminders = newArray;
    }
}