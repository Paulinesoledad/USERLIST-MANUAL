// This is my first Javavscript Code

// Single Element

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

//  Multiple Elements

// console.log(document.querySelectorAll('.item'))


// const ul = document.querySelector('.items');

// ul.remove();

// ul.lastElementChild.remove();
// ul.firstElementChild.textContent='Hello';
// btn.style.background= 'green';

// const btn = document.querySelector ('.btn');

// btn.addEventListener('click', (e) => {
    // e.preventDefault();
    // document.querySelector('#my-form').style.background = '#ccc';
    // document.querySelector('body').classList.add('bg-dark');

// });

const myForm = document.querySelector ('#my-form')
const nameInput = document.querySelector ('#name')
const emailInput = document.querySelector ('#email')
const msg = document.querySelector ('.msg')
const userList = document.querySelector ('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit (e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all fields';

        setTimeout(() => msg.remove(), 3000);
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);


        // Clear Fields

        nameInput.value = '';
        emailInput.value = '';
    }
}