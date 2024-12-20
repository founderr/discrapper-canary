t.r(e);
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    u = t(239091),
    o = t(883385),
    a = t(108843),
    d = t(947440),
    c = t(100527),
    s = t(299206),
    Z = t(916069),
    h = t(895563),
    f = t(212205),
    x = t(478035),
    g = t(62420),
    M = t(420529),
    p = t(554747),
    C = t(924952),
    v = t(423589),
    j = t(427679),
    E = t(398048),
    G = t(109764),
    _ = t(3689),
    m = t(323597),
    N = t(852245),
    P = t(493802),
    T = t(367722),
    L = t(461535),
    S = t(776568),
    I = t(218035),
    b = t(775666),
    O = t(442754),
    V = t(333805),
    A = t(567521),
    y = t(624514),
    U = t(917327),
    X = t(381924),
    q = t(601274),
    R = t(981631),
    Y = t(388032);
function k(n) {
    let { channel: e, guild: t, onSelect: o } = n,
        a = e.isGuildStageVoice(),
        c = (0, l.e7)([j.Z], () => (a ? j.Z.getStageInstanceByChannel(e.id) : void 0), [a, e.id]),
        Z = (0, G.Z)(e),
        M = (0, p.qY)(e.id),
        E = (0, C.Z)(null == M ? void 0 : M.id, t, e),
        _ = (0, A.Z)(e, c),
        m = (0, h.l)(e),
        T = (0, h.P)(e),
        L = (0, f.Z)(e),
        S = (0, x.Z)(e),
        O = (0, g.Z)(e),
        U = (0, P.Z)(e),
        X = (0, I.Z)(e),
        R = (0, N.Z)(e),
        k = (0, q.Z)(e, t),
        D = (0, s.Z)({
            id: e.id,
            label: Y.intl.string(Y.t.gFHI3t)
        }),
        F = (0, V.Z)(e),
        H = (0, d.Z)(e),
        W = (0, v.Mn)('ChannelListVoiceContextMenuFavorite'),
        z = (0, b.ZP)(e),
        w = (0, y.Z)();
    return (0, i.jsxs)(r.Menu, {
        navId: 'channel-context',
        onClose: u.Zy,
        'aria-label': Y.intl.string(Y.t.Xm41aW),
        onSelect: o,
        children: [
            (0, i.jsx)(r.MenuGroup, { children: null != M ? E : _ }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [S, O, L, m]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [U, W ? z : X, R]
            }),
            (0, i.jsx)(r.MenuGroup, { children: H }),
            (0, i.jsx)(r.MenuGroup, { children: T }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [k, Z]
            }),
            (0, i.jsx)(r.MenuGroup, { children: F }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [D, w]
            })
        ]
    });
}
function D(n) {
    let { channel: e, guild: t, onSelect: o } = n,
        a = e.isGuildStageVoice(),
        c = (0, l.e7)([j.Z], () => (a ? j.Z.getStageInstanceByChannel(e.id) : void 0), [a, e.id]),
        Z = (0, L.Z)(e),
        f = (0, G.Z)(e),
        x = (0, p.qY)(e.id),
        g = (0, C.Z)(null == x ? void 0 : x.id, t, e),
        R = (0, A.Z)(e, c),
        k = (0, h.l)(e),
        D = (0, h.P)(e),
        F = (0, P.Z)(e),
        H = (0, I.Z)(e),
        W = (0, N.Z)(e),
        z = (0, T.Z)(e, t, c),
        w = (0, q.Z)(e, t),
        K = (0, U.Z)(e, t),
        B = (0, X.Z)(e, t.id),
        J = (0, E.Z)(e, t),
        Q = (0, _.Z)(e, t),
        $ = (0, m.Z)(e),
        nn = (0, s.Z)({
            id: e.id,
            label: Y.intl.string(Y.t.gFHI3t)
        }),
        ne = (0, V.Z)(e),
        nt = (0, d.Z)(e),
        ni = (0, O.Z)(e),
        nl = (0, M.Z)(e),
        nr = (0, S.ZP)(e),
        nu = (0, v.Mn)('ChannelListVoiceContextMenuNormal'),
        no = (0, b.ZP)(e),
        na = (0, y.Z)();
    return (0, i.jsxs)(r.Menu, {
        navId: 'channel-context',
        onClose: u.Zy,
        'aria-label': Y.intl.string(Y.t.Xm41aW),
        onSelect: o,
        children: [
            (0, i.jsx)(r.MenuGroup, { children: null != x ? g : R }),
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
                    children: [z, nt, ni, f]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [B, w, K, F, nl, ne]
                },
                'voice-actions'
            ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [nr, nu ? no : H]
                },
                'notifications'
            ),
            (0, i.jsx)(r.MenuGroup, { children: D }),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [W, J, Q, $]
                },
                'admin-actions'
            ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [nn, na]
                },
                'developer-actions'
            )
        ]
    });
}
e.default = (0, a.Z)(
    (0, o.Z)(
        function (n) {
            return (0, Z.Z)() ? (0, i.jsx)(k, { ...n }) : (0, i.jsx)(D, { ...n });
        },
        { object: R.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU]
);
