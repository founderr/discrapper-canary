t(47120);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  i = t.n(r),
  l = t(392711),
  o = t(990547),
  _ = t(399606),
  c = t(704215),
  E = t(481060),
  u = t(607070),
  R = t(213609),
  d = t(605236),
  I = t(706140),
  T = t(626135),
  A = t(314684),
  M = t(715627),
  S = t(176782),
  N = t(238108),
  p = t(32173),
  m = t(391110),
  C = t(484239),
  g = t(658370),
  P = t(735825),
  O = t(981631),
  f = t(921944),
  x = t(689938),
  L = t(52689);
let h = {
    xMin: -80,
    xMax: 80,
    yMin: -150,
    yMax: -20
  },
  b = a.memo(e => {
    let {
      name: s,
      canReveal: t = !0,
      dismissibleContentType: r,
      forceShadow: S,
      cardType: C,
      confettiCanvas: g
    } = e, Z = null == e ? void 0 : e.onCtaClick, D = (0, _.e7)([u.Z], () => u.Z.useReducedMotion), [U, B] = a.useState(!1), [j, G] = a.useState(!1), W = (0, A.yQ)(), H = (0, A.IB)(), [k, K] = a.useState(!1), [F, w] = a.useState(s === p.u.FREE_BOOST && H && (null == W ? void 0 : W.nitroTenureStatus) === P.EB.REDEEMABLE);
    a.useEffect(() => {
      s === p.u.FREE_BOOST && H && (null == W ? void 0 : W.nitroTenureStatus) === P.EB.REDEEMABLE && w(!0)
    }, [H, s, W]);
    let V = a.useCallback(() => {
        K(!0)
      }, []),
      y = C === m.R0.CARD_CAROUSEL_FIRST_ROW || C === m.R0.CARD_CAROUSEL_SECOND_ROW || C === m.R0.CARD_CAROUSEL_THIRD_ROW,
      Y = (0, p.Z)(),
      [z, Q] = (0, I.c)(null != r && t || r === c.z.TENURE_REWARD_REDEEMABLE_CONFETTI ? [r] : []);
    a.useEffect(() => () => {
      z === c.z.TENURE_REWARD_REDEEMABLE_CONFETTI && k && (0, d.EW)(z)
    }, [z, k]), a.useEffect(() => {
      z === c.z.TENURE_REWARD_REDEEMABLE_CONFETTI && k && (0, d.EW)(z)
    }, [z, k]);
    let {
      easterEggLevel: X,
      isEasterEggTriggered: J,
      onHover: $,
      onUnhover: q
    } = (0, N.Z)(5), ee = (0, l.debounce)(() => {
      T.default.track(O.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, l.snakeCase)(s),
        is_tenure_reward: s === p.u.FREE_BOOST,
        reward_status: null == W ? void 0 : W.nitroTenureStatus
      })
    }, 800), es = (0, l.debounce)(() => {
      null != Z && T.default.track(O.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
        card_type: (0, l.snakeCase)(s),
        function_name: (0, l.snakeCase)(Z.name)
      })
    }, 800), et = a.useRef(null);
    e = {
      onMouseEnter: ee,
      ...e,
      onCtaClick: null != Z ? () => {
        null == Z || Z(), es()
      } : void 0
    };
    let en = z !== r || null == r || j || r === c.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
    return (a.useEffect(() => {
      D && U && (G(!0), T.default.track(O.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: s
      }), null != r && Q(f.L.TAKE_ACTION))
    }, [D, U, r, s, Q]), (0, R.Z)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
      properties: {
        user_tenure_reward_id: null == W ? void 0 : W.tenureRewardStatusId,
        tenure_reward_id: null == W ? void 0 : W.tenureRewardSkuId,
        reward_type: P.nW.SERVER_BOOST,
        redeemable_at: null == W ? void 0 : W.redeemableAt,
        reward_status: null == W ? void 0 : W.nitroTenureStatus
      }
    }, {
      disableTrack: s !== p.u.FREE_BOOST || null == W
    }), (0, R.Z)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
      properties: {
        name: s
      }
    }), t) ? s === p.u.UPCOMING_DROP_UNTIMED ? (0, n.jsx)("div", {
      className: i()(L.flipCardContainer, {
        [L.forceShadow]: S
      }),
      onMouseEnter: $,
      onFocus: $,
      onMouseLeave: q,
      onBlur: q,
      children: (0, n.jsxs)("div", {
        className: i()(L.flipCard, {
          [L.partialFlipCard]: !J,
          [L.ultraFlipCard]: J,
          [L.rotateCard]: J && 3 === X,
          [L.reducedMotion]: D
        }),
        children: [(0, n.jsx)("div", {
          className: L.flipCardFront,
          children: (0, n.jsx)(v, {
            ...e,
            className: L.topCover
          })
        }), (0, n.jsx)("div", {
          className: L.flipCardBack,
          children: (0, n.jsx)(v, {
            ...e,
            className: L.topCover
          })
        })]
      })
    }) : en ? (0, n.jsx)(n.Fragment, {
      children: (0, n.jsxs)("div", {
        className: i()({
          [L.noFlipCardContainer]: !y,
          [L.noFlipCardContainerCarousel]: y,
          [L.forceShadow]: S,
          [L.reducedMotion]: D
        }),
        children: [(0, n.jsx)(v, {
          ...e,
          ref: s === p.u.FREE_BOOST ? et : void 0
        }), F && (0, n.jsx)(M.Z, {
          speedValues: h,
          numBursts: 3,
          particlesPerBurst: 15,
          confettiTarget: et.current,
          offsetXPercentageMax: -30,
          offsetXPercentageMin: -70,
          offsetYPercentageMax: 40,
          offsetYPercentageMin: 20,
          customConfettiCanvas: g,
          dragCoefficientValue: 1e-5,
          onAnimationEnd: V
        })]
      })
    }) : (0, n.jsx)("div", {
      className: i()(L.flipCardContainer, {
        [L.forceShadow]: S
      }),
      children: (0, n.jsxs)(E.Clickable, {
        onClick: () => B(!0),
        className: i()(L.flipCard, L.clickable, {
          [L.flipped]: U,
          [L.partialFlipCard]: !j && !U,
          [L.reducedMotion]: D
        }),
        onTransitionEnd: e => {
          if (!!U && "transform" === e.propertyName && !!e.target.classList.contains(L.flipCard)) G(!0), T.default.track(O.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: s
          }), null != r && Q(f.L.TAKE_ACTION)
        },
        children: [(0, n.jsx)("div", {
          className: L.flipCardHidden,
          "aria-hidden": !0,
          children: (0, n.jsx)(v, {
            ...e
          })
        }), (0, n.jsx)("div", {
          className: L.flipCardFront,
          children: (0, n.jsx)(v, {
            ...Y.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, n.jsx)("div", {
          className: L.flipCardBack,
          children: (0, n.jsx)(v, {
            ...e,
            description: ""
          })
        }), (0, n.jsx)("div", {
          className: L.flipCardButtonContainer,
          children: (0, n.jsx)(E.Button, {
            onClick: () => B(!0),
            children: x.Z.Messages.REVEAL
          })
        })]
      })
    }) : (0, n.jsx)(b, {
      ...Y.upcomingDropUntimed,
      forceShadow: S
    })
  });
b.displayName = "PerkDiscoverabilityCard";
let v = a.forwardRef((e, s) => {
  var t;
  let {
    title: r,
    titleClassName: l = "",
    subtitle: o = "",
    description: _ = "",
    descriptionCta: c = "",
    isPremiumGetCta: u,
    onCtaClick: R,
    onMouseEnter: d,
    className: I,
    perkComponent: T,
    cardVariant: M,
    cardType: N,
    onClick: p,
    backgroundImage: P,
    pillText: O,
    perkImage: f
  } = e, x = N === m.R0.CARD_CAROUSEL_FIRST_ROW || N === m.R0.CARD_CAROUSEL_SECOND_ROW || N === m.R0.CARD_CAROUSEL_THIRD_ROW, h = 0 !== _.length || 0 !== c.length || 0 !== o.length && M === m.zW.REWARD, b = (0, A.IB)(), [v, Z] = a.useState(b);
  a.useEffect(() => {
    b && Z(!0)
  }, [b]);
  let D = (0, S._)(M);
  return (0, n.jsxs)(E.Clickable, {
    className: i()(L.card, I, !0 === v ? null === (t = D.cardContainer) || void 0 === t ? void 0 : t.className : void 0, {
      [L.clickable]: null != p,
      [L.hideOverflow]: x
    }),
    onMouseEnter: d,
    style: {
      backgroundImage: null != P ? "url(".concat(P, ")") : void 0
    },
    onClick: p,
    children: [null != O && (0, n.jsx)(E.Text, {
      variant: "text-xs/semibold",
      className: L.pill,
      children: O
    }), (0, n.jsx)("div", {
      ref: s
    }), (0, n.jsx)(C.Z, {
      title: r,
      titleClassName: l,
      subtitle: o,
      perkImage: f,
      isCarousel: x,
      descriptionCta: c,
      onCtaClick: R,
      perkComponent: T,
      subtitleClassName: L.cardSubtitle,
      cardVariant: M
    }), h && (0, n.jsx)(g.Z, {
      title: r,
      titleClassName: l,
      subtitle: o,
      description: _,
      descriptionCta: c,
      isPremiumGetCta: u,
      onCtaClick: R,
      cardVariant: M,
      perkComponent: T
    }), (0, n.jsx)("div", {
      className: i()(L.cover, L.above),
      ref: s
    })]
  })
});
v.displayName = "PerkCardContent", s.Z = b