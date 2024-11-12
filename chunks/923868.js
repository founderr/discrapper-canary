n.r(t),
    n.d(t, {
        default: function () {
            return o;
        }
    });
var r = n(528734),
    i = n(217224),
    a = n(951516),
    s = n(633605);
function o(e, t) {
    (0, a.Z)(1, arguments);
    var n,
        o,
        l,
        u,
        c,
        d,
        f,
        _,
        p = (0, s.j)(),
        h = (0, i.Z)(null !== (n = null !== (o = null !== (l = null !== (u = null == t ? void 0 : t.weekStartsOn) && void 0 !== u ? u : null == t ? void 0 : null === (c = t.locale) || void 0 === c ? void 0 : null === (d = c.options) || void 0 === d ? void 0 : d.weekStartsOn) && void 0 !== l ? l : p.weekStartsOn) && void 0 !== o ? o : null === (f = p.locale) || void 0 === f ? void 0 : null === (_ = f.options) || void 0 === _ ? void 0 : _.weekStartsOn) && void 0 !== n ? n : 0);
    if (!(h >= 0 && h <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var m = (0, r.default)(e),
        g = m.getDay();
    return m.setDate(m.getDate() - ((g < h ? 7 : 0) + g - h)), m.setHours(0, 0, 0, 0), m;
}
