t.r(e);
var l = t(200651);
t(192379);
var i = t(481060),
    a = t(239091),
    r = t(108843),
    u = t(100527),
    c = t(299206),
    o = t(323597),
    s = t(852245),
    d = t(367722),
    E = t(388032);
e.default = (0, r.Z)(
    function (n) {
        let { channel: e, guild: t, onSelect: r } = n,
            u = (0, s.Z)(e),
            Z = (0, d.Z)(e, t),
            _ = (0, o.Z)(e),
            p = (0, c.Z)({
                id: e.id,
                label: E.intl.string(E.t.gFHI3t)
            });
        return (0, l.jsxs)(i.Menu, {
            navId: 'channel-context',
            onClose: a.Zy,
            'aria-label': E.intl.string(E.t.Xm41aW),
            onSelect: r,
            children: [(0, l.jsx)(i.MenuGroup, { children: u }), (0, l.jsx)(i.MenuGroup, { children: Z }), (0, l.jsx)(i.MenuGroup, { children: _ }), (0, l.jsx)(i.MenuGroup, { children: p })]
        });
    },
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_STORE_CHANNEL_MENU]
);
