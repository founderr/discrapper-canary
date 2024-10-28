t.r(n);
var l = t(200651);
t(192379);
var a = t(481060),
    r = t(239091),
    i = t(883385),
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
    N = t(109764),
    Z = t(3689),
    E = t(323597),
    j = t(852245),
    v = t(367722),
    C = t(461535),
    I = t(776568),
    b = t(218035),
    T = t(775666),
    _ = t(593589),
    S = t(442754),
    L = t(981631),
    M = t(689938);
function O(e) {
    let { channel: n, onSelect: t } = e,
        i = (0, C.Z)(n),
        s = (0, N.Z)(n),
        u = (0, p.l)(n),
        d = (0, p.P)(n),
        g = (0, m.Z)(n),
        Z = (0, x.Z)(n),
        E = (0, h.Z)(n),
        v = (0, I.ZP)(n),
        _ = (0, b.Z)(n),
        S = (0, j.Z)(n),
        L = (0, c.Z)({
            id: n.id,
            label: M.Z.Messages.COPY_ID_CHANNEL
        }),
        O = (0, o.Z)(n),
        A = (0, T.ZP)(n),
        P = (0, f.Mn)('ChannelContextFavoritesMenu');
    return (0, l.jsxs)(a.Menu, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': M.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
        onSelect: t,
        children: [
            (0, l.jsx)(a.MenuGroup, { children: i }),
            (0, l.jsxs)(a.MenuGroup, {
                children: [Z, E, g, u]
            }),
            (0, l.jsxs)(a.MenuGroup, {
                children: [v, P ? A : _]
            }),
            (0, l.jsx)(a.MenuGroup, { children: S }),
            (0, l.jsx)(a.MenuGroup, { children: O }),
            (0, l.jsx)(a.MenuGroup, { children: d }),
            (0, l.jsx)(a.MenuGroup, { children: s }),
            (0, l.jsx)(a.MenuGroup, { children: L })
        ]
    });
}
function A(e) {
    let { channel: n, guild: t, onSelect: i } = e,
        s = (0, C.Z)(n),
        u = (0, N.Z)(n),
        d = (0, p.l)(n),
        m = (0, p.P)(n),
        x = (0, S.Z)(n),
        h = (0, I.ZP)(n),
        L = (0, j.Z)(n),
        O = (0, v.Z)(n, t),
        A = (0, g.Z)(n, t),
        P = (0, Z.Z)(n, t),
        G = (0, E.Z)(n),
        y = (0, c.Z)({
            id: n.id,
            label: M.Z.Messages.COPY_ID_CHANNEL
        }),
        R = (0, o.Z)(n),
        U = (0, _.Z)(n, 'list_text_channel_context_menu'),
        w = (0, b.Z)(n),
        B = (0, T.ZP)(n),
        D = (0, f.Mn)('ChannelContextMenuNormal');
    return (0, l.jsxs)(a.Menu, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': M.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
        onSelect: i,
        children: [
            (0, l.jsxs)(
                a.MenuGroup,
                {
                    children: [s, d]
                },
                'mark-as-read-or-favorite'
            ),
            (0, l.jsxs)(
                a.MenuGroup,
                {
                    children: [O, x, u, U]
                },
                'channel-actions'
            ),
            (0, l.jsxs)(
                a.MenuGroup,
                {
                    children: [h, D ? B : w]
                },
                'notifications'
            ),
            (0, l.jsxs)(
                a.MenuGroup,
                {
                    children: [L, A, P, G]
                },
                'admin-actions'
            ),
            (0, l.jsx)(a.MenuGroup, { children: R }),
            (0, l.jsx)(a.MenuGroup, { children: m }),
            (0, l.jsx)(a.MenuGroup, { children: y }, 'developer-actions')
        ]
    });
}
n.default = (0, s.Z)(
    (0, i.Z)(
        function (e) {
            return (0, d.Z)() ? (0, l.jsx)(O, { ...e }) : (0, l.jsx)(A, { ...e });
        },
        { object: L.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
