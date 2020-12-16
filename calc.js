
function display(txt) {
    let display = document.getElementsByClassName('txt')[0];
    display.innerHTML = txt;
    return display
}

function displaySymbol(symb) {
    let display = document.getElementsByClassName('symb')[0];
    display.innerHTML = symb;
    return display
}

function displayMem(mem) {
    let display = document.getElementsByClassName('mem')[0];
    display.innerHTML =mem;
    return display
}

function infoDisplay() {
    let infoDisplay = document.getElementsByClassName('txt')[0].innerHTML;
    return infoDisplay
}

function infoMem() {
    let infoMem = document.getElementsByClassName('mem')[0].innerHTML;
    return infoMem
}

function infoSymbol() {
    let infoSymbol = document.getElementsByClassName('symb')[0].innerHTML;
    return infoSymbol
}


function push(bNum) {

    if (infoDisplay() === '0') {
        bNum = display(bNum);
        console.log('click 1', bNum)
        return bNum
    } else {
        bNum = infoDisplay() + bNum;
        console.log('click 2', bNum)
        return display(bNum)
    }
}
function del(){
    let bNum = '0';
    let value1 = 0;
    let value2 = 0;
    let empty1 = ' ';
    return [
    display(bNum),
    displayMem(empty1),
    displaySymbol(empty1),
    value1,
    value2]
}

function delNumb(){
    let bNum = '0';
    return display(bNum)
}

function equally() {
    let value1 = Number(infoDisplay());
    let value2 = Number(infoMem());
    if (infoSymbol() === ' ') {
        return [ infoSymbol(),
        console.dir('пустыха')]
    } else if (infoSymbol() === '+') {
        let reCalc = value1 + value2;
        return [
            displayMem(reCalc),
            console.dir(value1),
            console.dir(value2),
            console.dir(reCalc),
            console.dir('плюс'),
            displaySymbol (' '),
            ]
    } else if (infoSymbol() === '-') {
        let reCalc = value2 - value1;
        return [
            console.dir(value1),
            console.dir(value2),
            console.dir(reCalc),
            console.dir('минус'),
            displaySymbol (' '),
            displayMem(reCalc),
            ]
    } else if (infoSymbol() === '*') {
        let reCalc = value2 * value1;
        return [
            console.dir(value1),
            console.dir(value2),
            console.dir(reCalc),
            console.dir('умножить'),
            displaySymbol (' '),
            displayMem(reCalc),
        ]
    } else if (infoSymbol() === '/') {
        let reCalc = value2 / value1;
        return [
            console.dir(value1),
            console.dir(value2),
            console.dir(reCalc),
            console.dir('делить'),
            displaySymbol (' '),
            displayMem(reCalc),
        ]
    }
}

function calculation(symbol){

        let value1 = Number(infoDisplay())
        let value2 = Number(infoMem())
    if (infoSymbol() === '=') {
        del();
    } else {
        if (symbol === '+') {
            let calc = value1 + value2;
            return [
                displaySymbol ('+'),
                displayMem(calc),
                delNumb(),
            ]} else if (symbol === '-') {
            if (infoMem() === ' ') {
                let calc = value1;
                return [
                    displaySymbol ('-'),
                    displayMem(calc),
                    delNumb()
                ]} else {
                let calc = value2 - value1;
                return [
                    displaySymbol ('-'),
                    displayMem(calc),
                    delNumb()]
            }
        } else if (symbol === '*') {
            if (infoMem() === ' ') {
                let calc = value1;
                return [
                    displaySymbol('*'),
                    displayMem(calc),
                    delNumb()]
            } else {
                let calc = value2 * value1;
                return [
                    displaySymbol('*'),
                    displayMem(calc),
                    delNumb()]
            }
        } else if (symbol === '/') {
            if (infoMem() === ' ') {
                let calc = value1;
                return [
                    displaySymbol('/'),
                    displayMem(calc),
                    delNumb()]
            } else if (infoMem() === 0) {
                let calc = 0;
                return [
                    displaySymbol('/'),
                    displayMem(calc),
                    delNumb()]
            }
            else {
                let calc = value2 / value1;
                return [
                    displaySymbol('/'),
                    displayMem(calc),
                    delNumb()]
            }}
        else if (symbol === '=') {
            equally();
            return [
                displaySymbol('='),
                display(infoMem())]
        }
    }

}











