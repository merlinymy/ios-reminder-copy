import Reminder from "./Reminder";
import List from "./List";

window.Reminder = Reminder;
window.List = List;

const rem = new Reminder('test1');
console.log(rem.id);