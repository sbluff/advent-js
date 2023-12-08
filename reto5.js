function cyberReindeer(road, time) {
    var position_item = '';
    var position = 0;
    var movement = [];
    for (var i = 0; i < time; i++) {
        // store the road state 
        position_item = (i == 0) ? '.' : road[position];
        road = road.substring(0, position) + 'S' + road.substring(position + 1, road.length);
        movement.push(road);
        road = road.replace("S", position_item);
        // if the sled reaches the last position it won't move
        if (position + 1 < road.length && road[position + 1] != '|') {
            position++;
        }
        if (i == 4) {
            road = road.replaceAll("|", "*");
        }
    }
    return movement;
}
var road = 'S..|...|..';
var time = 15; // unidades de tiempo
var path = cyberReindeer(road, time);
console.log(path);
