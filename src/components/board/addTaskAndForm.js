const board = document.querySelector('.board');
// console.log(board);

function formClickAddTask(e) {
  const formCart = e.target.parentElement.querySelector('.formCart');
  if (formCart.classList.contains('displayNone')) {
    formCart.classList.remove('displayNone');
  } else {
    formCart.classList.add('displayNone');
  }
}

const addLink = board.querySelectorAll('.addLink');
// console.log(addLink);

for (let i = 0; i < addLink.length; i += 1) {
  addLink[i].addEventListener('click', (e) => {
    formClickAddTask(e);
  });
}

function formClickAdd(e) {
  console.log('Клик Add');
  console.log(e.target);
}

const buttonAdd = board.querySelectorAll('.buttonAdd');
console.log(buttonAdd);

for (let i = 0; i < addLink.length; i += 1) {
  buttonAdd[i].addEventListener('click', (e) => {
    formClickAdd(e);
  });
}

function formClickX(e) {
  // console.log('Клик X');
  const column = e.target.parentElement.parentElement.parentElement;
  // console.log(column.querySelector('.addLink'));
  if (column.querySelector('.addLink').classList.contains('displayNone')) {
    // console.log('есть');
    column.querySelector('.addLink').classList.remove('displayNone');
  } else {
    // console.log('нет');
    column.querySelector('.addLink').classList.add('displayNone');
  }
}

const buttonX = board.querySelectorAll('.buttonX');
// console.log(buttonX);

for (let i = 0; i < addLink.length; i += 1) {
  buttonX[i].addEventListener('click', (e) => {
    formClickX(e);
  });
}

// // const formCart = document.querySelectorAll('.formCart');
// // console.log(console.log(formCart));

// const buttonOk = document.querySelectorAll('.buttonOk');
// console.log(buttonOk);
// for (let i = 0; i < buttonOk.length; i += 1) {
//   // buttonOk[i].preventDefault();
//   // console.log(buttonOk[i]);

//   buttonOk[i].addEventListener('click', (e) => {
//     e.preventDefault();
//     formClick();
//   });
// }

// // const cancel = document.querySelectorAll('.buttonCancel');
// // console.log(cancel);
