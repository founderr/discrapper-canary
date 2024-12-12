r.r(n),
    r.d(n, {
        default: function () {
            return s;
        }
    });
var i = r(528734),
    a = r(951516);
function s(e, n) {
    (0, a.Z)(2, arguments);
    var r = (0, i.default)(e).getTime(),
        s = (0, i.default)(n.start).getTime(),
        o = (0, i.default)(n.end).getTime();
    if (!(s <= o)) throw RangeError('Invalid interval');
    return r >= s && r <= o;
}
