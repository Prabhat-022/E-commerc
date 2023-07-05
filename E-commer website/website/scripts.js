const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');

    })
    close.classList.remove('active');
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');

    })

}


const wrapper = document.querySelector('.wrapper');
const Loginlink = document.querySelector('.login-link')
const RegisterLink = document.querySelector('.register-link');


// const btnPopup = document.querySelector('.btnlogin-popup');

RegisterLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

Loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

// btnPopup.addEventListener('click', () => {
//     wrapper.classList.add('active');
// })

// add products on the cart
const addCartbtn = document.querySelector('#addcartbtn');
const additems = document.querySelector('#add-item');

addCartbtn.addEventListener('click', () => {
    const row = document.createElement('tr');

    row.innerHTML = `
    <td><a href="#"> <i class="far fa-times-circle"></i></a></td>
    <td><img src="../img/products/f1.jpg" alt=""></td>
    <td>Cartoon Astronaut T-Shirts</td>
    <td>$118.19</td>
    <td><input type="number" value="1"></td>
    <td>$118.19</td>
    `;
    additems.appendChild(row);

})