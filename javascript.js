const container = document.createElement('div');
//div will contain the 16-square grid
const header = document.createElement('header');
const footer = document.createElement('footer');
const btn = document.createElement('button');



//style header
header.style.display = 'flex';
header.style.height = '100px';
header.style.width = '100%';
header.style.justifyContent = 'center';

document.body.style.display = 'flex';
document.body.style.flexDirection = 'column'
document.body.style.alignItems   = 'center';
document.body.style.backgroundColor = '#ffe4c4'


//style button
btn.style.height = '30px';
btn.style.width = '300px';
btn.textContent = "Change Grid Resolution"
btn.style.fontFamily = 'courier';
btn.style.fontSize = 'larger';
btn.style.display = 'flex';
btn.style.fontWeight = 'bold';
btn.style.justifyContent = 'center';
btn.style.alignSelf = 'center';
btn.style.alignItems = 'center';
btn.style.backgroundColor = '#deb887'
btn.style.borderRadius = '7px';
btn.style.borderColor = 'black';

// btn.addEventListener('click', prompt());

function createGrid (x)
{
    for(let i=1; i<=x*x; i++)
{
    const square = document.createElement('div');
    square.setAttribute('id', i);

    let gridSpace = ((500/x)/500)*100;
    console.log(gridSpace);
    

    //box styling
    square.style.boxSizing = 'border-box';
    square.style.border = 'thin solid black';
    square.style.height = gridSpace + '%';
    square.style.width = gridSpace + '%';

    //no flex growing/shrinking; basis = 100/16
    square.style.flex = '1 1 auto';

    //add to container
    container.appendChild(square);

    //change color with hover
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'grey';
    })
}   
}

createGrid(50);

document.body.appendChild(header);
document.body.appendChild(container);
header.appendChild(btn);


//style body border
container.setAttribute('id', 'containter');
container.style.boxSizing = 'border-box';
container.style.border = '4px solid black';
container.style.borderRadius = '10px';
container.style.height = '500px';
container.style.width = '500px';
container.style.alignItems = 'center';


//flexbox container
container.style.display = 'flex';
container.style.alignContent = 'flex-start';
container.style.flexWrap = 'wrap';

document.body.appendChild(footer);

const div = document.createElement('div');

footer.appendChild(div);



div.textContent = 'ETCH-A-SKETCH';
div.style.fontFamily = 'courier';
div.style.fontWeight = 'bold';
div.style.fontSize = '50px';
div.style.textAlign = 'center';
footer.style.display = 'flex';
footer.style.justifyContent = 'center';
footer.style.alignContent = 'center';
footer.style.width = '100%';
footer.style.marginTop = '10px';


// output viewport width and height
// console.log(document.body.offsetWidth);
// console.log(document.body.offsetHeight);