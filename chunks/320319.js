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
  d = t(213609),
  R = t(605236),
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
  f = t(735825),
  P = t(981631),
  O = t(921944),
  x = t(689938),
  h = t(52689);
let L = {
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
    } = e, Z = null == e ? void 0 : e.onCtaClick, D = (0, _.e7)([u.Z], () => u.Z.useReducedMotion), [U, B] = a.useState(!1), [j, G] = a.useState(!1), H = (0, A.yQ)(), W = (0, A.IB)(), [k, K] = a.useState(!1), [F, w] = a.useState(s === p.u.FREE_BOOST && W && (null == H ? void 0 : H.nitroTenureStatus) === f.EB.REDEEMABLE);
    a.useEffect(() => {
      s === p.u.FREE_BOOST && W && (null == H ? void 0 : H.nitroTenureStatus) === f.EB.REDEEMABLE && w(!0)
    }, [W, s, H]);
    let V = a.useCallback(() => {
        K(!0)
      }, []),
      y = C === m.R0.CARD_CAROUSEL_FIRST_ROW || C === m.R0.CARD_CAROUSEL_SECOND_ROW || C === m.R0.CARD_CAROUSEL_THIRD_ROW,
      Y = (0, p.Z)(),
      [z, Q] = (0, I.c)(null != r && t || r === c.z.TENURE_REWARD_REDEEMABLE_CONFETTI ? [r] : []);
    a.useEffect(() => () => {
      z === c.z.TENURE_REWARD_REDEEMABLE_CONFETTI && k && (0, R.EW)(z)
    }, [z, k]), a.useEffect(() => {
      z === c.z.TENURE_REWARD_REDEEMABLE_CONFETTI && k && (0, R.EW)(z)
    }, [z, k]);
    let {
      easterEggLevel: X,
      isEasterEggTriggered: J,
      onHover: $,
      onUnhover: q
    } = (0, N.Z)(5), ee = (0, l.debounce)(() => {
      T.default.track(P.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, l.snakeCase)(s),
        is_tenure_reward: s === p.u.FREE_BOOST,
        reward_status: null == H ? void 0 : H.nitroTenureStatus
      })
    }, 800), es = (0, l.debounce)(() => {
      null != Z && T.default.track(P.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
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
      D && U && (G(!0), T.default.track(P.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: s
      }), null != r && Q(O.L.TAKE_ACTION))
    }, [D, U, r, s, Q]), (0, d.Z)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
      properties: {
        user_tenure_reward_id: null == H ? void 0 : H.tenureRewardStatusId,
        tenure_reward_id: null == H ? void 0 : H.tenureRewardSkuId,
        reward_type: f.nW.SERVER_BOOST,
        redeemable_at: null == H ? void 0 : H.redeemableAt,
        reward_status: null == H ? void 0 : H.nitroTenureStatus
      }
    }, {
      disableTrack: s !== p.u.FREE_BOOST || null == H
    }), (0, d.Z)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
      properties: {
        name: s
      }
    }), t) ? s === p.u.UPCOMING_DROP_UNTIMED ? (0, n.jsx)("div", {
      className: i()(h.flipCardContainer, {
        [h.forceShadow]: S
      }),
      onMouseEnter: $,
      onFocus: $,
      onMouseLeave: q,
      onBlur: q,
      children: (0, n.jsxs)("div", {
        className: i()(h.flipCard, {
          [h.partialFlipCard]: !J,
          [h.ultraFlipCard]: J,
          [h.rotateCard]: J && 3 === X,
          [h.reducedMotion]: D
        }),
        children: [(0, n.jsx)("div", {
          className: h.flipCardFront,
          children: (0, n.jsx)(v, {
            ...e,
            className: h.topCover
          })
        }), (0, n.jsx)("div", {
          className: h.flipCardBack,
          children: (0, n.jsx)(v, {
            ...e,
            className: h.topCover
          })
        })]
      })
    }) : en ? (0, n.jsx)(n.Fragment, {
      children: (0, n.jsxs)("div", {
        className: i()({
          [h.noFlipCardContainer]: !y,
          [h.noFlipCardContainerCarousel]: y,
          [h.forceShadow]: S,
          [h.reducedMotion]: D
        }),
        children: [(0, n.jsx)(v, {
          ...e,
          ref: s === p.u.FREE_BOOST ? et : void 0
        }), F && (0, n.jsx)(M.Z, {
          speedValues: L,
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
      className: i()(h.flipCardContainer, {
        [h.forceShadow]: S
      }),
      children: (0, n.jsxs)(E.Clickable, {
        onClick: () => B(!0),
        className: i()(h.flipCard, h.clickable, {
          [h.flipped]: U,
          [h.partialFlipCard]: !j && !U,
          [h.reducedMotion]: D
        }),
        onTransitionEnd: e => {
          if (!!U && "transform" === e.propertyName && !!e.target.classList.contains(h.flipCard)) G(!0), T.default.track(P.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: s
          }), null != r && Q(O.L.TAKE_ACTION)
        },
        children: [(0, n.jsx)("div", {
          className: h.flipCardHidden,
          "aria-hidden": !0,
          children: (0, n.jsx)(v, {
            ...e
          })
        }), (0, n.jsx)("div", {
          className: h.flipCardFront,
          children: (0, n.jsx)(v, {
            ...Y.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, n.jsx)("div", {
          className: h.flipCardBack,
          children: (0, n.jsx)(v, {
            ...e,
            description: ""
          })
        }), (0, n.jsx)("div", {
          className: h.flipCardButtonContainer,
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
    onCtaClick: d,
    onMouseEnter: R,
    className: I,
    perkComponent: T,
    cardVariant: M,
    cardType: N,
    onClick: p,
    backgroundImage: f,
    pillText: P,
    perkImage: O
  } = e, x = N === m.R0.CARD_CAROUSEL_FIRST_ROW || N === m.R0.CARD_CAROUSEL_SECOND_ROW || N === m.R0.CARD_CAROUSEL_THIRD_ROW, L = 0 !== _.length || 0 !== c.length || 0 !== o.length && M === m.zW.REWARD, b = (0, A.IB)(), [v, Z] = a.useState(b);
  a.useEffect(() => {
    b && Z(!0)
  }, [b]);
  let D = (0, S._)(M);
  return (0, n.jsxs)(E.Clickable, {
    className: i()(h.card, I, !0 === v ? null === (t = D.cardContainer) || void 0 === t ? void 0 : t.className : void 0, {
      [h.clickable]: null != p,
      [h.hideOverflow]: x
    }),
    onMouseEnter: R,
    style: {
      backgroundImage: null != f ? "url(".concat(f, ")") : void 0
    },
    onClick: p,
    children: [null != P && (0, n.jsx)(E.Text, {
      variant: "text-xs/semibold",
      className: h.pill,
      children: P
    }), (0, n.jsx)("div", {
      ref: s
    }), (0, n.jsx)(C.Z, {
      title: r,
      titleClassName: l,
      subtitle: o,
      perkImage: O,
      isCarousel: x,
      descriptionCta: c,
      onCtaClick: d,
      perkComponent: T,
      subtitleClassName: h.cardSubtitle,
      cardVariant: M
    }), L && (0, n.jsx)(g.Z, {
      title: r,
      titleClassName: l,
      subtitle: o,
      description: _,
      descriptionCta: c,
      isPremiumGetCta: u,
      onCtaClick: d,
      cardVariant: M,
      perkComponent: T
    }), (0, n.jsx)("div", {
      className: i()(h.cover, h.above),
      ref: s
    })]
  })
});
v.displayName = "PerkCardContent", s.Z = b