r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(528734),
    a = r(951516),
    s = 86400000;
function o(e) {
    (0, a.Z)(1, arguments);
    var n = (0, i.default)(e),
        r = n.getTime();
    return n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0), Math.floor((r - n.getTime()) / s) + 1;
}
