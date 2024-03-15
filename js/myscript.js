let btnStart = document.querySelector('.btn-outline-dark')

btnStart.addEventListener('click', function(){

const gridEl = document.getElementById('grid');
gridEl.innerHTML = '';
//console.log(gridEl);
gridEl.classList.add('d-flex', 'flex-wrap');
//console.log(gridEl);

 for (i = 0; i < 100; i++) {
    gridEl.appendChild(generateCell(i +1));
 }
});


function generateCell(content) {
    let addCell = document.createElement('div');
    addCell.innerHTML = content;
    //console.log(addCell);
    addCell.classList.add('cell');
    return addCell;
}


