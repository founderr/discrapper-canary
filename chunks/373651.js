t.r(n);
var l = t(735250);
t(470079);
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
    h = t(478035),
    f = t(62420),
    x = t(423589),
    g = t(398048),
    N = t(109764),
    E = t(3689),
    Z = t(323597),
    v = t(852245),
    _ = t(367722),
    j = t(461535),
    C = t(776568),
    T = t(218035),
    b = t(775666),
    I = t(593589),
    S = t(442754),
    L = t(981631),
    O = t(689938);
function M(e) {
    let { channel: n, onSelect: t } = e,
        i = (0, j.Z)(n),
        s = (0, N.Z)(n),
        u = (0, p.l)(n),
        d = (0, p.P)(n),
        g = (0, m.Z)(n),
        E = (0, h.Z)(n),
        Z = (0, f.Z)(n),
        _ = (0, C.ZP)(n),
        I = (0, T.Z)(n),
        S = (0, v.Z)(n),
        L = (0, c.Z)({
            id: n.id,
            label: O.Z.Messages.COPY_ID_CHANNEL
        }),
        M = (0, o.Z)(n),
        A = (0, b.ZP)(n),
        P = (0, x.Mn)('ChannelContextFavoritesMenu');
    return (0, l.jsxs)(a.Menu, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
        onSelect: t,
        children: [
            (0, l.jsx)(a.MenuGroup, { children: i }),
            (0, l.jsxs)(a.MenuGroup, {
                children: [E, Z, g, u]
            }),
            (0, l.jsxs)(a.MenuGroup, {
                children: [_, P ? A : I]
            }),
            (0, l.jsx)(a.MenuGroup, { children: S }),
            (0, l.jsx)(a.MenuGroup, { children: M }),
            (0, l.jsx)(a.MenuGroup, { children: d }),
            (0, l.jsx)(a.MenuGroup, { children: s }),
            (0, l.jsx)(a.MenuGroup, { children: L })
        ]
    });
}
function A(e) {
    let { channel: n, guild: t, onSelect: i } = e,
        s = (0, j.Z)(n),
        o = (0, N.Z)(n),
        u = (0, p.l)(n),
        d = (0, p.P)(n),
        m = (0, S.Z)(n),
        h = (0, C.ZP)(n),
        f = (0, v.Z)(n),
        L = (0, _.Z)(n, t),
        M = (0, g.Z)(n, t),
        A = (0, E.Z)(n, t),
        P = (0, Z.Z)(n),
        R = (0, c.Z)({
            id: n.id,
            label: O.Z.Messages.COPY_ID_CHANNEL
        }),
        y = (0, I.Z)(n, 'list_text_channel_context_menu'),
        G = (0, T.Z)(n),
        w = (0, b.ZP)(n),
        U = (0, x.Mn)('ChannelContextMenuNormal');
    return (0, l.jsxs)(a.Menu, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
        onSelect: i,
        children: [
            (0, l.jsxs)(
                a.MenuGroup,
                {
                    children: [s, u]
                },
                'mark-as-read-or-favorite'
            ),
            (0, l.jsxs)(
                a.MenuGroup,
                {
                    children: [L, m, o, y]
                },
                'channel-actions'
            ),
            (0, l.jsxs)(
                a.MenuGroup,
                {
                    children: [h, U ? w : G]
                },
                'notifications'
            ),
            (0, l.jsxs)(
                a.MenuGroup,
                {
                    children: [f, M, A, P]
                },
                'admin-actions'
            ),
            (0, l.jsx)(a.MenuGroup, { children: d }),
            (0, l.jsx)(a.MenuGroup, { children: R }, 'developer-actions')
        ]
    });
}
n.default = (0, s.Z)(
    (0, i.Z)(
        function (e) {
            return (0, d.Z)() ? (0, l.jsx)(M, { ...e }) : (0, l.jsx)(A, { ...e });
        },
        { object: L.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
