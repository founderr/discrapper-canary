e.d(t, {
    Z: function () {
        return p;
    }
}),
    e(653041);
var i = e(200651),
    r = e(192379),
    l = e(442837),
    a = e(481060),
    o = e(139387),
    u = e(230711),
    d = e(213459),
    s = e(434404),
    c = e(430824),
    T = e(496675),
    I = e(981631),
    E = e(388032);
function p(n) {
    let { user: t, guildId: e, channel: p, context: _ } = n,
        f = c.Z.getGuild(e),
        S = (0, l.e7)([T.Z], () => (null != f ? T.Z.can(I.Plq.MANAGE_GUILD, f) : null)),
        N = (0, d.em)(p, !0, !0),
        h = (0, d.PL)(!0, !0),
        { isUserApp: m, isGuildApp: A } = r.useMemo(() => {
            var n, e, i, r;
            if ((null == t ? void 0 : t.id) == null)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let l = Object.values(null !== (i = null === (n = N.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {}),
                a = Object.values(null !== (r = null === (e = h.result) || void 0 === e ? void 0 : e.sections) && void 0 !== r ? r : {});
            return {
                isGuildApp: l.some((n) => {
                    var e;
                    return (null === (e = n.descriptor.application) || void 0 === e ? void 0 : e.id) === (null == t ? void 0 : t.id);
                }),
                isUserApp: a.some((n) => {
                    var e;
                    return (null === (e = n.descriptor.application) || void 0 === e ? void 0 : e.id) === (null == t ? void 0 : t.id);
                })
            };
        }, [N, h, null == t ? void 0 : t.id]),
        g = r.useCallback(() => {
            if ((null == f ? void 0 : f.id) != null) s.Z.open(f.id, I.pNK.INTEGRATIONS), o.Z.setSection(I.b4C.APPLICATION, null == t ? void 0 : t.id);
        }, [null == t ? void 0 : t.id, null == f ? void 0 : f.id]),
        Z = r.useCallback(() => {
            u.Z.open(I.oAB.AUTHORIZED_APPS);
        }, []),
        O = _ === I.IlC.POPOUT;
    if (!(null == t ? void 0 : t.bot) || !S || O || (!A && !m)) return null;
    let v = [];
    return (
        A &&
            v.push(
                (0, i.jsx)(
                    a.MenuItem,
                    {
                        id: 'manage-integration',
                        label: E.intl.string(E.t['aw+qtb']),
                        action: g
                    },
                    'manage-integration'
                )
            ),
        m &&
            v.push(
                (0, i.jsx)(
                    a.MenuItem,
                    {
                        id: 'manage-authorized-app',
                        label: E.intl.string(E.t.ALLIgY),
                        action: Z
                    },
                    'manage-authorized-app'
                )
            ),
        v
    );
}
