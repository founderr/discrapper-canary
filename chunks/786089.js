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
    g = n(113434),
    p = n(918701),
    T = n(689938),
    S = n(874976);
t.Z = (0, a.memo)(function (e) {
    var t, n, s, C;
    let { quest: f } = e,
        [N, A] = (0, a.useState)(!1),
        v = (0, a.useRef)(null),
        L = (0, o.e7)([I.default], () => I.default.getCurrentUser()),
        { ref: Z, height: R = 0 } = (0, u.Z)(),
        O = (0, _.ZP)(),
        [x, b] = (0, a.useState)(d.AvatarSizes.SIZE_120),
        P = (0, g.B6)(null === (t = f.userStatus) || void 0 === t ? void 0 : t.claimedAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        M = null !== (C = null === (n = f.userStatus) || void 0 === n ? void 0 : n.claimedTier) && void 0 !== C ? C : 0,
        D = f.config.rewards[M],
        y = (null == D ? void 0 : D.type) === l.w.COLLECTIBLE,
        { product: j } = (0, h.T)(y && null != D ? D.skuId : null),
        U = null == j ? void 0 : null === (s = j.items) || void 0 === s ? void 0 : s[0];
    if (
        ((0, u.P)(v, (e) => {
            let { height: t } = e;
            if (!!y && null != t) t >= 230 && t < 280 ? b(d.AvatarSizes.SIZE_120) : t >= 280 && b(d.AvatarSizes.SIZE_152);
        }),
        null == D)
    )
        return null;
    let G = (0, c.wj)(O),
        w = (0, p.Sz)(f.id, f.config.assets.logotype, G ? 'dark' : 'light'),
        k = (0, p.Sz)(f.id, D.asset),
        B = (0, p.nP)(k),
        H = N ? R + 8 : 0;
    return (0, i.jsx)(d.FocusRing, {
        children: (0, i.jsxs)('div', {
            tabIndex: 0,
            onFocus: () => A(!0),
            onBlur: () => A(!1),
            ref: v,
            onMouseEnter: () => A(!0),
            onMouseLeave: () => A(!1),
            className: r()(S.container, { [S.hovered]: N }),
            children: [
                null != L &&
                    y &&
                    (0, i.jsx)('div', {
                        className: S.decoWrapper,
                        children: (0, i.jsx)(E.Z, {
                            avatarSize: x,
                            avatarDecorationOverride: U,
                            user: L,
                            guildId: null
                        })
                    }),
                B
                    ? (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsx)(m.Z, {
                              className: S.assetBlurred,
                              autoPlay: !1,
                              children: (0, i.jsx)('source', {
                                  src: k,
                                  type: (0, p.mN)(k)
                              })
                          })
                      })
                    : (0, i.jsx)('img', {
                          className: S.image,
                          src: k,
                          alt: f.config.messages.questName
                      }),
                (0, i.jsx)('div', {
                    className: r()(S.overlay, {
                        [S.darkThemeGradient]: G,
                        [S.lightThemeGradient]: !G
                    })
                }),
                (0, i.jsx)('div', {
                    className: S.logoContainer,
                    style: { transform: 'translateY(-'.concat(H, 'px)') },
                    children: (0, i.jsx)('img', {
                        className: S.logo,
                        src: w,
                        alt: f.config.messages.gameTitle
                    })
                }),
                (0, i.jsxs)('div', {
                    ref: Z,
                    className: S.details,
                    children: [
                        (0, i.jsx)(d.Heading, {
                            className: S.title,
                            variant: 'heading-md/semibold',
                            children: T.Z.Messages.QUEST.format({ questName: f.config.messages.questName })
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-muted',
                            children: T.Z.Messages.QUEST_REWARD_CLAIMED.format({
                                reward: D.name,
                                claimedDate: P
                            })
                        })
                    ]
                })
            ]
        })
    });
});
