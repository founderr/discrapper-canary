r.d(n, {
    W: function () {
        return _;
    },
    v: function () {
        return f;
    }
});
var i = r(192379),
    a = r(442837),
    s = r(430824),
    o = r(496675),
    l = r(863249),
    u = r(944163),
    c = r(246364),
    d = r(981631);
function f(e) {
    let n = s.Z.getGuild(e);
    return null != n && n.hasFeature(d.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && o.Z.can(d.Plq.KICK_MEMBERS, n);
}
function _(e) {
    let n = (0, a.e7)([s.Z], () => s.Z.getGuild(e)),
        r = o.Z.can(d.Plq.KICK_MEMBERS, n) || o.Z.can(d.Plq.MANAGE_GUILD, n),
        f = null != n && n.hasFeature(d.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && r && n.hasVerificationGate(),
        _ = (0, a.e7)([u.Z], () => u.Z.get(e), [e]);
    i.useEffect(() => {
        f && l.ZP.fetchVerificationForm(e);
    }, [f, e]);
    let h = i.useMemo(() => {
        var e;
        return (null !== (e = null == _ ? void 0 : _.formFields) && void 0 !== e ? e : []).some((e) => !(0, c.J)(e));
    }, [null == _ ? void 0 : _.formFields]);
    return f && h;
}
