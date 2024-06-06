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
  S = s("626135"),
  f = s("730314"),
  I = s("314684"),
  m = s("715627"),
  p = s("176782"),
  A = s("238108"),
  N = s("32173"),
  M = s("391110"),
  C = s("484239"),
  g = s("658370"),
  P = s("735825"),
  O = s("981631"),
  x = s("921944"),
  b = s("689938"),
  h = s("955627");
let D = {
    xMin: -80,
    xMax: 80,
    yMin: -150,
    yMax: -20
  },
  L = r.memo(e => {
    let {
      name: t,
      canReveal: s = !0,
      dismissibleContentType: i,
      forceShadow: f,
      cardType: p,
      confettiCanvas: C
    } = e, g = (0, u.useStateFromStores)([_.default], () => _.default.useReducedMotion), [U, B] = r.useState(!1), [j, G] = r.useState(!1), k = (0, I.useFreeBoostUserTenureReward)(), H = (0, I.useShouldShowConfettiAndGlow)(), [W, y] = r.useState(!1), [F, w] = r.useState(t === N.PerksDiscoverabilityCardTypes.FREE_BOOST && H && (null == k ? void 0 : k.nitroTenureStatus) === P.NitroRewardStatus.REDEEMABLE);
    r.useEffect(() => {
      t === N.PerksDiscoverabilityCardTypes.FREE_BOOST && H && (null == k ? void 0 : k.nitroTenureStatus) === P.NitroRewardStatus.REDEEMABLE && w(!0)
    }, [H, t, k]);
    let K = r.useCallback(() => {
        y(!0)
      }, []),
      V = p === M.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || p === M.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || p === M.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW,
      Y = (0, N.default)(),
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
    } = (0, A.default)(5), $ = (0, l.debounce)(() => {
      S.default.track(O.AnalyticEvents.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, l.snakeCase)(t),
        is_tenure_reward: t === N.PerksDiscoverabilityCardTypes.FREE_BOOST,
        reward_status: null == k ? void 0 : k.nitroTenureStatus
      })
    }, 800), ee = r.useRef(null);
    e = {
      onMouseEnter: $,
      ...e
    };
    let et = z !== i || null == i || j || i === c.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI;
    return (r.useEffect(() => {
      g && U && (G(!0), S.default.track(O.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != i && Q(x.ContentDismissActionType.TAKE_ACTION))
    }, [g, U, i, t, Q]), (0, E.default)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
      properties: {
        user_tenure_reward_id: null == k ? void 0 : k.tenureRewardStatusId,
        tenure_reward_id: null == k ? void 0 : k.tenureRewardSkuId,
        reward_type: P.NitroRewardType.SERVER_BOOST,
        redeemable_at: null == k ? void 0 : k.redeemableAt,
        reward_status: null == k ? void 0 : k.nitroTenureStatus
      }
    }, {
      disableTrack: t !== N.PerksDiscoverabilityCardTypes.FREE_BOOST || null == k
    }), s) ? t === N.PerksDiscoverabilityCardTypes.UPCOMING_DROP_UNTIMED ? (0, a.jsx)("div", {
      className: n()(h.flipCardContainer, {
        [h.forceShadow]: f
      }),
      onMouseEnter: Z,
      onFocus: Z,
      onMouseLeave: q,
      onBlur: q,
      children: (0, a.jsxs)("div", {
        className: n()(h.flipCard, {
          [h.partialFlipCard]: !X,
          [h.ultraFlipCard]: X,
          [h.rotateCard]: X && 3 === J,
          [h.reducedMotion]: g
        }),
        children: [(0, a.jsx)("div", {
          className: h.flipCardFront,
          children: (0, a.jsx)(v, {
            ...e,
            className: h.topCover
          })
        }), (0, a.jsx)("div", {
          className: h.flipCardBack,
          children: (0, a.jsx)(v, {
            ...e,
            className: h.topCover
          })
        })]
      })
    }) : et ? (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: n()({
          [h.noFlipCardContainer]: !V,
          [h.noFlipCardContainerCarousel]: V,
          [h.forceShadow]: f,
          [h.reducedMotion]: g
        }),
        children: [(0, a.jsx)(v, {
          ...e,
          ref: t === N.PerksDiscoverabilityCardTypes.FREE_BOOST ? ee : void 0
        }), F && (0, a.jsx)(m.default, {
          speedValues: D,
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
      className: n()(h.flipCardContainer, {
        [h.forceShadow]: f
      }),
      children: (0, a.jsxs)(d.Clickable, {
        onClick: () => B(!0),
        className: n()(h.flipCard, h.clickable, {
          [h.flipped]: U,
          [h.partialFlipCard]: !j && !U,
          [h.reducedMotion]: g
        }),
        onTransitionEnd: e => {
          U && "transform" === e.propertyName && e.target.classList.contains(h.flipCard) && (G(!0), S.default.track(O.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != i && Q(x.ContentDismissActionType.TAKE_ACTION))
        },
        children: [(0, a.jsx)("div", {
          className: h.flipCardHidden,
          "aria-hidden": !0,
          children: (0, a.jsx)(v, {
            ...e
          })
        }), (0, a.jsx)("div", {
          className: h.flipCardFront,
          children: (0, a.jsx)(v, {
            ...Y.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, a.jsx)("div", {
          className: h.flipCardBack,
          children: (0, a.jsx)(v, {
            ...e,
            description: ""
          })
        }), (0, a.jsx)("div", {
          className: h.flipCardButtonContainer,
          children: (0, a.jsx)(d.Button, {
            onClick: () => B(!0),
            children: b.default.Messages.REVEAL
          })
        })]
      })
    }) : (0, a.jsx)(L, {
      ...Y.upcomingDropUntimed,
      forceShadow: f
    })
  });
L.displayName = "PerkDiscoverabilityCard";
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
    perkComponent: S,
    cardVariant: m,
    cardType: A,
    onClick: N,
    backgroundImage: P,
    pillText: O,
    perkImage: x
  } = e, b = A === M.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || A === M.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || A === M.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, D = 0 !== u.length || 0 !== c.length || 0 !== o.length && m === M.CardVariants.REWARD, {
    bucket: L
  } = (0, f.usePremiumTierCardsExperiment)("PremiumMarketingHome"), v = L > 0, U = (0, I.useShouldShowConfettiAndGlow)(), [B, j] = r.useState(U);
  r.useEffect(() => {
    U && j(!0)
  }, [U]);
  let G = (0, p.useCardVariantsInfo)(m);
  return (0, a.jsxs)(d.Clickable, {
    className: n()(h.card, T, !0 === B ? null === (s = G.cardContainer) || void 0 === s ? void 0 : s.className : void 0, {
      [h.clickable]: null != N,
      [h.hideOverflow]: b
    }),
    onMouseEnter: R,
    style: {
      backgroundImage: null != P ? "url(".concat(P, ")") : void 0
    },
    onClick: N,
    children: [null != O && (0, a.jsx)(d.Text, {
      variant: "text-xs/semibold",
      className: h.pill,
      children: O
    }), (0, a.jsx)("div", {
      ref: t
    }), (0, a.jsx)(C.default, {
      title: i,
      titleClassName: l,
      buttonClassName: v ? h.roundedButton : void 0,
      subtitle: o,
      perkImage: x,
      isCarousel: b,
      descriptionCta: c,
      onCtaClick: E,
      perkComponent: S,
      subtitleClassName: h.cardSubtitle,
      cardVariant: m
    }), D && (0, a.jsx)(g.default, {
      title: i,
      titleClassName: l,
      buttonClassName: v ? h.roundedButton : void 0,
      subtitle: o,
      description: u,
      descriptionCta: c,
      isPremiumGetCta: _,
      onCtaClick: E,
      cardVariant: m,
      perkComponent: S
    }), (0, a.jsx)("div", {
      className: n()(h.cover, h.above),
      ref: t
    })]
  })
});
v.displayName = "PerkCardContent", t.default = L