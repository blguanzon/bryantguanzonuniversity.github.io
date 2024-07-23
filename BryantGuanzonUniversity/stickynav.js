window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.sticky-header').style.display = 'flex';
    } else {
        document.querySelector('.sticky-header').style.display = 'none';
    }
};