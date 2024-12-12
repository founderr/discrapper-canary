(e.exports = {}).forEach = function (e, n) {
    for (var r = 0; r < e.length; r++) {
        var i = n(e[r]);
        if (i) return i;
    }
};
