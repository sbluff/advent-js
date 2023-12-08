function findNaughtyStep(original, modified) {
    if (original == modified) // no change
        return '';
    else {
        var _a = (original.length > modified.length) ? [original, modified] : [modified, original], long_string = _a[0], short_string = _a[1];
        for (var _i = 0, long_string_1 = long_string; _i < long_string_1.length; _i++) {
            var character = long_string_1[_i];
            var index = short_string.indexOf(character);
            if (index === -1)
                return character;
            else
                short_string = short_string.slice(0, index) + short_string.slice(index + 1);
        }
    }
}
var original = 'abcd';
var modified = 'abcde';
var result = findNaughtyStep(original, modified); // 'e'
console.log(result);
