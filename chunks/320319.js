"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("392711"),
  o = s("990547"),
  u = s("399606"),
  c = s("704215"),
  d = s("481060"),
  _ = s("607070"),
  E = s("213609"),
  R = s("605236"),
  T = s("706140"),
  f = s("626135"),
  I = s("314684"),
  S = s("715627"),
  m = s("176782"),
  p = s("238108"),
  A = s("32173"),
  M = s("391110"),
  C = s("484239"),
  N = s("658370"),
  g = s("735825"),
  P = s("981631"),
  O = s("921944"),
  x = s("689938"),
  b = s("955627");
let h = {
    xMin: -80,
    xMax: 80,
    yMin: -150,
    yMax: -20
  },
  D = r.memo(e => {
    let {
      name: t,
      canReveal: s = !0,
      dismissibleContentType: i,
      forceShadow: m,
      cardType: C,
      confettiCanvas: N
    } = e, v = null == e ? void 0 : e.onCtaClick, U = (0, u.useStateFromStores)([_.default], () => _.default.useReducedMotion), [B, j] = r.useState(!1), [k, G] = r.useState(!1), H = (0, I.useFreeBoostUserTenureReward)(), W = (0, I.useShouldShowConfettiAndGlow)(), [y, F] = r.useState(!1), [w, K] = r.useState(t === A.PerksDiscoverabilityCardTypes.FREE_BOOST && W && (null == H ? void 0 : H.nitroTenureStatus) === g.NitroRewardStatus.REDEEMABLE);
    r.useEffect(() => {
      t === A.PerksDiscoverabilityCardTypes.FREE_BOOST && W && (null == H ? void 0 : H.nitroTenureStatus) === g.NitroRewardStatus.REDEEMABLE && K(!0)
    }, [W, t, H]);
    let V = r.useCallback(() => {
        F(!0)
      }, []),
      Y = C === M.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || C === M.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || C === M.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW,
      z = (0, A.default)(),
      [Q, X] = (0, T.useGetDismissibleContent)(null != i && s || i === c.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI ? [i] : []);
    r.useEffect(() => () => {
      Q === c.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && y && (0, R.markDismissibleContentAsDismissed)(Q)
    }, [Q, y]), r.useEffect(() => {
      Q === c.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && y && (0, R.markDismissibleContentAsDismissed)(Q)
    }, [Q, y]);
    let {
      easterEggLevel: J,
      isEasterEggTriggered: Z,
      onHover: q,
      onUnhover: $
    } = (0, p.default)(5), ee = (0, l.debounce)(() => {
      f.default.track(P.AnalyticEvents.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, l.snakeCase)(t),
        is_tenure_reward: t === A.PerksDiscoverabilityCardTypes.FREE_BOOST,
        reward_status: null == H ? void 0 : H.nitroTenureStatus
      })
    }, 800), et = (0, l.debounce)(() => {
      null != v && f.default.track(P.AnalyticEvents.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
        card_type: (0, l.snakeCase)(t),
        function_name: (0, l.snakeCase)(v.name)
      })
    }, 800), es = r.useRef(null);
    e = {
      onMouseEnter: ee,
      ...e,
      onCtaClick: null != v ? () => {
        null == v || v(), et()
      } : void 0
    };
    let ea = Q !== i || null == i || k || i === c.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI;
    return (r.useEffect(() => {
      U && B && (G(!0), f.default.track(P.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != i && X(O.ContentDismissActionType.TAKE_ACTION))
    }, [U, B, i, t, X]), (0, E.default)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
      properties: {
        user_tenure_reward_id: null == H ? void 0 : H.tenureRewardStatusId,
        tenure_reward_id: null == H ? void 0 : H.tenureRewardSkuId,
        reward_type: g.NitroRewardType.SERVER_BOOST,
        redeemable_at: null == H ? void 0 : H.redeemableAt,
        reward_status: null == H ? void 0 : H.nitroTenureStatus
      }
    }, {
      disableTrack: t !== A.PerksDiscoverabilityCardTypes.FREE_BOOST || null == H
    }), (0, E.default)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
      properties: {
        name: t
      }
    }), s) ? t === A.PerksDiscoverabilityCardTypes.UPCOMING_DROP_UNTIMED ? (0, a.jsx)("div", {
      className: n()(b.flipCardContainer, {
        [b.forceShadow]: m
      }),
      onMouseEnter: q,
      onFocus: q,
      onMouseLeave: $,
      onBlur: $,
      children: (0, a.jsxs)("div", {
        className: n()(b.flipCard, {
          [b.partialFlipCard]: !Z,
          [b.ultraFlipCard]: Z,
          [b.rotateCard]: Z && 3 === J,
          [b.reducedMotion]: U
        }),
        children: [(0, a.jsx)("div", {
          className: b.flipCardFront,
          children: (0, a.jsx)(L, {
            ...e,
            className: b.topCover
          })
        }), (0, a.jsx)("div", {
          className: b.flipCardBack,
          children: (0, a.jsx)(L, {
            ...e,
            className: b.topCover
          })
        })]
      })
    }) : ea ? (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: n()({
          [b.noFlipCardContainer]: !Y,
          [b.noFlipCardContainerCarousel]: Y,
          [b.forceShadow]: m,
          [b.reducedMotion]: U
        }),
        children: [(0, a.jsx)(L, {
          ...e,
          ref: t === A.PerksDiscoverabilityCardTypes.FREE_BOOST ? es : void 0
        }), w && (0, a.jsx)(S.default, {
          speedValues: h,
          numBursts: 3,
          particlesPerBurst: 15,
          confettiTarget: es.current,
          offsetXPercentageMax: -30,
          offsetXPercentageMin: -70,
          offsetYPercentageMax: 40,
          offsetYPercentageMin: 20,
          customConfettiCanvas: N,
          dragCoefficientValue: 1e-5,
          onAnimationEnd: V
        })]
      })
    }) : (0, a.jsx)("div", {
      className: n()(b.flipCardContainer, {
        [b.forceShadow]: m
      }),
      children: (0, a.jsxs)(d.Clickable, {
        onClick: () => j(!0),
        className: n()(b.flipCard, b.clickable, {
          [b.flipped]: B,
          [b.partialFlipCard]: !k && !B,
          [b.reducedMotion]: U
        }),
        onTransitionEnd: e => {
          B && "transform" === e.propertyName && e.target.classList.contains(b.flipCard) && (G(!0), f.default.track(P.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != i && X(O.ContentDismissActionType.TAKE_ACTION))
        },
        children: [(0, a.jsx)("div", {
          className: b.flipCardHidden,
          "aria-hidden": !0,
          children: (0, a.jsx)(L, {
            ...e
          })
        }), (0, a.jsx)("div", {
          className: b.flipCardFront,
          children: (0, a.jsx)(L, {
            ...z.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, a.jsx)("div", {
          className: b.flipCardBack,
          children: (0, a.jsx)(L, {
            ...e,
            description: ""
          })
        }), (0, a.jsx)("div", {
          className: b.flipCardButtonContainer,
          children: (0, a.jsx)(d.Button, {
            onClick: () => j(!0),
            children: x.default.Messages.REVEAL
          })
        })]
      })
    }) : (0, a.jsx)(D, {
      ...z.upcomingDropUntimed,
      forceShadow: m
    })
  });
D.displayName = "PerkDiscoverabilityCard";
let L = r.forwardRef((e, t) => {
  var s;
  let {
    title: i,
    titleClassName: l = "",
    subtitle: o = "",
    description: u = "",
    descriptionCta: c = "",
    isPremiumGetCta: _,
    onCtaClick: E,
    onMouseEnter: R,
    className: T,
    perkComponent: f,
    cardVariant: S,
    cardType: p,
    onClick: A,
    backgroundImage: g,
    pillText: P,
    perkImage: O
  } = e, x = p === M.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || p === M.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || p === M.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, h = 0 !== u.length || 0 !== c.length || 0 !== o.length && S === M.CardVariants.REWARD, D = (0, I.useShouldShowConfettiAndGlow)(), [L, v] = r.useState(D);
  r.useEffect(() => {
    D && v(!0)
  }, [D]);
  let U = (0, m.useCardVariantsInfo)(S);
  return (0, a.jsxs)(d.Clickable, {
    className: n()(b.card, T, !0 === L ? null === (s = U.cardContainer) || void 0 === s ? void 0 : s.className : void 0, {
      [b.clickable]: null != A,
      [b.hideOverflow]: x
    }),
    onMouseEnter: R,
    style: {
      backgroundImage: null != g ? "url(".concat(g, ")") : void 0
    },
    onClick: A,
    children: [null != P && (0, a.jsx)(d.Text, {
      variant: "text-xs/semibold",
      className: b.pill,
      children: P
    }), (0, a.jsx)("div", {
      ref: t
    }), (0, a.jsx)(C.default, {
      title: i,
      titleClassName: l,
      subtitle: o,
      perkImage: O,
      isCarousel: x,
      descriptionCta: c,
      onCtaClick: E,
      perkComponent: f,
      subtitleClassName: b.cardSubtitle,
      cardVariant: S
    }), h && (0, a.jsx)(N.default, {
      title: i,
      titleClassName: l,
      subtitle: o,
      description: u,
      descriptionCta: c,
      isPremiumGetCta: _,
      onCtaClick: E,
      cardVariant: S,
      perkComponent: f
    }), (0, a.jsx)("div", {
      className: n()(b.cover, b.above),
      ref: t
    })]
  })
});
L.displayName = "PerkCardContent", t.default = D