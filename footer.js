"use strict";
let fcb_signature = document.getElementById('fcb_signature');
let date_and_time = document.getElementById('date_time');
let paragraph_signature = document.createElement('p').textContent = " 2020-" + new Date().getFullYear();
fcb_signature.append(paragraph_signature);

function timeDisplay() {
    let aff = new Date().toLocaleString('fr-FR',{
        // weekday:    'long', // short (3 premières lettres, narrow = 1ère lettre, long = toute sles lettres)
        // year:       'numeric', // numeric = xxxx , 2-digit = xx
        // month:      'long', // short, narrow, long, numeric
        // day:        'numeric', // 2-digit
        hour:       'numeric',
        minute:     'numeric',
        second:     'numeric'
    });
    date_and_time.innerHTML = aff;
};

let bip = setInterval(timeDisplay,1000);

document.addEventListener('click', ()=> {
    clearInterval(bip, 1000);
});
