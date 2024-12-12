r.r(n),
    r.d(n, {
        default: function () {
            return s;
        }
    });
var i = r(528734),
    a = r(951516);
function s(e) {
    (0, a.Z)(1, arguments);
    var n = (0, i.default)(e),
        r = n.getMonth(),
        s = r - (r % 3);
    return n.setMonth(s, 1), n.setHours(0, 0, 0, 0), n;
}
