
function generate(len) {
    const word = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
    var res = "";
    for(var i = 0; i<len; i++)
        res += word[Math.floor(Math.random() * word.length)];
    return res;
}


module.exports = {generate};
// console.log(generate(10));