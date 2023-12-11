var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function drawGift(size, symbol) {
    var baseLine = '#';
    baseLine.repeat(size);
    var draw = [];
    var finalDraw = "";
    for (var index = 0; index < size; index++) {
        var deep = Array(index).fill(symbol);
        deep[deep.length - 1] = '#';
        var face = __spreadArray(__spreadArray([], baseLine.split(''), true), deep, true);
        if (index > 0 && index < size - 1)
            face.fill(symbol, 1, size - 1);
        draw.push(face);
    }
    draw = __spreadArray(__spreadArray([], draw, true), draw.reverse(), true);
    draw.splice(size, 1);
    draw.forEach(function (element, index) {
        var whiteSpaces = "";
        if (index < size - 1)
            whiteSpaces = " ".repeat((size - 1) - index);
        finalDraw += whiteSpaces + element.join('') + '\n';
    });
    return finalDraw;
}
drawGift(3, '*');
