console.log("Me are also under the water")

let container = document.getElementById('circle');
let ratio = 3
let radius = 3 * ratio;

function kristian(word){
    let text = word
    let step = 2 * Math.PI / text.length;
    let angle = 0;

    for(let i = 0; i < text.length; i++){
        let div = document.createElement('span');
        div.style.width = 10 * ratio + "px"
        div.style.height = 10 * ratio + "px"
        div.innerHTML = text[i];
        let x = Math.floor(radius * (1 + Math.cos(angle)));
        let y = Math.floor(radius * (1 + Math.sin(angle)));
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.transform = 'rotate(' + (angle * (180 / Math.PI) - 270) + 'deg)';
        container.appendChild(div);
        angle += step;
    }
}

kristian("THE AMAZING APP ")