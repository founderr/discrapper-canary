t.r(n);
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(239091),
    a = t(883385),
    s = t(108843),
    o = t(947440),
    u = t(100527),
    c = t(299206),
    d = t(916069),
    p = t(895563),
    m = t(212205),
    x = t(478035),
    h = t(62420),
    f = t(423589),
    g = t(398048),
    j = t(109764),
    v = t(3689),
    Z = t(323597),
    b = t(852245),
    C = t(367722),
    N = t(461535),
    E = t(776568),
    S = t(218035),
    I = t(775666),
    T = t(593589),
    L = t(442754),
    O = t(981631),
    M = t(388032);
function _(e) {
    let { channel: n, onSelect: t } = e,
        a = (0, N.Z)(n),
        s = (0, j.Z)(n),
        u = (0, p.l)(n),
        d = (0, p.P)(n),
        g = (0, m.Z)(n),
        v = (0, x.Z)(n),
        Z = (0, h.Z)(n),
        C = (0, E.ZP)(n),
        T = (0, S.Z)(n),
        L = (0, b.Z)(n),
        O = (0, c.Z)({
            id: n.id,
            label: M.intl.string(M.t.gFHI3t)
        }),
        _ = (0, o.Z)(n),
        P = (0, I.ZP)(n),
        A = (0, f.Mn)('ChannelContextFavoritesMenu');
    return (0, l.jsxs)(i.Menu, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': M.intl.string(M.t.Xm41aW),
        onSelect: t,
        children: [
            (0, l.jsx)(i.MenuGroup, { children: a }),
            (0, l.jsxs)(i.MenuGroup, {
                children: [v, Z, g, u]
            }),
            (0, l.jsxs)(i.MenuGroup, {
                children: [C, A ? P : T]
            }),
            (0, l.jsx)(i.MenuGroup, { children: L }),
            (0, l.jsx)(i.MenuGroup, { children: _ }),
            (0, l.jsx)(i.MenuGroup, { children: d }),
            (0, l.jsx)(i.MenuGroup, { children: s }),
            (0, l.jsx)(i.MenuGroup, { children: O })
        ]
    });
}
function P(e) {
    let { channel: n, guild: t, onSelect: a } = e,
        s = (0, N.Z)(n),
        u = (0, j.Z)(n),
        d = (0, p.l)(n),
        m = (0, p.P)(n),
        x = (0, L.Z)(n),
        h = (0, E.ZP)(n),
        O = (0, b.Z)(n),
        _ = (0, C.Z)(n, t),
        P = (0, g.Z)(n, t),
        A = (0, v.Z)(n, t),
        y = (0, Z.Z)(n),
        G = (0, c.Z)({
            id: n.id,
            label: M.intl.string(M.t.gFHI3t)
        }),
        w = (0, o.Z)(n),
        R = (0, T.Z)(n, 'list_text_channel_context_menu'),
        U = (0, S.Z)(n),
        B = (0, I.ZP)(n),
        z = (0, f.Mn)('ChannelContextMenuNormal');
    return (0, l.jsxs)(i.Menu, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': M.intl.string(M.t.Xm41aW),
        onSelect: a,
        children: [
            (0, l.jsxs)(
                i.MenuGroup,
                {
                    children: [s, d]
                },
                'mark-as-read-or-favorite'
            ),
            (0, l.jsxs)(
                i.MenuGroup,
                {
                    children: [_, x, u, R]
                },
                'channel-actions'
            ),
            (0, l.jsxs)(
                i.MenuGroup,
                {
                    children: [h, z ? B : U]
                },
                'notifications'
            ),
            (0, l.jsxs)(
                i.MenuGroup,
                {
                    children: [O, P, A, y]
                },
                'admin-actions'
            ),
            (0, l.jsx)(i.MenuGroup, { children: w }),
            (0, l.jsx)(i.MenuGroup, { children: m }),
            (0, l.jsx)(i.MenuGroup, { children: G }, 'developer-actions')
        ]
    });
}
n.default = (0, s.Z)(
    (0, a.Z)(
        function (e) {
            return (0, d.Z)() ? (0, l.jsx)(_, { ...e }) : (0, l.jsx)(P, { ...e });
        },
        { object: O.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
