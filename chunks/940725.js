n.d(t, {
    h: function () {
        return h;
    }
}),
    n(47120);
var i = n(704215),
    l = n(442837),
    r = n(645041),
    s = n(271383),
    a = n(430824),
    o = n(594174),
    c = n(353093),
    u = n(954138),
    d = n(981631);
function h(e, t) {
    let n = (0, u.Z)(t),
        h = (0, l.e7)(
            [o.default, a.Z, s.ZP],
            () =>
                (function (e) {
                    let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, a.Z, s.ZP];
                    if (null == e) return !1;
                    let l = n.getGuild(e);
                    if (null == l || !(0, c.EJ)(l) || null == l.clan) return !1;
                    let r = t.getCurrentUser();
                    if (null == r) return !1;
                    let u = i.getMember(e, r.id);
                    if (null == u || u.isPending) return !1;
                    if (null == r.clan) return !0;
                    let d = null != u.joinedAt ? new Date(u.joinedAt) : null,
                        h = null != d && Date.now() - d.getTime() > 259200000,
                        { identityGuildId: m, identityEnabled: p } = r.clan;
                    return null != m && null == p ? e === m : null == m && null == p ? h : (m !== e || !1 !== p) && null != m && !1 === p && h;
                })(e, [o.default, a.Z, s.ZP]),
            [e]
        ),
        m = (0, r.FT)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : d.lds);
    return n && h && !m;
}
