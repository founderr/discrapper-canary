n.r(t),
    n.d(t, {
        CollectiblesCollectedModalInner: function () {
            return U;
        }
    }),
    n(47120),
    n(627341);
var r = n(735250),
    a = n(470079),
    s = n(887024),
    o = n(512722),
    i = n.n(o),
    l = n(526629),
    c = n(278074),
    d = n(979554),
    u = n(399606),
    f = n(481060),
    g = n(37234),
    p = n(607070),
    v = n(100527),
    C = n(906732),
    m = n(1585),
    E = n(125988),
    h = n(300284),
    b = n(876917),
    y = n(642619),
    T = n(594174),
    x = n(884697),
    A = n(890249),
    I = n(318028),
    N = n(635552),
    L = n(328456),
    S = n(624377),
    O = n(530618),
    _ = n(141011),
    Z = n(372654),
    R = n(216541),
    j = n(302800),
    M = n(215023),
    w = n(689938),
    k = n(783600),
    B = n(660097);
let P = (e) => {
        let { product: t, item: n } = e,
            a = (0, u.e7)([T.default], () => {
                let e = T.default.getCurrentUser();
                return i()(null != e, 'User cannot be undefined'), e;
            }),
            { avatarDecorationSrc: s } = (0, E.Z)({
                user: a,
                avatarDecorationOverride: (null == n ? void 0 : n.type) === d.Z.AVATAR_DECORATION ? n : null,
                size: (0, m.y9)(f.AvatarSizes.SIZE_120)
            });
        return (0, c.EQ)(t.type)
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: k.profileEffectShopPreview,
                    children: (0, r.jsx)(b.Z, {
                        forCollectedModal: !0,
                        profileEffectId: n.id
                    })
                })
            )
            .with(
                d.Z.AVATAR_DECORATION,
                () => (
                    i()(n.type === d.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                    (0, r.jsx)(f.Avatar, {
                        size: f.AvatarSizes.SIZE_120,
                        src: B,
                        avatarDecoration: s,
                        className: k.avatarDecoration,
                        'aria-label': t.name
                    })
                )
            )
            .with(d.Z.BUNDLE, () =>
                (0, r.jsx)('div', {
                    className: k.bundlePreview,
                    children: (0, r.jsx)(R.d, {
                        product: t,
                        user: a,
                        isPurchased: !1,
                        isHighlighted: !0,
                        profileEffectClassName: k.bundleProfileEffectCard
                    })
                })
            )
            .otherwise(() => null);
    },
    D = (e) => {
        let { product: t, item: n, reducedMotion: s, displayOptions: o } = e,
            [i, c] = a.useState(!1),
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
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.animated.div, {
                    className: k.easterEggContainer,
                    style: d,
                    children: (0, r.jsx)(P, {
                        product: t,
                        item: n
                    })
                }),
                (0, r.jsx)(l.animated.div, {
                    className: k.easterEggContainer,
                    style: s ? g : u,
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
    F = (e) => {
        let { product: t, item: n, reducedMotion: a = !1 } = e,
            s = (0, j.v)(t.categorySkuId);
        return null != s
            ? (0, r.jsx)(D, {
                  product: t,
                  item: n,
                  reducedMotion: a,
                  displayOptions: s
              })
            : (0, r.jsx)(P, {
                  product: t,
                  item: n
              });
    },
    U = (e) => {
        var t;
        let { product: n, onClose: s, confettiTarget: o, confettiCanvas: l, hideConfetti: E = !1, analyticsLocations: b } = e,
            { confettiColors: T } = (0, S.Z)(n.styles),
            R = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            j = (0, A.m)('CollectiblesCollectedModal'),
            [B] = n.items,
            P = a.useRef(null),
            { analyticsLocations: D } = (0, C.ZP)([...b, v.Z.COLLECTIBLES_COLLECTED_MODAL]),
            U = (0, h.Z)({ analyticsLocations: D }),
            H = a.useCallback(() => {
                if ((s(), (0, g.xf)(), U(), n.type === d.Z.AVATAR_DECORATION)) {
                    i()(B.type === d.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, m.ps)({
                            initialSelectedDecoration: B,
                            analyticsLocations: D
                        });
                    return;
                }
                n.type === d.Z.PROFILE_EFFECT &&
                    (0, y.H)({
                        initialSelectedEffectId: B.id,
                        analyticsLocations: D
                    });
            }, [s, U, n.type, B, D]),
            { handleUseNow: z, isApplying: V } = (0, N.W)({
                product: n,
                onSuccess: s,
                onError: s
            }),
            { firstAvatarDecoration: W, firstProfileEffect: X } = (0, L.R)(n),
            G = (0, x.x6)(n) ? null != W && null != X : null != W || null != X,
            K = (0, x.x6)(n) || j,
            { category: Y, isFetching: Q } = (0, I.l)(n.skuId),
            q = null !== (t = null == Y ? void 0 : Y.successModalBg) && void 0 !== t ? t : n.banner;
        return (0, r.jsxs)(C.Gt, {
            value: D,
            children: [
                (0, r.jsxs)('div', {
                    className: k.modalInner,
                    ref: P,
                    children: [
                        (0, r.jsxs)('div', {
                            className: k.bannerContainer,
                            children: [
                                (0, r.jsx)(_.Z, {
                                    asset: Q ? void 0 : q,
                                    size: (0, Z.ML)(880),
                                    className: k.decorationBanner,
                                    categoryBannerOverride: (0, M.ZS)(n.categorySkuId)
                                }),
                                (0, r.jsx)(F, {
                                    product: n,
                                    item: B,
                                    reducedMotion: R
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: k.collectedInfoContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: k.collectedTextContainer,
                                    children: [
                                        (0, r.jsx)(f.Heading, {
                                            variant: 'heading-lg/bold',
                                            children: w.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({ itemName: n.name })
                                        }),
                                        (0, r.jsx)(f.Text, {
                                            variant: 'text-sm/normal',
                                            children: (0, c.EQ)(null == n ? void 0 : n.type)
                                                .with(d.Z.BUNDLE, () => w.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION_BUNDLE)
                                                .with(d.Z.PROFILE_EFFECT, () => w.Z.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION)
                                                .otherwise(() => w.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION)
                                        })
                                    ]
                                }),
                                K
                                    ? (0, r.jsxs)('div', {
                                          className: k.buttons,
                                          children: [
                                              (0, r.jsx)(f.Button, {
                                                  color: G ? f.ButtonColors.PRIMARY : f.ButtonColors.BRAND,
                                                  onClick: H,
                                                  children: w.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE
                                              }),
                                              G
                                                  ? (0, r.jsx)(f.Button, {
                                                        onClick: z,
                                                        submitting: V,
                                                        children: w.Z.Messages.COLLECTIBLES_USE_NOW
                                                    })
                                                  : null
                                          ]
                                      })
                                    : (0, r.jsx)(f.Button, {
                                          onClick: H,
                                          children: w.Z.Messages.COLLECTIBLES_USE_NOW
                                      })
                            ]
                        }),
                        (0, r.jsx)(f.ModalCloseButton, {
                            onClick: s,
                            className: k.modalCloseButton,
                            withCircleBackground: !0
                        })
                    ]
                }),
                !E &&
                    !R &&
                    (0, r.jsx)(O.Z, {
                        confettiTarget: null != o ? o : P.current,
                        confettiCanvas: l,
                        sprites: (0, Z.vK)(n.categorySkuId),
                        colors: null == T ? void 0 : T.map((e) => e.toHexString())
                    })
            ]
        });
    };
t.default = (e) => {
    let { transitionState: t, product: n, onClose: o, analyticsLocations: i } = e,
        l = a.useRef(new s.qA()),
        [c, d] = a.useState(null),
        u = (0, j.UY)(n.skuId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.O_, {
                ref: d,
                className: k.confettiCanvas,
                environment: l.current
            }),
            (0, r.jsxs)(f.ModalRoot, {
                hideShadow: !0,
                transitionState: t,
                size: f.ModalSize.DYNAMIC,
                className: k.modalRoot,
                children: [
                    null != u &&
                        (0, r.jsx)('img', {
                            src: u.imageSrc,
                            className: k.customConfetti,
                            style: u.style,
                            alt: '',
                            'aria-hidden': 'true'
                        }),
                    (0, r.jsx)(f.ModalContent, {
                        className: k.modalContent,
                        children: (0, r.jsx)(U, {
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
