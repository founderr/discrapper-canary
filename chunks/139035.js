e.r(t);
var i = e(200651);
e(192379);
var r = e(481060),
    l = e(239091),
    a = e(108843),
    u = e(100527),
    d = e(299206),
    s = e(916069),
    o = e(697229),
    c = e(212205),
    Z = e(423589),
    g = e(411567),
    h = e(672824),
    f = e(3689),
    M = e(323597),
    _ = e(852245),
    p = e(461535),
    C = e(776568),
    x = e(218035),
    I = e(775666),
    j = e(442754),
    m = e(623483),
    E = e(388032);
function G(n) {
    let { channel: t, onSelect: e } = n,
        a = (0, p.Z)(t),
        u = (0, C.ZP)(t),
        s = (0, x.Z)(t),
        f = (0, h.Z)(t),
        M = (0, g.Z)(t),
        _ = (0, c.Z)(t),
        j = (0, o.Z)(t),
        G = (0, m.Z)(t),
        v = (0, d.Z)({
            id: t.id,
            label: E.intl.string(E.t.gFHI3t)
        }),
        y = (0, Z.Mn)('ChannelCategoryFavoritesMenu'),
        b = (0, I.ZP)(t);
    return (0, i.jsxs)(r.Menu, {
        navId: 'channel-context',
        onClose: l.Zy,
        'aria-label': E.intl.string(E.t.Xm41aW),
        onSelect: e,
        children: [
            (0, i.jsxs)(r.MenuGroup, {
                children: [a, j, _]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [u, y ? b : s]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [f, M]
            }),
            (0, i.jsx)(r.MenuGroup, { children: G }),
            (0, i.jsx)(r.MenuGroup, { children: v })
        ]
    });
}
function v(n) {
    let { channel: t, guild: e, onSelect: a } = n,
        u = (0, p.Z)(t),
        s = (0, C.ZP)(t),
        o = (0, x.Z)(t),
        m = (0, h.Z)(t),
        G = (0, g.Z)(t),
        v = (0, _.Z)(t),
        y = (0, c.Z)(t),
        b = (0, f.Z)(t, e),
        O = (0, M.Z)(t),
        P = (0, d.Z)({
            id: t.id,
            label: E.intl.string(E.t.gFHI3t)
        }),
        A = (0, j.Z)(t),
        N = (0, Z.Mn)('ChannelCategoryNormalMenu'),
        T = (0, I.ZP)(t);
    return (0, i.jsxs)(r.Menu, {
        navId: 'channel-context',
        onClose: l.Zy,
        'aria-label': E.intl.string(E.t.Xm41aW),
        onSelect: a,
        children: [
            (0, i.jsx)(r.MenuGroup, { children: u }, 'mark-as-read'),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [A, m, G]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [s, N ? T : o]
                },
                'notifications'
            ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [v, y, b, O]
                },
                'admin-actions'
            ),
            (0, i.jsx)(r.MenuGroup, { children: P }, 'developer-actions')
        ]
    });
}
t.default = (0, a.Z)(
    function (n) {
        return (0, s.Z)() ? (0, i.jsx)(G, { ...n }) : (0, i.jsx)(v, { ...n });
    },
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_CATEGORY_MENU]
);
