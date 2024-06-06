"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("392711"),
  o = s("990547"),
  u = s("399606"),
  d = s("704215"),
  c = s("481060"),
  _ = s("607070"),
  E = s("213609"),
  T = s("605236"),
  I = s("706140"),
  R = s("626135"),
  f = s("730314"),
  S = s("314684"),
  m = s("715627"),
  A = s("176782"),
  N = s("238108"),
  p = s("32173"),
  g = s("391110"),
  C = s("484239"),
  P = s("658370"),
  O = s("735825"),
  M = s("981631"),
  h = s("921944"),
  L = s("689938"),
  x = s("955627");
let b = {
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
      forceShadow: f,
      cardType: A,
      confettiCanvas: C
    } = e, P = (0, u.useStateFromStores)([_.default], () => _.default.useReducedMotion), [U, j] = r.useState(!1), [G, B] = r.useState(!1), y = (0, S.useFreeBoostUserTenureReward)(), k = (0, S.useShouldShowConfettiAndGlow)(), [H, F] = r.useState(!1), [w, W] = r.useState(t === p.PerksDiscoverabilityCardTypes.FREE_BOOST && k && (null == y ? void 0 : y.nitroTenureStatus) === O.NitroRewardStatus.REDEEMABLE);
    r.useEffect(() => {
      t === p.PerksDiscoverabilityCardTypes.FREE_BOOST && k && (null == y ? void 0 : y.nitroTenureStatus) === O.NitroRewardStatus.REDEEMABLE && W(!0)
    }, [k, t, y]);
    let K = r.useCallback(() => {
        F(!0)
      }, []),
      V = A === g.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || A === g.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || A === g.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW,
      Y = (0, p.default)(),
      [z, J] = (0, I.useGetDismissibleContent)(null != i && s || i === d.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI ? [i] : []);
    r.useEffect(() => () => {
      z === d.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && H && (0, T.markDismissibleContentAsDismissed)(z)
    }, [z, H]), r.useEffect(() => {
      z === d.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && H && (0, T.markDismissibleContentAsDismissed)(z)
    }, [z, H]);
    let {
      easterEggLevel: X,
      isEasterEggTriggered: Q,
      onHover: Z,
      onUnhover: q
    } = (0, N.default)(5), $ = (0, l.debounce)(() => {
      R.default.track(M.AnalyticEvents.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, l.snakeCase)(t),
        is_tenure_reward: t === p.PerksDiscoverabilityCardTypes.FREE_BOOST,
        reward_status: null == y ? void 0 : y.nitroTenureStatus
      })
    }, 800), ee = r.useRef(null);
    e = {
      onMouseEnter: $,
      ...e
    };
    let et = z !== i || null == i || G || i === d.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI;
    return (r.useEffect(() => {
      P && U && (B(!0), R.default.track(M.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != i && J(h.ContentDismissActionType.TAKE_ACTION))
    }, [P, U, i, t, J]), (0, E.default)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
      properties: {
        user_tenure_reward_id: null == y ? void 0 : y.tenureRewardStatusId,
        tenure_reward_id: null == y ? void 0 : y.tenureRewardSkuId,
        reward_type: O.NitroRewardType.SERVER_BOOST,
        redeemable_at: null == y ? void 0 : y.redeemableAt,
        reward_status: null == y ? void 0 : y.nitroTenureStatus
      }
    }, {
      disableTrack: t !== p.PerksDiscoverabilityCardTypes.FREE_BOOST || null == y
    }), s) ? t === p.PerksDiscoverabilityCardTypes.UPCOMING_DROP_UNTIMED ? (0, a.jsx)("div", {
      className: n()(x.flipCardContainer, {
        [x.forceShadow]: f
      }),
      onMouseEnter: Z,
      onFocus: Z,
      onMouseLeave: q,
      onBlur: q,
      children: (0, a.jsxs)("div", {
        className: n()(x.flipCard, {
          [x.partialFlipCard]: !Q,
          [x.ultraFlipCard]: Q,
          [x.rotateCard]: Q && 3 === X,
          [x.reducedMotion]: P
        }),
        children: [(0, a.jsx)("div", {
          className: x.flipCardFront,
          children: (0, a.jsx)(v, {
            ...e,
            className: x.topCover
          })
        }), (0, a.jsx)("div", {
          className: x.flipCardBack,
          children: (0, a.jsx)(v, {
            ...e,
            className: x.topCover
          })
        })]
      })
    }) : et ? (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: n()({
          [x.noFlipCardContainer]: !V,
          [x.noFlipCardContainerCarousel]: V,
          [x.forceShadow]: f,
          [x.reducedMotion]: P
        }),
        children: [(0, a.jsx)(v, {
          ...e,
          ref: t === p.PerksDiscoverabilityCardTypes.FREE_BOOST ? ee : void 0
        }), w && (0, a.jsx)(m.default, {
          speedValues: b,
          numBursts: 3,
          particlesPerBurst: 15,
          confettiTarget: ee.current,
          offsetXPercentageMax: -30,
          offsetXPercentageMin: -70,
          offsetYPercentageMax: 40,
          offsetYPercentageMin: 20,
          customConfettiCanvas: C,
          dragCoefficientValue: 1e-5,
          onAnimationEnd: K
        })]
      })
    }) : (0, a.jsx)("div", {
      className: n()(x.flipCardContainer, {
        [x.forceShadow]: f
      }),
      children: (0, a.jsxs)(c.Clickable, {
        onClick: () => j(!0),
        className: n()(x.flipCard, x.clickable, {
          [x.flipped]: U,
          [x.partialFlipCard]: !G && !U,
          [x.reducedMotion]: P
        }),
        onTransitionEnd: e => {
          U && "transform" === e.propertyName && e.target.classList.contains(x.flipCard) && (B(!0), R.default.track(M.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != i && J(h.ContentDismissActionType.TAKE_ACTION))
        },
        children: [(0, a.jsx)("div", {
          className: x.flipCardHidden,
          "aria-hidden": !0,
          children: (0, a.jsx)(v, {
            ...e
          })
        }), (0, a.jsx)("div", {
          className: x.flipCardFront,
          children: (0, a.jsx)(v, {
            ...Y.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, a.jsx)("div", {
          className: x.flipCardBack,
          children: (0, a.jsx)(v, {
            ...e,
            description: ""
          })
        }), (0, a.jsx)("div", {
          className: x.flipCardButtonContainer,
          children: (0, a.jsx)(c.Button, {
            onClick: () => j(!0),
            children: L.default.Messages.REVEAL
          })
        })]
      })
    }) : (0, a.jsx)(D, {
      ...Y.upcomingDropUntimed,
      forceShadow: f
    })
  });
D.displayName = "PerkDiscoverabilityCard";
let v = r.forwardRef((e, t) => {
  var s;
  let {
    title: i,
    titleClassName: l = "",
    subtitle: o = "",
    description: u = "",
    descriptionCta: d = "",
    isPremiumGetCta: _,
    onCtaClick: E,
    onMouseEnter: T,
    className: I,
    perkComponent: R,
    cardVariant: m,
    cardType: N,
    onClick: p,
    backgroundImage: O,
    pillText: M,
    perkImage: h
  } = e, L = N === g.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || N === g.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || N === g.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, b = 0 !== u.length || 0 !== d.length || 0 !== o.length && m === g.CardVariants.REWARD, {
    bucket: D
  } = (0, f.usePremiumTierCardsExperiment)("PremiumMarketingHome"), v = D > 0, U = (0, S.useShouldShowConfettiAndGlow)(), [j, G] = r.useState(U);
  r.useEffect(() => {
    U && G(!0)
  }, [U]);
  let B = (0, A.useCardVariantsInfo)(m);
  return (0, a.jsxs)(c.Clickable, {
    className: n()(x.card, I, !0 === j ? null === (s = B.cardContainer) || void 0 === s ? void 0 : s.className : void 0, {
      [x.clickable]: null != p,
      [x.hideOverflow]: L
    }),
    onMouseEnter: T,
    style: {
      backgroundImage: null != O ? "url(".concat(O, ")") : void 0
    },
    onClick: p,
    children: [null != M && (0, a.jsx)(c.Text, {
      variant: "text-xs/semibold",
      className: x.pill,
      children: M
    }), (0, a.jsx)("div", {
      ref: t
    }), (0, a.jsx)(C.default, {
      title: i,
      titleClassName: l,
      buttonClassName: v ? x.roundedButton : void 0,
      subtitle: o,
      perkImage: h,
      isCarousel: L,
      descriptionCta: d,
      onCtaClick: E,
      perkComponent: R,
      subtitleClassName: x.cardSubtitle,
      cardVariant: m
    }), b && (0, a.jsx)(P.default, {
      title: i,
      titleClassName: l,
      buttonClassName: v ? x.roundedButton : void 0,
      subtitle: o,
      description: u,
      descriptionCta: d,
      isPremiumGetCta: _,
      onCtaClick: E,
      cardVariant: m,
      perkComponent: R
    }), (0, a.jsx)("div", {
      className: n()(x.cover, x.above),
      ref: t
    })]
  })
});
v.displayName = "PerkCardContent", t.default = D