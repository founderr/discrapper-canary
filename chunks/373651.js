t.r(e);
var o = t(200651);
t(192379);
var u = t(481060),
    i = t(239091),
    r = t(883385),
    l = t(108843),
    a = t(947440),
    s = t(100527),
    c = t(299206),
    d = t(916069),
    p = t(895563),
    Z = t(212205),
    h = t(478035),
    x = t(62420),
    M = t(423589),
    C = t(398048),
    _ = t(109764),
    j = t(3689),
    N = t(323597),
    f = t(852245),
    E = t(367722),
    b = t(461535),
    G = t(776568),
    P = t(218035),
    A = t(775666),
    L = t(593589),
    T = t(442754),
    v = t(981631),
    O = t(689938);
function m(n) {
    let { channel: e, onSelect: t } = n,
        r = (0, b.Z)(e),
        l = (0, _.Z)(e),
        s = (0, p.l)(e),
        d = (0, p.P)(e),
        C = (0, Z.Z)(e),
        j = (0, h.Z)(e),
        N = (0, x.Z)(e),
        E = (0, G.ZP)(e),
        L = (0, P.Z)(e),
        T = (0, f.Z)(e),
        v = (0, c.Z)({
            id: e.id,
            label: O.Z.Messages.COPY_ID_CHANNEL
        }),
        m = (0, a.Z)(e),
        I = (0, A.ZP)(e),
        g = (0, M.Mn)('ChannelContextFavoritesMenu');
    return (0, o.jsxs)(u.Menu, {
        navId: 'channel-context',
        onClose: i.Zy,
        'aria-label': O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
        onSelect: t,
        children: [
            (0, o.jsx)(u.MenuGroup, { children: r }),
            (0, o.jsxs)(u.MenuGroup, {
                children: [j, N, C, s]
            }),
            (0, o.jsxs)(u.MenuGroup, {
                children: [E, g ? I : L]
            }),
            (0, o.jsx)(u.MenuGroup, { children: T }),
            (0, o.jsx)(u.MenuGroup, { children: m }),
            (0, o.jsx)(u.MenuGroup, { children: d }),
            (0, o.jsx)(u.MenuGroup, { children: l }),
            (0, o.jsx)(u.MenuGroup, { children: v })
        ]
    });
}
function I(n) {
    let { channel: e, guild: t, onSelect: r } = n,
        l = (0, b.Z)(e),
        s = (0, _.Z)(e),
        d = (0, p.l)(e),
        Z = (0, p.P)(e),
        h = (0, T.Z)(e),
        x = (0, G.ZP)(e),
        v = (0, f.Z)(e),
        m = (0, E.Z)(e, t),
        I = (0, C.Z)(e, t),
        g = (0, j.Z)(e, t),
        k = (0, N.Z)(e),
        H = (0, c.Z)({
            id: e.id,
            label: O.Z.Messages.COPY_ID_CHANNEL
        }),
        w = (0, a.Z)(e),
        U = (0, L.Z)(e, 'list_text_channel_context_menu'),
        y = (0, P.Z)(e),
        S = (0, A.ZP)(e),
        B = (0, M.Mn)('ChannelContextMenuNormal');
    return (0, o.jsxs)(u.Menu, {
        navId: 'channel-context',
        onClose: i.Zy,
        'aria-label': O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
        onSelect: r,
        children: [
            (0, o.jsxs)(
                u.MenuGroup,
                {
                    children: [l, d]
                },
                'mark-as-read-or-favorite'
            ),
            (0, o.jsxs)(
                u.MenuGroup,
                {
                    children: [m, h, s, U]
                },
                'channel-actions'
            ),
            (0, o.jsxs)(
                u.MenuGroup,
                {
                    children: [x, B ? S : y]
                },
                'notifications'
            ),
            (0, o.jsxs)(
                u.MenuGroup,
                {
                    children: [v, I, g, k]
                },
                'admin-actions'
            ),
            (0, o.jsx)(u.MenuGroup, { children: w }),
            (0, o.jsx)(u.MenuGroup, { children: Z }),
            (0, o.jsx)(u.MenuGroup, { children: H }, 'developer-actions')
        ]
    });
}
e.default = (0, l.Z)(
    (0, r.Z)(
        function (n) {
            return (0, d.Z)() ? (0, o.jsx)(m, { ...n }) : (0, o.jsx)(I, { ...n });
        },
        { object: v.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
