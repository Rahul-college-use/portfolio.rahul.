['copy', 'selectstart', 'contextmenu'].forEach(event => {
    document.addEventListener(event, (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: `You can't ${event} here!`,
            toast: true,
            position: 'top-end',
            timer: 2000,
            showConfirmButton: false,
        });
    });
});

document.addEventListener('keydown', e => {
    if ((e.key === 'F12')
        || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && ['U', 'S'].includes(e.key.toLowerCase()))
    ) {
        e.preventDefault();
        Swal.fire({
            icon: 'error',
            title: 'DevTools Blocked',
            text: 'Access to developer tools is disabled.',
            toast: true,
            position: 'top-end',
            timer: 2000,
            showConfirmButton: false,
        });
    }
});
