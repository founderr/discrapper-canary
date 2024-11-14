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
    B = n(783600),
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
        let { product: n, onClose: i, confettiTarget: s, confettiCanvas: l, hideConfetti: m = !1, analyticsLocations: T } = t,
            x = (0, E.o0)(n),
            _ = (0, k.W)(n, x),
            { confettiColors: j } = (0, N.Z)(_.styles),
            H = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            F = (0, A.m)('CollectiblesCollectedModal'),
            U = (0, R.k)(_),
            [V] = _.items,
            Y = a.useRef(null),
            { analyticsLocations: G } = (0, h.ZP)([...T, v.Z.COLLECTIBLES_COLLECTED_MODAL]),
            W = (0, S.Z)({ analyticsLocations: G }),
            X = a.useCallback(() => {
                if ((i(), (0, g.xf)(), W(), _.type === d.Z.AVATAR_DECORATION)) {
                    o()(V.type === d.Z.AVATAR_DECORATION, 'product type and item type are the same'),
                        (0, b.ps)({
                            initialSelectedDecoration: V,
                            analyticsLocations: G
                        });
                    return;
                }
                _.type === d.Z.PROFILE_EFFECT &&
                    (0, C.H)({
                        initialSelectedEffectId: V.id,
                        analyticsLocations: G
                    });
            }, [i, W, _.type, V, G]),
            { handleUseNow: Q, isApplying: K } = (0, I.W)({
                product: _,
                onSuccess: i,
                onError: i
            }),
            { firstAvatarDecoration: q, firstProfileEffect: J } = (0, w.R)(_),
            $ = (0, y.x6)(_) ? null != q && null != J : null != q || null != J,
            tt = (0, y.x6)(_) || F,
            { category: te, isFetching: tn } = (0, O.l)(_.skuId),
            tr = null !== (e = null == te ? void 0 : te.successModalBg) && void 0 !== e ? e : _.banner;
        return (0, r.jsxs)(h.Gt, {
            value: G,
            children: [
                (0, r.jsxs)('div', {
                    className: B.modalInner,
                    ref: Y,
                    children: [
                        (0, r.jsxs)('div', {
                            className: B.bannerContainer,
                            children: [
                                (0, r.jsx)(L.Z, {
                                    asset: tn ? void 0 : tr,
                                    size: (0, M.ML)(880),
                                    className: B.decorationBanner,
                                    categoryBannerOverride: (0, P.ZS)(_.categorySkuId)
                                }),
                                (0, r.jsx)(z, {
                                    product: _,
                                    item: V,
                                    reducedMotion: H
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
                                            children: D.intl.format(D.t.YNaxMj, { itemName: U })
                                        }),
                                        (0, r.jsx)(f.Text, {
                                            variant: 'text-sm/normal',
                                            children: (0, c.EQ)(null == _ ? void 0 : _.type)
                                                .with(d.Z.BUNDLE, () => D.intl.string(D.t.zJPoLy))
                                                .with(d.Z.PROFILE_EFFECT, () => D.intl.string(D.t.f9M1YG))
                                                .otherwise(() => D.intl.string(D.t['44b50t']))
                                        })
                                    ]
                                }),
                                tt
                                    ? (0, r.jsxs)('div', {
                                          className: B.buttons,
                                          children: [
                                              (0, r.jsx)(f.Button, {
                                                  color: $ ? f.ButtonColors.PRIMARY : f.ButtonColors.BRAND,
                                                  onClick: X,
                                                  children: D.intl.string(D.t['2p2aY2'])
                                              }),
                                              $
                                                  ? (0, r.jsx)(f.Button, {
                                                        onClick: Q,
                                                        submitting: K,
                                                        children: D.intl.string(D.t.MAS7uL)
                                                    })
                                                  : null
                                          ]
                                      })
                                    : (0, r.jsx)(f.Button, {
                                          onClick: X,
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
                    !H &&
                    (0, r.jsx)(Z.Z, {
                        confettiTarget: null != s ? s : Y.current,
                        confettiCanvas: l,
                        sprites: (0, M.vK)(_.categorySkuId),
                        colors: null == j ? void 0 : j.map((t) => t.toHexString())
                    })
            ]
        });
    };
e.default = (t) => {
    let { transitionState: e, product: n, onClose: s, analyticsLocations: o } = t,
        l = (0, E.o0)(n),
        c = (0, k.W)(n, l),
        d = a.useRef(new i.qA()),
        [u, g] = a.useState(null),
        p = (0, j.UY)(c.skuId);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.O_, {
                ref: g,
                className: B.confettiCanvas,
                environment: d.current
            }),
            (0, r.jsxs)(f.ModalRoot, {
                hideShadow: !0,
                transitionState: e,
                size: f.ModalSize.DYNAMIC,
                className: B.modalRoot,
                children: [
                    null != p &&
                        (0, r.jsx)('img', {
                            src: p.imageSrc,
                            className: B.customConfetti,
                            style: p.style,
                            alt: '',
                            'aria-hidden': 'true'
                        }),
                    (0, r.jsx)(f.ModalContent, {
                        className: B.modalContent,
                        children: (0, r.jsx)(V, {
                            product: c,
                            onClose: s,
                            confettiCanvas: u,
                            hideConfetti: null != p,
                            analyticsLocations: o
                        })
                    })
                ]
            })
        ]
    });
};
