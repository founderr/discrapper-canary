"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  n = s.n(r),
  l = s("392711"),
  o = s("399606"),
  u = s("524437"),
  d = s("481060"),
  c = s("607070"),
  _ = s("605236"),
  E = s("706140"),
  T = s("626135"),
  I = s("314684"),
  R = s("715627"),
  f = s("176782"),
  S = s("238108"),
  m = s("32173"),
  A = s("391110"),
  N = s("484239"),
  p = s("658370"),
  g = s("735825"),
  C = s("981631"),
  O = s("921944"),
  P = s("689938"),
  M = s("622481");
let h = {
    xMin: -80,
    xMax: 80,
    yMin: -150,
    yMax: -20
  },
  L = i.memo(e => {
    let {
      name: t,
      canReveal: s = !0,
      dismissibleContentType: r,
      forceShadow: f,
      cardType: N,
      confettiCanvas: p
    } = e, v = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), [D, b] = i.useState(!1), [U, j] = i.useState(!1), y = (0, I.useFreeBoostUserTenureReward)(), G = (0, I.useShouldShowConfettiAndGlow)(), [B, k] = i.useState(!1), [H, F] = i.useState(t === m.PerksDiscoverabilityCardTypes.FREE_BOOST && G && (null == y ? void 0 : y.nitroTenureStatus) === g.NitroRewardStatus.REDEEMABLE);
    i.useEffect(() => {
      t === m.PerksDiscoverabilityCardTypes.FREE_BOOST && G && (null == y ? void 0 : y.nitroTenureStatus) === g.NitroRewardStatus.REDEEMABLE && F(!0)
    }, [G, t, y]);
    let w = i.useCallback(() => {
        k(!0)
      }, []),
      K = N === A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || N === A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || N === A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW,
      W = (0, m.default)(),
      [V, Y] = (0, E.useGetDismissibleContent)(null != r && s || r === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI ? [r] : []);
    i.useEffect(() => () => {
      V === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && B && (0, _.markDismissibleContentAsDismissed)(V)
    }, [V, B]), i.useEffect(() => {
      V === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && B && (0, _.markDismissibleContentAsDismissed)(V)
    }, [V, B]);
    let {
      easterEggLevel: z,
      isEasterEggTriggered: X,
      onHover: Q,
      onUnhover: Z
    } = (0, S.default)(5), J = (0, l.debounce)(() => {
      T.default.track(C.AnalyticEvents.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, l.snakeCase)(t),
        is_tenure_reward: t === m.PerksDiscoverabilityCardTypes.FREE_BOOST,
        reward_status: null == y ? void 0 : y.nitroTenureStatus
      })
    }, 800), q = i.useRef(null);
    e = {
      onMouseEnter: J,
      ...e
    };
    let $ = V !== r || null == r || U || r === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI;
    return (i.useEffect(() => {
      v && D && (j(!0), T.default.track(C.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != r && Y(O.ContentDismissActionType.TAKE_ACTION))
    }, [v, D, r, t, Y]), s) ? t === m.PerksDiscoverabilityCardTypes.UPCOMING_DROP_UNTIMED ? (0, a.jsx)("div", {
      className: n()(M.flipCardContainer, {
        [M.forceShadow]: f
      }),
      onMouseEnter: Q,
      onFocus: Q,
      onMouseLeave: Z,
      onBlur: Z,
      children: (0, a.jsxs)("div", {
        className: n()(M.flipCard, {
          [M.partialFlipCard]: !X,
          [M.ultraFlipCard]: X,
          [M.rotateCard]: X && 3 === z,
          [M.reducedMotion]: v
        }),
        children: [(0, a.jsx)("div", {
          className: M.flipCardFront,
          children: (0, a.jsx)(x, {
            ...e,
            className: M.topCover
          })
        }), (0, a.jsx)("div", {
          className: M.flipCardBack,
          children: (0, a.jsx)(x, {
            ...e,
            className: M.topCover
          })
        })]
      })
    }) : $ ? (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: n()({
          [M.noFlipCardContainer]: !K,
          [M.noFlipCardContainerCarousel]: K,
          [M.forceShadow]: f,
          [M.reducedMotion]: v
        }),
        children: [(0, a.jsx)(x, {
          ...e,
          ref: t === m.PerksDiscoverabilityCardTypes.FREE_BOOST ? q : void 0
        }), H && (0, a.jsx)(R.default, {
          speedValues: h,
          numBursts: 3,
          particlesPerBurst: 15,
          confettiTarget: q.current,
          offsetXPercentageMax: -30,
          offsetXPercentageMin: -70,
          offsetYPercentageMax: 40,
          offsetYPercentageMin: 20,
          customConfettiCanvas: p,
          dragCoefficientValue: 1e-5,
          onAnimationEnd: w
        })]
      })
    }) : (0, a.jsx)("div", {
      className: n()(M.flipCardContainer, {
        [M.forceShadow]: f
      }),
      children: (0, a.jsxs)(d.Clickable, {
        onClick: () => b(!0),
        className: n()(M.flipCard, M.clickable, {
          [M.flipped]: D,
          [M.partialFlipCard]: !U && !D,
          [M.reducedMotion]: v
        }),
        onTransitionEnd: e => {
          D && "transform" === e.propertyName && e.target.classList.contains(M.flipCard) && (j(!0), T.default.track(C.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != r && Y(O.ContentDismissActionType.TAKE_ACTION))
        },
        children: [(0, a.jsx)("div", {
          className: M.flipCardHidden,
          "aria-hidden": !0,
          children: (0, a.jsx)(x, {
            ...e
          })
        }), (0, a.jsx)("div", {
          className: M.flipCardFront,
          children: (0, a.jsx)(x, {
            ...W.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, a.jsx)("div", {
          className: M.flipCardBack,
          children: (0, a.jsx)(x, {
            ...e,
            description: ""
          })
        }), (0, a.jsx)("div", {
          className: M.flipCardButtonContainer,
          children: (0, a.jsx)(d.Button, {
            onClick: () => b(!0),
            children: P.default.Messages.REVEAL
          })
        })]
      })
    }) : (0, a.jsx)(L, {
      ...W.upcomingDropUntimed,
      forceShadow: f
    })
  });
L.displayName = "PerkDiscoverabilityCard";
let x = i.forwardRef((e, t) => {
  var s;
  let {
    title: r,
    titleClassName: l = "",
    subtitle: o = "",
    description: u = "",
    descriptionCta: c = "",
    isPremiumGetCta: _,
    onCtaClick: E,
    onMouseEnter: T,
    className: R,
    perkComponent: S,
    cardVariant: m,
    cardType: g,
    onClick: C,
    backgroundImage: O,
    pillText: P,
    perkImage: h
  } = e, L = g === A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || g === A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || g === A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, x = 0 !== u.length || 0 !== o.length && m === A.CardVariants.REWARD, v = (0, I.useShouldShowConfettiAndGlow)(), [D, b] = i.useState(v);
  i.useEffect(() => {
    v && b(!0)
  }, [v]);
  let U = (0, f.useCardVariantsInfo)(m);
  return (0, a.jsxs)(d.Clickable, {
    className: n()(M.card, R, !0 === D ? null === (s = U.cardContainer) || void 0 === s ? void 0 : s.className : void 0, {
      [M.clickable]: null != C,
      [M.hideOverflow]: L
    }),
    onMouseEnter: T,
    style: {
      backgroundImage: null != O ? "url(".concat(O, ")") : void 0
    },
    onClick: C,
    children: [null != P && (0, a.jsx)(d.Text, {
      variant: "text-xs/semibold",
      className: M.pill,
      children: P
    }), (0, a.jsx)("div", {
      ref: t
    }), (0, a.jsx)(N.default, {
      title: r,
      titleClassName: l,
      subtitle: o,
      perkImage: h,
      isCarousel: L,
      descriptionCta: c,
      onCtaClick: E,
      perkComponent: S,
      subtitleClassName: M.cardSubtitle,
      cardVariant: m
    }), x && (0, a.jsx)(p.default, {
      title: r,
      titleClassName: l,
      subtitle: o,
      description: u,
      descriptionCta: c,
      isPremiumGetCta: _,
      onCtaClick: E,
      cardVariant: m,
      perkComponent: S
    }), (0, a.jsx)("div", {
      className: n()(M.cover, M.above),
      ref: t
    })]
  })
});
x.displayName = "PerkCardContent", t.default = L