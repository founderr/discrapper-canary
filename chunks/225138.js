t.r(n),
    t.d(n, {
        default: function () {
            return w;
        },
        useMessageMenu: function () {
            return F;
        }
    });
var i = t(200651);
t(192379);
var a = t(374470),
    s = t(481060),
    l = t(239091),
    r = t(911969),
    o = t(299206),
    u = t(26737),
    d = t(29264),
    c = t(905041),
    E = t(89013),
    M = t(988500),
    g = t(570870),
    f = t(786095),
    m = t(268623),
    I = t(667922),
    _ = t(941389),
    Z = t(449751),
    S = t(749339),
    h = t(601184),
    A = t(6148),
    N = t(519110),
    v = t(759875),
    T = t(168405),
    p = t(536639),
    O = t(720904),
    R = t(88791),
    x = t(385302),
    C = t(873699),
    D = t(134323),
    P = t(429260),
    L = t(1626),
    b = t(279329),
    j = t(627938),
    G = t(512303),
    y = t(481300),
    U = t(689938);
function w(e) {
    var n, t;
    let i,
        s,
        r,
        o,
        { channel: u, message: d, target: c, mediaItem: E, shouldHideMediaOptions: M, onSelect: g, onHeightUpdate: f } = e,
        m = c,
        I = c.getAttribute('data-type'),
        _ = c.getAttribute('data-id'),
        Z = c.getAttribute('data-name');
    if (null != E) s = i = r = E.url;
    else for (; (0, a.k)(m); ) (0, a.k)(m, HTMLImageElement) && null != m.src && (s = m.src), (0, a.k)(m, HTMLAnchorElement) && null != m.href && ((i = m.href), (o = m.textContent), null == s && 'img' === m.getAttribute('data-role') && ((s = i), m.hasAttribute('data-safe-src') && '' !== m.getAttribute('data-safe-src') && (r = m.getAttribute('data-safe-src')))), (m = m.parentNode);
    return F({
        message: d,
        channel: u,
        mediaItem: E,
        textSelection: null !== (t = null === (n = document.getSelection()) || void 0 === n ? void 0 : n.toString()) && void 0 !== t ? t : '',
        favoriteableType: I,
        favoriteableId: _,
        favoriteableName: Z,
        itemHref: i,
        itemSrc: s,
        itemSafeSrc: r,
        itemTextContent: o,
        canReport: !0,
        onHeightUpdate: f,
        onSelect: g,
        onClose: l.Zy,
        navId: 'message',
        ariaLabel: U.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
        shouldHideMediaOptions: M
    });
}
function F(e) {
    let { message: n, channel: t, mediaItem: a, textSelection: l, favoriteableType: w, favoriteableId: F, favoriteableName: k, itemHref: K, itemSrc: H, itemSafeSrc: B, itemTextContent: Y, canReport: V, onHeightUpdate: z, onSelect: X, onClose: W, navId: q, ariaLabel: J, shouldHideMediaOptions: $ = !1 } = e,
        Q = (0, u.Z)(l),
        ee = (0, E.Z)(l),
        en = (0, O.Z)(n, t),
        et = (0, I.Z)(n, t),
        ei = (0, A.Z)(n, t),
        ea = (0, p.Z)(n, t),
        es = (0, N.Z)({
            type: w,
            id: F,
            name: k
        }),
        el = (0, L.Z)(n, t),
        er = (0, T.Z)(n, t),
        eo = (0, R.Z)(n),
        eu = (0, _.Z)(n, t),
        ed = (0, Z.Z)(n, t),
        ec = (0, x.Z)(n, t),
        eE = (0, C.Z)(n, t),
        eM = (0, h.Z)(n, t),
        eg = (0, P.Z)(n),
        ef = (0, P.e)(n),
        em = (0, b.Z)(n, t),
        eI = (0, c.Z)(null != K ? K : H, Y, n, { shouldHideMediaOptions: $ }),
        e_ = (0, d.Z)(B, n, { shouldHideMediaOptions: $ }),
        eZ = (0, y.Z)(n, a),
        eS = (0, o.Z)({
            id: n.id,
            label: U.Z.Messages.COPY_ID_MESSAGE,
            shiftId: ''.concat(n.channel_id, '-').concat(n.id)
        }),
        eh = (0, D.Z)(n, t),
        eA = (0, v.Z)(n, t),
        eN = (0, j.Z)(n, t),
        ev = (0, f.Z)(l, t.getGuildId()),
        eT = (0, m.Z)(n),
        ep = (0, S.Z)(n),
        eO = (0, g.Z)({
            commandType: r.yU.MESSAGE,
            commandTargetId: n.id,
            channel: t,
            guildId: void 0,
            onHeightUpdate: z
        }),
        eR = (0, G.Z)(n),
        ex = (0, M.Z)(n);
    return (0, i.jsxs)(s.Menu, {
        navId: q,
        onClose: W,
        'aria-label': J,
        onSelect: X,
        children: [
            (0, i.jsx)(s.MenuGroup, { children: Q }),
            (0, i.jsx)(s.MenuGroup, { children: ee }),
            (0, i.jsxs)(s.MenuGroup, {
                children: ['' === l ? en : null, et, eo]
            }),
            (0, i.jsxs)(s.MenuGroup, {
                children: [ei, eh, eA, eN]
            }),
            (0, i.jsxs)(s.MenuGroup, {
                children: [ep, ea, eT, eO, el, er, eu, ed, em, ex, eR]
            }),
            (0, i.jsxs)(s.MenuGroup, {
                children: [eE, ec, eM, V && eg, V && ef]
            }),
            (0, i.jsxs)(s.MenuGroup, {
                children: [es, ev, e_, eZ]
            }),
            (0, i.jsx)(s.MenuGroup, { children: eI }),
            (0, i.jsx)(s.MenuGroup, { children: eS })
        ]
    });
}
