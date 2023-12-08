function decode(message) {
    var reverse = function (s) {
        var reverse_string = '';
        for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
            var char = s_1[_i];
            reverse_string = char + reverse_string;
        }
        return reverse_string;
    };
    var open_index, close_index, i = 0;
    while (i < message.length) {
        console.log(i);
        if (message[i] == '(') {
            open_index = i;
            i++;
        }
        else if (message[i] == ')') {
            console.log(message);
            close_index = i;
            console.log([open_index, i]);
            var reversed = reverse(message.slice(open_index + 1, close_index));
            // console.log(message.slice(open_index+1, close_index) )
            // console.log("=>")
            // console.log(reversed)
            message = message.slice(0, open_index) + reversed + message.slice(close_index + 1, message.length);
            i = 0;
        }
        else
            i++;
    }
    return message;
}
var a = decode('(atna(s))');
console.log(a); // hola mundo
