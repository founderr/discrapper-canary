n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(193603),
    i = n(951516),
    a = n(780603),
    s = n(217224),
    o = n(633605);
function l(e, t) {
    (0, i.Z)(1, arguments);
    var n,
        l,
        u,
        c,
        d,
        f,
        _,
        h,
        p = (0, o.j)(),
        m = (0, s.Z)(null !== (n = null !== (l = null !== (u = null !== (c = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== c ? c : null == t ? void 0 : null === (d = t.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.firstWeekContainsDate) && void 0 !== u ? u : p.firstWeekContainsDate) && void 0 !== l ? l : null === (_ = p.locale) || void 0 === _ ? void 0 : null === (h = _.options) || void 0 === h ? void 0 : h.firstWeekContainsDate) && void 0 !== n ? n : 1),
        g = (0, r.Z)(e, t),
        E = new Date(0);
    return E.setUTCFullYear(g, 0, m), E.setUTCHours(0, 0, 0, 0), (0, a.Z)(E, t);
}
