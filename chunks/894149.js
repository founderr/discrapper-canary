n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(528734),
    i = n(951516),
    a = n(217224);
function o(e, t) {
    (0, i.Z)(2, arguments);
    var n = (0, a.Z)(t);
    n % 7 == 0 && (n -= 7);
    var o = 1,
        s = (0, r.default)(e),
        l = (((n % 7) + 7) % 7 < o ? 7 : 0) + n - s.getUTCDay();
    return s.setUTCDate(s.getUTCDate() + l), s;
}
