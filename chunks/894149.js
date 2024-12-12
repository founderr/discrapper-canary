r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(528734),
    a = r(951516),
    s = r(217224);
function o(e, n) {
    (0, a.Z)(2, arguments);
    var r = (0, s.Z)(n);
    r % 7 == 0 && (r -= 7);
    var o = 1,
        l = (0, i.default)(e),
        u = (((r % 7) + 7) % 7 < o ? 7 : 0) + r - l.getUTCDay();
    return l.setUTCDate(l.getUTCDate() + u), l;
}
