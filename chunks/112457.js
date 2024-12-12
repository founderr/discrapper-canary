function i(e, n) {
    return {
        x: e.x + n.x,
        y: e.y + n.y
    };
}
function a(e, n) {
    return {
        x: e.x - n.x,
        y: e.y - n.y
    };
}
function s(e) {
    var n = e.clientOffset,
        r = e.initialClientOffset,
        s = e.initialSourceClientOffset;
    return n && r && s ? a(i(n, s), r) : null;
}
function o(e) {
    var n = e.clientOffset,
        r = e.initialClientOffset;
    return n && r ? a(n, r) : null;
}
r.d(n, {
    YY: function () {
        return s;
    },
    ar: function () {
        return o;
    }
});
