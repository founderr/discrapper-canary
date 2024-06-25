s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  l = s(392711),
  o = s(990547),
  c = s(399606),
  E = s(704215),
  _ = s(481060),
  u = s(607070),
  d = s(213609),
  T = s(605236),
  I = s(706140),
  R = s(626135),
  A = s(314684),
  N = s(715627),
  C = s(176782),
  g = s(238108),
  m = s(32173),
  M = s(391110),
  S = s(484239),
  p = s(658370),
  h = s(735825),
  f = s(981631),
  O = s(921944),
  x = s(689938),
  L = s(927231);
let P = {
    xMin: -80,
    xMax: 80,
    yMin: -150,
    yMax: -20
  },
  v = a.memo(e => {
    let {
      name: t,
      canReveal: s = !0,
      dismissibleContentType: i,
      forceShadow: C,
      cardType: S,
      confettiCanvas: p
    } = e, b = null == e ? void 0 : e.onCtaClick, D = (0, c.e7)([u.Z], () => u.Z.useReducedMotion), [U, j] = a.useState(!1), [G, B] = a.useState(!1), H = (0, A.yQ)(), y = (0, A.IB)(), [k, V] = a.useState(!1), [F, w] = a.useState(t === m.u.FREE_BOOST && y && (null == H ? void 0 : H.nitroTenureStatus) === h.EB.REDEEMABLE);
    a.useEffect(() => {
      t === m.u.FREE_BOOST && y && (null == H ? void 0 : H.nitroTenureStatus) === h.EB.REDEEMABLE && w(!0)
    }, [y, t, H]);
    let W = a.useCallback(() => {
        V(!0)
      }, []),
      K = S === M.R0.CARD_CAROUSEL_FIRST_ROW || S === M.R0.CARD_CAROUSEL_SECOND_ROW || S === M.R0.CARD_CAROUSEL_THIRD_ROW,
      Y = (0, m.Z)(),
      [z, Q] = (0, I.c)(null != i && s || i === E.z.TENURE_REWARD_REDEEMABLE_CONFETTI ? [i] : []);
    a.useEffect(() => () => {
      z === E.z.TENURE_REWARD_REDEEMABLE_CONFETTI && k && (0, T.EW)(z)
    }, [z, k]), a.useEffect(() => {
      z === E.z.TENURE_REWARD_REDEEMABLE_CONFETTI && k && (0, T.EW)(z)
    }, [z, k]);
    let {
      easterEggLevel: X,
      isEasterEggTriggered: q,
      onHover: J,
      onUnhover: $
    } = (0, g.Z)(5), ee = (0, l.debounce)(() => {
      R.default.track(f.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, l.snakeCase)(t),
        is_tenure_reward: t === m.u.FREE_BOOST,
        reward_status: null == H ? void 0 : H.nitroTenureStatus
      })
    }, 800), et = (0, l.debounce)(() => {
      null != b && R.default.track(f.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
        card_type: (0, l.snakeCase)(t),
        function_name: (0, l.snakeCase)(b.name)
      })
    }, 800), es = a.useRef(null);
    e = {
      onMouseEnter: ee,
      ...e,
      onCtaClick: null != b ? () => {
        null == b || b(), et()
      } : void 0
    };
    let en = z !== i || null == i || G || i === E.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
    return (a.useEffect(() => {
      D && U && (B(!0), R.default.track(f.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != i && Q(O.L.TAKE_ACTION))
    }, [D, U, i, t, Q]), (0, d.Z)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
      properties: {
        user_tenure_reward_id: null == H ? void 0 : H.tenureRewardStatusId,
        tenure_reward_id: null == H ? void 0 : H.tenureRewardSkuId,
        reward_type: h.nW.SERVER_BOOST,
        redeemable_at: null == H ? void 0 : H.redeemableAt,
        reward_status: null == H ? void 0 : H.nitroTenureStatus
      }
    }, {
      disableTrack: t !== m.u.FREE_BOOST || null == H
    }), (0, d.Z)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
      properties: {
        name: t
      }
    }), s) ? t === m.u.UPCOMING_DROP_UNTIMED ? (0, n.jsx)("div", {
      className: r()(L.flipCardContainer, {
        [L.forceShadow]: C
      }),
      onMouseEnter: J,
      onFocus: J,
      onMouseLeave: $,
      onBlur: $,
      children: (0, n.jsxs)("div", {
        className: r()(L.flipCard, {
          [L.partialFlipCard]: !q,
          [L.ultraFlipCard]: q,
          [L.rotateCard]: q && 3 === X,
          [L.reducedMotion]: D
        }),
        children: [(0, n.jsx)("div", {
          className: L.flipCardFront,
          children: (0, n.jsx)(Z, {
            ...e,
            className: L.topCover
          })
        }), (0, n.jsx)("div", {
          className: L.flipCardBack,
          children: (0, n.jsx)(Z, {
            ...e,
            className: L.topCover
          })
        })]
      })
    }) : en ? (0, n.jsx)(n.Fragment, {
      children: (0, n.jsxs)("div", {
        className: r()({
          [L.noFlipCardContainer]: !K,
          [L.noFlipCardContainerCarousel]: K,
          [L.forceShadow]: C,
          [L.reducedMotion]: D
        }),
        children: [(0, n.jsx)(Z, {
          ...e,
          ref: t === m.u.FREE_BOOST ? es : void 0
        }), F && (0, n.jsx)(N.Z, {
          speedValues: P,
          numBursts: 3,
          particlesPerBurst: 15,
          confettiTarget: es.current,
          offsetXPercentageMax: -30,
          offsetXPercentageMin: -70,
          offsetYPercentageMax: 40,
          offsetYPercentageMin: 20,
          customConfettiCanvas: p,
          dragCoefficientValue: 1e-5,
          onAnimationEnd: W
        })]
      })
    }) : (0, n.jsx)("div", {
      className: r()(L.flipCardContainer, {
        [L.forceShadow]: C
      }),
      children: (0, n.jsxs)(_.Clickable, {
        onClick: () => j(!0),
        className: r()(L.flipCard, L.clickable, {
          [L.flipped]: U,
          [L.partialFlipCard]: !G && !U,
          [L.reducedMotion]: D
        }),
        onTransitionEnd: e => {
          if (!!U && "transform" === e.propertyName && !!e.target.classList.contains(L.flipCard)) B(!0), R.default.track(f.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != i && Q(O.L.TAKE_ACTION)
        },
        children: [(0, n.jsx)("div", {
          className: L.flipCardHidden,
          "aria-hidden": !0,
          children: (0, n.jsx)(Z, {
            ...e
          })
        }), (0, n.jsx)("div", {
          className: L.flipCardFront,
          children: (0, n.jsx)(Z, {
            ...Y.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, n.jsx)("div", {
          className: L.flipCardBack,
          children: (0, n.jsx)(Z, {
            ...e,
            description: ""
          })
        }), (0, n.jsx)("div", {
          className: L.flipCardButtonContainer,
          children: (0, n.jsx)(_.Button, {
            onClick: () => j(!0),
            children: x.Z.Messages.REVEAL
          })
        })]
      })
    }) : (0, n.jsx)(v, {
      ...Y.upcomingDropUntimed,
      forceShadow: C
    })
  });
v.displayName = "PerkDiscoverabilityCard";
let Z = a.forwardRef((e, t) => {
  var s;
  let {
    title: i,
    titleClassName: l = "",
    subtitle: o = "",
    description: c = "",
    descriptionCta: E = "",
    isPremiumGetCta: u,
    onCtaClick: d,
    onMouseEnter: T,
    className: I,
    perkComponent: R,
    cardVariant: N,
    cardType: g,
    onClick: m,
    backgroundImage: h,
    pillText: f,
    perkImage: O
  } = e, x = g === M.R0.CARD_CAROUSEL_FIRST_ROW || g === M.R0.CARD_CAROUSEL_SECOND_ROW || g === M.R0.CARD_CAROUSEL_THIRD_ROW, P = 0 !== c.length || 0 !== E.length || 0 !== o.length && N === M.zW.REWARD, v = (0, A.IB)(), [Z, b] = a.useState(v);
  a.useEffect(() => {
    v && b(!0)
  }, [v]);
  let D = (0, C._)(N);
  return (0, n.jsxs)(_.Clickable, {
    className: r()(L.card, I, !0 === Z ? null === (s = D.cardContainer) || void 0 === s ? void 0 : s.className : void 0, {
      [L.clickable]: null != m,
      [L.hideOverflow]: x
    }),
    onMouseEnter: T,
    style: {
      backgroundImage: null != h ? "url(".concat(h, ")") : void 0
    },
    onClick: m,
    children: [null != f && (0, n.jsx)(_.Text, {
      variant: "text-xs/semibold",
      className: L.pill,
      children: f
    }), (0, n.jsx)("div", {
      ref: t
    }), (0, n.jsx)(S.Z, {
      title: i,
      titleClassName: l,
      subtitle: o,
      perkImage: O,
      isCarousel: x,
      descriptionCta: E,
      onCtaClick: d,
      perkComponent: R,
      subtitleClassName: L.cardSubtitle,
      cardVariant: N
    }), P && (0, n.jsx)(p.Z, {
      title: i,
      titleClassName: l,
      subtitle: o,
      description: c,
      descriptionCta: E,
      isPremiumGetCta: u,
      onCtaClick: d,
      cardVariant: N,
      perkComponent: R
    }), (0, n.jsx)("div", {
      className: r()(L.cover, L.above),
      ref: t
    })]
  })
});
Z.displayName = "PerkCardContent", t.Z = v