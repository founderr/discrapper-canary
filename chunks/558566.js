"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  r = s.n(i),
  l = s("917351"),
  o = s("65597"),
  u = s("77078"),
  d = s("206230"),
  c = s("235145"),
  _ = s("599110"),
  E = s("719923"),
  I = s("837797"),
  T = s("154889"),
  f = s("917247"),
  S = s("119829"),
  R = s("628550"),
  m = s("598739"),
  A = s("881155"),
  N = s("646718"),
  p = s("49111"),
  g = s("994428"),
  C = s("782340"),
  P = s("635650");
let O = e => {
    let {
      name: t,
      canReveal: s = !0,
      dismissibleContentType: i,
      forceShadow: E,
      cardType: I
    } = e, T = (0, o.default)([d.default], () => d.default.useReducedMotion), [f, A] = n.useState(!1), [N, h] = n.useState(!1), L = I === m.PerksDiscoverabilityVariants.CARD_CAROUSEL_FIRST_ROW || I === m.PerksDiscoverabilityVariants.CARD_CAROUSEL_SECOND_ROW || I === m.PerksDiscoverabilityVariants.CARD_CAROUSEL_THIRD_ROW, x = (0, R.default)(), [v, D] = (0, c.useGetDismissibleContent)(null != i && s ? [i] : []), {
      easterEggLevel: U,
      isEasterEggTriggered: b,
      onHover: j,
      onUnhover: G
    } = (0, S.default)(5), k = (0, l.debounce)(() => {
      _.default.track(p.AnalyticEvents.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, l.snakeCase)(t)
      })
    }, 800);
    e = {
      onMouseEnter: k,
      ...e
    };
    let B = v !== i || null == i || N;
    return (n.useEffect(() => {
      T && f && (h(!0), _.default.track(p.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != i && D(g.ContentDismissActionType.TAKE_ACTION))
    }, [T, f, i, t, D]), s) ? t === R.PerksDiscoverabilityCardTypes.UPCOMING_DROP_UNTIMED ? (0, a.jsx)("div", {
      className: r(P.flipCardContainer, {
        [P.forceShadow]: E
      }),
      onMouseEnter: j,
      onFocus: j,
      onMouseLeave: G,
      onBlur: G,
      children: (0, a.jsxs)("div", {
        className: r(P.flipCard, {
          [P.partialFlipCard]: !b,
          [P.ultraFlipCard]: b,
          [P.rotateCard]: b && 3 === U,
          [P.reducedMotion]: T
        }),
        children: [(0, a.jsx)("div", {
          className: P.flipCardFront,
          children: (0, a.jsx)(M, {
            ...e,
            className: P.topCover
          })
        }), (0, a.jsx)("div", {
          className: P.flipCardBack,
          children: (0, a.jsx)(M, {
            ...e,
            className: P.topCover
          })
        })]
      })
    }) : B ? (0, a.jsx)("div", {
      className: r({
        [P.noFlipCardContainer]: !L,
        [P.noFlipCardContainerCarousel]: L,
        [P.forceShadow]: E,
        [P.reducedMotion]: T
      }),
      children: (0, a.jsx)(M, {
        ...e
      })
    }) : (0, a.jsx)("div", {
      className: r(P.flipCardContainer, {
        [P.forceShadow]: E
      }),
      children: (0, a.jsxs)(u.Clickable, {
        onClick: () => A(!0),
        className: r(P.flipCard, P.clickable, {
          [P.flipped]: f,
          [P.partialFlipCard]: !N && !f,
          [P.reducedMotion]: T
        }),
        onTransitionEnd: e => {
          f && "transform" === e.propertyName && e.target.classList.contains(P.flipCard) && (h(!0), _.default.track(p.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != i && D(g.ContentDismissActionType.TAKE_ACTION))
        },
        children: [(0, a.jsx)("div", {
          className: P.flipCardHidden,
          "aria-hidden": !0,
          children: (0, a.jsx)(M, {
            ...e
          })
        }), (0, a.jsx)("div", {
          className: P.flipCardFront,
          children: (0, a.jsx)(M, {
            ...x.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, a.jsx)("div", {
          className: P.flipCardBack,
          children: (0, a.jsx)(M, {
            ...e,
            description: ""
          })
        }), (0, a.jsx)("div", {
          className: P.flipCardButtonContainer,
          children: (0, a.jsx)(u.Button, {
            onClick: () => A(!0),
            children: C.default.Messages.REVEAL
          })
        })]
      })
    }) : (0, a.jsx)(O, {
      ...x.upcomingDropUntimed,
      forceShadow: E
    })
  },
  M = e => {
    let {
      title: t,
      titleClassName: s = "",
      subtitle: n = "",
      description: i = "",
      descriptionCta: l = "",
      isPremiumGetCta: o,
      perkImage: d,
      cardType: c,
      backgroundImage: _,
      pillText: S,
      onClick: R,
      onCtaClick: p,
      onMouseEnter: g,
      className: O
    } = e, M = (0, f.usePremiumTrialOffer)(), h = null == M ? void 0 : M.subscription_trial, L = (0, T.usePremiumDiscountOffer)(), x = (0, E.formatTrialCtaIntervalDuration)({
      intervalType: null == h ? void 0 : h.interval,
      intervalCount: null == h ? void 0 : h.interval_count
    }), v = (0, I.useResponseOnUserState)({
      defaultResponse: C.default.Messages.PREMIUM_SETTINGS_GET,
      onNonTier2Subscriber: C.default.Messages.BILLING_SWITCH_PLAN_UPGRADE,
      onTier2TrialOffer: x,
      onTier0TrialOffer: x,
      onDiscountOffer: C.default.Messages.PREMIUM_DISCOUNT_CTA.format({
        percent: null == L ? void 0 : L.discount.amount
      })
    }), D = c === m.PerksDiscoverabilityVariants.CARD_CAROUSEL_FIRST_ROW || c === m.PerksDiscoverabilityVariants.CARD_CAROUSEL_SECOND_ROW || c === m.PerksDiscoverabilityVariants.CARD_CAROUSEL_THIRD_ROW;
    return (0, a.jsxs)(u.Clickable, {
      className: r(P.card, O, {
        [P.clickable]: null != R,
        [P.hideOverflow]: D
      }),
      onMouseEnter: g,
      style: {
        backgroundImage: null != _ ? "url(".concat(_, ")") : void 0
      },
      onClick: R,
      children: [null != S ? (0, a.jsx)(u.Text, {
        variant: "text-xs/semibold",
        className: P.pill,
        children: S
      }) : null, (0, a.jsx)("div", {
        className: r(P.cover, P.below)
      }), (0, a.jsx)(u.Heading, {
        variant: "heading-xl/extrabold",
        className: r(P.cardHeading, s),
        children: t
      }), 0 !== n.length ? (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: P.cardSubtitle,
        children: n
      }) : null, null != d ? (0, a.jsx)("img", {
        src: d,
        alt: "",
        className: r({
          [P.cardImage]: !D,
          [P.carouselCardImage]: D
        })
      }) : null, 0 !== i.length ? (0, a.jsxs)("div", {
        className: P.cardDescription,
        children: [(0, a.jsx)(u.Heading, {
          variant: "heading-xl/extrabold",
          className: r(P.cardHeading, s),
          children: t
        }), 0 !== n.length ? (0, a.jsxs)(u.Text, {
          variant: "text-sm/normal",
          className: P.cardDescriptionText,
          children: [n, (0, a.jsx)("br", {}), " ", (0, a.jsx)("br", {}), i]
        }) : null, o ? (0, a.jsx)(A.default, {
          subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
          buttonText: v,
          color: u.Button.Colors.GREEN,
          look: u.Button.Looks.FILLED
        }) : null, 0 !== l.length && null != p ? (0, a.jsx)(u.Button, {
          onClick: p,
          children: l
        }) : null]
      }) : null, (0, a.jsx)("div", {
        className: r(P.cover, P.above)
      })]
    })
  };
var h = O