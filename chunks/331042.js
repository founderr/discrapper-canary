n.r(e),
    n.d(e, {
        CollectiblesCollectedModalInner: function () {
            return V;
        }
    }),
    n(47120),
    n(627341);
var r = n(200651),
    a = n(192379),
    i = n(703533),
    s = n(512722),
    o = n.n(s),
    l = n(100621),
    c = n(278074),
    d = n(979554),
    u = n(399606),
    f = n(481060),
    g = n(37234),
    p = n(607070),
    v = n(100527),
    h = n(906732),
    b = n(1585),
    m = n(125988),
    S = n(300284),
    T = n(876917),
    C = n(642619),
    x = n(594174),
    E = n(429368),
    y = n(884697),
    A = n(890249),
    O = n(318028),
    I = n(635552),
    R = n(905357),
    w = n(328456),
    N = n(624377),
    Z = n(530618),
    L = n(141011),
    M = n(372654),
    _ = n(216541),
    k = n(58201),
    j = n(302800),
    P = n(215023),
    D = n(388032),
    B = n(322776),
    H = n(660097);
let F = (t) => {
        let { product: e, item: n } = t,
            a = (0, u.e7)([x.default], () => {
                let t = x.default.getCurrentUser();
                return o()(null != t, 'User cannot be undefined'), t;
            }),
            { avatarDecorationSrc: i } = (0, m.Z)({
                user: a,
                avatarDecorationOverride: (null == n ? void 0 : n.type) === d.Z.AVATAR_DECORATION ? n : null,
                size: (0, b.y9)(f.AvatarSizes.SIZE_120)
            }),
            s = (0, R.k)(e);
        return (0, c.EQ)(e.type)
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: B.profileEffectShopPreview,
                    children: (0, r.jsx)(T.Z, {
                        forCollectedModal: !0,
                        profileEffectId: n.id
                    })
                })
            )
            .with(
                d.Z.AVATAR_DECORATION,
                () => (
                    o()(n.type === d.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                    (0, r.jsx)(f.Avatar, {
                        size: f.AvatarSizes.SIZE_120,
                        src: H,
                        avatarDecoration: i,
                        className: B.avatarDecoration,
                        'aria-label': s
                    })
                )
            )
            .with(d.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: B.bundlePreview,
                    children: (0, r.jsx)(_.d, {
                        product: e,
                        user: a,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: B.bundleProfileEffectCard
                    })
                })
            )
            .otherwise(() => null);
    },
    U = (t) => {
        let { product: e, item: n, reducedMotion: i, displayOptions: s } = t,
            [o, c] = a.useState(!1),
            d = (0, f.useSpring)({
                from: {
                    transform: 'translateX(100%)',
                    right: '-100%'
                },
                to: {
                    transform: 'translateX(50%)',
                    right: '50%'
                },
                config: { duration: 1550 },
                onRest: () => setTimeout(() => c(!0), 100)
            }),
            u = (0, f.useSpring)({
                from: {
                    transform: 'translateX(100%)',
                    right: '-100%'
                },
                to: {
                    transform: 'translateX(50%)',
                    right: '50%'
                },
                config: { duration: 1550 },
                reverse: o
            }),
            g = (0, f.useSpring)(
                {
                    from: {
                        transform: 'translateX(50%)',
                        right: '50%',
                        opacity: 1
                    },
                    to: {
                        transform: 'translateX(50%)',
                        right: '50%',
                        opacity: 0
                    },
                    config: { duration: 300 },
                    delay: 600
                },
                'animate-always'
            );
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.animated.div, {
                    className: B.easterEggContainer,
                    style: d,
                    children: (0, r.jsx)(F, {
                        product: e,
                        item: n
                    })
                }),
                (0, r.jsx)(l.animated.div, {
                    className: B.easterEggContainer,
                    style: i ? g : u,
                    children: (0, r.jsx)('img', {
                        src: s.imageSrc,
                        style: s.style,
                        alt: '',
                        'aria-hidden': 'true'
                    })
                })
            ]
        });
    },
    z = (t) => {
        let { product: e, item: n, reducedMotion: a = !1 } = t,
            i = (0, j.v)(e.categorySkuId);
        return null != i
            ? (0, r.jsx)(U, {
                  product: e,
                  item: n,
                  reducedMotion: a,
                  displayOptions: i
              })
            : (0, r.jsx)(F, {
                  product: e,
                  item: n
              });
    },
    V = (t) => {
        var e;
        let { product: n, onClose: i, confettiTarget: s, confettiCanvas: l, hideConfetti: m = !1, analyticsLocations: T, title: x, description: _ } = t,
            j = (0, E.o0)(n),
            H = (0, k.W)(n, j),
            { confettiColors: F } = (0, N.Z)(H.styles),
            U = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            V = (0, A.m)('CollectiblesCollectedModal'),
            Y = (0, R.k)(H),
            [G] = H.items,
            W = a.useRef(null),
            { analyticsLocations: X } = (0, h.ZP)([...T, v.Z.COLLECTIBLES_COLLECTED_MODAL]),
            Q = (0, S.Z)({ analyticsLocations: X }),
            K = a.useCallback(() => {
                if ((i(), (0, g.xf)(), Q(), H.type === d.Z.AVATAR_DECORATION)) {
                    o()(G.type === d.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, b.ps)({
                            initialSelectedDecoration: G,
                            analyticsLocations: X
                        });
                    return;
                }
                H.type === d.Z.PROFILE_EFFECT &&
                    (0, C.H)({
                        initialSelectedEffectId: G.id,
                        analyticsLocations: X
                    });
            }, [i, Q, H.type, G, X]),
            { handleUseNow: q, isApplying: J } = (0, I.W)({
                product: H,
                onSuccess: i,
                onError: i
            }),
            { firstAvatarDecoration: $, firstProfileEffect: tt } = (0, w.R)(H),
            te = (0, y.x6)(H) ? null != $ && null != tt : null != $ || null != tt,
            tn = (0, y.x6)(H) || V,
            { category: tr, isFetching: ta } = (0, O.l)(H.skuId),
            ti = null !== (e = null == tr ? void 0 : tr.successModalBg) && void 0 !== e ? e : H.banner;
        return (0, r.jsxs)(h.Gt, {
            value: X,
            children: [
                (0, r.jsxs)('div', {
                    className: B.modalInner,
                    ref: W,
                    children: [
                        (0, r.jsxs)('div', {
                            className: B.bannerContainer,
                            children: [
                                (0, r.jsx)(L.Z, {
                                    asset: ta ? void 0 : ti,
                                    size: (0, M.ML)(880),
                                    className: B.decorationBanner,
                                    categoryBannerOverride: (0, P.ZS)(H.categorySkuId)
                                }),
                                (0, r.jsx)(z, {
                                    product: H,
                                    item: G,
                                    reducedMotion: U
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: B.collectedInfoContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: B.collectedTextContainer,
                                    children: [
                                        (0, r.jsx)(f.Heading, {
                                            variant: 'heading-lg/bold',
                                            children: null != x ? x : D.intl.format(D.t.YNaxMj, { itemName: Y })
                                        }),
                                        (0, r.jsx)(f.Text, {
                                            variant: 'text-sm/normal',
                                            children:
                                                null != _
                                                    ? _
                                                    : (0, c.EQ)(null == H ? void 0 : H.type)
                                                          .with(d.Z.BUNDLE, () => D.intl.string(D.t.zJPoLy))
                                                          .with(d.Z.PROFILE_EFFECT, () => D.intl.string(D.t.f9M1YG))
                                                          .otherwise(() => D.intl.string(D.t['44b50t']))
                                        })
                                    ]
                                }),
                                tn
                                    ? (0, r.jsxs)('div', {
                                          className: B.buttons,
                                          children: [
                                              (0, r.jsx)(f.Button, {
                                                  color: te ? f.ButtonColors.PRIMARY : f.ButtonColors.BRAND,
                                                  onClick: K,
                                                  children: D.intl.string(D.t['2p2aY2'])
                                              }),
                                              te
                                                  ? (0, r.jsx)(f.Button, {
                                                        onClick: q,
                                                        submitting: J,
                                                        children: D.intl.string(D.t.MAS7uL)
                                                    })
                                                  : null
                                          ]
                                      })
                                    : (0, r.jsx)(f.Button, {
                                          onClick: K,
                                          children: D.intl.string(D.t.MAS7uL)
                                      })
                            ]
                        }),
                        (0, r.jsx)(f.ModalCloseButton, {
                            onClick: i,
                            className: B.modalCloseButton,
                            withCircleBackground: !0
                        })
                    ]
                }),
                !m &&
                    !U &&
                    (0, r.jsx)(Z.Z, {
                        confettiTarget: null != s ? s : W.current,
                        confettiCanvas: l,
                        sprites: (0, M.vK)(H.categorySkuId),
                        colors: null == F ? void 0 : F.map((t) => t.toHexString())
                    })
            ]
        });
    };
e.default = (t) => {
    let { transitionState: e, product: n, onClose: s, analyticsLocations: o, title: l, description: c } = t,
        d = (0, E.o0)(n),
        u = (0, k.W)(n, d),
        g = a.useRef(new i.qA()),
        [p, v] = a.useState(null),
        h = (0, j.UY)(u.skuId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.O_, {
                ref: v,
                className: B.confettiCanvas,
                environment: g.current
            }),
            (0, r.jsxs)(f.ModalRoot, {
                hideShadow: !0,
                transitionState: e,
                size: f.ModalSize.DYNAMIC,
                className: B.modalRoot,
                children: [
                    null != h &&
                        (0, r.jsx)('img', {
                            src: h.imageSrc,
                            className: B.customConfetti,
                            style: h.style,
                            alt: '',
                            'aria-hidden': 'true'
                        }),
                    (0, r.jsx)(f.ModalContent, {
                        className: B.modalContent,
                        children: (0, r.jsx)(V, {
                            product: u,
                            onClose: s,
                            confettiCanvas: p,
                            hideConfetti: null != h,
                            analyticsLocations: o,
                            title: l,
                            description: c
                        })
                    })
                ]
            })
        ]
    });
};
