"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("392711"),
  o = s("990547"),
  u = s("399606"),
  c = s("524437"),
  d = s("481060"),
  _ = s("607070"),
  E = s("213609"),
  R = s("605236"),
  T = s("706140"),
  f = s("626135"),
  m = s("314684"),
  I = s("715627"),
  S = s("176782"),
  p = s("238108"),
  A = s("32173"),
  g = s("391110"),
  N = s("484239"),
  M = s("658370"),
  C = s("735825"),
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
      forceShadow: S,
      cardType: N,
      confettiCanvas: M
    } = e, L = (0, u.useStateFromStores)([_.default], () => _.default.useReducedMotion), [U, B] = r.useState(!1), [k, j] = r.useState(!1), G = (0, m.useFreeBoostUserTenureReward)(), y = (0, m.useShouldShowConfettiAndGlow)(), [H, F] = r.useState(!1), [W, w] = r.useState(t === A.PerksDiscoverabilityCardTypes.FREE_BOOST && y && (null == G ? void 0 : G.nitroTenureStatus) === C.NitroRewardStatus.REDEEMABLE);
    r.useEffect(() => {
      t === A.PerksDiscoverabilityCardTypes.FREE_BOOST && y && (null == G ? void 0 : G.nitroTenureStatus) === C.NitroRewardStatus.REDEEMABLE && w(!0)
    }, [y, t, G]);
    let K = r.useCallback(() => {
        F(!0)
      }, []),
      V = N === g.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || N === g.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || N === g.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW,
      Y = (0, A.default)(),
      [z, Q] = (0, T.useGetDismissibleContent)(null != i && s || i === c.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI ? [i] : []);
    r.useEffect(() => () => {
      z === c.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && H && (0, R.markDismissibleContentAsDismissed)(z)
    }, [z, H]), r.useEffect(() => {
      z === c.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && H && (0, R.markDismissibleContentAsDismissed)(z)
    }, [z, H]);
    let {
      easterEggLevel: J,
      isEasterEggTriggered: X,
      onHover: Z,
      onUnhover: q
    } = (0, p.default)(5), $ = (0, l.debounce)(() => {
      f.default.track(P.AnalyticEvents.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, l.snakeCase)(t),
        is_tenure_reward: t === A.PerksDiscoverabilityCardTypes.FREE_BOOST,
        reward_status: null == G ? void 0 : G.nitroTenureStatus
      })
    }, 800), ee = r.useRef(null);
    e = {
      onMouseEnter: $,
      ...e
    };
    let et = z !== i || null == i || k || i === c.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI;
    return (r.useEffect(() => {
      L && U && (j(!0), f.default.track(P.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != i && Q(O.ContentDismissActionType.TAKE_ACTION))
    }, [L, U, i, t, Q]), (0, E.default)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
      properties: {
        user_tenure_reward_id: null == G ? void 0 : G.tenureRewardStatusId,
        tenure_reward_id: null == G ? void 0 : G.tenureRewardSkuId,
        reward_type: C.NitroRewardType.SERVER_BOOST,
        redeemable_at: null == G ? void 0 : G.redeemableAt,
        reward_status: null == G ? void 0 : G.nitroTenureStatus
      }
    }, {
      disableTrack: t !== A.PerksDiscoverabilityCardTypes.FREE_BOOST || null == G
    }), s) ? t === A.PerksDiscoverabilityCardTypes.UPCOMING_DROP_UNTIMED ? (0, a.jsx)("div", {
      className: n()(b.flipCardContainer, {
        [b.forceShadow]: S
      }),
      onMouseEnter: Z,
      onFocus: Z,
      onMouseLeave: q,
      onBlur: q,
      children: (0, a.jsxs)("div", {
        className: n()(b.flipCard, {
          [b.partialFlipCard]: !X,
          [b.ultraFlipCard]: X,
          [b.rotateCard]: X && 3 === J,
          [b.reducedMotion]: L
        }),
        children: [(0, a.jsx)("div", {
          className: b.flipCardFront,
          children: (0, a.jsx)(v, {
            ...e,
            className: b.topCover
          })
        }), (0, a.jsx)("div", {
          className: b.flipCardBack,
          children: (0, a.jsx)(v, {
            ...e,
            className: b.topCover
          })
        })]
      })
    }) : et ? (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: n()({
          [b.noFlipCardContainer]: !V,
          [b.noFlipCardContainerCarousel]: V,
          [b.forceShadow]: S,
          [b.reducedMotion]: L
        }),
        children: [(0, a.jsx)(v, {
          ...e,
          ref: t === A.PerksDiscoverabilityCardTypes.FREE_BOOST ? ee : void 0
        }), W && (0, a.jsx)(I.default, {
          speedValues: h,
          numBursts: 3,
          particlesPerBurst: 15,
          confettiTarget: ee.current,
          offsetXPercentageMax: -30,
          offsetXPercentageMin: -70,
          offsetYPercentageMax: 40,
          offsetYPercentageMin: 20,
          customConfettiCanvas: M,
          dragCoefficientValue: 1e-5,
          onAnimationEnd: K
        })]
      })
    }) : (0, a.jsx)("div", {
      className: n()(b.flipCardContainer, {
        [b.forceShadow]: S
      }),
      children: (0, a.jsxs)(d.Clickable, {
        onClick: () => B(!0),
        className: n()(b.flipCard, b.clickable, {
          [b.flipped]: U,
          [b.partialFlipCard]: !k && !U,
          [b.reducedMotion]: L
        }),
        onTransitionEnd: e => {
          U && "transform" === e.propertyName && e.target.classList.contains(b.flipCard) && (j(!0), f.default.track(P.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != i && Q(O.ContentDismissActionType.TAKE_ACTION))
        },
        children: [(0, a.jsx)("div", {
          className: b.flipCardHidden,
          "aria-hidden": !0,
          children: (0, a.jsx)(v, {
            ...e
          })
        }), (0, a.jsx)("div", {
          className: b.flipCardFront,
          children: (0, a.jsx)(v, {
            ...Y.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, a.jsx)("div", {
          className: b.flipCardBack,
          children: (0, a.jsx)(v, {
            ...e,
            description: ""
          })
        }), (0, a.jsx)("div", {
          className: b.flipCardButtonContainer,
          children: (0, a.jsx)(d.Button, {
            onClick: () => B(!0),
            children: x.default.Messages.REVEAL
          })
        })]
      })
    }) : (0, a.jsx)(D, {
      ...Y.upcomingDropUntimed,
      forceShadow: S
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
    descriptionCta: c = "",
    isPremiumGetCta: _,
    onCtaClick: E,
    onMouseEnter: R,
    className: T,
    perkComponent: f,
    cardVariant: I,
    cardType: p,
    onClick: A,
    backgroundImage: C,
    pillText: P,
    perkImage: O
  } = e, x = p === g.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || p === g.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || p === g.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, h = 0 !== u.length || 0 !== c.length || 0 !== o.length && I === g.CardVariants.REWARD, D = (0, m.useShouldShowConfettiAndGlow)(), [v, L] = r.useState(D);
  r.useEffect(() => {
    D && L(!0)
  }, [D]);
  let U = (0, S.useCardVariantsInfo)(I);
  return (0, a.jsxs)(d.Clickable, {
    className: n()(b.card, T, !0 === v ? null === (s = U.cardContainer) || void 0 === s ? void 0 : s.className : void 0, {
      [b.clickable]: null != A,
      [b.hideOverflow]: x
    }),
    onMouseEnter: R,
    style: {
      backgroundImage: null != C ? "url(".concat(C, ")") : void 0
    },
    onClick: A,
    children: [null != P && (0, a.jsx)(d.Text, {
      variant: "text-xs/semibold",
      className: b.pill,
      children: P
    }), (0, a.jsx)("div", {
      ref: t
    }), (0, a.jsx)(N.default, {
      title: i,
      titleClassName: l,
      subtitle: o,
      perkImage: O,
      isCarousel: x,
      descriptionCta: c,
      onCtaClick: E,
      perkComponent: f,
      subtitleClassName: b.cardSubtitle,
      cardVariant: I
    }), h && (0, a.jsx)(M.default, {
      title: i,
      titleClassName: l,
      subtitle: o,
      description: u,
      descriptionCta: c,
      isPremiumGetCta: _,
      onCtaClick: E,
      cardVariant: I,
      perkComponent: f
    }), (0, a.jsx)("div", {
      className: n()(b.cover, b.above),
      ref: t
    })]
  })
});
v.displayName = "PerkCardContent", t.default = D