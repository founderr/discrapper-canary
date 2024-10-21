n.r(t),
    n.d(t, {
        CollectiblesCollectedModalInner: function () {
            return H;
        }
    }),
    n(47120),
    n(627341);
var a = n(200651),
    r = n(192379),
    s = n(703533),
    o = n(512722),
    i = n.n(o),
    l = n(100621),
    c = n(278074),
    d = n(979554),
    u = n(399606),
    f = n(481060),
    g = n(37234),
    p = n(607070),
    E = n(100527),
    T = n(906732),
    C = n(1585),
    h = n(125988),
    b = n(300284),
    m = n(876917),
    v = n(642619),
    S = n(594174),
    O = n(884697),
    I = n(890249),
    _ = n(318028),
    L = n(635552),
    N = n(328456),
    A = n(624377),
    R = n(530618),
    x = n(141011),
    y = n(372654),
    Z = n(216541),
    w = n(302800),
    M = n(215023),
    B = n(689938),
    D = n(783600),
    P = n(660097);
let j = (e) => {
        let { product: t, item: n } = e,
            r = (0, u.e7)([S.default], () => {
                let e = S.default.getCurrentUser();
                return i()(null != e, 'User cannot be undefined'), e;
            }),
            { avatarDecorationSrc: s } = (0, h.Z)({
                user: r,
                avatarDecorationOverride: (null == n ? void 0 : n.type) === d.Z.AVATAR_DECORATION ? n : null,
                size: (0, C.y9)(f.AvatarSizes.SIZE_120)
            });
        return (0, c.EQ)(t.type)
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, a.jsx)('div', {
                    className: D.profileEffectShopPreview,
                    children: (0, a.jsx)(m.Z, {
                        forCollectedModal: !0,
                        profileEffectId: n.id
                    })
                })
            )
            .with(
                d.Z.AVATAR_DECORATION,
                () => (
                    i()(n.type === d.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                    (0, a.jsx)(f.Avatar, {
                        size: f.AvatarSizes.SIZE_120,
                        src: P,
                        avatarDecoration: s,
                        className: D.avatarDecoration,
                        'aria-label': t.name
                    })
                )
            )
            .with(d.Z.BUNDLE, () =>
                (0, a.jsx)('div', {
                    className: D.bundlePreview,
                    children: (0, a.jsx)(Z.d, {
                        product: t,
                        user: r,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: D.bundleProfileEffectCard
                    })
                })
            )
            .otherwise(() => null);
    },
    k = (e) => {
        let { product: t, item: n, reducedMotion: s, displayOptions: o } = e,
            [i, c] = r.useState(!1),
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
                reverse: i
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
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(l.animated.div, {
                    className: D.easterEggContainer,
                    style: d,
                    children: (0, a.jsx)(j, {
                        product: t,
                        item: n
                    })
                }),
                (0, a.jsx)(l.animated.div, {
                    className: D.easterEggContainer,
                    style: s ? g : u,
                    children: (0, a.jsx)('img', {
                        src: o.imageSrc,
                        style: o.style,
                        alt: '',
                        'aria-hidden': 'true'
                    })
                })
            ]
        });
    },
    F = (e) => {
        let { product: t, item: n, reducedMotion: r = !1 } = e,
            s = (0, w.v)(t.categorySkuId);
        return null != s
            ? (0, a.jsx)(k, {
                  product: t,
                  item: n,
                  reducedMotion: r,
                  displayOptions: s
              })
            : (0, a.jsx)(j, {
                  product: t,
                  item: n
              });
    },
    H = (e) => {
        var t;
        let { product: n, onClose: s, confettiTarget: o, confettiCanvas: l, hideConfetti: h = !1, analyticsLocations: m } = e,
            { confettiColors: S } = (0, A.Z)(n.styles),
            Z = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            w = (0, I.m)('CollectiblesCollectedModal'),
            [P] = n.items,
            j = r.useRef(null),
            { analyticsLocations: k } = (0, T.ZP)([...m, E.Z.COLLECTIBLES_COLLECTED_MODAL]),
            H = (0, b.Z)({ analyticsLocations: k }),
            U = r.useCallback(() => {
                if ((s(), (0, g.xf)(), H(), n.type === d.Z.AVATAR_DECORATION)) {
                    i()(P.type === d.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, C.ps)({
                            initialSelectedDecoration: P,
                            analyticsLocations: k
                        });
                    return;
                }
                n.type === d.Z.PROFILE_EFFECT &&
                    (0, v.H)({
                        initialSelectedEffectId: P.id,
                        analyticsLocations: k
                    });
            }, [s, H, n.type, P, k]),
            { handleUseNow: z, isApplying: G } = (0, L.W)({
                product: n,
                onSuccess: s,
                onError: s
            }),
            { firstAvatarDecoration: Y, firstProfileEffect: V } = (0, N.R)(n),
            X = (0, O.x6)(n) ? null != Y && null != V : null != Y || null != V,
            W = (0, O.x6)(n) || w,
            { category: Q, isFetching: K } = (0, _.l)(n.skuId),
            q = null !== (t = null == Q ? void 0 : Q.successModalBg) && void 0 !== t ? t : n.banner;
        return (0, a.jsxs)(T.Gt, {
            value: k,
            children: [
                (0, a.jsxs)('div', {
                    className: D.modalInner,
                    ref: j,
                    children: [
                        (0, a.jsxs)('div', {
                            className: D.bannerContainer,
                            children: [
                                (0, a.jsx)(x.Z, {
                                    asset: K ? void 0 : q,
                                    size: (0, y.ML)(880),
                                    className: D.decorationBanner,
                                    categoryBannerOverride: (0, M.ZS)(n.categorySkuId)
                                }),
                                (0, a.jsx)(F, {
                                    product: n,
                                    item: P,
                                    reducedMotion: Z
                                })
                            ]
                        }),
                        (0, a.jsxs)('div', {
                            className: D.collectedInfoContainer,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: D.collectedTextContainer,
                                    children: [
                                        (0, a.jsx)(f.Heading, {
                                            variant: 'heading-lg/bold',
                                            children: B.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({ itemName: n.name })
                                        }),
                                        (0, a.jsx)(f.Text, {
                                            variant: 'text-sm/normal',
                                            children: (0, c.EQ)(null == n ? void 0 : n.type)
                                                .with(d.Z.BUNDLE, () => B.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION_BUNDLE)
                                                .with(d.Z.PROFILE_EFFECT, () => B.Z.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION)
                                                .otherwise(() => B.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION)
                                        })
                                    ]
                                }),
                                W
                                    ? (0, a.jsxs)('div', {
                                          className: D.buttons,
                                          children: [
                                              (0, a.jsx)(f.Button, {
                                                  color: X ? f.ButtonColors.PRIMARY : f.ButtonColors.BRAND,
                                                  onClick: U,
                                                  children: B.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE
                                              }),
                                              X
                                                  ? (0, a.jsx)(f.Button, {
                                                        onClick: z,
                                                        submitting: G,
                                                        children: B.Z.Messages.COLLECTIBLES_USE_NOW
                                                    })
                                                  : null
                                          ]
                                      })
                                    : (0, a.jsx)(f.Button, {
                                          onClick: U,
                                          children: B.Z.Messages.COLLECTIBLES_USE_NOW
                                      })
                            ]
                        }),
                        (0, a.jsx)(f.ModalCloseButton, {
                            onClick: s,
                            className: D.modalCloseButton,
                            withCircleBackground: !0
                        })
                    ]
                }),
                !h &&
                    !Z &&
                    (0, a.jsx)(R.Z, {
                        confettiTarget: null != o ? o : j.current,
                        confettiCanvas: l,
                        sprites: (0, y.vK)(n.categorySkuId),
                        colors: null == S ? void 0 : S.map((e) => e.toHexString())
                    })
            ]
        });
    };
t.default = (e) => {
    let { transitionState: t, product: n, onClose: o, analyticsLocations: i } = e,
        l = r.useRef(new s.qA()),
        [c, d] = r.useState(null),
        u = (0, w.UY)(n.skuId);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.O_, {
                ref: d,
                className: D.confettiCanvas,
                environment: l.current
            }),
            (0, a.jsxs)(f.ModalRoot, {
                hideShadow: !0,
                transitionState: t,
                size: f.ModalSize.DYNAMIC,
                className: D.modalRoot,
                children: [
                    null != u &&
                        (0, a.jsx)('img', {
                            src: u.imageSrc,
                            className: D.customConfetti,
                            style: u.style,
                            alt: '',
                            'aria-hidden': 'true'
                        }),
                    (0, a.jsx)(f.ModalContent, {
                        className: D.modalContent,
                        children: (0, a.jsx)(H, {
                            product: n,
                            onClose: o,
                            confettiCanvas: c,
                            hideConfetti: null != u,
                            analyticsLocations: i
                        })
                    })
                ]
            })
        ]
    });
};
