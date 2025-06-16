['copy', 'selectStart', 'contextmenu'].forEach(event => {
    document.addEventListener(event, (e) => {
        e.preventDefault();
        alert(`Can not ${event}`);
    })
})
document.addEventListener('keydown', e => {
    if ((e.key === 'F12')
        || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && ['U', 'S'].includes(e.key.toLowerCase()))
    ) {
        e.preventDefault();
        alert("DevTools Option Disabled")
    }
})