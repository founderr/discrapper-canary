e.r(t);
var i = e(200651);
e(192379);
var r = e(481060),
    l = e(239091),
    u = e(108843),
    a = e(100527),
    d = e(299206),
    o = e(895563),
    s = e(32750),
    c = e(109764),
    f = e(323597),
    Z = e(461535),
    h = e(438536),
    _ = e(251746),
    M = e(193987),
    g = e(933793),
    m = e(13736),
    E = e(732393),
    S = e(214906),
    O = e(612856),
    b = e(137591),
    p = e(388032);
t.default = (0, u.Z)(
    function (n) {
        let { channel: t, onSelect: e } = n,
            u = (0, c.Z)(t),
            a = (0, Z.Z)(t),
            v = (0, S.Z)(t),
            C = (0, s.Z)(t),
            N = (0, M.Z)(t),
            G = (0, f.Z)(t),
            L = (0, d.Z)({
                id: t.id,
                label: p.intl.string(p.t.DQ797u)
            }),
            x = (0, h.Z)(t, 'Context Menu'),
            A = (0, g.Z)(t),
            P = (0, O.Z)(t),
            j = (0, m.Z)(t),
            I = (0, E.Z)(t.id),
            U = (0, _.Z)(t),
            T = (0, b.Z)(t),
            R = (0, o.l)(t),
            y = (0, o.P)(t);
        return (0, i.jsxs)(r.Menu, {
            navId: 'thread-context',
            onClose: l.Zy,
            'aria-label': p.intl.string(p.t['1NBjqa']),
            onSelect: e,
            children: [
                (0, i.jsxs)(
                    r.MenuGroup,
                    {
                        children: [a, R]
                    },
                    'mark-as-read-or-favorite'
                ),
                (0, i.jsxs)(
                    r.MenuGroup,
                    {
                        children: [x, U, C, N, j, I, u]
                    },
                    'thread-actions'
                ),
                (0, i.jsxs)(
                    r.MenuGroup,
                    {
                        children: [v, P]
                    },
                    'notifications'
                ),
                (0, i.jsx)(r.MenuGroup, { children: y }),
                (0, i.jsxs)(
                    r.MenuGroup,
                    {
                        children: [T, A, G]
                    },
                    'admin-actions'
                ),
                (0, i.jsx)(r.MenuGroup, { children: L }, 'developer-actions')
            ]
        });
    },
    [a.Z.CONTEXT_MENU, a.Z.CHANNEL_LIST_THREAD_MENU]
);
