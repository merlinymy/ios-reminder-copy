import reminderPageStruct from './reminderPage.html'

export const reminderUI = ((idx) => {
    const template = document.createElement('template');
    template.innerHTML = reminderPageStruct;
    console.log(idx);
    console.log(template);
    
})();