r.d(n, {
    J: function () {
        return d;
    },
    n: function () {
        return c;
    }
});
var i = r(47120);
var a = r(442837),
    s = r(271383),
    o = r(430824),
    l = r(607744),
    u = r(594174);
function c(e) {
    let [n, r, i, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, l.Z, u.default, s.ZP];
    if (null == e) return !1;
    let c = n.getGuild(e),
        { notClaimed: d } = r.getCheck(e),
        f = i.getCurrentUser(),
        _ = !1;
    if (null != f) {
        var h, p;
        _ = null !== (p = null === (h = a.getMember(e, f.id)) || void 0 === h ? void 0 : h.isPending) && void 0 !== p && p;
    }
    return (_ || d) && !!(null == c ? void 0 : c.hasVerificationGate());
}
function d(e) {
    return (0, a.e7)([o.Z, l.Z, u.default, s.ZP], () => null != e && c(e, [o.Z, l.Z, u.default, s.ZP]), [e]);
}
