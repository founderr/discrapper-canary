r.r(n),
    r.d(n, {
        default: function () {
            return l;
        }
    });
var i = r(217224),
    a = r(528734),
    s = r(138512),
    o = r(951516);
function l(e, n) {
    (0, o.Z)(2, arguments);
    var r = (0, a.default)(e),
        l = (0, i.Z)(n) - (Math.floor(r.getMonth() / 3) + 1);
    return (0, s.default)(r, r.getMonth() + 3 * l);
}
