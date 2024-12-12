r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(528734),
    a = r(951516),
    s = r(964415);
function o(e) {
    (0, a.Z)(1, arguments);
    var n = (0, i.default)(e),
        r = n.getUTCFullYear(),
        o = new Date(0);
    o.setUTCFullYear(r + 1, 0, 4), o.setUTCHours(0, 0, 0, 0);
    var l = (0, s.Z)(o),
        u = new Date(0);
    u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
    var c = (0, s.Z)(u);
    return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
