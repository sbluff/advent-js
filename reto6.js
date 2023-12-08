function maxDistance(movements) {
    var distance = 0, both_counter = 0;
    for (var _i = 0, movements_1 = movements; _i < movements_1.length; _i++) {
        var movement = movements_1[_i];
        if (movement == '>') {
            distance++;
        }
        else if (movement == '<') {
            distance--;
        }
        else if (movement == '*') {
            both_counter++;
        }
    }
    distance = (distance >= 0) ? distance + both_counter : distance - both_counter;
    return Math.abs(distance);
}
console.log(maxDistance('>>*<'));
console.log(maxDistance('<<<>'));
console.log(maxDistance('>***>'));
