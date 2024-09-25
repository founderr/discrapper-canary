var n = 800,
    r = 16,
    i = Date.now;
function a(e) {
    var t = 0,
        a = 0;
    return function () {
        var o = i(),
            s = r - (o - a);
        if (((a = o), s > 0)) {
            if (++t >= n) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
    };
}
t.Z = a;
