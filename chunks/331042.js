r.r(t),
    r.d(t, {
        CollectiblesCollectedModalInner: function () {
            return U;
        }
    }),
    r(47120),
    r(627341);
var n = r(735250),
    a = r(470079),
    s = r(887024),
    o = r(512722),
    i = r.n(o),
    l = r(526629),
    c = r(278074),
    d = r(979554),
    u = r(399606),
    f = r(481060),
    g = r(37234),
    p = r(607070),
    v = r(100527),
    C = r(906732),
    m = r(1585),
    E = r(125988),
    h = r(300284),
    b = r(876917),
    y = r(642619),
    T = r(594174),
    A = r(884697),
    x = r(890249),
    I = r(318028),
    N = r(635552),
    S = r(328456),
    L = r(624377),
    O = r(530618),
    _ = r(141011),
    Z = r(372654),
    R = r(216541),
    j = r(302800),
    M = r(215023),
    w = r(689938),
    k = r(783600),
    B = r(660097);
let P = (e) => {
        let { product: t, item: r } = e,
            a = (0, u.e7)([T.default], () => {
                let e = T.default.getCurrentUser();
                return i()(null != e, 'User cannot be undefined'), e;
            }),
            { avatarDecorationSrc: s } = (0, E.Z)({
                user: a,
                avatarDecorationOverride: (null == r ? void 0 : r.type) === d.Z.AVATAR_DECORATION ? r : null,
                size: (0, m.y9)(f.AvatarSizes.SIZE_120)
            });
        return (0, c.EQ)(t.type)
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, n.jsx)('div', {
                    className: k.profileEffectShopPreview,
                    children: (0, n.jsx)(b.Z, {
                        forCollectedModal: !0,
                        profileEffectId: r.id
                    })
                })
            )
            .with(
                d.Z.AVATAR_DECORATION,
                () => (
                    i()(r.type === d.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                    (0, n.jsx)(f.Avatar, {
                        size: f.AvatarSizes.SIZE_120,
                        src: B,
                        avatarDecoration: s,
                        className: k.avatarDecoration,
                        'aria-label': t.name
                    })
                )
            )
            .with(d.Z.BUNDLE, () =>
                (0, n.jsx)('div', {
                    className: k.bundlePreview,
                    children: (0, n.jsx)(R.d, {
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
        let { product: t, item: r, reducedMotion: s, displayOptions: o } = e,
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
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(l.animated.div, {
                    className: k.easterEggContainer,
                    style: d,
                    children: (0, n.jsx)(P, {
                        product: t,
                        item: r
                    })
                }),
                (0, n.jsx)(l.animated.div, {
                    className: k.easterEggContainer,
                    style: s ? g : u,
                    children: (0, n.jsx)('img', {
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
        let { product: t, item: r, reducedMotion: a = !1 } = e,
            s = (0, j.v)(t.categorySkuId);
        return null != s
            ? (0, n.jsx)(D, {
                  product: t,
                  item: r,
                  reducedMotion: a,
                  displayOptions: s
              })
            : (0, n.jsx)(P, {
                  product: t,
                  item: r
              });
    },
    U = (e) => {
        var t;
        let { product: r, onClose: s, confettiTarget: o, confettiCanvas: l, hideConfetti: E = !1, analyticsLocations: b } = e,
            { confettiColors: T } = (0, L.Z)(r.styles),
            R = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            j = (0, x.m)('CollectiblesCollectedModal'),
            [B] = r.items,
            P = a.useRef(null),
            { analyticsLocations: D } = (0, C.ZP)([...b, v.Z.COLLECTIBLES_COLLECTED_MODAL]),
            U = (0, h.Z)({ analyticsLocations: D }),
            H = a.useCallback(() => {
                if ((s(), (0, g.xf)(), U(), r.type === d.Z.AVATAR_DECORATION)) {
                    i()(B.type === d.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, m.ps)({
                            initialSelectedDecoration: B,
                            analyticsLocations: D
                        });
                    return;
                }
                r.type === d.Z.PROFILE_EFFECT &&
                    (0, y.H)({
                        initialSelectedEffectId: B.id,
                        analyticsLocations: D
                    });
            }, [s, U, r.type, B, D]),
            { handleUseNow: z, isApplying: V } = (0, N.W)({
                product: r,
                onSuccess: s,
                onError: s
            }),
            { firstAvatarDecoration: W, firstProfileEffect: X } = (0, S.R)(r),
            G = (0, A.x6)(r) ? null != W && null != X : null != W || null != X,
            K = (0, A.x6)(r) || j,
            { category: Y, isFetching: Q } = (0, I.l)(r.skuId),
            q = null !== (t = null == Y ? void 0 : Y.successModalBg) && void 0 !== t ? t : r.banner;
        return (0, n.jsxs)(C.Gt, {
            value: D,
            children: [
                (0, n.jsxs)('div', {
                    className: k.modalInner,
                    ref: P,
                    children: [
                        (0, n.jsxs)('div', {
                            className: k.bannerContainer,
                            children: [
                                (0, n.jsx)(_.Z, {
                                    asset: Q ? void 0 : q,
                                    size: (0, Z.ML)(880),
                                    className: k.decorationBanner,
                                    categoryBannerOverride: (0, M.ZS)(r.categorySkuId)
                                }),
                                (0, n.jsx)(F, {
                                    product: r,
                                    item: B,
                                    reducedMotion: R
                                })
                            ]
                        }),
                        (0, n.jsxs)('div', {
                            className: k.collectedInfoContainer,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: k.collectedTextContainer,
                                    children: [
                                        (0, n.jsx)(f.Heading, {
                                            variant: 'heading-lg/bold',
                                            children: w.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({ itemName: r.name })
                                        }),
                                        (0, n.jsx)(f.Text, {
                                            variant: 'text-sm/normal',
                                            children: (0, c.EQ)(null == r ? void 0 : r.type)
                                                .with(d.Z.BUNDLE, () => w.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION_BUNDLE)
                                                .with(d.Z.PROFILE_EFFECT, () => w.Z.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION)
                                                .otherwise(() => w.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION)
                                        })
                                    ]
                                }),
                                K
                                    ? (0, n.jsxs)('div', {
                                          className: k.buttons,
                                          children: [
                                              (0, n.jsx)(f.Button, {
                                                  color: G ? f.ButtonColors.PRIMARY : f.ButtonColors.BRAND,
                                                  onClick: H,
                                                  children: w.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE
                                              }),
                                              G
                                                  ? (0, n.jsx)(f.Button, {
                                                        onClick: z,
                                                        submitting: V,
                                                        children: w.Z.Messages.COLLECTIBLES_USE_NOW
                                                    })
                                                  : null
                                          ]
                                      })
                                    : (0, n.jsx)(f.Button, {
                                          onClick: H,
                                          children: w.Z.Messages.COLLECTIBLES_USE_NOW
                                      })
                            ]
                        }),
                        (0, n.jsx)(f.ModalCloseButton, {
                            onClick: s,
                            className: k.modalCloseButton,
                            withCircleBackground: !0
                        })
                    ]
                }),
                !E &&
                    !R &&
                    (0, n.jsx)(O.Z, {
                        confettiTarget: null != o ? o : P.current,
                        confettiCanvas: l,
                        sprites: (0, Z.vK)(r.categorySkuId),
                        colors: null == T ? void 0 : T.map((e) => e.toHexString())
                    })
            ]
        });
    };
t.default = (e) => {
    let { transitionState: t, product: r, onClose: o, analyticsLocations: i } = e,
        l = a.useRef(new s.qA()),
        [c, d] = a.useState(null),
        u = (0, j.UY)(r.skuId);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(s.O_, {
                ref: d,
                className: k.confettiCanvas,
                environment: l.current
            }),
            (0, n.jsxs)(f.ModalRoot, {
                hideShadow: !0,
                transitionState: t,
                size: f.ModalSize.DYNAMIC,
                className: k.modalRoot,
                children: [
                    null != u &&
                        (0, n.jsx)('img', {
                            src: u.imageSrc,
                            className: k.customConfetti,
                            style: u.style,
                            alt: '',
                            'aria-hidden': 'true'
                        }),
                    (0, n.jsx)(f.ModalContent, {
                        className: k.modalContent,
                        children: (0, n.jsx)(U, {
                            product: r,
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
