// main-menu
function menuOpen(){
    document.querySelector('.mobile-menu').classList.add('show');
    document.querySelector('.menu-open').style.display='none';
    document.querySelector('.menu-close').style.display='block';
}

function menuClose(){
    document.querySelector('.mobile-menu').classList.remove('show');
    document.querySelector('.menu-open').style.display='block';
    document.querySelector('.menu-close').style.display='none';
}
