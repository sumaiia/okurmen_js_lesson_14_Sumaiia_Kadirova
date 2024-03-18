document.addEventListener('DOMContentLoaded', () => 
    function addNewElement() {
    // const container = document.querySelector('#container');
    // function addNewElement(){
    //     const NewElement = document.createElement('p');
    //     NewElement.innerHTML = 'Helllo world!';
        // container.appendChild(NewElement);
    // }

    const addNewElement = function() {
        const addNewElement = document.createElement('p');
       NewElement.innerHTML = 'Hello world';

       CSSContainerRule.appendChild(NewElement);
    }
    // addNewElement();
    const createElement = document.createElement('p');
    NewElement.innerHTML = text;

    callback(NewElement);
    createElement('Ayajan girl!', (element) => {
        CSSContainerRule.appendChild(element);
    });
})
