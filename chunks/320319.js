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
  f = s("314684"),
  S = s("715627"),
  m = s("176782"),
  A = s("238108"),
  N = s("32173"),
  p = s("391110"),
  g = s("484239"),
  C = s("658370"),
  P = s("735825"),
  O = s("981631"),
  M = s("921944"),
  h = s("689938"),
  L = s("955627");
let x = {
    xMin: -80,
    xMax: 80,
    yMin: -150,
    yMax: -20
  },
  b = r.memo(e => {
    let {
      name: t,
      canReveal: s = !0,
      dismissibleContentType: i,
      forceShadow: m,
      cardType: g,
      confettiCanvas: C
    } = e, D = null == e ? void 0 : e.onCtaClick, U = (0, u.useStateFromStores)([_.default], () => _.default.useReducedMotion), [j, G] = r.useState(!1), [B, y] = r.useState(!1), k = (0, f.useFreeBoostUserTenureReward)(), H = (0, f.useShouldShowConfettiAndGlow)(), [F, w] = r.useState(!1), [W, K] = r.useState(t === N.PerksDiscoverabilityCardTypes.FREE_BOOST && H && (null == k ? void 0 : k.nitroTenureStatus) === P.NitroRewardStatus.REDEEMABLE);
    r.useEffect(() => {
      t === N.PerksDiscoverabilityCardTypes.FREE_BOOST && H && (null == k ? void 0 : k.nitroTenureStatus) === P.NitroRewardStatus.REDEEMABLE && K(!0)
    }, [H, t, k]);
    let V = r.useCallback(() => {
        w(!0)
      }, []),
      Y = g === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || g === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || g === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW,
      z = (0, N.default)(),
      [X, J] = (0, I.useGetDismissibleContent)(null != i && s || i === d.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI ? [i] : []);
    r.useEffect(() => () => {
      X === d.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && F && (0, T.markDismissibleContentAsDismissed)(X)
    }, [X, F]), r.useEffect(() => {
      X === d.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && F && (0, T.markDismissibleContentAsDismissed)(X)
    }, [X, F]);
    let {
      easterEggLevel: Q,
      isEasterEggTriggered: Z,
      onHover: q,
      onUnhover: $
    } = (0, A.default)(5), ee = (0, l.debounce)(() => {
      R.default.track(O.AnalyticEvents.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, l.snakeCase)(t),
        is_tenure_reward: t === N.PerksDiscoverabilityCardTypes.FREE_BOOST,
        reward_status: null == k ? void 0 : k.nitroTenureStatus
      })
    }, 800), et = (0, l.debounce)(() => {
      null != D && R.default.track(O.AnalyticEvents.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
        card_type: (0, l.snakeCase)(t),
        function_name: (0, l.snakeCase)(D.name)
      })
    }, 800), es = r.useRef(null);
    e = {
      onMouseEnter: ee,
      ...e,
      onCtaClick: null != D ? () => {
        null == D || D(), et()
      } : void 0
    };
    let ea = X !== i || null == i || B || i === d.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI;
    return (r.useEffect(() => {
      U && j && (y(!0), R.default.track(O.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != i && J(M.ContentDismissActionType.TAKE_ACTION))
    }, [U, j, i, t, J]), (0, E.default)({
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
      className: n()(L.flipCardContainer, {
        [L.forceShadow]: m
      }),
      onMouseEnter: q,
      onFocus: q,
      onMouseLeave: $,
      onBlur: $,
      children: (0, a.jsxs)("div", {
        className: n()(L.flipCard, {
          [L.partialFlipCard]: !Z,
          [L.ultraFlipCard]: Z,
          [L.rotateCard]: Z && 3 === Q,
          [L.reducedMotion]: U
        }),
        children: [(0, a.jsx)("div", {
          className: L.flipCardFront,
          children: (0, a.jsx)(v, {
            ...e,
            className: L.topCover
          })
        }), (0, a.jsx)("div", {
          className: L.flipCardBack,
          children: (0, a.jsx)(v, {
            ...e,
            className: L.topCover
          })
        })]
      })
    }) : ea ? (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: n()({
          [L.noFlipCardContainer]: !Y,
          [L.noFlipCardContainerCarousel]: Y,
          [L.forceShadow]: m,
          [L.reducedMotion]: U
        }),
        children: [(0, a.jsx)(v, {
          ...e,
          ref: t === N.PerksDiscoverabilityCardTypes.FREE_BOOST ? es : void 0
        }), W && (0, a.jsx)(S.default, {
          speedValues: x,
          numBursts: 3,
          particlesPerBurst: 15,
          confettiTarget: es.current,
          offsetXPercentageMax: -30,
          offsetXPercentageMin: -70,
          offsetYPercentageMax: 40,
          offsetYPercentageMin: 20,
          customConfettiCanvas: C,
          dragCoefficientValue: 1e-5,
          onAnimationEnd: V
        })]
      })
    }) : (0, a.jsx)("div", {
      className: n()(L.flipCardContainer, {
        [L.forceShadow]: m
      }),
      children: (0, a.jsxs)(c.Clickable, {
        onClick: () => G(!0),
        className: n()(L.flipCard, L.clickable, {
          [L.flipped]: j,
          [L.partialFlipCard]: !B && !j,
          [L.reducedMotion]: U
        }),
        onTransitionEnd: e => {
          j && "transform" === e.propertyName && e.target.classList.contains(L.flipCard) && (y(!0), R.default.track(O.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != i && J(M.ContentDismissActionType.TAKE_ACTION))
        },
        children: [(0, a.jsx)("div", {
          className: L.flipCardHidden,
          "aria-hidden": !0,
          children: (0, a.jsx)(v, {
            ...e
          })
        }), (0, a.jsx)("div", {
          className: L.flipCardFront,
          children: (0, a.jsx)(v, {
            ...z.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, a.jsx)("div", {
          className: L.flipCardBack,
          children: (0, a.jsx)(v, {
            ...e,
            description: ""
          })
        }), (0, a.jsx)("div", {
          className: L.flipCardButtonContainer,
          children: (0, a.jsx)(c.Button, {
            onClick: () => G(!0),
            children: h.default.Messages.REVEAL
          })
        })]
      })
    }) : (0, a.jsx)(b, {
      ...z.upcomingDropUntimed,
      forceShadow: m
    })
  });
b.displayName = "PerkDiscoverabilityCard";
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
    cardVariant: S,
    cardType: A,
    onClick: N,
    backgroundImage: P,
    pillText: O,
    perkImage: M
  } = e, h = A === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || A === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || A === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, x = 0 !== u.length || 0 !== d.length || 0 !== o.length && S === p.CardVariants.REWARD, b = (0, f.useShouldShowConfettiAndGlow)(), [v, D] = r.useState(b);
  r.useEffect(() => {
    b && D(!0)
  }, [b]);
  let U = (0, m.useCardVariantsInfo)(S);
  return (0, a.jsxs)(c.Clickable, {
    className: n()(L.card, I, !0 === v ? null === (s = U.cardContainer) || void 0 === s ? void 0 : s.className : void 0, {
      [L.clickable]: null != N,
      [L.hideOverflow]: h
    }),
    onMouseEnter: T,
    style: {
      backgroundImage: null != P ? "url(".concat(P, ")") : void 0
    },
    onClick: N,
    children: [null != O && (0, a.jsx)(c.Text, {
      variant: "text-xs/semibold",
      className: L.pill,
      children: O
    }), (0, a.jsx)("div", {
      ref: t
    }), (0, a.jsx)(g.default, {
      title: i,
      titleClassName: l,
      subtitle: o,
      perkImage: M,
      isCarousel: h,
      descriptionCta: d,
      onCtaClick: E,
      perkComponent: R,
      subtitleClassName: L.cardSubtitle,
      cardVariant: S
    }), x && (0, a.jsx)(C.default, {
      title: i,
      titleClassName: l,
      subtitle: o,
      description: u,
      descriptionCta: d,
      isPremiumGetCta: _,
      onCtaClick: E,
      cardVariant: S,
      perkComponent: R
    }), (0, a.jsx)("div", {
      className: n()(L.cover, L.above),
      ref: t
    })]
  })
});
v.displayName = "PerkCardContent", t.default = b