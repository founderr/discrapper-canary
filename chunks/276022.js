t.d(e, {
    Z: function () {
        return g;
    }
}),
    t(653041);
var i = t(200651),
    l = t(192379),
    r = t(442837),
    u = t(481060),
    a = t(139387),
    d = t(230711),
    o = t(213459),
    s = t(434404),
    c = t(795594),
    f = t(430824),
    _ = t(496675),
    E = t(981631),
    p = t(388032);
function g(n) {
    var e;
    let { user: g, application: h, guildId: A, context: m, onItemClick: M } = n,
        I = null !== (e = null == h ? void 0 : h.id) && void 0 !== e ? e : null == g ? void 0 : g.id,
        Z = f.Z.getGuild(A),
        T = (0, r.e7)([_.Z], () => (null != Z ? _.Z.can(E.Plq.MANAGE_GUILD, Z) : null)),
        v = (0, o.LD)(A, !0),
        b = (0, o.PL)(!0, !0),
        { isUserApp: C, isGuildApp: S } = l.useMemo(() => {
            var n, e, t, i;
            if (null == I)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let l = Object.values(null !== (t = null === (n = v.result) || void 0 === n ? void 0 : n.sections) && void 0 !== t ? t : {}),
                r = Object.values(null !== (i = null === (e = b.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {});
            return {
                isGuildApp: l.some((n) => {
                    var e;
                    return (null === (e = n.descriptor.application) || void 0 === e ? void 0 : e.id) === I;
                }),
                isUserApp: r.some((n) => {
                    var e;
                    return (null === (e = n.descriptor.application) || void 0 === e ? void 0 : e.id) === I;
                })
            };
        }, [v, b, I]);
    l.useEffect(() => {
        t(360606);
    }, []);
    let x = l.useCallback(() => {
            if ((null == Z ? void 0 : Z.id) != null) s.Z.open(Z.id, E.pNK.INTEGRATIONS), a.Z.setSection(E.b4C.APPLICATION, I), null == M || M();
        }, [I, null == Z ? void 0 : Z.id, M]),
        N = l.useCallback(() => {
            d.Z.open(E.oAB.AUTHORIZED_APPS);
            let n = '';
            null != h ? (n = h.name) : null != g && (n = g.username), '' !== n && c.J.setState({ searchQuery: n }), null == M || M();
        }, [h, M, g]);
    if (m === E.IlC.POPOUT) return null;
    let y = [];
    return (
        S &&
            T &&
            y.push(
                (0, i.jsx)(
                    u.MenuItem,
                    {
                        id: 'manage-server-integration',
                        label: p.intl.string(p.t.IuSJT0),
                        action: x
                    },
                    'manage-server-integration'
                )
            ),
        C &&
            y.push(
                (0, i.jsx)(
                    u.MenuItem,
                    {
                        id: 'manage-authorized-app',
                        label: p.intl.string(p.t.V8ruv7),
                        action: N
                    },
                    'manage-authorized-app'
                )
            ),
        y
    );
}
