
let gridSize = 16;


const grid = document.getElementById('grid');

//buttons
const monochrome = document.getElementById('monochrome');
const color = document.getElementById('color');
const clear = document.getElementById('clear');
const size = document.getElementById('size');

let isClear, isMonochrome, isColor;

isMonochrome=true;

monochrome.addEventListener('click', () => {
    isColor=false;
    isMonochrome=true;
})

color.addEventListener('click', () => {
    isMonochrome = false;
    isColor=true;
    console.log(true)
})

clear.addEventListener('click', () => {
    deleteGrid();
    createGrid(gridSize);

    console.log(getRandomColor());
});


//pass reference to ask function upon click
size.addEventListener('click', askForSize);

//function to make grid
function createGrid (x)
{
    //this loop iterates to create, size, and append each cell
    for(let i=1; i<=x*x; i++)
    {
        //create partitions
        const cell = document.createElement('div');
        cell.setAttribute('id', i);

        //initialize percentage of container side that each square occupies
        let gridSpace = ((450/x)/450)*100;
        // console.log(gridSpace);
        
        //box styling
        cell.style.boxSizing = 'border-box';
        cell.style.border = 'thin solid black';
        cell.style.height = gridSpace + '%';
        cell.style.width = gridSpace + '%';

        //flex = auto
        cell.style.flex = '1 1 auto';

        //add cell to container
        grid.appendChild(cell);


        //change color with hover
        cell.addEventListener('mouseover', () => 
        {
            let c = getRandomColor();

            if(isMonochrome)
                cell.style.backgroundColor = 'lightsalmon';
            else if(isColor)
            {
                cell.style.backgroundColor = c;
                console.log(c);
            }

        })
    }   
}

function getRandomColor ()
{
    let r = Math.floor(Math.random()*1000);
    while(r >= 255)
    {
        r = Math.floor(Math.random()*1000);
    }

    let g = Math.floor(Math.random()*1000)
    while(g >= 255)
    {
        g = Math.floor(Math.random()*1000);
    }

    let b = Math.floor(Math.random()*1000)
    while(b >= 255)
    {
        b = Math.floor(Math.random()*1000);
    }

    return "rgb(" + r + " "+ g + " " + b + ")";
}


//initial grid call
createGrid(gridSize);

function deleteGrid()
{
    while(grid.firstChild)
    {
        grid.removeChild(grid.firstChild);
    }
}

function askForSize ()
{
    //delete contents of grid container
    deleteGrid();
    gridSize = prompt('What square size?');
    createGrid(gridSize);
}



