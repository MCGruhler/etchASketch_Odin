const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
container.setAttribute('style', 
' margin: auto; display: flex; flex-flow:row wrap; height: 100%; width: 100%;')

    let amount = 10000;
    let boxes;
    var boxArray = [];
    let boxsize;


    //functions

        function originalSketch() {

            boxsize = 100/(Math.sqrt(amount));

            for (let i = 0; i < amount; i++){
                boxes = document.createElement('div');
                boxes.classList.add(`box`);
                boxArray[i] = boxes;

                boxes.setAttribute('style',
                `width: ${boxsize}% ; height: ${boxsize}% ; background-color: #E5E4E2;`);

                container.appendChild(boxes);
            }

            for (let j = 0; j < amount; j++){
                boxArray[j].addEventListener('mouseover', () => {
                    boxArray[j].setAttribute('style', 
                    `width: ${boxsize}%; height: ${boxsize}%; background-color: black;`);
                });
            }
        }

        function clearSketchPad(){
                boxes.style.display = ('none');

                for (let j = 0; j < amount; j++){
                        boxArray[j].style.display = ('none');
                }
            
        }

        function newSketchSize(){
            boxsize = 100/(Math.sqrt(amount));

            for (let i = 0; i < amount; i++){
                boxes = document.createElement('div');
                boxes.classList.add(`box`);
                boxArray[i] = boxes;
                boxes.setAttribute('style',
                `width: ${boxsize}% ; height: ${boxsize}% ; background-color: #E5E4E2;`);

                container.appendChild(boxes);
            }

            for (let j = 0; j < amount; j++){
                boxArray[j].addEventListener('mouseover', () => {
                    boxArray[j].setAttribute('style', 
                    `width: ${boxsize}%; height: ${boxsize}%; background-color: black;`);
                });
            }
        }
        
        function drawSketch(){
            boxsize = 100/(Math.sqrt(amount));

            for (let j = 0; j < amount; j++){
                boxArray[j].addEventListener('mouseover', () => {
                    boxArray[j].setAttribute('style', 
                    `width: ${boxsize}%; height: ${boxsize}%; background-color: black;`);
                });
            }
        }

        function eraseSketch(){
            boxsize = 100/(Math.sqrt(amount));

            for (let j = 0; j < amount; j++){
                boxArray[j].addEventListener('mouseover', () => {
                    boxArray[j].setAttribute('style', 
                    `width: ${boxsize}%; height: ${boxsize}%; background-color: #E5E4E2;`);
                });
            }
        }
        

        //buttons

        const btn = document.querySelector('#btn');
        btn.addEventListener('click', () => {
            clearSketchPad();
            amount = (prompt("Choose your side length: ") ** 2);
            if (amount > 10000) {
                alert('The sides cannot be more than 100 boxes.')
                amount = 10000;
                originalSketch();

            } else {
                alert('Your total area is: ' + amount);
                newSketchSize();
            }
        })

        const defBtn = document.querySelector("#defBtn");
        defBtn.addEventListener('click', () => {
            clearSketchPad();
            amount =10000;
            originalSketch();
        })

        const drawBtn = document.querySelector('#drawBtn');
        drawBtn.addEventListener('click', () => {
            drawSketch();
        })

        const eraserBtn = document.querySelector('#eraserBtn');
        eraserBtn.addEventListener('click', () => {
            eraseSketch();
        })


originalSketch();

    
body.appendChild(container);