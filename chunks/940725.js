n.d(t, {
    h: function () {
        return h;
    }
}),
    n(47120);
var i = n(704215),
    l = n(442837),
    r = n(645041),
    a = n(271383),
    s = n(430824),
    o = n(594174),
    c = n(353093),
    d = n(954138),
    u = n(981631);
function h(e, t) {
    let n = (0, d.Z)(t),
        h = (0, l.e7)(
            [o.default, s.Z, a.ZP],
            () =>
                (function (e) {
                    let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, s.Z, a.ZP];
                    if (null == e) return !1;
                    let l = n.getGuild(e);
                    if (null == l || !(0, c.EJ)(l) || null == l.clan) return !1;
                    let r = t.getCurrentUser();
                    if (null == r) return !1;
                    let d = i.getMember(e, r.id);
                    if (null == d || d.isPending) return !1;
                    if (null == r.clan) return !0;
                    let u = null != d.joinedAt ? new Date(d.joinedAt) : null,
                        h = null != u && Date.now() - u.getTime() > 259200000,
                        { identityGuildId: p, identityEnabled: m } = r.clan;
                    return null != p && null == m ? e === p : null == p && null == m ? h : (p !== e || !1 !== m) && null != p && !1 === m && h;
                })(e, [o.default, s.Z, a.ZP]),
            [e]
        ),
        p = (0, r.FT)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : u.lds);
    return n && h && !p;
}
