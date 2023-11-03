'use strict'

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.classList;
    if(className == "light-theme"){
        this.txtContent = "Dark";
    }
    else {
        this.txtContent = "Light";
    }
    console.log('current class name: ' + className);
})