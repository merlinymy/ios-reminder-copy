import newReminderHtml from './newReminder.html'

export const newReminderComponent = (() => {
    const main = document.querySelector('.main');

    const component = document.createElement('div')
    component.classList.add('new-reminder-div');
    component.innerHTML = newReminderHtml;

    console.log(component)

    const doneBtn = component.querySelector('button.done');
    // console.log(doneBtn)
    const cancelBtn = component.querySelector('button.cancel');
    
    const playAnimation = function () {
        requestAnimationFrame(()=>{
            component.style.transform = `translateY(10%)`;
            main.style.transform = `scale(1)`;
            main.style.borderRadius = '0px';
        });
        const removeWrapper = function() {
            component.parentElement.removeChild(component);
        };
        
        setTimeout(removeWrapper, 300);
    }

    cancelBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        playAnimation();
        // wrapper.addEventListener('transitionend', removeWrapper);
    });

    doneBtn.addEventListener('click', (e) => {
        e.preventDefault();
        playAnimation();
        try {
            // json object
            // const newList = createNewList(selectedIcon, selectedColor, newListName);
            // store in local storage
            // storeNewList(newList);

            // list tab UI element
            updateMyListUI();
        } catch (e) {
            console.log(e);
        }
        // updateUI();
    });

    return component;
})();


