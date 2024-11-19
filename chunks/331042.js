n.r(e),
    n.d(e, {
        CollectiblesCollectedModalInner: function () {
            return Y;
        }
    }),
    n(47120),
    n(627341);
var r = n(200651),
    i = n(192379),
    a = n(703533),
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
    x = n(876917),
    C = n(642619),
    T = n(594174),
    y = n(429368),
    E = n(884697),
    I = n(890249),
    A = n(228624),
    O = n(318028),
    R = n(635552),
    w = n(905357),
    N = n(328456),
    Z = n(624377),
    L = n(530618),
    M = n(141011),
    _ = n(372654),
    k = n(216541),
    j = n(58201),
    P = n(302800),
    D = n(215023),
    B = n(388032),
    H = n(322776),
    F = n(660097);
let V = (t) => {
        let { product: e, item: n } = t,
            i = (0, u.e7)([T.default], () => {
                let t = T.default.getCurrentUser();
                return o()(null != t, 'User cannot be undefined'), t;
            }),
            { avatarDecorationSrc: a } = (0, m.Z)({
                user: i,
                avatarDecorationOverride: (null == n ? void 0 : n.type) === d.Z.AVATAR_DECORATION ? n : null,
                size: (0, b.y9)(f.AvatarSizes.SIZE_120)
            }),
            s = (0, w.k)(e);
        return (0, c.EQ)(e.type)
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: H.profileEffectShopPreview,
                    children: (0, r.jsx)(x.Z, {
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
                        src: F,
                        avatarDecoration: a,
                        className: H.avatarDecoration,
                        'aria-label': s
                    })
                )
            )
            .with(d.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: H.bundlePreview,
                    children: (0, r.jsx)(k.d, {
                        product: e,
                        user: i,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: H.bundleProfileEffectCard
                    })
                })
            )
            .otherwise(() => null);
    },
    U = (t) => {
        let { product: e, item: n, reducedMotion: a, displayOptions: s } = t,
            [o, c] = i.useState(!1),
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
                    className: H.easterEggContainer,
                    style: d,
                    children: (0, r.jsx)(V, {
                        product: e,
                        item: n
                    })
                }),
                (0, r.jsx)(l.animated.div, {
                    className: H.easterEggContainer,
                    style: a ? g : u,
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
        let { product: e, item: n, reducedMotion: i = !1 } = t,
            a = (0, P.v)(e.categorySkuId);
        return null != a
            ? (0, r.jsx)(U, {
                  product: e,
                  item: n,
                  reducedMotion: i,
                  displayOptions: a
              })
            : (0, r.jsx)(V, {
                  product: e,
                  item: n
              });
    },
    Y = (t) => {
        var e;
        let { product: n, onClose: a, confettiTarget: s, confettiCanvas: l, hideConfetti: m = !1, analyticsLocations: x, title: T, description: k } = t,
            P = (0, y.o0)(n),
            F = (0, j.W)(n, P),
            { confettiColors: V } = (0, Z.Z)(F.styles),
            U = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            Y = (0, I.m)('CollectiblesCollectedModal'),
            G = (0, A.e)('CollectiblesCollectedModal'),
            X = (0, w.k)(F),
            [W] = F.items,
            Q = i.useRef(null),
            { analyticsLocations: K } = (0, h.ZP)([...x, v.Z.COLLECTIBLES_COLLECTED_MODAL]),
            q = (0, S.Z)({ analyticsLocations: K }),
            J = i.useCallback(() => {
                if ((a(), (0, g.xf)(), q(), F.type === d.Z.AVATAR_DECORATION)) {
                    o()(W.type === d.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, b.ps)({
                            initialSelectedDecoration: W,
                            analyticsLocations: K
                        });
                    return;
                }
                F.type === d.Z.PROFILE_EFFECT &&
                    (0, C.H)({
                        initialSelectedEffectId: W.id,
                        analyticsLocations: K
                    });
            }, [a, q, F.type, W, K]),
            { handleUseNow: $, isApplying: tt } = (0, R.W)({
                product: F,
                onSuccess: a,
                onError: a
            }),
            { firstAvatarDecoration: te, firstProfileEffect: tn } = (0, N.R)(F),
            tr = (0, E.x6)(F) ? null != te && null != tn : null != te || null != tn,
            ti = (0, E.x6)(F) || Y,
            { category: ta, isFetching: ts } = (0, O.l)(F.skuId),
            to = null !== (e = null == ta ? void 0 : ta.successModalBg) && void 0 !== e ? e : F.banner;
        return (0, r.jsxs)(h.Gt, {
            value: K,
            children: [
                (0, r.jsxs)('div', {
                    className: H.modalInner,
                    ref: Q,
                    children: [
                        (0, r.jsxs)('div', {
                            className: H.bannerContainer,
                            children: [
                                (0, r.jsx)(M.Z, {
                                    asset: ts ? void 0 : to,
                                    size: (0, _.ML)(880),
                                    className: H.decorationBanner,
                                    categoryBannerOverride: (0, D.ZS)(F.categorySkuId)
                                }),
                                (0, r.jsx)(z, {
                                    product: F,
                                    item: W,
                                    reducedMotion: U
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: H.collectedInfoContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: H.collectedTextContainer,
                                    children: [
                                        (0, r.jsx)(f.Heading, {
                                            variant: 'heading-lg/bold',
                                            children: null != T ? T : G ? B.intl.string(B.t['1xr2SU']) : B.intl.format(B.t.YNaxMj, { itemName: X })
                                        }),
                                        (0, r.jsx)(f.Text, {
                                            variant: 'text-sm/normal',
                                            children:
                                                null != k
                                                    ? k
                                                    : (0, c.EQ)(null == F ? void 0 : F.type)
                                                          .with(d.Z.BUNDLE, () => B.intl.string(B.t.zJPoLy))
                                                          .with(d.Z.PROFILE_EFFECT, () => B.intl.string(B.t.f9M1YG))
                                                          .otherwise(() => B.intl.string(B.t['44b50t']))
                                        })
                                    ]
                                }),
                                ti
                                    ? (0, r.jsxs)('div', {
                                          className: H.buttons,
                                          children: [
                                              (0, r.jsx)(f.Button, {
                                                  color: tr ? f.ButtonColors.PRIMARY : f.ButtonColors.BRAND,
                                                  onClick: J,
                                                  children: B.intl.string(B.t['2p2aY2'])
                                              }),
                                              tr
                                                  ? (0, r.jsx)(f.Button, {
                                                        onClick: $,
                                                        submitting: tt,
                                                        children: B.intl.string(B.t.MAS7uL)
                                                    })
                                                  : null
                                          ]
                                      })
                                    : (0, r.jsx)(f.Button, {
                                          onClick: J,
                                          children: B.intl.string(B.t.MAS7uL)
                                      })
                            ]
                        }),
                        (0, r.jsx)(f.ModalCloseButton, {
                            onClick: a,
                            className: H.modalCloseButton,
                            withCircleBackground: !0
                        })
                    ]
                }),
                !m &&
                    !U &&
                    (0, r.jsx)(L.Z, {
                        confettiTarget: null != s ? s : Q.current,
                        confettiCanvas: l,
                        sprites: (0, _.vK)(F.categorySkuId),
                        colors: null == V ? void 0 : V.map((t) => t.toHexString())
                    })
            ]
        });
    };
e.default = (t) => {
    let { transitionState: e, product: n, onClose: s, analyticsLocations: o, title: l, description: c } = t,
        d = (0, y.o0)(n),
        u = (0, j.W)(n, d),
        g = i.useRef(new a.qA()),
        [p, v] = i.useState(null),
        h = (0, P.UY)(u.skuId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.O_, {
                ref: v,
                className: H.confettiCanvas,
                environment: g.current
            }),
            (0, r.jsxs)(f.ModalRoot, {
                hideShadow: !0,
                transitionState: e,
                size: f.ModalSize.DYNAMIC,
                className: H.modalRoot,
                children: [
                    null != h &&
                        (0, r.jsx)('img', {
                            src: h.imageSrc,
                            className: H.customConfetti,
                            style: h.style,
                            alt: '',
                            'aria-hidden': 'true'
                        }),
                    (0, r.jsx)(f.ModalContent, {
                        className: H.modalContent,
                        children: (0, r.jsx)(Y, {
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
