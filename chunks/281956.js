n.d(t, {
    J: function () {
        return c;
    },
    n: function () {
        return u;
    }
});
var r = n(47120);
var i = n(442837),
    a = n(271383),
    o = n(430824),
    s = n(607744),
    l = n(594174);
function u(e) {
    let [t, n, r, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, s.Z, l.default, a.ZP];
    if (null == e) return !1;
    let u = t.getGuild(e),
        { notClaimed: c } = n.getCheck(e),
        d = r.getCurrentUser(),
        _ = !1;
    if (null != d) {
        var E, f;
        _ = null !== (f = null === (E = i.getMember(e, d.id)) || void 0 === E ? void 0 : E.isPending) && void 0 !== f && f;
    }
    return (_ || c) && !!(null == u ? void 0 : u.hasVerificationGate());
}
function c(e) {
    return (0, i.e7)([o.Z, s.Z, l.default, a.ZP], () => null != e && u(e, [o.Z, s.Z, l.default, a.ZP]), [e]);
}
