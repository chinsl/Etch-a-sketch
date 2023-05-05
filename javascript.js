//create div with class="container"
const container = document.createElement('div');
container.classList.toggle("container");

//create footer with text
const footer = document.createElement('footer');
footer.textContent = "ETCH-A-SKETCH";

//add footer and container
document.body.appendChild(footer);
document.body.insertBefore(container, footer);

// btn.addEventListener('click', prompt());

//function to make grid
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
        square.style.backgroundColor = 'lightsalmon';
    })
}   
}

//initial grid
createGrid(30);

