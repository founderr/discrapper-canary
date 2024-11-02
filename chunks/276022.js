e.d(n, {
    Z: function () {
        return T;
    }
}),
    e(653041);
var i = e(200651),
    r = e(192379),
    o = e(442837),
    a = e(481060),
    u = e(139387),
    l = e(230711),
    d = e(213459),
    s = e(434404),
    c = e(430824),
    E = e(496675),
    f = e(981631),
    I = e(388032);
function T(t) {
    let { user: n, guildId: e, channel: T, context: p } = t,
        _ = c.Z.getGuild(e),
        N = (0, o.e7)([E.Z], () => (null != _ ? E.Z.can(f.Plq.MANAGE_GUILD, _) : null)),
        A = (0, d.em)(T, !0, !0),
        S = (0, d.PL)(!0, !0),
        { isUserApp: h, isGuildApp: C } = r.useMemo(() => {
            var t, e, i, r;
            if ((null == n ? void 0 : n.id) == null)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let o = Object.values(null !== (i = null === (t = A.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : {}),
                a = Object.values(null !== (r = null === (e = S.result) || void 0 === e ? void 0 : e.sections) && void 0 !== r ? r : {});
            return {
                isGuildApp: o.some((t) => {
                    var e;
                    return (null === (e = t.descriptor.application) || void 0 === e ? void 0 : e.id) === (null == n ? void 0 : n.id);
                }),
                isUserApp: a.some((t) => {
                    var e;
                    return (null === (e = t.descriptor.application) || void 0 === e ? void 0 : e.id) === (null == n ? void 0 : n.id);
                })
            };
        }, [A, S, null == n ? void 0 : n.id]),
        v = r.useCallback(() => {
            if ((null == _ ? void 0 : _.id) != null) s.Z.open(_.id, f.pNK.INTEGRATIONS), u.Z.setSection(f.b4C.APPLICATION, null == n ? void 0 : n.id);
        }, [null == n ? void 0 : n.id, null == _ ? void 0 : _.id]),
        m = r.useCallback(() => {
            l.Z.open(f.oAB.AUTHORIZED_APPS);
        }, []),
        O = p === f.IlC.POPOUT;
    if (!(null == n ? void 0 : n.bot) || !N || O || (!C && !h)) return null;
    let R = [];
    return (
        C &&
            R.push(
                (0, i.jsx)(
                    a.MenuItem,
                    {
                        id: 'manage-integration',
                        label: I.intl.string(I.t['aw+qtb']),
                        action: v
                    },
                    'manage-integration'
                )
            ),
        h &&
            R.push(
                (0, i.jsx)(
                    a.MenuItem,
                    {
                        id: 'manage-authorized-app',
                        label: I.intl.string(I.t.ALLIgY),
                        action: m
                    },
                    'manage-authorized-app'
                )
            ),
        R
    );
}
