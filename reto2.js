function manufacture(gifts, materials) {
    var result = [];
    for (var _i = 0, gifts_1 = gifts; _i < gifts_1.length; _i++) {
        var gift = gifts_1[_i];
        var found = true;
        for (var _a = 0, gift_1 = gift; _a < gift_1.length; _a++) {
            var character = gift_1[_a];
            if (materials.indexOf(character) == -1) {
                found = false;
            }
        }
        if (found) {
            result.push(gift);
        }
    }
    // Code here
    return result;
}
var gifts = ['libro', 'ps5'];
var materials = 'libro';
console.log(manufacture(gifts, materials)); // ["tren", "oso"]
