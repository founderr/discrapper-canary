n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(392711),
    o = n(990547),
    c = n(399606),
    d = n(704215),
    _ = n(481060),
    u = n(607070),
    E = n(213609),
    T = n(605236),
    I = n(706140),
    R = n(626135),
    m = n(314684),
    g = n(715627),
    N = n(176782),
    C = n(238108),
    p = n(32173),
    A = n(391110),
    f = n(484239),
    h = n(658370),
    S = n(735825),
    M = n(981631),
    x = n(921944),
    b = n(689938),
    O = n(977341);
let v = {
        xMin: -80,
        xMax: 80,
        yMin: -150,
        yMax: -20
    },
    P = a.memo((e) => {
        let { name: t, canReveal: n = !0, dismissibleContentType: r, forceShadow: N, cardType: f, confettiCanvas: h } = e,
            Z = null == e ? void 0 : e.onCtaClick,
            D = (0, c.e7)([u.Z], () => u.Z.useReducedMotion),
            [U, B] = a.useState(!1),
            [j, G] = a.useState(!1),
            w = (0, m.yQ)(),
            y = (0, m.IB)(),
            [H, k] = a.useState(!1),
            [F, V] = a.useState(t === p.u.FREE_BOOST && y && (null == w ? void 0 : w.nitroTenureStatus) === S.EB.REDEEMABLE);
        a.useEffect(() => {
            t === p.u.FREE_BOOST && y && (null == w ? void 0 : w.nitroTenureStatus) === S.EB.REDEEMABLE && V(!0);
        }, [y, t, w]);
        let W = a.useCallback(() => {
                k(!0);
            }, []),
            K = f === A.R0.CARD_CAROUSEL_FIRST_ROW || f === A.R0.CARD_CAROUSEL_SECOND_ROW || f === A.R0.CARD_CAROUSEL_THIRD_ROW,
            Y = (0, p.Z)(),
            [z, Q] = (0, I.cv)((null != r && n) || r === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI ? [r] : []);
        a.useEffect(
            () => () => {
                z === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && H && (0, T.EW)(z);
            },
            [z, H]
        ),
            a.useEffect(() => {
                z === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && H && (0, T.EW)(z);
            }, [z, H]);
        let { easterEggLevel: q, isEasterEggTriggered: X, onHover: J, onUnhover: $ } = (0, C.Z)(5),
            ee = (0, l.debounce)(() => {
                R.default.track(M.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                    card_type: (0, l.snakeCase)(t),
                    is_tenure_reward: t === p.u.FREE_BOOST,
                    reward_status: null == w ? void 0 : w.nitroTenureStatus
                });
            }, 800),
            et = (0, l.debounce)(() => {
                null != Z &&
                    R.default.track(M.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
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
        let es = z !== r || null == r || j || r === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
        return (a.useEffect(() => {
            D && U && (G(!0), R.default.track(M.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != r && Q(x.L.TAKE_ACTION));
        }, [D, U, r, t, Q]),
        (0, E.Z)(
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
            { disableTrack: t !== p.u.FREE_BOOST || null == w }
        ),
        (0, E.Z)({
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: { name: t }
        }),
        n)
            ? t === p.u.UPCOMING_DROP_UNTIMED
                ? (0, s.jsx)('div', {
                      className: i()(O.flipCardContainer, { [O.forceShadow]: N }),
                      onMouseEnter: J,
                      onFocus: J,
                      onMouseLeave: $,
                      onBlur: $,
                      children: (0, s.jsxs)('div', {
                          className: i()(O.flipCard, {
                              [O.partialFlipCard]: !X,
                              [O.ultraFlipCard]: X,
                              [O.rotateCard]: X && 3 === q,
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
                                [O.forceShadow]: N,
                                [O.reducedMotion]: D
                            }),
                            children: [
                                (0, s.jsx)(L, {
                                    ...e,
                                    ref: t === p.u.FREE_BOOST ? en : void 0
                                }),
                                F &&
                                    (0, s.jsx)(g.Z, {
                                        speedValues: v,
                                        numBursts: 3,
                                        particlesPerBurst: 15,
                                        confettiTarget: en.current,
                                        offsetXPercentageMax: -30,
                                        offsetXPercentageMin: -70,
                                        offsetYPercentageMax: 40,
                                        offsetYPercentageMin: 20,
                                        customConfettiCanvas: h,
                                        dragCoefficientValue: 0.00001,
                                        onAnimationEnd: W
                                    })
                            ]
                        })
                    })
                  : (0, s.jsx)('div', {
                        className: i()(O.flipCardContainer, { [O.forceShadow]: N }),
                        children: (0, s.jsxs)(_.Clickable, {
                            onClick: () => B(!0),
                            className: i()(O.flipCard, O.clickable, {
                                [O.flipped]: U,
                                [O.partialFlipCard]: !j && !U,
                                [O.reducedMotion]: D
                            }),
                            onTransitionEnd: (e) => {
                                if (!!U && 'transform' === e.propertyName && !!e.target.classList.contains(O.flipCard)) G(!0), R.default.track(M.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != r && Q(x.L.TAKE_ACTION);
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
                                    children: (0, s.jsx)(_.Button, {
                                        onClick: () => B(!0),
                                        children: b.Z.Messages.REVEAL
                                    })
                                })
                            ]
                        })
                    })
            : (0, s.jsx)(P, {
                  ...Y.upcomingDropUntimed,
                  forceShadow: N
              });
    });
P.displayName = 'PerkDiscoverabilityCard';
let L = a.forwardRef((e, t) => {
    var n;
    let { title: r, titleClassName: l = '', subtitle: o = '', description: c = '', descriptionCta: d = '', isPremiumGetCta: u, onCtaClick: E, onMouseEnter: T, className: I, perkComponent: R, cardVariant: g, cardType: C, onClick: p, backgroundImage: S, pillText: M, perkImage: x } = e,
        b = C === A.R0.CARD_CAROUSEL_FIRST_ROW || C === A.R0.CARD_CAROUSEL_SECOND_ROW || C === A.R0.CARD_CAROUSEL_THIRD_ROW,
        v = 0 !== c.length || 0 !== d.length || (0 !== o.length && g === A.zW.REWARD),
        P = (0, m.IB)(),
        [L, Z] = a.useState(g !== A.zW.REWARD || P);
    a.useEffect(() => {
        P && Z(!0);
    }, [P]);
    let D = (0, N._)(g);
    return (0, s.jsxs)(_.Clickable, {
        className: i()(O.card, I, !0 === L ? (null === (n = D.cardContainer) || void 0 === n ? void 0 : n.className) : void 0, {
            [O.clickable]: null != p,
            [O.hideOverflow]: b
        }),
        onMouseEnter: T,
        style: { backgroundImage: null != S ? 'url('.concat(S, ')') : void 0 },
        onClick: p,
        children: [
            null != M &&
                (0, s.jsx)(_.Text, {
                    variant: 'text-xs/semibold',
                    className: O.pill,
                    children: M
                }),
            (0, s.jsx)('div', { ref: t }),
            (0, s.jsx)(f.Z, {
                title: r,
                titleClassName: l,
                subtitle: o,
                perkImage: x,
                isCarousel: b,
                descriptionCta: d,
                onCtaClick: E,
                perkComponent: R,
                subtitleClassName: O.cardSubtitle,
                cardVariant: g
            }),
            v &&
                (0, s.jsx)(h.Z, {
                    title: r,
                    titleClassName: l,
                    subtitle: o,
                    description: c,
                    descriptionCta: d,
                    isPremiumGetCta: u,
                    onCtaClick: E,
                    cardVariant: g,
                    perkComponent: R
                }),
            (0, s.jsx)('div', {
                className: i()(O.cover, O.above),
                ref: t
            })
        ]
    });
});
(L.displayName = 'PerkCardContent'), (t.Z = P);
