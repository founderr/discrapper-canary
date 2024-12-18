n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(392711),
    o = n(990547),
    c = n(399606),
    d = n(704215),
    u = n(481060),
    m = n(607070),
    g = n(213609),
    f = n(605236),
    p = n(706140),
    _ = n(626135),
    h = n(314684),
    E = n(715627),
    b = n(404615),
    x = n(238108),
    C = n(32173),
    T = n(391110),
    v = n(484239),
    N = n(658370),
    I = n(735825),
    S = n(981631),
    R = n(921944),
    j = n(388032),
    A = n(506829);
let P = {
        xMin: -80,
        xMax: 80,
        yMin: -150,
        yMax: -20
    },
    Z = r.memo((e) => {
        let { name: t, canReveal: n = !0, dismissibleContentType: a, forceShadow: b, cardType: v, confettiCanvas: N } = e,
            B = null == e ? void 0 : e.onCtaClick,
            O = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
            [w, y] = r.useState(!1),
            [k, L] = r.useState(!1),
            U = (0, h.yQ)(),
            D = (0, h.IB)(),
            [H, G] = r.useState(!1),
            [V, F] = r.useState((t === C.u.FREE_BOOST || t === C.u.TENURE_REWARD_COLLECTIBLE) && D && (null == U ? void 0 : U.nitroTenureStatus) === I.EB.REDEEMABLE);
        r.useEffect(() => {
            (t === C.u.FREE_BOOST || t === C.u.TENURE_REWARD_COLLECTIBLE) && D && (null == U ? void 0 : U.nitroTenureStatus) === I.EB.REDEEMABLE && F(!0);
        }, [D, t, U]);
        let W = r.useCallback(() => {
                G(!0);
            }, []),
            z = v === T.R0.CARD_CAROUSEL_FIRST_ROW || v === T.R0.CARD_CAROUSEL_SECOND_ROW || v === T.R0.CARD_CAROUSEL_THIRD_ROW,
            Y = (0, C.Z)(),
            [K, Q] = (0, p.cv)((null != a && n) || a === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI ? [a] : []);
        r.useEffect(
            () => () => {
                K === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && H && (0, f.EW)(K);
            },
            [K, H]
        ),
            r.useEffect(() => {
                K === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && H && (0, f.EW)(K);
            }, [K, H]);
        let { easterEggLevel: q, isEasterEggTriggered: J, onHover: X, onUnhover: $ } = (0, x.Z)(5),
            ee = (0, l.debounce)(() => {
                _.default.track(S.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                    card_type: (0, l.snakeCase)(t),
                    is_tenure_reward: t === C.u.FREE_BOOST || t === C.u.TENURE_REWARD_COLLECTIBLE,
                    reward_status: null == U ? void 0 : U.nitroTenureStatus
                });
            }, 800),
            et = (0, l.debounce)(() => {
                null != B &&
                    _.default.track(S.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                        card_type: (0, l.snakeCase)(t),
                        function_name: (0, l.snakeCase)(B.name)
                    });
            }, 800),
            en = r.useRef(null);
        e = {
            onMouseEnter: ee,
            ...e,
            onCtaClick:
                null != B
                    ? () => {
                          null == B || B(), et();
                      }
                    : void 0
        };
        let ei = K !== a || null == a || k || a === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
        return (r.useEffect(() => {
            O && w && (L(!0), _.default.track(S.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != a && Q(R.L.TAKE_ACTION));
        }, [O, w, a, t, Q]),
        (0, g.Z)(
            {
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
                properties: {
                    user_tenure_reward_id: null == U ? void 0 : U.tenureRewardStatusId,
                    tenure_reward_id: null == U ? void 0 : U.tenureRewardSkuId,
                    reward_type: null == U ? void 0 : U.tenureRewardType,
                    redeemable_at: null == U ? void 0 : U.redeemableAt,
                    reward_status: null == U ? void 0 : U.nitroTenureStatus
                }
            },
            { disableTrack: (t !== C.u.FREE_BOOST && t !== C.u.TENURE_REWARD_COLLECTIBLE) || null == U }
        ),
        (0, g.Z)({
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: { name: t }
        }),
        n)
            ? t === C.u.UPCOMING_DROP_UNTIMED
                ? (0, i.jsx)('div', {
                      className: s()(A.flipCardContainer, { [A.forceShadow]: b }),
                      onMouseEnter: X,
                      onFocus: X,
                      onMouseLeave: $,
                      onBlur: $,
                      children: (0, i.jsxs)('div', {
                          className: s()(A.flipCard, {
                              [A.partialFlipCard]: !J,
                              [A.ultraFlipCard]: J,
                              [A.rotateCard]: J && 3 === q,
                              [A.reducedMotion]: O
                          }),
                          children: [
                              (0, i.jsx)('div', {
                                  className: A.flipCardFront,
                                  children: (0, i.jsx)(M, {
                                      ...e,
                                      className: A.topCover
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: A.flipCardBack,
                                  children: (0, i.jsx)(M, {
                                      ...e,
                                      className: A.topCover
                                  })
                              })
                          ]
                      })
                  })
                : ei
                  ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)('div', {
                            className: s()({
                                [A.noFlipCardContainer]: !z,
                                [A.noFlipCardContainerCarousel]: z,
                                [A.forceShadow]: b,
                                [A.reducedMotion]: O
                            }),
                            children: [
                                (0, i.jsx)(M, {
                                    ...e,
                                    ref: t === C.u.FREE_BOOST || t === C.u.TENURE_REWARD_COLLECTIBLE ? en : void 0
                                }),
                                V &&
                                    (0, i.jsx)(E.Z, {
                                        speedValues: P,
                                        numBursts: 3,
                                        particlesPerBurst: 15,
                                        confettiTarget: en.current,
                                        offsetXPercentageMax: -30,
                                        offsetXPercentageMin: -70,
                                        offsetYPercentageMax: 40,
                                        offsetYPercentageMin: 20,
                                        customConfettiCanvas: N,
                                        dragCoefficientValue: 0.0166,
                                        onAnimationEnd: W
                                    })
                            ]
                        })
                    })
                  : (0, i.jsx)('div', {
                        className: s()(A.flipCardContainer, { [A.forceShadow]: b }),
                        children: (0, i.jsxs)(u.Clickable, {
                            onClick: () => y(!0),
                            className: s()(A.flipCard, A.clickable, {
                                [A.flipped]: w,
                                [A.partialFlipCard]: !k && !w,
                                [A.reducedMotion]: O
                            }),
                            onTransitionEnd: (e) => {
                                if (!!w && 'transform' === e.propertyName && !!e.target.classList.contains(A.flipCard)) L(!0), _.default.track(S.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != a && Q(R.L.TAKE_ACTION);
                            },
                            children: [
                                (0, i.jsx)('div', {
                                    className: A.flipCardHidden,
                                    'aria-hidden': !0,
                                    children: (0, i.jsx)(M, { ...e })
                                }),
                                (0, i.jsx)('div', {
                                    className: A.flipCardFront,
                                    children: (0, i.jsx)(M, {
                                        ...Y.upcomingDropUntimed,
                                        pillText: ''
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: A.flipCardBack,
                                    children: (0, i.jsx)(M, {
                                        ...e,
                                        description: ''
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: A.flipCardButtonContainer,
                                    children: (0, i.jsx)(u.Button, {
                                        onClick: () => y(!0),
                                        children: j.intl.string(j.t.dcztdX)
                                    })
                                })
                            ]
                        })
                    })
            : (0, i.jsx)(Z, {
                  ...Y.upcomingDropUntimed,
                  forceShadow: b
              });
    });
Z.displayName = 'PerkDiscoverabilityCard';
let M = r.forwardRef((e, t) => {
    var n;
    let { title: r, titleClassName: a = '', subtitle: l = '', description: o = '', descriptionCta: c = '', isPremiumGetCta: d, onCtaClick: m, onMouseEnter: g, className: f, perkComponent: p, cardVariant: _, cardType: h, onClick: E, backgroundImage: x, pillText: C, perkImage: I, imageOverlayText: S } = e,
        R = h === T.R0.CARD_CAROUSEL_FIRST_ROW || h === T.R0.CARD_CAROUSEL_SECOND_ROW || h === T.R0.CARD_CAROUSEL_THIRD_ROW,
        j = '' !== o || '' !== c || ('' !== l && _ === T.zW.REWARD),
        P = (0, b._)(_);
    return (0, i.jsxs)(u.Clickable, {
        className: s()(A.card, f, null === (n = P.cardContainer) || void 0 === n ? void 0 : n.className, {
            [A.clickable]: null != E,
            [A.hideOverflow]: R
        }),
        onMouseEnter: g,
        style: { backgroundImage: null != x ? 'url('.concat(x, ')') : void 0 },
        onClick: E,
        children: [
            null != C &&
                (0, i.jsx)(u.Text, {
                    variant: 'text-xs/semibold',
                    className: A.pill,
                    children: C
                }),
            (0, i.jsx)('div', { ref: t }),
            (0, i.jsx)(v.Z, {
                title: r,
                titleClassName: a,
                subtitle: l,
                perkImage: I,
                isCarousel: R,
                descriptionCta: c,
                onCtaClick: m,
                perkComponent: p,
                subtitleClassName: A.cardSubtitle,
                cardVariant: _,
                imageOverlayText: S
            }),
            j &&
                (0, i.jsx)(N.Z, {
                    title: r,
                    titleClassName: a,
                    subtitle: l,
                    description: o,
                    descriptionCta: c,
                    isPremiumGetCta: d,
                    onCtaClick: m,
                    cardVariant: _,
                    perkComponent: p
                }),
            (0, i.jsx)('div', {
                className: s()(A.cover, A.above),
                ref: t
            })
        ]
    });
});
(M.displayName = 'PerkCardContent'), (t.Z = Z);
