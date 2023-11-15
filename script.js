

var container = document.createElement('div')
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.width = '800px'
container.style.height = '800px'


//make a black tile
function makeBlackSquare() {
    var black = document.createElement('div')
    black.style.height = '12.5%'
    black.style.width = '12.5%'
    black.style.backgroundColor = 'black'
    container.appendChild(black)
}

//make a red tile
function makeRedSquare() {
    var red = document.createElement('div')
    red.style.height = '12.5%'
    red.style.width = '12.5%'
    red.style.backgroundColor = 'red'
    container.appendChild(red)
}
//loop for 8 rows
for (let i = 0; i < 8; i++){
//loop 8 tiles in each row
    for(let j = 0; j < 8; j++){
        //place correct colors with if statement
        if(j%2 !== 0 && i%2 !== 0 || i%2 === 0 && j%2 === 0){
            makeBlackSquare()
        }
        else {
            makeRedSquare()
        }
    
    }
}
//append to document!!
document.body.appendChild(container);


// * Create a container for your tiles with the following styles:
//     * `display = "flex"`
//     * `flexWrap = "wrap"`
//     * `width = "800px"`
//     * `height = "800px"`
// * Each tile should have the following styles:
//     * `width = "12.5%"`
//     * `height = "12.5%"`