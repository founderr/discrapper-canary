t.r(n);
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(239091),
    o = t(883385),
    u = t(108843),
    c = t(100527),
    a = t(906732),
    d = t(931617),
    _ = t(981631),
    s = t(388032);
n.default = (0, u.Z)(
    (0, o.Z)(
        function (e) {
            var n;
            let { user: t, guildId: o, onSelect: u, analyticsLocations: _, onCloseContextMenu: E, isViewOnly: M } = e,
                { analyticsLocations: f } = (0, a.ZP)(c.Z.CONTEXT_MENU),
                R = null !== (n = null == _ ? void 0 : _[0]) && void 0 !== n ? n : f[0],
                A = (0, d.Z)(t.id, o, !0, R, M);
            return (0, l.jsx)(i.Menu, {
                navId: 'guild-moderation-roles',
                onClose: () => {
                    (0, r.Zy)(), null == E || E();
                },
                'aria-label': s.intl.string(s.t.liqwPD),
                onSelect: u,
                children: (0, l.jsx)(i.MenuGroup, { children: A })
            });
        },
        { object: _.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.GUILD_MODERATION_USER_MENU]
);
