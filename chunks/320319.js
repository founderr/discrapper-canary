"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("120356"),
  l = s.n(r),
  n = s("392711"),
  o = s("399606"),
  u = s("524437"),
  d = s("481060"),
  c = s("607070"),
  _ = s("605236"),
  E = s("706140"),
  C = s("626135"),
  f = s("314684"),
  T = s("715627"),
  I = s("176782"),
  R = s("238108"),
  S = s("32173"),
  p = s("391110"),
  m = s("484239"),
  A = s("658370"),
  g = s("735825"),
  N = s("981631"),
  O = s("921944"),
  P = s("689938"),
  M = s("622481");
let h = {
    xMin: -80,
    xMax: 80,
    yMin: -150,
    yMax: -20
  },
  x = i.memo(e => {
    let {
      name: t,
      canReveal: s = !0,
      dismissibleContentType: r,
      forceShadow: I,
      cardType: m,
      confettiCanvas: A
    } = e, v = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), [j, D] = i.useState(!1), [b, U] = i.useState(!1), y = (0, f.useFreeBoostUserTenureReward)(), B = (0, f.useShouldShowConfettiAndGlow)(), [G, k] = i.useState(!1), [H, F] = i.useState(t === S.PerksDiscoverabilityCardTypes.FREE_BOOST && B && (null == y ? void 0 : y.nitroTenureStatus) === g.NitroRewardStatus.REDEEMABLE);
    i.useEffect(() => {
      t === S.PerksDiscoverabilityCardTypes.FREE_BOOST && B && (null == y ? void 0 : y.nitroTenureStatus) === g.NitroRewardStatus.REDEEMABLE && F(!0)
    }, [B, t, y]);
    let w = i.useCallback(() => {
        k(!0)
      }, []),
      W = m === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || m === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || m === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW,
      K = (0, S.default)(),
      [V, Y] = (0, E.useGetDismissibleContent)(null != r && s || r === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI ? [r] : []);
    i.useEffect(() => () => {
      V === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && G && (0, _.markDismissibleContentAsDismissed)(V)
    }, [V, G]), i.useEffect(() => {
      V === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && G && (0, _.markDismissibleContentAsDismissed)(V)
    }, [V, G]);
    let {
      easterEggLevel: z,
      isEasterEggTriggered: Z,
      onHover: X,
      onUnhover: Q
    } = (0, R.default)(5), J = (0, n.debounce)(() => {
      C.default.track(N.AnalyticEvents.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, n.snakeCase)(t),
        is_tenure_reward: t === S.PerksDiscoverabilityCardTypes.FREE_BOOST,
        reward_status: null == y ? void 0 : y.nitroTenureStatus
      })
    }, 800), q = i.useRef(null);
    e = {
      onMouseEnter: J,
      ...e
    };
    let $ = V !== r || null == r || b || r === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI;
    return (i.useEffect(() => {
      v && j && (U(!0), C.default.track(N.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != r && Y(O.ContentDismissActionType.TAKE_ACTION))
    }, [v, j, r, t, Y]), s) ? t === S.PerksDiscoverabilityCardTypes.UPCOMING_DROP_UNTIMED ? (0, a.jsx)("div", {
      className: l()(M.flipCardContainer, {
        [M.forceShadow]: I
      }),
      onMouseEnter: X,
      onFocus: X,
      onMouseLeave: Q,
      onBlur: Q,
      children: (0, a.jsxs)("div", {
        className: l()(M.flipCard, {
          [M.partialFlipCard]: !Z,
          [M.ultraFlipCard]: Z,
          [M.rotateCard]: Z && 3 === z,
          [M.reducedMotion]: v
        }),
        children: [(0, a.jsx)("div", {
          className: M.flipCardFront,
          children: (0, a.jsx)(L, {
            ...e,
            className: M.topCover
          })
        }), (0, a.jsx)("div", {
          className: M.flipCardBack,
          children: (0, a.jsx)(L, {
            ...e,
            className: M.topCover
          })
        })]
      })
    }) : $ ? (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: l()({
          [M.noFlipCardContainer]: !W,
          [M.noFlipCardContainerCarousel]: W,
          [M.forceShadow]: I,
          [M.reducedMotion]: v
        }),
        children: [(0, a.jsx)(L, {
          ...e,
          ref: t === S.PerksDiscoverabilityCardTypes.FREE_BOOST ? q : void 0
        }), H && (0, a.jsx)(T.default, {
          speedValues: h,
          numBursts: 3,
          particlesPerBurst: 15,
          confettiTarget: q.current,
          offsetXPercentageMax: -30,
          offsetXPercentageMin: -70,
          offsetYPercentageMax: 40,
          offsetYPercentageMin: 20,
          customConfettiCanvas: A,
          dragCoefficientValue: 1e-5,
          onAnimationEnd: w
        })]
      })
    }) : (0, a.jsx)("div", {
      className: l()(M.flipCardContainer, {
        [M.forceShadow]: I
      }),
      children: (0, a.jsxs)(d.Clickable, {
        onClick: () => D(!0),
        className: l()(M.flipCard, M.clickable, {
          [M.flipped]: j,
          [M.partialFlipCard]: !b && !j,
          [M.reducedMotion]: v
        }),
        onTransitionEnd: e => {
          j && "transform" === e.propertyName && e.target.classList.contains(M.flipCard) && (U(!0), C.default.track(N.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != r && Y(O.ContentDismissActionType.TAKE_ACTION))
        },
        children: [(0, a.jsx)("div", {
          className: M.flipCardHidden,
          "aria-hidden": !0,
          children: (0, a.jsx)(L, {
            ...e
          })
        }), (0, a.jsx)("div", {
          className: M.flipCardFront,
          children: (0, a.jsx)(L, {
            ...K.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, a.jsx)("div", {
          className: M.flipCardBack,
          children: (0, a.jsx)(L, {
            ...e,
            description: ""
          })
        }), (0, a.jsx)("div", {
          className: M.flipCardButtonContainer,
          children: (0, a.jsx)(d.Button, {
            onClick: () => D(!0),
            children: P.default.Messages.REVEAL
          })
        })]
      })
    }) : (0, a.jsx)(x, {
      ...K.upcomingDropUntimed,
      forceShadow: I
    })
  });
x.displayName = "PerkDiscoverabilityCard";
let L = i.forwardRef((e, t) => {
  var s;
  let {
    title: r,
    titleClassName: n = "",
    subtitle: o = "",
    description: u = "",
    descriptionCta: c = "",
    isPremiumGetCta: _,
    onCtaClick: E,
    onMouseEnter: C,
    className: T,
    perkComponent: R,
    cardVariant: S,
    cardType: g,
    onClick: N,
    backgroundImage: O,
    pillText: P,
    perkImage: h
  } = e, x = g === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || g === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || g === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, L = 0 !== u.length || 0 !== o.length && S === p.CardVariants.REWARD, v = (0, f.useShouldShowConfettiAndGlow)(), [j, D] = i.useState(v);
  i.useEffect(() => {
    v && D(!0)
  }, [v]);
  let b = (0, I.useCardVariantsInfo)(S);
  return (0, a.jsxs)(d.Clickable, {
    className: l()(M.card, T, !0 === j ? null === (s = b.cardContainer) || void 0 === s ? void 0 : s.className : void 0, {
      [M.clickable]: null != N,
      [M.hideOverflow]: x
    }),
    onMouseEnter: C,
    style: {
      backgroundImage: null != O ? "url(".concat(O, ")") : void 0
    },
    onClick: N,
    children: [null != P && (0, a.jsx)(d.Text, {
      variant: "text-xs/semibold",
      className: M.pill,
      children: P
    }), (0, a.jsx)("div", {
      ref: t
    }), (0, a.jsx)(m.default, {
      title: r,
      titleClassName: n,
      subtitle: o,
      perkImage: h,
      isCarousel: x,
      descriptionCta: c,
      onCtaClick: E,
      perkComponent: R,
      subtitleClassName: M.cardSubtitle,
      cardVariant: S
    }), L && (0, a.jsx)(A.default, {
      title: r,
      titleClassName: n,
      subtitle: o,
      description: u,
      descriptionCta: c,
      isPremiumGetCta: _,
      onCtaClick: E,
      cardVariant: S,
      perkComponent: R
    }), (0, a.jsx)("div", {
      className: l()(M.cover, M.above),
      ref: t
    })]
  })
});
L.displayName = "PerkCardContent", t.default = x