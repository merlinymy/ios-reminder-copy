import { iconList, colorList } from "../util";
import { storeNewList, createNewList } from "../applicationLogic/addNewList";
import { updateMyListUI } from "../UiLogic/updateUI";
import { newListTab } from "./listTab";
export default (function newList() {
    // TODO: add touch ctrl
    const wrapper = document.createElement("div");
    wrapper.classList.add('list-wrap');
    const content = 
    `
    <div class="new-list-card">
        <div class="top-tool space-between">
            <button class="cancel">Cancel</button>
            <span class="new-list">New List</span>
            <button class="done">Done</button>
        </div>
        <div class="card-contents">
            <div class="init card-wrap">
                <div class="big-icon">

                </div>
                <input id="list-name" type="text" placeholder="List Name">
            </div>

            <div class="wrap-center">
                <div class="color-wrap card-wrap"></div>
            </div>
            
            <div class="wrap-center icon-wrap-center">
                <div class="icons-wrap card-wrap"></div>
            </div>
        <div/>
    
    </div>
    `
    wrapper.innerHTML = content;
    wrapper.style.transform = `translateY(10%)`;

    const doneBtn = wrapper.querySelector('button.done');
    const cancelBtn = wrapper.querySelector('button.cancel');
    const bigIconDiv = wrapper.querySelector('.big-icon');
    const bigIconSpan = document.createElement('span');
    const main = document.querySelector('.main');

    doneBtn.disabled = true;

    const colorDiv = wrapper.querySelector('.color-wrap');
    let selectedColor = 'royalblue';
    colorList.forEach((color) => {
        const colorSpanWrap = document.createElement('span');
        if (color === 'royalblue') {
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
            bigIconSpan.style.backgroundColor = `${selectedColor}`;

        })

        colorSpanWrap.append(colorSpan);
        colorDiv.appendChild(colorSpanWrap);
    })

    const iconDiv = wrapper.querySelector('.icons-wrap');
    let selectedIcon = 'list';
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
            });
            bigIconSpan.textContent = `${selectedIcon}`;

        });
        iconSpanWrap.append(iconSpan);
        iconDiv.appendChild(iconSpanWrap);
    })

    const nameInput = wrapper.querySelector('#list-name');
    let newListName;
    nameInput.addEventListener('input', (event) => {
        event.preventDefault();
        let value = event.target.value;
        if ( value !== '' && value !== undefined && value !== null ) {
            doneBtn.disabled = false;
        } else {
            doneBtn.disabled = true;
        }
        newListName = event.target.value;
    });


    bigIconSpan.classList.add('circle','big-icon','material-symbols-outlined');
    bigIconSpan.textContent = `${selectedIcon}`;
    bigIconSpan.style.backgroundColor = `${selectedColor}`;
    bigIconDiv.append(bigIconSpan);

    const topTool = wrapper.querySelector('.top-tool');
    const init = wrapper.querySelector('.init');
    wrapper.addEventListener('scroll', (event) => {
        let topToolBtm = topTool.getBoundingClientRect().bottom;
        let initTop = init.getBoundingClientRect().top;
        
        if (initTop <= topToolBtm) {
            topTool.classList.add('white-bg', 'bottom-border');
        } else {
            topTool.classList.remove('white-bg', 'bottom-border');

        }
    });

    const playAnimation = function () {
        requestAnimationFrame(()=>{
            wrapper.style.transform = `translateY(10%)`;
            main.style.transform = `scale(1)`;
            main.style.borderRadius = '0px';
        });
        const removeWrapper = function() {
            wrapper.parentElement.removeChild(wrapper);
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
            const newList = createNewList(selectedIcon, selectedColor, newListName);
            // store in local storage
            storeNewList(newList);

            // list tab UI element
            updateMyListUI();
        } catch (e) {
            console.log(e);
        }
        // updateUI();
    });
    
    return wrapper;
})();