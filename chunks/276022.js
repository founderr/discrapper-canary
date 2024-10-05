t.d(n, {
    Z: function () {
        return T;
    }
}),
    t(653041);
var i = t(735250),
    r = t(470079),
    o = t(442837),
    a = t(481060),
    u = t(139387),
    s = t(230711),
    l = t(213459),
    d = t(434404),
    E = t(430824),
    c = t(496675),
    _ = t(981631),
    I = t(689938);
function T(e) {
    let { user: n, guildId: t, channel: T, context: N } = e,
        f = E.Z.getGuild(t),
        S = (0, o.e7)([c.Z], () => (null != f ? c.Z.can(_.Plq.MANAGE_GUILD, f) : null)),
        p = (0, l.em)(T, !0, !0),
        A = (0, l.PL)(!0, !0),
        { isUserApp: O, isGuildApp: C } = r.useMemo(() => {
            var e, t, i, r;
            if ((null == n ? void 0 : n.id) == null)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let o = Object.values(null !== (i = null === (e = p.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}),
                a = Object.values(null !== (r = null === (t = A.result) || void 0 === t ? void 0 : t.sections) && void 0 !== r ? r : {});
            return {
                isGuildApp: o.some((e) => {
                    var t;
                    return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === (null == n ? void 0 : n.id);
                }),
                isUserApp: a.some((e) => {
                    var t;
                    return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === (null == n ? void 0 : n.id);
                })
            };
        }, [p, A, null == n ? void 0 : n.id]),
        h = r.useCallback(() => {
            if ((null == f ? void 0 : f.id) != null) d.Z.open(f.id, _.pNK.INTEGRATIONS), u.Z.setSection(_.b4C.APPLICATION, null == n ? void 0 : n.id);
        }, [null == n ? void 0 : n.id, null == f ? void 0 : f.id]),
        R = r.useCallback(() => {
            s.Z.open(_.oAB.AUTHORIZED_APPS);
        }, []),
        v = N === _.IlC.POPOUT;
    if (!(null == n ? void 0 : n.bot) || !S || v || (!C && !O)) return null;
    let m = [];
    return (
        C &&
            m.push(
                (0, i.jsx)(
                    a.MenuItem,
                    {
                        id: 'manage-integration',
                        label: I.Z.Messages.MANAGE_INTEGRATION,
                        action: h
                    },
                    'manage-integration'
                )
            ),
        O &&
            m.push(
                (0, i.jsx)(
                    a.MenuItem,
                    {
                        id: 'manage-authorized-app',
                        label: I.Z.Messages.MANAGE_AUTHORIZED_APP,
                        action: R
                    },
                    'manage-authorized-app'
                )
            ),
        m
    );
}
