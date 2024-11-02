n.r(t),
    n.d(t, {
        default: function () {
            return o;
        }
    });
var r = n(633605),
    i = n(528734),
    a = n(217224),
    s = n(951516);
function o(e, t) {
    (0, s.Z)(1, arguments);
    var n,
        o,
        l,
        u,
        c,
        d,
        f,
        _,
        h = (0, r.j)(),
        p = (0, a.Z)(null !== (n = null !== (o = null !== (l = null !== (u = null == t ? void 0 : t.weekStartsOn) && void 0 !== u ? u : null == t ? void 0 : null === (c = t.locale) || void 0 === c ? void 0 : null === (d = c.options) || void 0 === d ? void 0 : d.weekStartsOn) && void 0 !== l ? l : h.weekStartsOn) && void 0 !== o ? o : null === (f = h.locale) || void 0 === f ? void 0 : null === (_ = f.options) || void 0 === _ ? void 0 : _.weekStartsOn) && void 0 !== n ? n : 0);
    if (!(p >= 0 && p <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var m = (0, i.default)(e),
        g = m.getDay();
    return m.setDate(m.getDate() + ((g < p ? -7 : 0) + 6 - (g - p))), m.setHours(23, 59, 59, 999), m;
}
