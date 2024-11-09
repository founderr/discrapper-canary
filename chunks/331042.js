n.r(e),
    n.d(e, {
        CollectiblesCollectedModalInner: function () {
            return F;
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
    g = n(37234),
    p = n(607070),
    h = n(100527),
    b = n(906732),
    m = n(1585),
    v = n(125988),
    C = n(300284),
    x = n(876917),
    T = n(642619),
    E = n(594174),
    S = n(884697),
    y = n(890249),
    A = n(318028),
    O = n(635552),
    R = n(328456),
    I = n(624377),
    N = n(530618),
    w = n(141011),
    Z = n(372654),
    M = n(216541),
    j = n(302800),
    _ = n(215023),
    k = n(388032),
    L = n(783600),
    D = n(660097);
let P = (t) => {
        let { product: e, item: n } = t,
            a = (0, u.e7)([E.default], () => {
                let t = E.default.getCurrentUser();
                return s()(null != t, 'User cannot be undefined'), t;
            }),
            { avatarDecorationSrc: i } = (0, v.Z)({
                user: a,
                avatarDecorationOverride: (null == n ? void 0 : n.type) === d.Z.AVATAR_DECORATION ? n : null,
                size: (0, m.y9)(f.AvatarSizes.SIZE_120)
            });
        return (0, c.EQ)(e.type)
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: L.profileEffectShopPreview,
                    children: (0, r.jsx)(x.Z, {
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
                        src: D,
                        avatarDecoration: i,
                        className: L.avatarDecoration,
                        'aria-label': e.name
                    })
                )
            )
            .with(d.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: L.bundlePreview,
                    children: (0, r.jsx)(M.d, {
                        product: e,
                        user: a,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: L.bundleProfileEffectCard
                    })
                })
            )
            .otherwise(() => null);
    },
    B = (t) => {
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
                    className: L.easterEggContainer,
                    style: d,
                    children: (0, r.jsx)(P, {
                        product: e,
                        item: n
                    })
                }),
                (0, r.jsx)(l.animated.div, {
                    className: L.easterEggContainer,
                    style: i ? g : u,
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
    H = (t) => {
        let { product: e, item: n, reducedMotion: a = !1 } = t,
            i = (0, j.v)(e.categorySkuId);
        return null != i
            ? (0, r.jsx)(B, {
                  product: e,
                  item: n,
                  reducedMotion: a,
                  displayOptions: i
              })
            : (0, r.jsx)(P, {
                  product: e,
                  item: n
              });
    },
    F = (t) => {
        var e;
        let { product: n, onClose: i, confettiTarget: o, confettiCanvas: l, hideConfetti: v = !1, analyticsLocations: x } = t,
            { confettiColors: E } = (0, I.Z)(n.styles),
            M = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            j = (0, y.m)('CollectiblesCollectedModal'),
            [D] = n.items,
            P = a.useRef(null),
            { analyticsLocations: B } = (0, b.ZP)([...x, h.Z.COLLECTIBLES_COLLECTED_MODAL]),
            F = (0, C.Z)({ analyticsLocations: B }),
            z = a.useCallback(() => {
                if ((i(), (0, g.xf)(), F(), n.type === d.Z.AVATAR_DECORATION)) {
                    s()(D.type === d.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, m.ps)({
                            initialSelectedDecoration: D,
                            analyticsLocations: B
                        });
                    return;
                }
                n.type === d.Z.PROFILE_EFFECT &&
                    (0, T.H)({
                        initialSelectedEffectId: D.id,
                        analyticsLocations: B
                    });
            }, [i, F, n.type, D, B]),
            { handleUseNow: Y, isApplying: U } = (0, O.W)({
                product: n,
                onSuccess: i,
                onError: i
            }),
            { firstAvatarDecoration: V, firstProfileEffect: G } = (0, R.R)(n),
            X = (0, S.x6)(n) ? null != V && null != G : null != V || null != G,
            W = (0, S.x6)(n) || j,
            { category: Q, isFetching: K } = (0, A.l)(n.skuId),
            q = null !== (e = null == Q ? void 0 : Q.successModalBg) && void 0 !== e ? e : n.banner;
        return (0, r.jsxs)(b.Gt, {
            value: B,
            children: [
                (0, r.jsxs)('div', {
                    className: L.modalInner,
                    ref: P,
                    children: [
                        (0, r.jsxs)('div', {
                            className: L.bannerContainer,
                            children: [
                                (0, r.jsx)(w.Z, {
                                    asset: K ? void 0 : q,
                                    size: (0, Z.ML)(880),
                                    className: L.decorationBanner,
                                    categoryBannerOverride: (0, _.ZS)(n.categorySkuId)
                                }),
                                (0, r.jsx)(H, {
                                    product: n,
                                    item: D,
                                    reducedMotion: M
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: L.collectedInfoContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: L.collectedTextContainer,
                                    children: [
                                        (0, r.jsx)(f.Heading, {
                                            variant: 'heading-lg/bold',
                                            children: k.intl.format(k.t.YNaxMj, { itemName: n.name })
                                        }),
                                        (0, r.jsx)(f.Text, {
                                            variant: 'text-sm/normal',
                                            children: (0, c.EQ)(null == n ? void 0 : n.type)
                                                .with(d.Z.BUNDLE, () => k.intl.string(k.t.zJPoLy))
                                                .with(d.Z.PROFILE_EFFECT, () => k.intl.string(k.t.f9M1YG))
                                                .otherwise(() => k.intl.string(k.t['44b50t']))
                                        })
                                    ]
                                }),
                                W
                                    ? (0, r.jsxs)('div', {
                                          className: L.buttons,
                                          children: [
                                              (0, r.jsx)(f.Button, {
                                                  color: X ? f.ButtonColors.PRIMARY : f.ButtonColors.BRAND,
                                                  onClick: z,
                                                  children: k.intl.string(k.t['2p2aY2'])
                                              }),
                                              X
                                                  ? (0, r.jsx)(f.Button, {
                                                        onClick: Y,
                                                        submitting: U,
                                                        children: k.intl.string(k.t.MAS7uL)
                                                    })
                                                  : null
                                          ]
                                      })
                                    : (0, r.jsx)(f.Button, {
                                          onClick: z,
                                          children: k.intl.string(k.t.MAS7uL)
                                      })
                            ]
                        }),
                        (0, r.jsx)(f.ModalCloseButton, {
                            onClick: i,
                            className: L.modalCloseButton,
                            withCircleBackground: !0
                        })
                    ]
                }),
                !v &&
                    !M &&
                    (0, r.jsx)(N.Z, {
                        confettiTarget: null != o ? o : P.current,
                        confettiCanvas: l,
                        sprites: (0, Z.vK)(n.categorySkuId),
                        colors: null == E ? void 0 : E.map((t) => t.toHexString())
                    })
            ]
        });
    };
e.default = (t) => {
    let { transitionState: e, product: n, onClose: o, analyticsLocations: s } = t,
        l = a.useRef(new i.qA()),
        [c, d] = a.useState(null),
        u = (0, j.UY)(n.skuId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.O_, {
                ref: d,
                className: L.confettiCanvas,
                environment: l.current
            }),
            (0, r.jsxs)(f.ModalRoot, {
                hideShadow: !0,
                transitionState: e,
                size: f.ModalSize.DYNAMIC,
                className: L.modalRoot,
                children: [
                    null != u &&
                        (0, r.jsx)('img', {
                            src: u.imageSrc,
                            className: L.customConfetti,
                            style: u.style,
                            alt: '',
                            'aria-hidden': 'true'
                        }),
                    (0, r.jsx)(f.ModalContent, {
                        className: L.modalContent,
                        children: (0, r.jsx)(F, {
                            product: n,
                            onClose: o,
                            confettiCanvas: c,
                            hideConfetti: null != u,
                            analyticsLocations: s
                        })
                    })
                ]
            })
        ]
    });
};
