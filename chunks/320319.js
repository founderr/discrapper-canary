n(47120);
var s = n(200651),
    a = n(192379),
    r = n(120356),
    i = n.n(r),
    l = n(392711),
    o = n(990547),
    c = n(399606),
    _ = n(704215),
    d = n(481060),
    E = n(607070),
    u = n(213609),
    T = n(605236),
    I = n(706140),
    R = n(626135),
    g = n(314684),
    N = n(715627),
    m = n(176782),
    C = n(238108),
    A = n(32173),
    f = n(391110),
    p = n(484239),
    M = n(658370),
    S = n(735825),
    h = n(981631),
    x = n(921944),
    b = n(689938),
    O = n(977341);
let P = {
        xMin: -80,
        xMax: 80,
        yMin: -150,
        yMax: -20
    },
    v = a.memo((e) => {
        let { name: t, canReveal: n = !0, dismissibleContentType: r, forceShadow: m, cardType: p, confettiCanvas: M } = e,
            Z = null == e ? void 0 : e.onCtaClick,
            D = (0, c.e7)([E.Z], () => E.Z.useReducedMotion),
            [U, B] = a.useState(!1),
            [j, G] = a.useState(!1),
            w = (0, g.yQ)(),
            H = (0, g.IB)(),
            [y, k] = a.useState(!1),
            [F, V] = a.useState(t === A.u.FREE_BOOST && H && (null == w ? void 0 : w.nitroTenureStatus) === S.EB.REDEEMABLE);
        a.useEffect(() => {
            t === A.u.FREE_BOOST && H && (null == w ? void 0 : w.nitroTenureStatus) === S.EB.REDEEMABLE && V(!0);
        }, [H, t, w]);
        let W = a.useCallback(() => {
                k(!0);
            }, []),
            K = p === f.R0.CARD_CAROUSEL_FIRST_ROW || p === f.R0.CARD_CAROUSEL_SECOND_ROW || p === f.R0.CARD_CAROUSEL_THIRD_ROW,
            Y = (0, A.Z)(),
            [z, Q] = (0, I.cv)((null != r && n) || r === _.z.TENURE_REWARD_REDEEMABLE_CONFETTI ? [r] : []);
        a.useEffect(
            () => () => {
                z === _.z.TENURE_REWARD_REDEEMABLE_CONFETTI && y && (0, T.EW)(z);
            },
            [z, y]
        ),
            a.useEffect(() => {
                z === _.z.TENURE_REWARD_REDEEMABLE_CONFETTI && y && (0, T.EW)(z);
            }, [z, y]);
        let { easterEggLevel: J, isEasterEggTriggered: X, onHover: q, onUnhover: $ } = (0, C.Z)(5),
            ee = (0, l.debounce)(() => {
                R.default.track(h.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                    card_type: (0, l.snakeCase)(t),
                    is_tenure_reward: t === A.u.FREE_BOOST,
                    reward_status: null == w ? void 0 : w.nitroTenureStatus
                });
            }, 800),
            et = (0, l.debounce)(() => {
                null != Z &&
                    R.default.track(h.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                        card_type: (0, l.snakeCase)(t),
                        function_name: (0, l.snakeCase)(Z.name)
                    });
            }, 800),
            en = a.useRef(null);
        e = {
            onMouseEnter: ee,
            ...e,
            onCtaClick:
                null != Z
                    ? () => {
                          null == Z || Z(), et();
                      }
                    : void 0
        };
        let es = z !== r || null == r || j || r === _.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
        return (a.useEffect(() => {
            D && U && (G(!0), R.default.track(h.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != r && Q(x.L.TAKE_ACTION));
        }, [D, U, r, t, Q]),
        (0, u.Z)(
            {
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
                properties: {
                    user_tenure_reward_id: null == w ? void 0 : w.tenureRewardStatusId,
                    tenure_reward_id: null == w ? void 0 : w.tenureRewardSkuId,
                    reward_type: S.nW.SERVER_BOOST,
                    redeemable_at: null == w ? void 0 : w.redeemableAt,
                    reward_status: null == w ? void 0 : w.nitroTenureStatus
                }
            },
            { disableTrack: t !== A.u.FREE_BOOST || null == w }
        ),
        (0, u.Z)({
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: { name: t }
        }),
        n)
            ? t === A.u.UPCOMING_DROP_UNTIMED
                ? (0, s.jsx)('div', {
                      className: i()(O.flipCardContainer, { [O.forceShadow]: m }),
                      onMouseEnter: q,
                      onFocus: q,
                      onMouseLeave: $,
                      onBlur: $,
                      children: (0, s.jsxs)('div', {
                          className: i()(O.flipCard, {
                              [O.partialFlipCard]: !X,
                              [O.ultraFlipCard]: X,
                              [O.rotateCard]: X && 3 === J,
                              [O.reducedMotion]: D
                          }),
                          children: [
                              (0, s.jsx)('div', {
                                  className: O.flipCardFront,
                                  children: (0, s.jsx)(L, {
                                      ...e,
                                      className: O.topCover
                                  })
                              }),
                              (0, s.jsx)('div', {
                                  className: O.flipCardBack,
                                  children: (0, s.jsx)(L, {
                                      ...e,
                                      className: O.topCover
                                  })
                              })
                          ]
                      })
                  })
                : es
                  ? (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)('div', {
                            className: i()({
                                [O.noFlipCardContainer]: !K,
                                [O.noFlipCardContainerCarousel]: K,
                                [O.forceShadow]: m,
                                [O.reducedMotion]: D
                            }),
                            children: [
                                (0, s.jsx)(L, {
                                    ...e,
                                    ref: t === A.u.FREE_BOOST ? en : void 0
                                }),
                                F &&
                                    (0, s.jsx)(N.Z, {
                                        speedValues: P,
                                        numBursts: 3,
                                        particlesPerBurst: 15,
                                        confettiTarget: en.current,
                                        offsetXPercentageMax: -30,
                                        offsetXPercentageMin: -70,
                                        offsetYPercentageMax: 40,
                                        offsetYPercentageMin: 20,
                                        customConfettiCanvas: M,
                                        dragCoefficientValue: 0.0166,
                                        onAnimationEnd: W
                                    })
                            ]
                        })
                    })
                  : (0, s.jsx)('div', {
                        className: i()(O.flipCardContainer, { [O.forceShadow]: m }),
                        children: (0, s.jsxs)(d.Clickable, {
                            onClick: () => B(!0),
                            className: i()(O.flipCard, O.clickable, {
                                [O.flipped]: U,
                                [O.partialFlipCard]: !j && !U,
                                [O.reducedMotion]: D
                            }),
                            onTransitionEnd: (e) => {
                                if (!!U && 'transform' === e.propertyName && !!e.target.classList.contains(O.flipCard)) G(!0), R.default.track(h.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != r && Q(x.L.TAKE_ACTION);
                            },
                            children: [
                                (0, s.jsx)('div', {
                                    className: O.flipCardHidden,
                                    'aria-hidden': !0,
                                    children: (0, s.jsx)(L, { ...e })
                                }),
                                (0, s.jsx)('div', {
                                    className: O.flipCardFront,
                                    children: (0, s.jsx)(L, {
                                        ...Y.upcomingDropUntimed,
                                        pillText: ''
                                    })
                                }),
                                (0, s.jsx)('div', {
                                    className: O.flipCardBack,
                                    children: (0, s.jsx)(L, {
                                        ...e,
                                        description: ''
                                    })
                                }),
                                (0, s.jsx)('div', {
                                    className: O.flipCardButtonContainer,
                                    children: (0, s.jsx)(d.Button, {
                                        onClick: () => B(!0),
                                        children: b.Z.Messages.REVEAL
                                    })
                                })
                            ]
                        })
                    })
            : (0, s.jsx)(v, {
                  ...Y.upcomingDropUntimed,
                  forceShadow: m
              });
    });
v.displayName = 'PerkDiscoverabilityCard';
let L = a.forwardRef((e, t) => {
    var n;
    let { title: r, titleClassName: l = '', subtitle: o = '', description: c = '', descriptionCta: _ = '', isPremiumGetCta: E, onCtaClick: u, onMouseEnter: T, className: I, perkComponent: R, cardVariant: N, cardType: C, onClick: A, backgroundImage: S, pillText: h, perkImage: x, imageOverlayText: b } = e,
        P = C === f.R0.CARD_CAROUSEL_FIRST_ROW || C === f.R0.CARD_CAROUSEL_SECOND_ROW || C === f.R0.CARD_CAROUSEL_THIRD_ROW,
        v = '' !== c || '' !== _ || ('' !== o && N === f.zW.REWARD),
        L = (0, g.IB)(),
        [Z, D] = a.useState(N !== f.zW.REWARD || L);
    a.useEffect(() => {
        L && D(!0);
    }, [L]);
    let U = (0, m._)(N);
    return (0, s.jsxs)(d.Clickable, {
        className: i()(O.card, I, !0 === Z ? (null === (n = U.cardContainer) || void 0 === n ? void 0 : n.className) : void 0, {
            [O.clickable]: null != A,
            [O.hideOverflow]: P
        }),
        onMouseEnter: T,
        style: { backgroundImage: null != S ? 'url('.concat(S, ')') : void 0 },
        onClick: A,
        children: [
            null != h &&
                (0, s.jsx)(d.Text, {
                    variant: 'text-xs/semibold',
                    className: O.pill,
                    children: h
                }),
            (0, s.jsx)('div', { ref: t }),
            (0, s.jsx)(p.Z, {
                title: r,
                titleClassName: l,
                subtitle: o,
                perkImage: x,
                isCarousel: P,
                descriptionCta: _,
                onCtaClick: u,
                perkComponent: R,
                subtitleClassName: O.cardSubtitle,
                cardVariant: N,
                imageOverlayText: b
            }),
            v &&
                (0, s.jsx)(M.Z, {
                    title: r,
                    titleClassName: l,
                    subtitle: o,
                    description: c,
                    descriptionCta: _,
                    isPremiumGetCta: E,
                    onCtaClick: u,
                    cardVariant: N,
                    perkComponent: R
                }),
            (0, s.jsx)('div', {
                className: i()(O.cover, O.above),
                ref: t
            })
        ]
    });
});
(L.displayName = 'PerkCardContent'), (t.Z = v);
