r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(991656),
    a = r(70597),
    s = r(991998),
    o = r(896662),
    l = r(573347),
    u = r(536403),
    c = r(188650),
    d = r(291750),
    f = r(528734),
    _ = r(951516);
function h(e) {
    (0, _.Z)(1, arguments);
    var n = (0, f.default)(e.start),
        r = (0, f.default)(e.end);
    if (isNaN(n.getTime())) throw RangeError('Start Date is invalid');
    if (isNaN(r.getTime())) throw RangeError('End Date is invalid');
    var h = {};
    h.years = Math.abs((0, d.Z)(r, n));
    var p = (0, i.Z)(r, n),
        m = (0, a.Z)(n, { years: p * h.years });
    h.months = Math.abs((0, u.Z)(r, m));
    var g = (0, a.Z)(m, { months: p * h.months });
    h.days = Math.abs((0, s.Z)(r, g));
    var E = (0, a.Z)(g, { days: p * h.days });
    h.hours = Math.abs((0, o.Z)(r, E));
    var v = (0, a.Z)(E, { hours: p * h.hours });
    h.minutes = Math.abs((0, l.Z)(r, v));
    var I = (0, a.Z)(v, { minutes: p * h.minutes });
    return (h.seconds = Math.abs((0, c.Z)(r, I))), h;
}
