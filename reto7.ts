function drawGift(size, symbol) {
    let baseLine:String  = '#'
    baseLine.repeat(size);
    let draw: string[][] = []
    let finalDraw = "";
    for (let index = 0; index < size; index++) {
        const deep = Array(index).fill(symbol);
        deep[deep.length - 1] = '#';
        let face = [...baseLine.split(''), ...deep]
        if (index > 0 && index < size - 1) face.fill(symbol, 1, size - 1)
        draw.push(face);
    }
    draw = [...draw, ...draw.reverse()];
    draw.splice(size, 1);
    draw.forEach((element, index) => {
        let whiteSpaces = ""
        if (index < size - 1) whiteSpaces = " ".repeat((size - 1) - index);
        finalDraw += whiteSpaces + element.join('') + '\n';
    });
    return finalDraw;
}

drawGift(3, '*')