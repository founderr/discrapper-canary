n.d(t, {
    P: function () {
        return u;
    }
});
var i = n(442837),
    l = n(385956),
    r = n(15701),
    a = n(594174),
    s = n(359119),
    o = n(897769),
    c = n(981312),
    d = n(403485);
function u(e) {
    let t = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        n = (0, r.G)(e),
        u = (0, l.v)(e),
        h = (0, o.S)(e, s.pj.STRANGER_DANGER),
        p = (0, c.U)(),
        m = (null == t ? void 0 : t.isStaff()) !== !0,
        f = (0, d.h)(e).length > 0;
    if ((!!p || !m) && !n && !u && !f) return h;
}
