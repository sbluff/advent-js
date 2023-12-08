function findFirstRepeated(gifts) {
    var ids = [];
    for (var _i = 0, gifts_1 = gifts; _i < gifts_1.length; _i++) {
        var gift_id = gifts_1[_i];
        if (ids.indexOf(gift_id) !== -1) {
            return gift_id;
        }
        else {
            ids.push(gift_id);
        }
    }
    return -1;
}
var giftIds = [5, 1, 5, 1];
var firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId);
