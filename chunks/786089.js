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
        [b, P] = (0, a.useState)(!1),
        M = (0, a.useRef)(null),
        D = (0, a.useRef)(null),
        y = (0, a.useRef)(null),
        j = (0, o.e7)([I.default], () => I.default.getCurrentUser()),
        { ref: U, height: G = 0 } = (0, u.Z)(),
        w = (0, _.ZP)(),
        k = (0, T.B6)(null === (t = L.userStatus) || void 0 === t ? void 0 : t.claimedAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        B = null !== (v = null === (n = L.userStatus) || void 0 === n ? void 0 : n.claimedTier) && void 0 !== v ? v : 0,
        H = L.config.rewards[B],
        V = (null == H ? void 0 : H.type) === l.w.COLLECTIBLE,
        { product: F } = (0, h.T)(V && null != H ? H.skuId : null),
        Y = null == F ? void 0 : null === (s = F.items) || void 0 === s ? void 0 : s[0];
    if (
        ((0, u.P)(M, (e) => {
            let { height: t } = e;
            if (!V || null == t || null == D.current || null == M.current || null == y.current) return;
            let n = M.current.getBoundingClientRect(),
                i = D.current.getBoundingClientRect(),
                a = y.current.getBoundingClientRect();
            x((i.top - n.top - a.height) / 2);
        }),
        null == H || b)
    )
        return null;
    let z = (0, c.wj)(w),
        W = (0, f.Sz)(L.id, L.config.assets.logotype, 'dark'),
        K = (0, f.Sz)(L.id, null != H.assetVideo ? H.assetVideo : H.asset),
        q = (0, f.nP)(K),
        Q = Z ? G + 8 : 0,
        X = () => {
            R(!0),
                g.default.track(C.rMx.QUEST_HOVER, {
                    quest_id: L.id,
                    ...(0, p.mH)(S.jn.TROPHY_CASE_CARD)
                });
        },
        J = () => R(!1),
        $ = (e) => {
            P(!0),
                g.default.track(C.rMx.QUEST_ASSET_LOADING_FAILURE, {
                    source: e,
                    asset_id: e,
                    quest_id: L.id
                });
        };
    return (0, i.jsx)(d.FocusRing, {
        children: (0, i.jsxs)('div', {
            ref: M,
            tabIndex: 0,
            onFocus: X,
            onBlur: J,
            onMouseEnter: X,
            onMouseLeave: J,
            className: r()(A.container, { [A.hovered]: Z }),
            children: [
                null != j &&
                    V &&
                    (0, i.jsx)('div', {
                        ref: y,
                        className: A.decoWrapper,
                        style: { top: O },
                        children: (0, i.jsx)(E.Z, {
                            avatarDecorationOverride: Y,
                            user: j,
                            guildId: null
                        })
                    }),
                q
                    ? (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsx)(m.Z, {
                              className: A.assetBlurred,
                              autoPlay: !1,
                              children: (0, i.jsx)('source', {
                                  src: K,
                                  type: (0, f.mN)(K),
                                  onError: () => $(K)
                              })
                          })
                      })
                    : (0, i.jsx)('img', {
                          className: A.image,
                          src: K,
                          alt: L.config.messages.questName,
                          onError: () => $(K)
                      }),
                (0, i.jsx)('div', {
                    className: r()(A.overlay, {
                        [A.darkThemeGradient]: z,
                        [A.lightThemeGradient]: !z
                    })
                }),
                (0, i.jsx)('div', {
                    ref: D,
                    className: A.logoContainer,
                    style: { transform: 'translateY(-'.concat(Q, 'px)') },
                    children: (0, i.jsx)('img', {
                        className: A.logo,
                        src: W,
                        alt: L.config.messages.gameTitle
                    })
                }),
                (0, i.jsxs)('div', {
                    ref: U,
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
                            color: z ? 'text-muted' : 'always-white',
                            style: { opacity: z ? 1 : 0.75 },
                            children: N.Z.Messages.QUEST_REWARD_CLAIMED.format({
                                reward: H.name,
                                claimedDate: k
                            })
                        })
                    ]
                })
            ]
        })
    });
});
