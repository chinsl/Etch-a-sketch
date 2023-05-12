//grid container
const grid = document.getElementById('grid');

//buttons
const monochrome = document.getElementById('monochrome');
const color = document.getElementById('color');
const clear = document.getElementById('clear');
const size = document.getElementById('size');

//mode status
let isClear, isMonochrome, isColor;
isMonochrome=true;

//mode changes
monochrome.addEventListener('click', () => {
    isColor=false;
    isMonochrome=true;
})

color.addEventListener('click', () => {
    isMonochrome = false;
    isColor=true;
    // console.log('isColor='+isColor);
    // console.log('isMonochrome='+isMonochrome);
})

clear.addEventListener('click', () => {
    deleteGrid();
    createGrid(gridSize);
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

        let counter = 0;

        let r, g, b;

        r=240;
        g=128;
        b=128;
        
        //change color with hover
        cell.addEventListener('mouseover', () => 
        {
            counter++;
            console.log(counter);

            if(counter>1)
            {
                r = r-25.5;
                g = g-25.5;
                b = b-25.5;

                if(r<0)
                    r=0
                
                if(g<0)
                    g=0;
                
                if(b<0)
                    b=0;

                cell.style.backgroundColor = getColorString(r,g,b);
                // console.log(r+" "+g+" "+b);
            }
            else if(counter==1)
            {
                if(isColor)
                {
                    r = getR();
                    g = getG();
                    b = getB();
                    console.log("this"+r+" "+g+" "+b);
                }
                cell.style.backgroundColor = getColorString(r,g,b); 
                // console.log(r+" "+g+" "+b);
            }
        })
    }   
}

function getColorString (r, g, b)
{
    //returns rgb string
    return "rgb(" + r + " "+ g + " " + b + ")";
}
function getR (){
    let r = Math.floor(Math.random()*1000);
    while(r >= 255)
    {
        r = Math.floor(Math.random()*1000);
    }

    return r;
}

function getG (){
    let g = Math.floor(Math.random()*1000)
    while(g >= 255)
    {
        g = Math.floor(Math.random()*1000);
    }

    return g;
}

function getB (){
    let b = Math.floor(Math.random()*1000)
    while(b >= 255)
    {
        b = Math.floor(Math.random()*1000);
    }

    return b;
}

function deleteGrid()
{
    //iterates to remove cells
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

let gridSize = 16;

//initial grid call
createGrid(gridSize);

