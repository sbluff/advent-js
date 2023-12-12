function RepeatString(str, num) {
    var result = '';
    for (var i = 0; i < num; i++) {
        result += str;
    }
    return result;
}
function Represent(gift) {
    var boxes = Math.floor(gift.count / 10);
    var bags = gift.count % 10;
    var boxes_representation = '', bag_representation = '';
    var pales = Math.floor(boxes / 5);
    boxes_representation += (pales != 0) ? '[' + RepeatString(gift['type'], pales) + ']' : '';
    boxes_representation += (boxes % 5 != 0) ? RepeatString('{' + gift['type'] + '}', boxes % 5) : '';
    bag_representation += '(' + RepeatString(gift['type'], bags) + ')';
    return boxes_representation + bag_representation;
}
function organizeGifts(gifts) {
    var organized_gifts = {};
    var start_index = 0; //to get the substrings 
    for (var i = 0; i < gifts.length; i++) {
        if (gifts[i].match(/[a-z]/i)) {
            var quantity = gifts.substring(start_index, i);
            var type = gifts[i];
            organized_gifts[type] = { type: type, count: quantity };
            start_index = i + 1;
        }
    }
    var result = '';
    for (var key in organized_gifts) {
        result += Represent(organized_gifts[key]);
    }
    return result;
    // Code here
}
var result1 = organizeGifts("76a11b");
console.log(result1);
// '[a]{a}{a}(aaaaaa){b}(b)'
