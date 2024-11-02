n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(528734),
    i = n(951516),
    a = n(217224),
    s = n(633605);
function o(e, t) {
    (0, i.Z)(1, arguments);
    var n,
        o,
        l,
        u,
        c,
        d,
        f,
        _,
        h = (0, s.j)(),
        p = (0, a.Z)(null !== (n = null !== (o = null !== (l = null !== (u = null == t ? void 0 : t.weekStartsOn) && void 0 !== u ? u : null == t ? void 0 : null === (c = t.locale) || void 0 === c ? void 0 : null === (d = c.options) || void 0 === d ? void 0 : d.weekStartsOn) && void 0 !== l ? l : h.weekStartsOn) && void 0 !== o ? o : null === (f = h.locale) || void 0 === f ? void 0 : null === (_ = f.options) || void 0 === _ ? void 0 : _.weekStartsOn) && void 0 !== n ? n : 0);
    if (!(p >= 0 && p <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var m = (0, r.default)(e),
        g = m.getUTCDay();
    return m.setUTCDate(m.getUTCDate() - ((g < p ? 7 : 0) + g - p)), m.setUTCHours(0, 0, 0, 0), m;
}
