t.r(e);
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    u = t(239091),
    a = t(883385),
    o = t(108843),
    d = t(947440),
    c = t(100527),
    s = t(299206),
    Z = t(916069),
    h = t(895563),
    x = t(212205),
    g = t(478035),
    f = t(62420),
    p = t(420529),
    M = t(554747),
    C = t(924952),
    j = t(423589),
    v = t(427679),
    G = t(398048),
    m = t(109764),
    E = t(3689),
    N = t(323597),
    _ = t(852245),
    L = t(493802),
    T = t(367722),
    I = t(461535),
    P = t(776568),
    b = t(218035),
    S = t(775666),
    A = t(442754),
    V = t(333805),
    y = t(567521),
    O = t(917327),
    U = t(381924),
    q = t(601274),
    X = t(981631),
    Y = t(388032);
function k(n) {
    let { channel: e, guild: t, onSelect: a } = n,
        o = e.isGuildStageVoice(),
        c = (0, l.e7)([v.Z], () => (o ? v.Z.getStageInstanceByChannel(e.id) : void 0), [o, e.id]),
        Z = (0, m.Z)(e),
        p = (0, M.qY)(e.id),
        G = (0, C.Z)(null == p ? void 0 : p.id, t, e),
        E = (0, y.Z)(e, c),
        N = (0, h.l)(e),
        T = (0, h.P)(e),
        I = (0, x.Z)(e),
        P = (0, g.Z)(e),
        A = (0, f.Z)(e),
        O = (0, L.Z)(e),
        U = (0, b.Z)(e),
        X = (0, _.Z)(e),
        k = (0, q.Z)(e, t),
        D = (0, s.Z)({
            id: e.id,
            label: Y.intl.string(Y.t.gFHI3t)
        }),
        H = (0, V.Z)(e),
        W = (0, d.Z)(e),
        z = (0, j.Mn)('ChannelListVoiceContextMenuFavorite'),
        w = (0, S.ZP)(e);
    return (0, i.jsxs)(r.Menu, {
        navId: 'channel-context',
        onClose: u.Zy,
        'aria-label': Y.intl.string(Y.t.Xm41aW),
        onSelect: a,
        children: [
            (0, i.jsx)(r.MenuGroup, { children: null != p ? G : E }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [P, A, I, N]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [O, z ? w : U, X]
            }),
            (0, i.jsx)(r.MenuGroup, { children: W }),
            (0, i.jsx)(r.MenuGroup, { children: T }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [k, Z]
            }),
            (0, i.jsx)(r.MenuGroup, { children: H }),
            (0, i.jsx)(r.MenuGroup, { children: D })
        ]
    });
}
function D(n) {
    let { channel: e, guild: t, onSelect: a } = n,
        o = e.isGuildStageVoice(),
        c = (0, l.e7)([v.Z], () => (o ? v.Z.getStageInstanceByChannel(e.id) : void 0), [o, e.id]),
        Z = (0, I.Z)(e),
        x = (0, m.Z)(e),
        g = (0, M.qY)(e.id),
        f = (0, C.Z)(null == g ? void 0 : g.id, t, e),
        X = (0, y.Z)(e, c),
        k = (0, h.l)(e),
        D = (0, h.P)(e),
        H = (0, L.Z)(e),
        W = (0, b.Z)(e),
        z = (0, _.Z)(e),
        w = (0, T.Z)(e, t, c),
        F = (0, q.Z)(e, t),
        K = (0, O.Z)(e, t),
        R = (0, U.Z)(e, t.id),
        B = (0, G.Z)(e, t),
        J = (0, E.Z)(e, t),
        Q = (0, N.Z)(e),
        $ = (0, s.Z)({
            id: e.id,
            label: Y.intl.string(Y.t.gFHI3t)
        }),
        nn = (0, V.Z)(e),
        ne = (0, d.Z)(e),
        nt = (0, A.Z)(e),
        ni = (0, p.Z)(e),
        nl = (0, P.ZP)(e),
        nr = (0, j.Mn)('ChannelListVoiceContextMenuNormal'),
        nu = (0, S.ZP)(e);
    return (0, i.jsxs)(r.Menu, {
        navId: 'channel-context',
        onClose: u.Zy,
        'aria-label': Y.intl.string(Y.t.Xm41aW),
        onSelect: a,
        children: [
            (0, i.jsx)(r.MenuGroup, { children: null != g ? f : X }),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [Z, k]
                },
                'mark-as-read-or-favorite'
            ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [w, ne, nt, x]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [R, F, K, H, ni, nn]
                },
                'voice-actions'
            ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [nl, nr ? nu : W]
                },
                'notifications'
            ),
            (0, i.jsx)(r.MenuGroup, { children: D }),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [z, B, J, Q]
                },
                'admin-actions'
            ),
            (0, i.jsx)(r.MenuGroup, { children: $ }, 'developer-actions')
        ]
    });
}
e.default = (0, o.Z)(
    (0, a.Z)(
        function (n) {
            return (0, Z.Z)() ? (0, i.jsx)(k, { ...n }) : (0, i.jsx)(D, { ...n });
        },
        { object: X.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU]
);
