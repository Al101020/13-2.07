// TODO: write code here     // import { mdConvert } from 'md-converter';// console.log('app.js bundled');

import '../components/board/board';
import '../components/board/addAnotherCart';

let actualCart;
const board = document.querySelector('.board'); // console.log(board);
board.addEventListener('mousedown', (e) => { // console.log('Клик в поле BOARD');
  const carts = document.querySelectorAll('.cart'); // console.log(carts.length);

  if (carts.length === 0) { // console.log('нет карточек');
    return;
  } // console.log(carts.length);   // console.log(e.target);
  if (e.target.classList.contains('cart')) {
    console.log(`здесь cart есть, всего - ${carts.length}`);
    actualCart = e.target;
  } else if (e.target.parentElement.classList.contains('cart')) { // console.log(`У родителя cart-очки есть, всего - ${carts.length}`);
    actualCart = e.target.parentElement;
  } else { // console.log('Класса cart нет');
    actualCart = undefined;
    return;
  } //
  console.log(actualCart);
});


window.addEventListener('beforeunload', () => {
  // const FormData = {};
});

// ---------------

const onMouseUp = (e) => {
  // const mouseUpItem = e.target;
  // // console.log(mouseUpItem);
  // items.insertBefore(actualElement, mouseUpItem);

  // actualElement.classList.remove('dragged');

  // actualElement = undefined;

  // document.documentElement.removeEventListener('mouseup', onMouseUp);
  // document.documentElement.removeEventListener('mouseover', onMouseOver);
};

board.addEventListener('mousedown', (e) => {
//   let draggedClass = document.querySelectorAll('.dragged'); // этого в видео нет
//    for (let i = 0; i < draggedClass.length ; i++) {
//     draggedClass[i].classList.remove('dragged'); // это я сам попытался чтобы не собирать все(если кликнул или отпустил мвышь за пределами items)
//   }


  // e.preventDefault();
  actualCart = e.target;
  
  // actualCart.parentElement.classList.add('dragged');
  console.log(actualCart);
  console.log(actualCart.parentElement);

  

//   document.documentElement.addEventListener('mouseup', onMouseUp);
//   // document.documentElement.addEventListener('mouseover', onMouseOver);
});
