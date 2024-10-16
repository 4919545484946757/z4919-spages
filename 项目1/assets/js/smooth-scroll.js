const scroller = document.querySelectorAll('#toppul')
scroller.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href').substring(1);
        const tarhref = document.getElementById(href);

        if (tarhref) {
            tarhref.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});