r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(528734),
    a = r(951516),
    s = r(217224),
    o = r(633605);
function l(e, n) {
    (0, a.Z)(1, arguments);
    var r,
        l,
        u,
        c,
        d,
        f,
        _,
        h,
        p = (0, o.j)(),
        m = (0, s.Z)(null !== (r = null !== (l = null !== (u = null !== (c = null == n ? void 0 : n.weekStartsOn) && void 0 !== c ? c : null == n ? void 0 : null === (d = n.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.weekStartsOn) && void 0 !== u ? u : p.weekStartsOn) && void 0 !== l ? l : null === (_ = p.locale) || void 0 === _ ? void 0 : null === (h = _.options) || void 0 === h ? void 0 : h.weekStartsOn) && void 0 !== r ? r : 0);
    if (!(m >= 0 && m <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var g = (0, i.default)(e),
        E = g.getUTCDay(),
        v = (E < m ? 7 : 0) + E - m;
    return g.setUTCDate(g.getUTCDate() - v), g.setUTCHours(0, 0, 0, 0), g;
}
