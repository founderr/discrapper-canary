r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(528734),
    a = r(780264),
    s = r(951516);
function o(e) {
    (0, s.Z)(1, arguments);
    var n = (0, i.default)(e),
        r = n.getFullYear(),
        o = new Date(0);
    o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
    var l = (0, a.Z)(o),
        u = new Date(0);
    u.setFullYear(r, 0, 4), u.setHours(0, 0, 0, 0);
    var c = (0, a.Z)(u);
    return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
