var homecontainer  = document.querySelector('.home-container');
var closepopup = (popupid)=>{
    var popup = document.querySelector(`#${popupid}`);
    var btn = document.querySelector('.popup-close');
    homecontainer.style.visibility = 'visible';
    popup.style.visibility = 'hidden';
    popup.style.padding = '0';
}

var openpopup = (popupid)=>{
    var popup = document.querySelector(`#${popupid}`);
    var btn = document.querySelector('.popup-close');
    homecontainer.style.visibility = 'hidden';
    popup.style.visibility = 'visible';
    popup.style.padding = '2rem';
}