var clearBtn = document.querySelector('#clear')
var squares = document.querySelectorAll('td')

function handleClear() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].textContent = ''
    }
}

clearBtn.addEventListener('click', handleClear)

function changeMarker() {
    if(this.textContent === '') {
        this.textContent = 'X'
    } else if(this.textContent === 'X') {
        this.textContent = 'O'
    } else {
        this.textContent = ''
    }
}

for(let i = 0; squares.length; i++) {
    squares[i].addEventListener('click', changeMarker)
}
