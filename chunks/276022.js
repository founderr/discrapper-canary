t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(653041);
var i = t(735250),
    r = t(470079),
    a = t(442837),
    s = t(481060),
    o = t(139387),
    d = t(230711),
    l = t(213459),
    u = t(434404),
    c = t(430824),
    I = t(496675),
    E = t(981631),
    T = t(689938);
function _(e) {
    let { user: n, guildId: t, channel: _, context: N } = e,
        p = c.Z.getGuild(t),
        S = (0, a.e7)([I.Z], () => (null != p ? I.Z.can(E.Plq.MANAGE_GUILD, p) : null)),
        Z = (0, l.em)(_, !0, !0),
        O = (0, l.PL)(!0, !0),
        { isUserApp: A, isGuildApp: f } = r.useMemo(() => {
            var e, t, i, r;
            if ((null == n ? void 0 : n.id) == null)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let a = Object.values(null !== (i = null === (e = Z.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}),
                s = Object.values(null !== (r = null === (t = O.result) || void 0 === t ? void 0 : t.sections) && void 0 !== r ? r : {});
            return {
                isGuildApp: a.some((e) => {
                    var t;
                    return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === (null == n ? void 0 : n.id);
                }),
                isUserApp: s.some((e) => {
                    var t;
                    return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === (null == n ? void 0 : n.id);
                })
            };
        }, [Z, O, null == n ? void 0 : n.id]),
        h = r.useCallback(() => {
            if ((null == p ? void 0 : p.id) != null) u.Z.open(p.id, E.pNK.INTEGRATIONS), o.Z.setSection(E.b4C.APPLICATION, null == n ? void 0 : n.id);
        }, [null == n ? void 0 : n.id, null == p ? void 0 : p.id]),
        m = r.useCallback(() => {
            d.Z.open(E.oAB.AUTHORIZED_APPS);
        }, []),
        M = N === E.IlC.POPOUT;
    if (!(null == n ? void 0 : n.bot) || !S || M || (!f && !A)) return null;
    let g = [];
    return (
        f &&
            g.push(
                (0, i.jsx)(
                    s.MenuItem,
                    {
                        id: 'manage-integration',
                        label: T.Z.Messages.MANAGE_INTEGRATION,
                        action: h
                    },
                    'manage-integration'
                )
            ),
        A &&
            g.push(
                (0, i.jsx)(
                    s.MenuItem,
                    {
                        id: 'manage-authorized-app',
                        label: T.Z.Messages.MANAGE_AUTHORIZED_APP,
                        action: m
                    },
                    'manage-authorized-app'
                )
            ),
        g
    );
}
