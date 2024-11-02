n.d(t, {
    W: function () {
        return f;
    },
    v: function () {
        return d;
    }
});
var r = n(192379),
    i = n(442837),
    a = n(430824),
    s = n(496675),
    o = n(863249),
    l = n(944163),
    u = n(246364),
    c = n(981631);
function d(e) {
    let t = a.Z.getGuild(e);
    return null != t && t.hasFeature(c.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && s.Z.can(c.Plq.KICK_MEMBERS, t);
}
function f(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.getGuild(e)),
        n = s.Z.can(c.Plq.KICK_MEMBERS, t) || s.Z.can(c.Plq.MANAGE_GUILD, t),
        d = null != t && t.hasFeature(c.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && n && t.hasVerificationGate(),
        f = (0, i.e7)([l.Z], () => l.Z.get(e), [e]);
    r.useEffect(() => {
        d && o.ZP.fetchVerificationForm(e);
    }, [d, e]);
    let _ = r.useMemo(() => {
        var e;
        return (null !== (e = null == f ? void 0 : f.formFields) && void 0 !== e ? e : []).some((e) => !(0, u.J)(e));
    }, [null == f ? void 0 : f.formFields]);
    return d && _;
}
