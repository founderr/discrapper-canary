t.r(e);
var a = t(200651);
t(192379);
var c = t(481060),
    i = t(239091),
    r = t(108843),
    l = t(100527),
    s = t(299206),
    u = t(852245),
    o = t(388032);
e.default = (0, r.Z)(
    function (n) {
        let { channel: e, onSelect: t } = n,
            r = (0, u.Z)(e),
            l = (0, s.Z)({
                id: e.id,
                label: o.intl.string(o.t.gFHI3t)
            });
        return (0, a.jsxs)(c.Menu, {
            navId: 'channel-context',
            onClose: i.Zy,
            'aria-label': o.intl.string(o.t.Xm41aW),
            onSelect: t,
            children: [(0, a.jsx)(c.MenuGroup, { children: r }), (0, a.jsx)(c.MenuGroup, { children: l })]
        });
    },
    [l.Z.CONTEXT_MENU, l.Z.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU]
);
