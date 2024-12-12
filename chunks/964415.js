r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(528734),
    a = r(951516);
function s(e) {
    (0, a.Z)(1, arguments);
    var n = 1,
        r = (0, i.default)(e),
        s = r.getUTCDay(),
        o = (s < n ? 7 : 0) + s - n;
    return r.setUTCDate(r.getUTCDate() - o), r.setUTCHours(0, 0, 0, 0), r;
}
