n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(887003),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(393238),
    _ = n(410030),
    E = n(204418),
    h = n(583434),
    m = n(70097),
    I = n(594174),
    g = n(626135),
    p = n(617136),
    T = n(113434),
    S = n(497505),
    f = n(918701),
    C = n(981631),
    N = n(689938),
    A = n(874976);
t.Z = (0, a.memo)(function (e) {
    var t, n, s, v;
    let { quest: L } = e,
        [Z, R] = (0, a.useState)(!1),
        [O, x] = (0, a.useState)(24),
        b = (0, a.useRef)(null),
        P = (0, a.useRef)(null),
        M = (0, a.useRef)(null),
        D = (0, o.e7)([I.default], () => I.default.getCurrentUser()),
        { ref: y, height: j = 0 } = (0, u.Z)(),
        U = (0, _.ZP)(),
        G = (0, T.B6)(null === (t = L.userStatus) || void 0 === t ? void 0 : t.claimedAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        w = null !== (v = null === (n = L.userStatus) || void 0 === n ? void 0 : n.claimedTier) && void 0 !== v ? v : 0,
        k = L.config.rewards[w],
        B = (null == k ? void 0 : k.type) === l.w.COLLECTIBLE,
        { product: H } = (0, h.T)(B && null != k ? k.skuId : null),
        V = null == H ? void 0 : null === (s = H.items) || void 0 === s ? void 0 : s[0];
    if (
        ((0, u.P)(b, (e) => {
            let { height: t } = e;
            if (!B || null == t || null == P.current || null == b.current || null == M.current) return;
            let n = b.current.getBoundingClientRect(),
                i = P.current.getBoundingClientRect(),
                a = M.current.getBoundingClientRect();
            x((i.top - n.top - a.height) / 2);
        }),
        null == k)
    )
        return null;
    let F = (0, c.wj)(U),
        Y = (0, f.Sz)(L.id, L.config.assets.logotype, 'dark'),
        W = (0, f.Sz)(L.id, null != k.assetVideo ? k.assetVideo : k.asset),
        z = (0, f.nP)(W),
        K = Z ? j + 8 : 0,
        q = () => {
            R(!0),
                g.default.track(C.rMx.QUEST_HOVER, {
                    quest_id: L.id,
                    ...(0, p.mH)(S.jn.TROPHY_CASE_CARD)
                });
        },
        Q = () => R(!1);
    return (0, i.jsx)(d.FocusRing, {
        children: (0, i.jsxs)('div', {
            ref: b,
            tabIndex: 0,
            onFocus: q,
            onBlur: Q,
            onMouseEnter: q,
            onMouseLeave: Q,
            className: r()(A.container, { [A.hovered]: Z }),
            children: [
                null != D &&
                    B &&
                    (0, i.jsx)('div', {
                        ref: M,
                        className: A.decoWrapper,
                        style: { top: O },
                        children: (0, i.jsx)(E.Z, {
                            avatarDecorationOverride: V,
                            user: D,
                            guildId: null
                        })
                    }),
                z
                    ? (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsx)(m.Z, {
                              className: A.assetBlurred,
                              autoPlay: !1,
                              children: (0, i.jsx)('source', {
                                  src: W,
                                  type: (0, f.mN)(W)
                              })
                          })
                      })
                    : (0, i.jsx)('img', {
                          className: A.image,
                          src: W,
                          alt: L.config.messages.questName
                      }),
                (0, i.jsx)('div', {
                    className: r()(A.overlay, {
                        [A.darkThemeGradient]: F,
                        [A.lightThemeGradient]: !F
                    })
                }),
                (0, i.jsx)('div', {
                    ref: P,
                    className: A.logoContainer,
                    style: { transform: 'translateY(-'.concat(K, 'px)') },
                    children: (0, i.jsx)('img', {
                        className: A.logo,
                        src: Y,
                        alt: L.config.messages.gameTitle
                    })
                }),
                (0, i.jsxs)('div', {
                    ref: y,
                    className: A.details,
                    children: [
                        (0, i.jsx)(d.Heading, {
                            className: A.title,
                            variant: 'heading-md/semibold',
                            color: 'always-white',
                            children: N.Z.Messages.QUEST.format({ questName: L.config.messages.questName })
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: 'text-sm/medium',
                            color: F ? 'text-muted' : 'always-white',
                            style: { opacity: F ? 1 : 0.75 },
                            children: N.Z.Messages.QUEST_REWARD_CLAIMED.format({
                                reward: k.name,
                                claimedDate: G
                            })
                        })
                    ]
                })
            ]
        })
    });
});
