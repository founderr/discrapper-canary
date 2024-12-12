t.r(e);
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(239091),
    a = t(108843),
    u = t(100527),
    o = t(299206),
    d = t(895563),
    c = t(32750),
    s = t(109764),
    h = t(323597),
    f = t(461535),
    Z = t(438536),
    p = t(251746),
    M = t(193987),
    j = t(933793),
    m = t(13736),
    x = t(732393),
    G = t(214906),
    _ = t(612856),
    g = t(137591),
    v = t(388032);
e.default = (0, a.Z)(
    function (n) {
        let { channel: e, onSelect: t } = n,
            a = (0, s.Z)(e),
            u = (0, f.Z)(e),
            C = (0, G.Z)(e),
            b = (0, c.Z)(e),
            P = (0, M.Z)(e),
            I = (0, h.Z)(e),
            E = (0, o.Z)({
                id: e.id,
                label: v.intl.string(v.t.DQ797u)
            }),
            U = (0, Z.Z)(e, 'Context Menu'),
            O = (0, j.Z)(e),
            T = (0, _.Z)(e),
            k = (0, m.Z)(e),
            y = (0, x.Z)(e.id),
            D = (0, p.Z)(e),
            L = (0, g.Z)(e),
            w = (0, d.l)(e),
            z = (0, d.P)(e);
        return (0, i.jsxs)(r.Menu, {
            navId: 'thread-context',
            onClose: l.Zy,
            'aria-label': v.intl.string(v.t['1NBjqa']),
            onSelect: t,
            children: [
                (0, i.jsxs)(
                    r.MenuGroup,
                    {
                        children: [u, w]
                    },
                    'mark-as-read-or-favorite'
                ),
                (0, i.jsxs)(
                    r.MenuGroup,
                    {
                        children: [U, D, b, P, k, y, a]
                    },
                    'thread-actions'
                ),
                (0, i.jsxs)(
                    r.MenuGroup,
                    {
                        children: [C, T]
                    },
                    'notifications'
                ),
                (0, i.jsx)(r.MenuGroup, { children: z }),
                (0, i.jsxs)(
                    r.MenuGroup,
                    {
                        children: [L, O, I]
                    },
                    'admin-actions'
                ),
                (0, i.jsx)(r.MenuGroup, { children: E }, 'developer-actions')
            ]
        });
    },
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_THREAD_MENU]
);
