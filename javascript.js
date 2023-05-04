//div will contain the 16-square grid


//style body border
document.body.setAttribute('id', 'containter');
document.body.style.boxSizing = 'border-box';
document.body.style.border = '4px solid black';
// document.body.style.height = '100vh';
// document.body.style.width = '100vw';
// document.body.style.margin = '0';
// document.body.style.padding = '0';

//flexbox container
document.body.style.display = 'flex';
document.body.style.alignContent = 'flex-start';
document.body.style.flexWrap = 'wrap';

//create 16x16 grid
for(let i=1; i<=256; i++)
{
    const square = document.createElement('div');
    square.setAttribute('id', i);

    //box styling
    square.style.boxSizing = 'border-box';
    square.style.border = 'thin solid black';
    square.style.height = '6vh';
    square.style.width = '6vw';

    //no flex growing/shrinking; basis = 100/16
    square.style.flex = '0 0 6.25%';

    document.body.appendChild(square);

    square.addEventListener('mouseover', () => {

        square.style.backgroundColor = 'grey';
    })
}   


// output viewport width and height
// console.log(document.body.offsetWidth);
// console.log(document.body.offsetHeight);