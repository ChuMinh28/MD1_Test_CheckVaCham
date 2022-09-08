let xeMay = document.getElementById('bocDau')
let congAn = document.getElementById('congAn')
function upArrowPressed() {
    let xeMay = document.getElementById('bocDau')
    xeMay.style.top = parseInt(xeMay.style.top) -10 + 'px'
}
function downArrowPressed() {
    let xeMay = document.getElementById('bocDau')
    xeMay.style.top = parseInt(xeMay.style.top) +10 + 'px'
}
function leftArrowPressed() {
    let xeMay = document.getElementById('bocDau')
    xeMay.style.left = parseInt(xeMay.style.left) -10 + 'px'
}
function rightArrowPressed() {
    let xeMay = document.getElementById('bocDau')
    xeMay.style.left = parseInt(xeMay.style.left) +10 + 'px'
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed()
            break
        case 39:
            rightArrowPressed()
            break
        case 38:
            upArrowPressed()
            break
        case 40:
            downArrowPressed()
            break
    }
    checkVaCham()
}
function letGo() {
    window.addEventListener('keydown', moveSelection)
    checkVaCham()
}
function checkVaCham() {
    let L1= parseInt(xeMay.style.left)
    let T1= parseInt(xeMay.style.top)
    let W1=parseInt(xeMay.style.width)
    let H1= parseInt(xeMay.style.height)
    let L2 =parseInt(congAn.style.left)
    let T2 = parseInt(congAn.style.top)
    let W2 = parseInt(congAn.style.width)
    let H2=  parseInt(congAn.style.height)
    if (L1+W1>=L2 && T1+H1>=T2 ){
        alert('co va cham')}

}
