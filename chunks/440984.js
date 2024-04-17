"use strict";
s.r(t), s.d(t, {
  PremiumSubscritionDiscountAppliedModal: function() {
    return C
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  l = s("780384"),
  r = s("481060"),
  u = s("410030"),
  o = s("607070"),
  d = s("530618"),
  c = s("74538"),
  p = s("937615"),
  m = s("230916"),
  E = s("798769"),
  f = s("474936"),
  _ = s("689938"),
  I = s("720913"),
  S = s("982404"),
  N = s("299156");

function C(e) {
  let {
    premiumSubscription: t,
    premiumType: s,
    onClose: C,
    confettiCanvas: P,
    userWasChurned: h = !1,
    userDiscountOffer: T
  } = e, A = (0, u.default)(), R = (0, l.isThemeDark)(A) ? S : N, y = n.useRef(null), [M, L] = n.useState(!1), g = (0, m.useChurnDiscountedPrice)(t, f.SubscriptionPlans.PREMIUM_MONTH_TIER_2, T), x = (0, c.getPrice)(f.SubscriptionPlans.PREMIUM_MONTH_TIER_2), D = (0, p.formatPrice)(x.amount, x.currency), b = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  if (n.useEffect(() => {
      null != y.current && null != g && L(!0)
    }, [y, M, g]), null == T || null == g) return null;
  let U = _.default.Messages.PREMIUM_TIER_SUBSCRIPTION_DESCRIPTION_AFTER_REDEMPTION_WITH_ACTIVE_SUB.format({
      numMonths: T.discount.user_usage_limit,
      discountedPrice: g,
      regularPrice: D
    }),
    v = (0, a.jsx)("div", {
      className: I.whatYouLoseButtonContainer,
      children: (0, a.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: C,
        children: _.default.Messages.PREMIUM_DISCOUNT_SWEET
      })
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(E.default, {
      premiumType: s,
      className: I.cancellationHeader,
      onClose: C
    }), (0, a.jsx)("div", {
      ref: y,
      children: (0, a.jsx)(r.ModalContent, {
        className: I.body,
        children: null != g ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: I.discountAppliedBody,
            children: [(0, a.jsx)("img", {
              alt: "",
              src: R,
              className: I.nitroIcon
            }), (0, a.jsx)(r.Heading, {
              variant: "heading-xl/bold",
              children: h ? _.default.Messages.PREMIUM_TRIAL_TUTORIAL_WELCOME_BACK : _.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED_PUNCTUATED
            })]
          }), (0, a.jsx)("div", {
            className: I.bodyString,
            children: U
          }), v]
        }) : (0, a.jsx)(r.Spinner, {})
      })
    }), !b && M && (0, a.jsx)(d.default, {
      confettiTarget: y.current,
      confettiCanvas: P,
      confettiVelocityMultiplier: .75
    })]
  })
}