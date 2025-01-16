import { iconList, colorList } from "../util";

export default (function newList() {
    // TODO: add touch ctrl
    const wrapper = document.createElement("div");
    wrapper.classList.add('list-wrap');
    const content = 
    `
    <div class="new-list-card">
    <div class="top-tool space-between">
        <button class="cancel">Cancel</button>
        <span>New List</span>
        <button class="done">Done</button>
    </div>
    <div class="init card-wrap">
        <div class="big-icon">
            <span class="material-symbols-outlined">
                list
            </span>
        </div>
        <input type="text" placeholder="List Name">
    </div>
    <div class="wrap-center">
        <div class="color-wrap card-wrap"></div>
    </div>
    
    <div class="wrap-center">
        <div class="icons-wrap card-wrap"></div>
    </div>
</div>
    `
    wrapper.innerHTML = content;
    // wrapper.style.height = `0vh`;
    wrapper.style.transform = `translateY(10%)`;

    const colorDiv = wrapper.querySelector('.color-wrap');
    let selectedColor;
    colorList.forEach((color) => {
        const colorSpanWrap = document.createElement('span');
        if (color === 'blue') {
            colorSpanWrap.classList.add('color-span-wrap', 'circle-select');
        } else {
            colorSpanWrap.classList.add('color-span-wrap', 'circle-not-select');
        }

        const colorSpan = document.createElement('span');
        colorSpan.classList.add('color','circle',`${color}`);
        colorSpan.style.backgroundColor = `${color}`;


        colorSpan.addEventListener('click', (event)=>{
            selectedColor = color;
            event.target.parentElement.classList.add('circle-select');
            event.target.parentElement.classList.remove('circle-not-select');
            event.target.parentElement.parentElement.childNodes.forEach((child) => {
                if (child.firstChild.classList.contains(color)) {
                    child.classList.remove('circle-not-select');
                    child.classList.add('circle-select');
                } else {
                    child.classList.add('circle-not-select');
                    child.classList.remove('circle-select');
                }
            })
        })

        colorSpanWrap.append(colorSpan);
        colorDiv.appendChild(colorSpanWrap);
    })


    const iconDiv = wrapper.querySelector('.icons-wrap');
    let selectedIcon;

    iconList.forEach((icon)=> {
        const iconSpanWrap = document.createElement('span');

        if (icon === 'list') {
            iconSpanWrap.classList.add('icon-span-wrap', 'circle-select');
        } else {
            iconSpanWrap.classList.add('icon-span-wrap', 'circle-not-select');
        }

        const iconSpan = document.createElement('span');
        iconSpan.classList.add('icon','circle',`${icon}`,'material-symbols-outlined');
        iconSpan.textContent = `${icon}`;

        iconSpan.addEventListener('click', (event)=>{
            selectedIcon = icon;
            event.target.parentElement.classList.add('circle-select');
            event.target.parentElement.classList.remove('circle-not-select');
            event.target.parentElement.parentElement.childNodes.forEach((child) => {
                if (child.firstChild.classList.contains(icon)) {
                    child.classList.remove('circle-not-select');
                    child.classList.add('circle-select');
                } else {
                    child.classList.add('circle-not-select');
                    child.classList.remove('circle-select');
                }
            })
        })

        iconSpanWrap.append(iconSpan);
        iconDiv.appendChild(iconSpanWrap);
    })



    
    wrapper.querySelector('button.cancel').addEventListener('click', (e)=>{
        e.preventDefault();
        requestAnimationFrame(()=>{
            wrapper.style.transform = `translateY(10%)`;
        });
        const removeWrapper = function() {
            wrapper.parentElement.removeChild(wrapper);
        };
        setTimeout(removeWrapper, 300);
        // wrapper.addEventListener('transitionend', removeWrapper);
    });


    
    return wrapper;
})();