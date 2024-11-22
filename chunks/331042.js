n.r(e),
    n.d(e, {
        CollectiblesCollectedModalInner: function () {
            return G;
        }
    }),
    n(47120),
    n(627341);
var r = n(200651),
    a = n(192379),
    i = n(703533),
    o = n(512722),
    s = n.n(o),
    l = n(100621),
    c = n(278074),
    d = n(979554),
    u = n(399606),
    f = n(481060),
    p = n(37234),
    g = n(607070),
    v = n(100527),
    h = n(906732),
    b = n(1585),
    m = n(125988),
    x = n(300284),
    S = n(876917),
    C = n(642619),
    T = n(594174),
    E = n(1870),
    y = n(429368),
    A = n(884697),
    O = n(890249),
    I = n(228624),
    R = n(318028),
    N = n(635552),
    w = n(905357),
    Z = n(328456),
    M = n(624377),
    k = n(530618),
    _ = n(141011),
    j = n(372654),
    L = n(216541),
    P = n(58201),
    D = n(302800),
    B = n(215023),
    F = n(388032),
    H = n(783600),
    U = n(660097);
let z = (t) => {
        let { product: e, item: n } = t,
            a = (0, u.e7)([T.default], () => {
                let t = T.default.getCurrentUser();
                return s()(null != t, 'User cannot be undefined'), t;
            }),
            { avatarDecorationSrc: i } = (0, m.Z)({
                user: a,
                avatarDecorationOverride: (null == n ? void 0 : n.type) === d.Z.AVATAR_DECORATION ? n : null,
                size: (0, b.y9)(f.AvatarSizes.SIZE_120)
            }),
            o = (0, w.k)(e);
        return (0, c.EQ)(e.type)
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: H.profileEffectShopPreview,
                    children: (0, r.jsx)(S.Z, {
                        forCollectedModal: !0,
                        profileEffectId: n.id
                    })
                })
            )
            .with(
                d.Z.AVATAR_DECORATION,
                () => (
                    s()(n.type === d.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                    (0, r.jsx)(f.Avatar, {
                        size: f.AvatarSizes.SIZE_120,
                        src: U,
                        avatarDecoration: i,
                        className: H.avatarDecoration,
                        'aria-label': o
                    })
                )
            )
            .with(d.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: H.bundlePreview,
                    children: (0, r.jsx)(L.d, {
                        product: e,
                        user: a,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: H.bundleProfileEffectCard
                    })
                })
            )
            .otherwise(() => null);
    },
    V = (t) => {
        let { product: e, item: n, reducedMotion: i, displayOptions: o } = t,
            [s, c] = a.useState(!1),
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
                reverse: s
            }),
            p = (0, f.useSpring)(
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
                    children: (0, r.jsx)(z, {
                        product: e,
                        item: n
                    })
                }),
                (0, r.jsx)(l.animated.div, {
                    className: H.easterEggContainer,
                    style: i ? p : u,
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
    Y = (t) => {
        let { product: e, item: n, reducedMotion: a = !1 } = t,
            i = (0, D.v)(e.categorySkuId);
        return null != i
            ? (0, r.jsx)(V, {
                  product: e,
                  item: n,
                  reducedMotion: a,
                  displayOptions: i
              })
            : (0, r.jsx)(z, {
                  product: e,
                  item: n
              });
    },
    G = (t) => {
        var e;
        let { product: n, onClose: i, confettiTarget: o, confettiCanvas: l, hideConfetti: m = !1, analyticsLocations: S, title: T, description: E, selectedVariantIndex: y } = t,
            L = (0, P.W)(n, y),
            { confettiColors: D } = (0, M.Z)(L.styles),
            U = (0, u.e7)([g.Z], () => g.Z.useReducedMotion),
            z = (0, O.m)('CollectiblesCollectedModal'),
            V = (0, I.ed)('CollectiblesCollectedModal'),
            G = (0, w.k)(L),
            [X] = L.items,
            W = a.useRef(null),
            { analyticsLocations: Q } = (0, h.ZP)([...S, v.Z.COLLECTIBLES_COLLECTED_MODAL]),
            K = (0, x.Z)({ analyticsLocations: Q }),
            q = a.useCallback(() => {
                if ((i(), (0, p.xf)(), K(), L.type === d.Z.AVATAR_DECORATION)) {
                    s()(X.type === d.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, b.ps)({
                            initialSelectedDecoration: X,
                            analyticsLocations: Q
                        });
                    return;
                }
                L.type === d.Z.PROFILE_EFFECT &&
                    (0, C.H)({
                        initialSelectedEffectId: X.id,
                        analyticsLocations: Q
                    });
            }, [i, K, L.type, X, Q]),
            { handleUseNow: J, isApplying: $ } = (0, N.W)({
                product: L,
                onSuccess: i,
                onError: i
            }),
            { firstAvatarDecoration: tt, firstProfileEffect: te } = (0, Z.R)(L),
            tn = (0, A.x6)(L) ? null != tt && null != te : null != tt || null != te,
            tr = (0, A.x6)(L) || z,
            { category: ta, isFetching: ti } = (0, R.l)(L.skuId),
            to = null !== (e = null == ta ? void 0 : ta.successModalBg) && void 0 !== e ? e : L.banner;
        return (0, r.jsxs)(h.Gt, {
            value: Q,
            children: [
                (0, r.jsxs)('div', {
                    className: H.modalInner,
                    ref: W,
                    children: [
                        (0, r.jsxs)('div', {
                            className: H.bannerContainer,
                            children: [
                                (0, r.jsx)(_.Z, {
                                    asset: ti ? void 0 : to,
                                    size: (0, j.ML)(880),
                                    className: H.decorationBanner,
                                    categoryBannerOverride: (0, B.ZS)(L.categorySkuId)
                                }),
                                (0, r.jsx)(Y, {
                                    product: L,
                                    item: X,
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
                                            children: null != T ? T : V ? F.intl.string(F.t['1xr2SU']) : F.intl.format(F.t.YNaxMj, { itemName: G })
                                        }),
                                        (0, r.jsx)(f.Text, {
                                            variant: 'text-sm/normal',
                                            children:
                                                null != E
                                                    ? E
                                                    : (0, c.EQ)(null == L ? void 0 : L.type)
                                                          .with(d.Z.BUNDLE, () => F.intl.string(F.t.zJPoLy))
                                                          .with(d.Z.PROFILE_EFFECT, () => F.intl.string(F.t.f9M1YG))
                                                          .otherwise(() => F.intl.string(F.t['44b50t']))
                                        })
                                    ]
                                }),
                                tr
                                    ? (0, r.jsxs)('div', {
                                          className: H.buttons,
                                          children: [
                                              (0, r.jsx)(f.Button, {
                                                  color: tn ? f.ButtonColors.PRIMARY : f.ButtonColors.BRAND,
                                                  onClick: q,
                                                  children: F.intl.string(F.t['2p2aY2'])
                                              }),
                                              tn
                                                  ? (0, r.jsx)(f.Button, {
                                                        onClick: J,
                                                        submitting: $,
                                                        children: F.intl.string(F.t.MAS7uL)
                                                    })
                                                  : null
                                          ]
                                      })
                                    : (0, r.jsx)(f.Button, {
                                          onClick: q,
                                          children: F.intl.string(F.t.MAS7uL)
                                      })
                            ]
                        }),
                        (0, r.jsx)(f.ModalCloseButton, {
                            onClick: i,
                            className: H.modalCloseButton,
                            withCircleBackground: !0
                        })
                    ]
                }),
                !m &&
                    !U &&
                    (0, r.jsx)(k.Z, {
                        confettiTarget: null != o ? o : W.current,
                        confettiCanvas: l,
                        sprites: (0, j.vK)(L.categorySkuId),
                        colors: null == D ? void 0 : D.map((t) => t.toHexString())
                    })
            ]
        });
    };
e.default = (t) => {
    let { transitionState: e, product: n, onClose: o, analyticsLocations: s, title: l, description: c } = t,
        d = (0, u.e7)([E.Z], () => E.Z.purchases),
        p = (0, y.o)(n, d),
        g = (0, P.W)(n, p),
        v = a.useRef(new i.qA()),
        [h, b] = a.useState(null),
        m = (0, D.UY)(g.skuId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.O_, {
                ref: b,
                className: H.confettiCanvas,
                environment: v.current
            }),
            (0, r.jsxs)(f.ModalRoot, {
                hideShadow: !0,
                transitionState: e,
                size: f.ModalSize.DYNAMIC,
                className: H.modalRoot,
                children: [
                    null != m &&
                        (0, r.jsx)('img', {
                            src: m.imageSrc,
                            className: H.customConfetti,
                            style: m.style,
                            alt: '',
                            'aria-hidden': 'true'
                        }),
                    (0, r.jsx)(f.ModalContent, {
                        className: H.modalContent,
                        children: (0, r.jsx)(G, {
                            product: g,
                            onClose: o,
                            confettiCanvas: h,
                            hideConfetti: null != m,
                            analyticsLocations: s,
                            title: l,
                            description: c,
                            selectedVariantIndex: p
                        })
                    })
                ]
            })
        ]
    });
};
