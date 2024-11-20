t.d(n, {
    Z: function () {
        return g;
    }
}),
    t(653041);
var i = t(200651),
    a = t(192379),
    l = t(442837),
    r = t(481060),
    o = t(139387),
    d = t(230711),
    u = t(213459),
    s = t(434404),
    c = t(795594),
    p = t(430824),
    f = t(496675),
    v = t(981631),
    _ = t(388032);
function g(e) {
    var n;
    let { user: g, application: h, guildId: A, context: I, onItemClick: x } = e,
        b = null !== (n = null == h ? void 0 : h.id) && void 0 !== n ? n : null == g ? void 0 : g.id,
        P = p.Z.getGuild(A),
        m = (0, l.e7)([f.Z], () => (null != P ? f.Z.can(v.Plq.MANAGE_GUILD, P) : null)),
        C = (0, u.LD)(A, !0),
        Z = (0, u.PL)(!0, !0),
        { isUserApp: y, isGuildApp: k } = a.useMemo(() => {
            var e, n, t, i;
            if (null == b)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let a = Object.values(null !== (t = null === (e = C.result) || void 0 === e ? void 0 : e.sections) && void 0 !== t ? t : {}),
                l = Object.values(null !== (i = null === (n = Z.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {});
            return {
                isGuildApp: a.some((e) => {
                    var n;
                    return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === b;
                }),
                isUserApp: l.some((e) => {
                    var n;
                    return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === b;
                })
            };
        }, [C, Z, b]);
    a.useEffect(() => {
        t(360606);
    }, []);
    let M = a.useCallback(() => {
            if ((null == P ? void 0 : P.id) != null) s.Z.open(P.id, v.pNK.INTEGRATIONS), o.Z.setSection(v.b4C.APPLICATION, b), null == x || x();
        }, [b, null == P ? void 0 : P.id, x]),
        N = a.useCallback(() => {
            d.Z.open(v.oAB.AUTHORIZED_APPS);
            let e = '';
            null != h ? (e = h.name) : null != g && (e = g.username), '' !== e && c.J.setState({ searchQuery: e }), null == x || x();
        }, [h, x, g]);
    if (I === v.IlC.POPOUT) return null;
    let L = [];
    return (
        k &&
            m &&
            L.push(
                (0, i.jsx)(
                    r.MenuItem,
                    {
                        id: 'manage-server-integration',
                        label: _.intl.string(_.t.IuSJT0),
                        action: M
                    },
                    'manage-server-integration'
                )
            ),
        y &&
            L.push(
                (0, i.jsx)(
                    r.MenuItem,
                    {
                        id: 'manage-authorized-app',
                        label: _.intl.string(_.t.V8ruv7),
                        action: N
                    },
                    'manage-authorized-app'
                )
            ),
        L
    );
}
