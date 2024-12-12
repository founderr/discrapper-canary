var i = r(565580);
function a(e, n) {
    var r = -1,
        a = e.length,
        s = a - 1;
    for (n = void 0 === n ? a : n; ++r < n; ) {
        var o = i(r, s),
            l = e[o];
        (e[o] = e[r]), (e[r] = l);
    }
    return (e.length = n), e;
}
e.exports = a;
