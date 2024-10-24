n.d(t, {
    h: function () {
        return h;
    }
}),
    n(47120);
var i = n(704215),
    s = n(442837),
    a = n(645041),
    l = n(271383),
    r = n(430824),
    o = n(594174),
    c = n(353093),
    u = n(954138),
    d = n(981631);
function h(e, t) {
    let n = (0, u.Z)(t),
        h = (0, s.e7)(
            [o.default, r.Z, l.ZP],
            () =>
                (function (e) {
                    let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, r.Z, l.ZP];
                    if (null == e) return !1;
                    let s = n.getGuild(e);
                    if (null == s || !(0, c.EJ)(s) || null == s.clan) return !1;
                    let a = t.getCurrentUser();
                    if (null == a) return !1;
                    let u = i.getMember(e, a.id);
                    if (null == u || u.isPending) return !1;
                    if (null == a.clan) return !0;
                    let d = null != u.joinedAt ? new Date(u.joinedAt) : null,
                        h = null != d && Date.now() - d.getTime() > 259200000,
                        { identityGuildId: p, identityEnabled: m } = a.clan;
                    return null != p && null == m ? e === p : null == p && null == m ? h : (p !== e || !1 !== m) && null != p && !1 === m && h;
                })(e, [o.default, r.Z, l.ZP]),
            [e]
        ),
        p = (0, a.FT)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : d.lds);
    return n && h && !p;
}
