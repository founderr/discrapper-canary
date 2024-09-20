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
        O = (0, a.useRef)(null),
        x = (0, o.e7)([I.default], () => I.default.getCurrentUser()),
        { ref: b, height: P = 0 } = (0, u.Z)(),
        M = (0, _.ZP)(),
        [D, y] = (0, a.useState)(d.AvatarSizes.SIZE_120),
        j = (0, T.B6)(null === (t = L.userStatus) || void 0 === t ? void 0 : t.claimedAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        U = null !== (v = null === (n = L.userStatus) || void 0 === n ? void 0 : n.claimedTier) && void 0 !== v ? v : 0,
        G = L.config.rewards[U],
        k = (null == G ? void 0 : G.type) === l.w.COLLECTIBLE,
        { product: w } = (0, h.T)(k && null != G ? G.skuId : null),
        B = null == w ? void 0 : null === (s = w.items) || void 0 === s ? void 0 : s[0];
    if (
        ((0, u.P)(O, (e) => {
            let { height: t } = e;
            if (!!k && null != t) t >= 230 && t < 280 ? y(d.AvatarSizes.SIZE_120) : t >= 280 && y(d.AvatarSizes.SIZE_152);
        }),
        null == G)
    )
        return null;
    let H = (0, c.wj)(M),
        V = (0, f.Sz)(L.id, L.config.assets.logotype, 'dark'),
        F = (0, f.Sz)(L.id, null != G.assetVideo ? G.assetVideo : G.asset),
        Y = (0, f.nP)(F),
        W = Z ? P + 8 : 0,
        z = () => {
            R(!0),
                g.default.track(C.rMx.QUEST_HOVER, {
                    quest_id: L.id,
                    ...(0, p.mH)(S.jn.TROPHY_CASE_CARD)
                });
        },
        K = () => R(!1);
    return (0, i.jsx)(d.FocusRing, {
        children: (0, i.jsxs)('div', {
            ref: O,
            tabIndex: 0,
            onFocus: z,
            onBlur: K,
            onMouseEnter: z,
            onMouseLeave: K,
            className: r()(A.container, { [A.hovered]: Z }),
            children: [
                null != x &&
                    k &&
                    (0, i.jsx)('div', {
                        className: A.decoWrapper,
                        children: (0, i.jsx)(E.Z, {
                            avatarSize: D,
                            avatarDecorationOverride: B,
                            user: x,
                            guildId: null
                        })
                    }),
                Y
                    ? (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsx)(m.Z, {
                              className: A.assetBlurred,
                              autoPlay: !1,
                              children: (0, i.jsx)('source', {
                                  src: F,
                                  type: (0, f.mN)(F)
                              })
                          })
                      })
                    : (0, i.jsx)('img', {
                          className: A.image,
                          src: F,
                          alt: L.config.messages.questName
                      }),
                (0, i.jsx)('div', {
                    className: r()(A.overlay, {
                        [A.darkThemeGradient]: H,
                        [A.lightThemeGradient]: !H
                    })
                }),
                (0, i.jsx)('div', {
                    className: A.logoContainer,
                    style: { transform: 'translateY(-'.concat(W, 'px)') },
                    children: (0, i.jsx)('img', {
                        className: A.logo,
                        src: V,
                        alt: L.config.messages.gameTitle
                    })
                }),
                (0, i.jsxs)('div', {
                    ref: b,
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
                            color: H ? 'text-muted' : 'always-white',
                            style: { opacity: H ? 1 : 0.75 },
                            children: N.Z.Messages.QUEST_REWARD_CLAIMED.format({
                                reward: G.name,
                                claimedDate: j
                            })
                        })
                    ]
                })
            ]
        })
    });
});
