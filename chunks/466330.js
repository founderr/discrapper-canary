t.d(e, {
    Z: function () {
        return d;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    a = t(481060),
    r = t(159300),
    u = t(984933),
    c = t(496675),
    o = t(981631),
    s = t(388032);
function d(n) {
    let { source: e, guild: t, channel: l, stageInstance: a } = n,
        s = (0, i.e7)([u.ZP], () => u.ZP.getDefaultChannel(t.id, !0, o.Plq.CREATE_INSTANT_INVITE)),
        d = (0, i.e7)([c.Z], () => (0, r.b)(c.Z, t, l, a)),
        _ = E(e, t, d && null != l ? l : s),
        p = Z(e);
    return null == l && e === o.t4x.GUILD_CONTEXT_MENU ? null : d || null != s ? _ : p;
}
let E = (n, e, i) =>
        (0, l.jsx)(a.MenuItem, {
            id: 'invite-people',
            label: s.intl.string(s.t.BN75l5),
            color: 'brand',
            icon: n === o.t4x.GUILD_HEADER ? a.GroupPlusIcon : void 0,
            action: () =>
                (0, a.openModalLazy)(async () => {
                    let { default: a } = await Promise.all([t.e('7654'), t.e('85683')]).then(t.bind(t, 560114));
                    return (t) =>
                        (0, l.jsx)(a, {
                            ...t,
                            guild: e,
                            channel: i,
                            source: n
                        });
                })
        }),
    Z = (n) =>
        (0, l.jsx)(a.MenuItem, {
            id: 'invite-people',
            label: s.intl.string(s.t.BN75l5),
            color: 'brand',
            icon: n === o.t4x.GUILD_HEADER ? a.GroupPlusIcon : void 0,
            action: () =>
                (0, a.openModalLazy)(async () => {
                    let { default: n } = await t.e('88358').then(t.bind(t, 598402));
                    return (e) => (0, l.jsx)(n, { ...e });
                })
        });
