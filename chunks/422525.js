t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    a = t(481060),
    s = t(40851),
    u = t(132871),
    r = t(147890),
    o = t(593128),
    d = t(434404),
    c = t(956324),
    g = t(994763),
    E = t(84615),
    h = t(984933),
    M = t(981631),
    _ = t(308083),
    N = t(388032);
function f(e) {
    let n = (0, s.Aq)(),
        t = (0, c.Z)(e),
        f = (0, l.Wu)([h.ZP], () => h.ZP.getChannels(e.id).SELECTABLE, [e]);
    if (__OVERLAY__ || !t) return null;
    let S = (t) => {
        d.Z.open(e.id, t), n.dispatch(M.CkL.POPOUT_CLOSE), (0, a.closeAllModals)();
    };
    return (0, i.jsx)(a.MenuItem, {
        id: 'guild-settings',
        label: N.intl.string(N.t['154/bG']),
        action: () => S(),
        children: (0, g.getGuildSettingsSections)(e, f).map((n) => {
            let { section: t, label: l } = n;
            if (null == l) return null;
            switch (t) {
                case M.pNK.DELETE:
                    return null;
                case M.pNK.COMMUNITY:
                    return (0, i.jsx)(
                        a.MenuItem,
                        {
                            id: t,
                            action: () => S(t),
                            label: N.intl.string(N.t.nRtNqq)
                        },
                        t
                    );
                case M.pNK.APP_DIRECTORY:
                    return (0, i.jsx)(
                        a.MenuItem,
                        {
                            id: t,
                            action: () => {
                                (0, r.goToAppDirectory)({
                                    guildId: e.id,
                                    entrypoint: { name: u.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU }
                                });
                            },
                            label: l
                        },
                        t
                    );
                case M.pNK.CLAN:
                    return (0, i.jsx)(a.MenuItem, {
                        id: 'guild-settings',
                        label: N.intl.string(N.t['6g8uHB']),
                        action: () =>
                            (0, E.q4)(
                                (n) => {
                                    let { closeLayer: t } = n;
                                    return (0, i.jsx)(o.Z, {
                                        onClose: t,
                                        guildId: e.id
                                    });
                                },
                                { layerKey: _.q2 }
                            )
                    });
                default:
                    return (0, i.jsx)(
                        a.MenuItem,
                        {
                            id: t,
                            action: () => S(t),
                            label: l
                        },
                        t
                    );
            }
        })
    });
}
