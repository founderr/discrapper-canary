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
  N = s("391110"),
  M = s("484239"),
  C = s("658370"),
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
      cardType: M,
      confettiCanvas: C
    } = e, v = (0, u.useStateFromStores)([_.default], () => _.default.useReducedMotion), [U, B] = r.useState(!1), [j, G] = r.useState(!1), k = (0, I.useFreeBoostUserTenureReward)(), H = (0, I.useShouldShowConfettiAndGlow)(), [W, y] = r.useState(!1), [F, w] = r.useState(t === A.PerksDiscoverabilityCardTypes.FREE_BOOST && H && (null == k ? void 0 : k.nitroTenureStatus) === g.NitroRewardStatus.REDEEMABLE);
    r.useEffect(() => {
      t === A.PerksDiscoverabilityCardTypes.FREE_BOOST && H && (null == k ? void 0 : k.nitroTenureStatus) === g.NitroRewardStatus.REDEEMABLE && w(!0)
    }, [H, t, k]);
    let K = r.useCallback(() => {
        y(!0)
      }, []),
      V = M === N.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || M === N.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || M === N.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW,
      Y = (0, A.default)(),
      [z, Q] = (0, T.useGetDismissibleContent)(null != i && s || i === c.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI ? [i] : []);
    r.useEffect(() => () => {
      z === c.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && W && (0, R.markDismissibleContentAsDismissed)(z)
    }, [z, W]), r.useEffect(() => {
      z === c.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && W && (0, R.markDismissibleContentAsDismissed)(z)
    }, [z, W]);
    let {
      easterEggLevel: J,
      isEasterEggTriggered: X,
      onHover: Z,
      onUnhover: q
    } = (0, p.default)(5), $ = (0, l.debounce)(() => {
      f.default.track(P.AnalyticEvents.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, l.snakeCase)(t),
        is_tenure_reward: t === A.PerksDiscoverabilityCardTypes.FREE_BOOST,
        reward_status: null == k ? void 0 : k.nitroTenureStatus
      })
    }, 800), ee = r.useRef(null);
    e = {
      onMouseEnter: $,
      ...e
    };
    let et = z !== i || null == i || j || i === c.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI;
    return (r.useEffect(() => {
      v && U && (G(!0), f.default.track(P.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != i && Q(O.ContentDismissActionType.TAKE_ACTION))
    }, [v, U, i, t, Q]), (0, E.default)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
      properties: {
        user_tenure_reward_id: null == k ? void 0 : k.tenureRewardStatusId,
        tenure_reward_id: null == k ? void 0 : k.tenureRewardSkuId,
        reward_type: g.NitroRewardType.SERVER_BOOST,
        redeemable_at: null == k ? void 0 : k.redeemableAt,
        reward_status: null == k ? void 0 : k.nitroTenureStatus
      }
    }, {
      disableTrack: t !== A.PerksDiscoverabilityCardTypes.FREE_BOOST || null == k
    }), s) ? t === A.PerksDiscoverabilityCardTypes.UPCOMING_DROP_UNTIMED ? (0, a.jsx)("div", {
      className: n()(b.flipCardContainer, {
        [b.forceShadow]: m
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
          [b.reducedMotion]: v
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
    }) : et ? (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: n()({
          [b.noFlipCardContainer]: !V,
          [b.noFlipCardContainerCarousel]: V,
          [b.forceShadow]: m,
          [b.reducedMotion]: v
        }),
        children: [(0, a.jsx)(L, {
          ...e,
          ref: t === A.PerksDiscoverabilityCardTypes.FREE_BOOST ? ee : void 0
        }), F && (0, a.jsx)(S.default, {
          speedValues: h,
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
      className: n()(b.flipCardContainer, {
        [b.forceShadow]: m
      }),
      children: (0, a.jsxs)(d.Clickable, {
        onClick: () => B(!0),
        className: n()(b.flipCard, b.clickable, {
          [b.flipped]: U,
          [b.partialFlipCard]: !j && !U,
          [b.reducedMotion]: v
        }),
        onTransitionEnd: e => {
          U && "transform" === e.propertyName && e.target.classList.contains(b.flipCard) && (G(!0), f.default.track(P.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != i && Q(O.ContentDismissActionType.TAKE_ACTION))
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
            ...Y.upcomingDropUntimed,
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
            onClick: () => B(!0),
            children: x.default.Messages.REVEAL
          })
        })]
      })
    }) : (0, a.jsx)(D, {
      ...Y.upcomingDropUntimed,
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
  } = e, x = p === N.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || p === N.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || p === N.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, h = 0 !== u.length || 0 !== c.length || 0 !== o.length && S === N.CardVariants.REWARD, D = (0, I.useShouldShowConfettiAndGlow)(), [L, v] = r.useState(D);
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
    }), (0, a.jsx)(M.default, {
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
    }), h && (0, a.jsx)(C.default, {
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