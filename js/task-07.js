const inputEl = document.querySelector('#font-size-control');
const outputEl = document.querySelector('#text');

inputEl.addEventListener('input', evt => {
    outputEl.style.fontSize = `${evt.currentTarget.value}px`;
    
})