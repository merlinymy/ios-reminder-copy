import detailPageStruct from './detailsPage.html';

export const createDetails = function() {
    const body = document.querySelector('body');
    const newReminderPage = document.querySelector('.new-reminder-div');
    const component = document.createElement('div');
    component.classList.add('details-wrap')
    component.innerHTML = detailPageStruct;

    const backBtn = component.querySelector('button.cancel');
    backBtn.addEventListener('click', (event) => {
        playAnimation();

    });

    const playAnimation = function () {
        requestAnimationFrame(()=>{
            component.style.transform = `translate(100%, -198%)`;
            newReminderPage.style.transform = 'translateY(-98%) translateX(0%)'
        });
        const removeWrapper = function() {
            body.removeChild(component);
        };
        
        setTimeout(removeWrapper, 300);
    }

    return component;
};