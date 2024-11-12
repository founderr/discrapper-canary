n.d(t, {
    J: function () {
        return u;
    },
    n: function () {
        return l;
    }
}),
    n(47120);
var r = n(442837),
    i = n(271383),
    a = n(430824),
    s = n(607744),
    o = n(594174);
function l(e) {
    let [t, n, r, l] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, s.Z, o.default, i.ZP];
    if (null == e) return !1;
    let u = t.getGuild(e),
        { notClaimed: c } = n.getCheck(e),
        d = r.getCurrentUser(),
        f = !1;
    if (null != d) {
        var _, p;
        f = null !== (p = null === (_ = l.getMember(e, d.id)) || void 0 === _ ? void 0 : _.isPending) && void 0 !== p && p;
    }
    return (f || c) && !!(null == u ? void 0 : u.hasVerificationGate());
}
function u(e) {
    return (0, r.e7)([a.Z, s.Z, o.default, i.ZP], () => null != e && l(e, [a.Z, s.Z, o.default, i.ZP]), [e]);
}
