r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(528734),
    a = r(951516),
    s = r(217224),
    o = r(633605);
function l(e, n, r) {
    (0, a.Z)(2, arguments);
    var l,
        u,
        c,
        d,
        f,
        _,
        h,
        p,
        m = (0, o.j)(),
        g = (0, s.Z)(null !== (l = null !== (u = null !== (c = null !== (d = null == r ? void 0 : r.weekStartsOn) && void 0 !== d ? d : null == r ? void 0 : null === (f = r.locale) || void 0 === f ? void 0 : null === (_ = f.options) || void 0 === _ ? void 0 : _.weekStartsOn) && void 0 !== c ? c : m.weekStartsOn) && void 0 !== u ? u : null === (h = m.locale) || void 0 === h ? void 0 : null === (p = h.options) || void 0 === p ? void 0 : p.weekStartsOn) && void 0 !== l ? l : 0);
    if (!(g >= 0 && g <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var E = (0, i.default)(e),
        v = (0, s.Z)(n),
        I = (((v % 7) + 7) % 7 < g ? 7 : 0) + v - E.getUTCDay();
    return E.setUTCDate(E.getUTCDate() + I), E;
}
