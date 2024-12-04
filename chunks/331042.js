n.r(e),
    n.d(e, {
        CollectiblesCollectedModalInner: function () {
            return W;
        }
    }),
    n(47120),
    n(627341);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    s = n(703533),
    l = n(512722),
    c = n.n(l),
    d = n(752877),
    u = n(278074),
    f = n(979554),
    p = n(399606),
    g = n(481060),
    h = n(37234),
    v = n(607070),
    b = n(100527),
    m = n(906732),
    x = n(1585),
    S = n(125988),
    C = n(300284),
    T = n(876917),
    E = n(642619),
    y = n(594174),
    A = n(1870),
    O = n(429368),
    I = n(884697),
    R = n(890249),
    N = n(228624),
    w = n(318028),
    Z = n(635552),
    M = n(905357),
    k = n(328456),
    _ = n(624377),
    j = n(530618),
    L = n(141011),
    P = n(372654),
    D = n(216541),
    B = n(58201),
    F = n(302800),
    H = n(215023),
    U = n(388032),
    z = n(493200),
    V = n(660097);
let Y = (t) => {
        let { product: e, item: n } = t,
            a = (0, p.e7)([y.default], () => {
                let t = y.default.getCurrentUser();
                return c()(null != t, 'User cannot be undefined'), t;
            }),
            { avatarDecorationSrc: i } = (0, S.Z)({
                user: a,
                avatarDecorationOverride: (null == n ? void 0 : n.type) === f.Z.AVATAR_DECORATION ? n : null,
                size: (0, x.y9)(g.AvatarSizes.SIZE_120)
            }),
            o = (0, M.k)(e);
        return (0, u.EQ)(e.type)
            .with(f.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: z.profileEffectShopPreview,
                    children: (0, r.jsx)(T.Z, {
                        forCollectedModal: !0,
                        profileEffectId: n.id
                    })
                })
            )
            .with(
                f.Z.AVATAR_DECORATION,
                () => (
                    c()(n.type === f.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                    (0, r.jsx)(g.Avatar, {
                        size: g.AvatarSizes.SIZE_120,
                        src: V,
                        avatarDecoration: i,
                        className: z.avatarDecoration,
                        'aria-label': o
                    })
                )
            )
            .with(f.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: z.bundlePreview,
                    children: (0, r.jsx)(D.d, {
                        product: e,
                        user: a,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: z.bundleProfileEffectCard
                    })
                })
            )
            .otherwise(() => null);
    },
    G = (t) => {
        let { product: e, item: n, reducedMotion: i, displayOptions: o } = t,
            [s, l] = a.useState(!1),
            c = (0, g.useSpring)({
                from: {
                    transform: 'translateX(100%)',
                    right: '-100%'
                },
                to: {
                    transform: 'translateX(50%)',
                    right: '50%'
                },
                config: { duration: 1550 },
                onRest: () => setTimeout(() => l(!0), 100)
            }),
            u = (0, g.useSpring)({
                from: {
                    transform: 'translateX(100%)',
                    right: '-100%'
                },
                to: {
                    transform: 'translateX(50%)',
                    right: '50%'
                },
                config: { duration: 1550 },
                reverse: s
            }),
            f = (0, g.useSpring)(
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
                (0, r.jsx)(d.animated.div, {
                    className: z.easterEggContainer,
                    style: c,
                    children: (0, r.jsx)(Y, {
                        product: e,
                        item: n
                    })
                }),
                (0, r.jsx)(d.animated.div, {
                    className: z.easterEggContainer,
                    style: i ? f : u,
                    children: (0, r.jsx)('img', {
                        src: o.imageSrc,
                        style: o.style,
                        alt: '',
                        'aria-hidden': 'true'
                    })
                })
            ]
        });
    },
    X = (t) => {
        let { product: e, item: n, reducedMotion: a = !1 } = t,
            i = (0, F.v)(e.categorySkuId);
        return null != i
            ? (0, r.jsx)(G, {
                  product: e,
                  item: n,
                  reducedMotion: a,
                  displayOptions: i
              })
            : (0, r.jsx)(Y, {
                  product: e,
                  item: n
              });
    },
    W = (t) => {
        var e;
        let { product: n, onClose: i, confettiTarget: s, confettiCanvas: l, hideConfetti: d = !1, analyticsLocations: S, title: T, description: y, selectedVariantIndex: A, shouldShowPromotionalExperience: O } = t,
            D = (0, B.W)(n, A),
            { confettiColors: F } = (0, _.Z)(D.styles),
            V = (0, p.e7)([v.Z], () => v.Z.useReducedMotion),
            Y = (0, R.m)('CollectiblesCollectedModal'),
            G = (0, N.ed)('CollectiblesCollectedModal'),
            W = (0, M.k)(D),
            [Q] = D.items,
            K = a.useRef(null),
            { analyticsLocations: q } = (0, m.ZP)([...S, b.Z.COLLECTIBLES_COLLECTED_MODAL]),
            J = (0, C.Z)({ analyticsLocations: q }),
            $ = a.useCallback(() => {
                if ((i(), (0, h.xf)(), J(), D.type === f.Z.AVATAR_DECORATION)) {
                    c()(Q.type === f.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, x.ps)({
                            initialSelectedDecoration: Q,
                            analyticsLocations: q
                        });
                    return;
                }
                D.type === f.Z.PROFILE_EFFECT &&
                    (0, E.H)({
                        initialSelectedEffectId: Q.id,
                        analyticsLocations: q
                    });
            }, [i, J, D.type, Q, q]),
            { handleUseNow: tt, isApplying: te } = (0, Z.W)({
                product: D,
                onSuccess: i,
                onError: i
            }),
            { firstAvatarDecoration: tn, firstProfileEffect: tr } = (0, k.R)(D),
            ta = (0, I.x6)(D) ? null != tn && null != tr : null != tn || null != tr,
            ti = (0, I.x6)(D) || Y,
            { category: to, isFetching: ts } = (0, w.l)(D.skuId),
            tl = null !== (e = null == to ? void 0 : to.successModalBg) && void 0 !== e ? e : D.banner;
        return (0, r.jsxs)(m.Gt, {
            value: q,
            children: [
                (0, r.jsxs)('div', {
                    className: z.modalInner,
                    ref: K,
                    children: [
                        (0, r.jsxs)('div', {
                            className: z.bannerContainer,
                            children: [
                                O
                                    ? (0, r.jsx)('div', { className: z.seasonalBanner })
                                    : (0, r.jsx)(L.Z, {
                                          asset: ts ? void 0 : tl,
                                          size: (0, P.ML)(880),
                                          className: z.decorationBanner,
                                          categoryBannerOverride: (0, H.ZS)(D.categorySkuId)
                                      }),
                                (0, r.jsx)(X, {
                                    product: D,
                                    item: Q,
                                    reducedMotion: V
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: o()(z.collectedInfoContainer, { [z.seasonalBackgroundGradient]: O }),
                            children: [
                                (0, r.jsxs)('div', {
                                    className: z.collectedTextContainer,
                                    children: [
                                        (0, r.jsx)(g.Heading, {
                                            variant: 'heading-lg/bold',
                                            children: null != T ? T : G ? U.intl.string(U.t['1xr2SU']) : U.intl.format(U.t.YNaxMj, { itemName: W })
                                        }),
                                        (0, r.jsx)(g.Text, {
                                            variant: 'text-sm/normal',
                                            children:
                                                null != y
                                                    ? y
                                                    : (0, u.EQ)(null == D ? void 0 : D.type)
                                                          .with(f.Z.BUNDLE, () => U.intl.string(U.t.zJPoLy))
                                                          .with(f.Z.PROFILE_EFFECT, () => U.intl.string(U.t.f9M1YG))
                                                          .otherwise(() => U.intl.string(U.t['44b50t']))
                                        })
                                    ]
                                }),
                                ti
                                    ? (0, r.jsxs)('div', {
                                          className: z.buttons,
                                          children: [
                                              (0, r.jsx)(g.Button, {
                                                  color: ta ? g.ButtonColors.PRIMARY : g.ButtonColors.BRAND,
                                                  onClick: $,
                                                  children: U.intl.string(U.t['2p2aY2'])
                                              }),
                                              ta
                                                  ? (0, r.jsx)(g.Button, {
                                                        onClick: tt,
                                                        submitting: te,
                                                        children: U.intl.string(U.t.MAS7uL)
                                                    })
                                                  : null
                                          ]
                                      })
                                    : (0, r.jsx)(g.Button, {
                                          className: o()({ [z.seaonalButtonGradient]: O }),
                                          onClick: $,
                                          children: U.intl.string(U.t.MAS7uL)
                                      })
                            ]
                        }),
                        (0, r.jsx)(g.ModalCloseButton, {
                            onClick: i,
                            className: z.modalCloseButton,
                            withCircleBackground: !0
                        })
                    ]
                }),
                !d &&
                    !V &&
                    (0, r.jsx)(j.Z, {
                        confettiTarget: null != s ? s : K.current,
                        confettiCanvas: l,
                        sprites: (0, P.vK)(D.categorySkuId),
                        colors: null == F ? void 0 : F.map((t) => t.toHexString())
                    })
            ]
        });
    };
e.default = (t) => {
    let { transitionState: e, product: n, onClose: i, analyticsLocations: o, title: l, description: c, shouldShowPromotionalExperience: d } = t,
        u = (0, p.e7)([A.Z], () => A.Z.purchases),
        f = (0, O.o)(n, u),
        h = (0, B.W)(n, f),
        v = a.useRef(new s.qA()),
        [b, m] = a.useState(null),
        x = (0, F.UY)(h.skuId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.O_, {
                ref: m,
                className: z.confettiCanvas,
                environment: v.current
            }),
            (0, r.jsxs)(g.ModalRoot, {
                hideShadow: !0,
                transitionState: e,
                size: g.ModalSize.DYNAMIC,
                className: z.modalRoot,
                children: [
                    null != x &&
                        (0, r.jsx)('img', {
                            src: x.imageSrc,
                            className: z.customConfetti,
                            style: x.style,
                            alt: '',
                            'aria-hidden': 'true'
                        }),
                    (0, r.jsx)(g.ModalContent, {
                        className: z.modalContent,
                        children: (0, r.jsx)(W, {
                            product: h,
                            onClose: i,
                            confettiCanvas: b,
                            hideConfetti: null != x,
                            analyticsLocations: o,
                            title: l,
                            description: c,
                            selectedVariantIndex: f,
                            shouldShowPromotionalExperience: d
                        })
                    })
                ]
            })
        ]
    });
};
