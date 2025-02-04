const addLink = document.querySelectorAll('.addLink');
console.log(addLink);

function formClick(e) {
  console.log('Клик');
  console.log(e.target);
}

for (let i = 0; i < addLink.length; i += 1) {
  addLink[i].addEventListener('click', (e) => {
    formClick(e);
  });
}

// const formCart = document.querySelectorAll('.formCart');
// console.log(console.log(formCart));

const buttonOk = document.querySelectorAll('.buttonOk');
console.log(buttonOk);
for (let i = 0; i < buttonOk.length; i += 1) {
  // buttonOk[i].preventDefault();
  // console.log(buttonOk[i]);

  buttonOk[i].addEventListener('click', (e) => {
    e.preventDefault();
    formClick();
  });
}

// const cancel = document.querySelectorAll('.buttonCancel');
// console.log(cancel);
