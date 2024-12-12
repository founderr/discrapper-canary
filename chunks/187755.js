r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(193603),
    a = r(951516),
    s = r(780603),
    o = r(217224),
    l = r(633605);
function u(e, n) {
    (0, a.Z)(1, arguments);
    var r,
        u,
        c,
        d,
        f,
        _,
        h,
        p,
        m = (0, l.j)(),
        g = (0, o.Z)(null !== (r = null !== (u = null !== (c = null !== (d = null == n ? void 0 : n.firstWeekContainsDate) && void 0 !== d ? d : null == n ? void 0 : null === (f = n.locale) || void 0 === f ? void 0 : null === (_ = f.options) || void 0 === _ ? void 0 : _.firstWeekContainsDate) && void 0 !== c ? c : m.firstWeekContainsDate) && void 0 !== u ? u : null === (h = m.locale) || void 0 === h ? void 0 : null === (p = h.options) || void 0 === p ? void 0 : p.firstWeekContainsDate) && void 0 !== r ? r : 1),
        E = (0, i.Z)(e, n),
        v = new Date(0);
    return v.setUTCFullYear(E, 0, g), v.setUTCHours(0, 0, 0, 0), (0, s.Z)(v, n);
}
