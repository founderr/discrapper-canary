r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(528734),
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
        m = (0, i.default)(e),
        g = m.getUTCFullYear(),
        E = (0, l.j)(),
        v = (0, o.Z)(null !== (r = null !== (u = null !== (c = null !== (d = null == n ? void 0 : n.firstWeekContainsDate) && void 0 !== d ? d : null == n ? void 0 : null === (f = n.locale) || void 0 === f ? void 0 : null === (_ = f.options) || void 0 === _ ? void 0 : _.firstWeekContainsDate) && void 0 !== c ? c : E.firstWeekContainsDate) && void 0 !== u ? u : null === (h = E.locale) || void 0 === h ? void 0 : null === (p = h.options) || void 0 === p ? void 0 : p.firstWeekContainsDate) && void 0 !== r ? r : 1);
    if (!(v >= 1 && v <= 7)) throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var I = new Date(0);
    I.setUTCFullYear(g + 1, 0, v), I.setUTCHours(0, 0, 0, 0);
    var T = (0, s.Z)(I, n),
        b = new Date(0);
    b.setUTCFullYear(g, 0, v), b.setUTCHours(0, 0, 0, 0);
    var y = (0, s.Z)(b, n);
    return m.getTime() >= T.getTime() ? g + 1 : m.getTime() >= y.getTime() ? g : g - 1;
}
