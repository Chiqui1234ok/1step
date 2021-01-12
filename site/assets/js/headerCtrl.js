setInterval(function() {
    let scroll = window.scrollY;
    // 'alt' is a class which will manage the logo and header appareance, from CSS.
    if(scroll > 150) {
        document.getElementById('header').classList.add('alt');
    } else {
        document.getElementById('header').classList.remove('alt');
    }
    console.log(scroll);
}, 500); // Doesn't matter this little delay, plus is more CPU efficient