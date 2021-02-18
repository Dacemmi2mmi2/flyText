const text = document.querySelector('.text');


text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');


const textItem = document.querySelectorAll('.text span');


let count = 0;

const moveOut = function moveTextOutSide(){
    setTimeout(() => {
        let moveOutSide = setInterval(() => {
            // let rotate = Math.floor(Math.random() * 360);
            let x = Math.floor(Math.random() * (600 - (-400))) + (-400);
            let y = Math.floor(Math.random() * (600 - (-700))) + (-700);
            // textItem[count].style.transform = `rotate(${rotate}deg)`;
            textItem[count].style.top = x + 'px';
            textItem[count].style.left = y + 'px';
            count++;
            if(count === textItem.length){
                clearInterval(moveOutSide);
                count = 0;
                moveIn();
            }
        },)
    }, 3000);
}
moveOut();


const moveIn = function moveTextInSide(){
    setTimeout(() => {
        let moveInSide = setInterval(() => {
            textItem[count].style.top = 0 + 'px';
            textItem[count].style.left = 0 + 'px';
            count++;
            if(count === textItem.length){
                clearInterval(moveInSide);
                count = 0;
                moveOut();
            }
        },)
    }, 3000);
}