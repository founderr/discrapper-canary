r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(528734),
    a = r(951516);
function s(e) {
    (0, a.Z)(1, arguments);
    var n = (0, i.default)(e),
        r = n.getFullYear(),
        s = n.getMonth(),
        o = new Date(0);
    return o.setFullYear(r, s + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
