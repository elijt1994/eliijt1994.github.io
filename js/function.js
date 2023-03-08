
let button_1 = document.getElementById('button_1');

let tbt_1 = document.getElementById('tbt_1');

button_1.addEventListener('click', toggleText);

function toggleText() {
    button_1.classList.toggle('show');
}

/** 
    if (button_1.classList.contains('show')) {
        button_1.innerHTML = "Ver menos";
    }
    else {
        button_1.innerHTML = "Ver mas";
    }

}

*/