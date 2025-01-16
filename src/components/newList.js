export default (function newList() {
    const wrapper = document.createElement("div");
    wrapper.classList.add('list-wrap');
    const content = 
    `
    <div class="new-list-card">
    <div class="top-tool">
        <button class="cancel">Cancel</button>
        <span>New List</span>
        <button class="done">Done</button>
    </div>
    <div class="init">
        <div class="big-icon">

        </div>
        <input type="text" placeholder="List Name">
    </div>
    <div class="color"></div>
    <div class="icons"></div>
</div>
    `
    wrapper.innerHTML = content;
    // wrapper.style.height = `0vh`;
    wrapper.style.transform = `translateY(10%)`;
    
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
    })
    
    return wrapper;
})();