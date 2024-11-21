e.d(t, {
    Z: function () {
        return m;
    }
}),
    e(653041);
var r = e(200651),
    i = e(192379),
    u = e(442837),
    l = e(481060),
    a = e(139387),
    o = e(230711),
    d = e(213459),
    c = e(434404),
    s = e(795594),
    f = e(430824),
    E = e(496675),
    _ = e(981631),
    p = e(388032);
function m(n) {
    var t;
    let { user: m, application: N, guildId: h, context: A, onItemClick: C } = n,
        T = null !== (t = null == N ? void 0 : N.id) && void 0 !== t ? t : null == m ? void 0 : m.id,
        g = f.Z.getGuild(h),
        I = (0, u.e7)([E.Z], () => (null != g ? E.Z.can(_.Plq.MANAGE_GUILD, g) : null)),
        v = (0, d.LD)(h, !0),
        R = (0, d.PL)(!0, !0),
        { isUserApp: S, isGuildApp: O } = i.useMemo(() => {
            var n, t, e, r;
            if (null == T)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let i = Object.values(null !== (e = null === (n = v.result) || void 0 === n ? void 0 : n.sections) && void 0 !== e ? e : {}),
                u = Object.values(null !== (r = null === (t = R.result) || void 0 === t ? void 0 : t.sections) && void 0 !== r ? r : {});
            return {
                isGuildApp: i.some((n) => {
                    var t;
                    return (null === (t = n.descriptor.application) || void 0 === t ? void 0 : t.id) === T;
                }),
                isUserApp: u.some((n) => {
                    var t;
                    return (null === (t = n.descriptor.application) || void 0 === t ? void 0 : t.id) === T;
                })
            };
        }, [v, R, T]);
    i.useEffect(() => {
        e(360606);
    }, []);
    let P = i.useCallback(() => {
            if ((null == g ? void 0 : g.id) != null) c.Z.open(g.id, _.pNK.INTEGRATIONS), a.Z.setSection(_.b4C.APPLICATION, T), null == C || C();
        }, [T, null == g ? void 0 : g.id, C]),
        Z = i.useCallback(() => {
            o.Z.open(_.oAB.AUTHORIZED_APPS);
            let n = '';
            null != N ? (n = N.name) : null != m && (n = m.username), '' !== n && s.J.setState({ searchQuery: n }), null == C || C();
        }, [N, C, m]);
    if (A === _.IlC.POPOUT) return null;
    let M = [];
    return (
        O &&
            I &&
            M.push(
                (0, r.jsx)(
                    l.MenuItem,
                    {
                        id: 'manage-server-integration',
                        label: p.intl.string(p.t.IuSJT0),
                        action: P
                    },
                    'manage-server-integration'
                )
            ),
        S &&
            M.push(
                (0, r.jsx)(
                    l.MenuItem,
                    {
                        id: 'manage-authorized-app',
                        label: p.intl.string(p.t.V8ruv7),
                        action: Z
                    },
                    'manage-authorized-app'
                )
            ),
        M
    );
}
