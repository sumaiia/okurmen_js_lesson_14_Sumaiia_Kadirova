document.addEventListener('DOMContentLoaded',() => {
    // const //timeout = setInterval(() => {
        alert('Hello world1!');
    }, 3000); //1000ms = 1 s
    const counter = 0;
    const Interval = setInterval(function() {
   counter++;
   console.log(`Counter is now; ${counter}`);

   if (center > 5) {
    crearInterval
      }
    }, 5000); ///5000ms = 5 s

    const timeout = setTimeout(function () {
        alert('I am timeout');
    }, 3000);

    const btn = document.querySelector('.button');
    const item = document.querySelector('item');
    const container = document.querySelector('.container');
//    even bubbling поднятия событий
    e.target.style.backraund = 'blue';
    // e.stopPropagation
    btn.addEventListener('clik', (e) => {
        e.target.style.backraund = 'blue';
        alert('I am button');
    });
    item.addEventListener('click', (e) => {
        alert('I am item');
        e.target.style.backraund = 'yellow';

    });

    container.addEventListener('click', (e) => {
        alert('I am container');
        e.target.style.backraund = 'gray';

    })
// });