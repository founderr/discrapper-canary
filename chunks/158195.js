e.r(t);
var i = e(200651);
e(192379);
var u = e(481060),
    r = e(239091),
    l = e(883385),
    o = e(108843),
    a = e(100527),
    c = e(584836),
    d = e(544642),
    f = e(965244),
    s = e(981631),
    _ = e(388032);
t.default = (0, o.Z)(
    (0, l.Z)(
        function (n) {
            let { guildId: t, context: e, onSelect: l } = n,
                o = (0, d.Z)(t, e),
                a = (0, f.Z)(t, e),
                s = (0, c.Z)(t, e);
            return (0, i.jsxs)(u.Menu, {
                navId: 'moderation-raid-context',
                onClose: r.Zy,
                'aria-label': _.intl.string(_.t.liqwPD),
                onSelect: l,
                children: [
                    (0, i.jsx)(u.MenuGroup, { children: a }),
                    (0, i.jsxs)(u.MenuGroup, {
                        children: [s, o]
                    })
                ]
            });
        },
        { object: s.qAy.CONTEXT_MENU }
    ),
    [a.Z.CONTEXT_MENU, a.Z.GUILD_MODERATION_RAID_MENU]
);
