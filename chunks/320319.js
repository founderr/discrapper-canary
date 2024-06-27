n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(392711),
  o = n(990547),
  c = n(399606),
  d = n(704215),
  _ = n(481060),
  E = n(607070),
  u = n(213609),
  T = n(605236),
  I = n(706140),
  R = n(626135),
  C = n(314684),
  g = n(715627),
  p = n(176782),
  A = n(238108),
  N = n(32173),
  m = n(391110),
  S = n(484239),
  f = n(658370),
  M = n(735825),
  h = n(981631),
  b = n(921944),
  x = n(689938),
  O = n(927231);
let P = {
    xMin: -80,
    xMax: 80,
    yMin: -150,
    yMax: -20
  },
  L = a.memo(e => {
    let {
      name: t,
      canReveal: n = !0,
      dismissibleContentType: i,
      forceShadow: p,
      cardType: S,
      confettiCanvas: f
    } = e, Z = null == e ? void 0 : e.onCtaClick, D = (0, c.e7)([E.Z], () => E.Z.useReducedMotion), [B, U] = a.useState(!1), [j, G] = a.useState(!1), H = (0, C.yQ)(), y = (0, C.IB)(), [k, w] = a.useState(!1), [V, F] = a.useState(t === N.u.FREE_BOOST && y && (null == H ? void 0 : H.nitroTenureStatus) === M.EB.REDEEMABLE);
    a.useEffect(() => {
      t === N.u.FREE_BOOST && y && (null == H ? void 0 : H.nitroTenureStatus) === M.EB.REDEEMABLE && F(!0)
    }, [y, t, H]);
    let W = a.useCallback(() => {
        w(!0)
      }, []),
      K = S === m.R0.CARD_CAROUSEL_FIRST_ROW || S === m.R0.CARD_CAROUSEL_SECOND_ROW || S === m.R0.CARD_CAROUSEL_THIRD_ROW,
      Y = (0, N.Z)(),
      [z, Q] = (0, I.c)(null != i && n || i === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI ? [i] : []);
    a.useEffect(() => () => {
      z === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && k && (0, T.EW)(z)
    }, [z, k]), a.useEffect(() => {
      z === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && k && (0, T.EW)(z)
    }, [z, k]);
    let {
      easterEggLevel: J,
      isEasterEggTriggered: q,
      onHover: X,
      onUnhover: $
    } = (0, A.Z)(5), ee = (0, l.debounce)(() => {
      R.default.track(h.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, l.snakeCase)(t),
        is_tenure_reward: t === N.u.FREE_BOOST,
        reward_status: null == H ? void 0 : H.nitroTenureStatus
      })
    }, 800), et = (0, l.debounce)(() => {
      null != Z && R.default.track(h.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
        card_type: (0, l.snakeCase)(t),
        function_name: (0, l.snakeCase)(Z.name)
      })
    }, 800), en = a.useRef(null);
    e = {
      onMouseEnter: ee,
      ...e,
      onCtaClick: null != Z ? () => {
        null == Z || Z(), et()
      } : void 0
    };
    let es = z !== i || null == i || j || i === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
    return (a.useEffect(() => {
      D && B && (G(!0), R.default.track(h.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != i && Q(b.L.TAKE_ACTION))
    }, [D, B, i, t, Q]), (0, u.Z)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
      properties: {
        user_tenure_reward_id: null == H ? void 0 : H.tenureRewardStatusId,
        tenure_reward_id: null == H ? void 0 : H.tenureRewardSkuId,
        reward_type: M.nW.SERVER_BOOST,
        redeemable_at: null == H ? void 0 : H.redeemableAt,
        reward_status: null == H ? void 0 : H.nitroTenureStatus
      }
    }, {
      disableTrack: t !== N.u.FREE_BOOST || null == H
    }), (0, u.Z)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
      properties: {
        name: t
      }
    }), n) ? t === N.u.UPCOMING_DROP_UNTIMED ? (0, s.jsx)("div", {
      className: r()(O.flipCardContainer, {
        [O.forceShadow]: p
      }),
      onMouseEnter: X,
      onFocus: X,
      onMouseLeave: $,
      onBlur: $,
      children: (0, s.jsxs)("div", {
        className: r()(O.flipCard, {
          [O.partialFlipCard]: !q,
          [O.ultraFlipCard]: q,
          [O.rotateCard]: q && 3 === J,
          [O.reducedMotion]: D
        }),
        children: [(0, s.jsx)("div", {
          className: O.flipCardFront,
          children: (0, s.jsx)(v, {
            ...e,
            className: O.topCover
          })
        }), (0, s.jsx)("div", {
          className: O.flipCardBack,
          children: (0, s.jsx)(v, {
            ...e,
            className: O.topCover
          })
        })]
      })
    }) : es ? (0, s.jsx)(s.Fragment, {
      children: (0, s.jsxs)("div", {
        className: r()({
          [O.noFlipCardContainer]: !K,
          [O.noFlipCardContainerCarousel]: K,
          [O.forceShadow]: p,
          [O.reducedMotion]: D
        }),
        children: [(0, s.jsx)(v, {
          ...e,
          ref: t === N.u.FREE_BOOST ? en : void 0
        }), V && (0, s.jsx)(g.Z, {
          speedValues: P,
          numBursts: 3,
          particlesPerBurst: 15,
          confettiTarget: en.current,
          offsetXPercentageMax: -30,
          offsetXPercentageMin: -70,
          offsetYPercentageMax: 40,
          offsetYPercentageMin: 20,
          customConfettiCanvas: f,
          dragCoefficientValue: 1e-5,
          onAnimationEnd: W
        })]
      })
    }) : (0, s.jsx)("div", {
      className: r()(O.flipCardContainer, {
        [O.forceShadow]: p
      }),
      children: (0, s.jsxs)(_.Clickable, {
        onClick: () => U(!0),
        className: r()(O.flipCard, O.clickable, {
          [O.flipped]: B,
          [O.partialFlipCard]: !j && !B,
          [O.reducedMotion]: D
        }),
        onTransitionEnd: e => {
          if (!!B && "transform" === e.propertyName && !!e.target.classList.contains(O.flipCard)) G(!0), R.default.track(h.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != i && Q(b.L.TAKE_ACTION)
        },
        children: [(0, s.jsx)("div", {
          className: O.flipCardHidden,
          "aria-hidden": !0,
          children: (0, s.jsx)(v, {
            ...e
          })
        }), (0, s.jsx)("div", {
          className: O.flipCardFront,
          children: (0, s.jsx)(v, {
            ...Y.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, s.jsx)("div", {
          className: O.flipCardBack,
          children: (0, s.jsx)(v, {
            ...e,
            description: ""
          })
        }), (0, s.jsx)("div", {
          className: O.flipCardButtonContainer,
          children: (0, s.jsx)(_.Button, {
            onClick: () => U(!0),
            children: x.Z.Messages.REVEAL
          })
        })]
      })
    }) : (0, s.jsx)(L, {
      ...Y.upcomingDropUntimed,
      forceShadow: p
    })
  });
L.displayName = "PerkDiscoverabilityCard";
let v = a.forwardRef((e, t) => {
  var n;
  let {
    title: i,
    titleClassName: l = "",
    subtitle: o = "",
    description: c = "",
    descriptionCta: d = "",
    isPremiumGetCta: E,
    onCtaClick: u,
    onMouseEnter: T,
    className: I,
    perkComponent: R,
    cardVariant: g,
    cardType: A,
    onClick: N,
    backgroundImage: M,
    pillText: h,
    perkImage: b
  } = e, x = A === m.R0.CARD_CAROUSEL_FIRST_ROW || A === m.R0.CARD_CAROUSEL_SECOND_ROW || A === m.R0.CARD_CAROUSEL_THIRD_ROW, P = 0 !== c.length || 0 !== d.length || 0 !== o.length && g === m.zW.REWARD, L = (0, C.IB)(), [v, Z] = a.useState(L);
  a.useEffect(() => {
    L && Z(!0)
  }, [L]);
  let D = (0, p._)(g);
  return (0, s.jsxs)(_.Clickable, {
    className: r()(O.card, I, !0 === v ? null === (n = D.cardContainer) || void 0 === n ? void 0 : n.className : void 0, {
      [O.clickable]: null != N,
      [O.hideOverflow]: x
    }),
    onMouseEnter: T,
    style: {
      backgroundImage: null != M ? "url(".concat(M, ")") : void 0
    },
    onClick: N,
    children: [null != h && (0, s.jsx)(_.Text, {
      variant: "text-xs/semibold",
      className: O.pill,
      children: h
    }), (0, s.jsx)("div", {
      ref: t
    }), (0, s.jsx)(S.Z, {
      title: i,
      titleClassName: l,
      subtitle: o,
      perkImage: b,
      isCarousel: x,
      descriptionCta: d,
      onCtaClick: u,
      perkComponent: R,
      subtitleClassName: O.cardSubtitle,
      cardVariant: g
    }), P && (0, s.jsx)(f.Z, {
      title: i,
      titleClassName: l,
      subtitle: o,
      description: c,
      descriptionCta: d,
      isPremiumGetCta: E,
      onCtaClick: u,
      cardVariant: g,
      perkComponent: R
    }), (0, s.jsx)("div", {
      className: r()(O.cover, O.above),
      ref: t
    })]
  })
});
v.displayName = "PerkCardContent", t.Z = L