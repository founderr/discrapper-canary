"use strict";
s.r(t), s.d(t, {
  PremiumSubscritionDiscountAppliedModal: function() {
    return P
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  l = s("780384"),
  r = s("481060"),
  o = s("410030"),
  u = s("607070"),
  d = s("530618"),
  c = s("74538"),
  p = s("937615"),
  f = s("230916"),
  E = s("798769"),
  m = s("474936"),
  _ = s("689938"),
  S = s("720913"),
  I = s("982404"),
  N = s("299156");

function P(e) {
  let {
    premiumSubscription: t,
    premiumType: s,
    onClose: P,
    confettiCanvas: C,
    userWasChurned: T = !1,
    userDiscountOffer: h
  } = e, A = (0, o.default)(), R = (0, l.isThemeDark)(A) ? I : N, y = n.useRef(null), [M, g] = n.useState(!1), L = (0, f.useChurnDiscountedPrice)(t, m.SubscriptionPlans.PREMIUM_MONTH_TIER_2, h), x = (0, c.getPrice)(m.SubscriptionPlans.PREMIUM_MONTH_TIER_2), D = (0, p.formatPrice)(x.amount, x.currency), U = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion);
  if (n.useEffect(() => {
      null != y.current && null != L && g(!0)
    }, [y, M, L]), null == h || null == L) return null;
  let b = _.default.Messages.PREMIUM_TIER_SUBSCRIPTION_DESCRIPTION_AFTER_REDEMPTION_WITH_ACTIVE_SUB.format({
      numMonths: h.discount.user_usage_limit,
      discountedPrice: L,
      regularPrice: D
    }),
    O = (0, a.jsx)("div", {
      className: S.whatYouLoseButtonContainer,
      children: (0, a.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: P,
        children: _.default.Messages.PREMIUM_DISCOUNT_SWEET
      })
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(E.default, {
      premiumType: s,
      className: S.cancellationHeader,
      onClose: P
    }), (0, a.jsx)("div", {
      ref: y,
      children: (0, a.jsx)(r.ModalContent, {
        className: S.body,
        children: null != L ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: S.discountAppliedBody,
            children: [(0, a.jsx)("img", {
              alt: "",
              src: R,
              className: S.nitroIcon
            }), (0, a.jsx)(r.Heading, {
              variant: "heading-xl/bold",
              children: T ? _.default.Messages.PREMIUM_TRIAL_TUTORIAL_WELCOME_BACK : _.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED_PUNCTUATED
            })]
          }), (0, a.jsx)("div", {
            className: S.bodyString,
            children: b
          }), O]
        }) : (0, a.jsx)(r.Spinner, {})
      })
    }), !U && M && (0, a.jsx)(d.default, {
      confettiTarget: y.current,
      confettiCanvas: C,
      confettiVelocityMultiplier: .75
    })]
  })
}