var n = 800,
    r = 16,
    i = Date.now;
function a(e) {
    var a = 0,
        s = 0;
    return function () {
        var o = i(),
            l = r - (o - s);
        if (((s = o), l > 0)) {
            if (++a >= n) return arguments[0];
        } else a = 0;
        return e.apply(void 0, arguments);
    };
}
e.exports = a;
