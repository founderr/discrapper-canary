r.r(n),
    r.d(n, {
        default: function () {
            return o;
        }
    });
var i = r(217224),
    a = r(528734),
    s = r(951516);
function o(e, n) {
    (0, s.Z)(2, arguments);
    var r = (0, a.default)(e),
        o = (0, i.Z)(n);
    if (isNaN(o)) return new Date(NaN);
    if (!o) return r;
    var l = r.getDate(),
        u = new Date(r.getTime());
    return (u.setMonth(r.getMonth() + o + 1, 0), l >= u.getDate()) ? u : (r.setFullYear(u.getFullYear(), u.getMonth(), l), r);
}
