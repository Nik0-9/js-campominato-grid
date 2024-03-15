let btnStart = document.querySelector('.btn-outline-dark');

btnStart.addEventListener('click', function(){
    
let difficulty = document.getElementById('difficulty').value;
const gridEl = document.getElementById('grid');
gridEl.innerHTML = '';
//console.log(gridEl);
gridEl.classList.add('d-flex', 'flex-wrap');
//console.log(gridEl);
if(difficulty === '1'){
    console.log(difficulty);
    for (i = 0; i < 100; i++) {
        const newCell = generateCell(i + 1);
        gridEl.appendChild(newCell);
        newCell.addEventListener('click', function(){
            newCell.classList.toggle('clicked');
            console.log(newCell.innerHTML);
        });
    }
} else if(difficulty === '2'){
    console.log(difficulty);
    for (i = 0; i < 81; i++) {
        const newCell = generateCell(i + 1);
        gridEl.appendChild(newCell);
        newCell.classList.add('cell-medium');
        newCell.addEventListener('click', function(){
            newCell.classList.toggle('clicked');
            console.log(newCell.innerHTML);
        });
    }
} else if(difficulty === '3'){
    console.log(difficulty);
    for (i = 0; i < 49; i++) {
        const newCell = generateCell(i + 1);
        gridEl.appendChild(newCell);
        newCell.classList.add('cell-hard');
        newCell.addEventListener('click', function(){
            newCell.classList.toggle('clicked');
            console.log(newCell.innerHTML);
        });
    }
}
});

function generateCell(content) {
    let addCell = document.createElement('div');
    addCell.innerHTML = content;
    //console.log(addCell);
    addCell.classList.add('cell');
    return addCell;
}


