function cyberReindeer(road, time) {
    var replaceAt = (function (text, index, replacement) {
        return text.substring(0, index) + replacement + text.substring(index + replacement.length);
    });
    var position_item = '';
    var position = 0;
    var movement = [];
    for (var i = 0; i < time; i++) {
        // store the road state 
        position_item = (i == 0) ? '.' : road[position];
        road = replaceAt(road, position, 'S');
        movement.push(road);
        road = replaceAt(road, position, position_item);
        // after 5 steps the gates open
        if (i == 4) {
            road = road.replaceAll("|", "*");
        }
        // if the sled reaches the last position it won't move
        if (position + 1 < road.length && road[position + 1] != '|') {
            position++;
        }
    }
    return movement;
}
var road = 'S..|...|..';
var time = 15; // unidades de tiempo
var path = cyberReindeer(road, time);
console.log(path);
