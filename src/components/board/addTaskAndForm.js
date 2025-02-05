const board = document.querySelector('.board');

function formClickAddTask(e) {
  const formCart = e.target.parentElement.querySelector('.formCart');
  if (formCart.classList.contains('displayNone')) {
    formCart.classList.remove('displayNone');
    formCart.parentElement.querySelector('.addLink').classList.add('displayNone');
  } else {
    formCart.classList.add('displayNone');
  }
}

const addLink = board.querySelectorAll('.addLink');

for (let i = 0; i < addLink.length; i += 1) {
  addLink[i].addEventListener('click', (e) => {
    formClickAddTask(e);
  });
}

function formClickAdd(e) {
  const column = e.target.parentElement.parentElement.parentElement;

  const block = column.querySelector('.block');

  const cart = document.createElement('div');
  cart.classList.add('cart');

  const divClose = document.createElement('div');
  divClose.textContent = 'x';
  divClose.classList.add('close');
  divClose.addEventListener('click', (event) => {
    event.target.parentElement.remove();
  });
  cart.appendChild(divClose);

  const p = document.createElement('p');
  p.textContent = column.querySelector('.inputText').value;
  p.classList.add('text');

  if (column.querySelector('.inputText').value === '') {
    p.textContent = 'Надо что-то написать';
    column.querySelector('.addLink').classList.remove('displayNone');
    column.querySelector('.formCart').classList.add('displayNone');
  } else {
    column.querySelector('.addLink').classList.remove('displayNone');
    column.querySelector('.formCart').classList.add('displayNone');
    column.querySelector('.inputText').value = '';
  }

  cart.appendChild(p);

  block.appendChild(cart);
}

const buttonAdd = board.querySelectorAll('.buttonAdd');

for (let i = 0; i < addLink.length; i += 1) {
  buttonAdd[i].addEventListener('click', (e) => {
    formClickAdd(e);
  });
}

function formClickX(e) {
  const column = e.target.parentElement.parentElement.parentElement;
  if (column.querySelector('.addLink').classList.contains('displayNone')) {
    column.querySelector('.addLink').classList.remove('displayNone');
    column.querySelector('.formCart').classList.add('displayNone');
    column.querySelector('.inputText').value = '';
  } else {
    column.querySelector('.addLink').classList.add('displayNone');
  }
}

const buttonX = board.querySelectorAll('.buttonX');

for (let i = 0; i < addLink.length; i += 1) {
  buttonX[i].addEventListener('click', (e) => {
    formClickX(e);
  });
}
