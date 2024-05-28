"use strict";
s.r(t), s.d(t, {
  PremiumSubscritionDiscountAppliedModal: function() {
    return P
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  r = s("780384"),
  l = s("481060"),
  u = s("410030"),
  o = s("607070"),
  d = s("530618"),
  c = s("74538"),
  p = s("937615"),
  f = s("230916"),
  E = s("798769"),
  m = s("474936"),
  _ = s("689938"),
  S = s("874984"),
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
  } = e, A = (0, u.default)(), R = (0, r.isThemeDark)(A) ? I : N, M = n.useRef(null), [y, g] = n.useState(!1), L = (0, f.useChurnDiscountedPrice)(t, m.SubscriptionPlans.PREMIUM_MONTH_TIER_2, h), x = (0, c.getPrice)(m.SubscriptionPlans.PREMIUM_MONTH_TIER_2), D = (0, p.formatPrice)(x.amount, x.currency), b = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  if (n.useEffect(() => {
      null != M.current && null != L && g(!0)
    }, [M, y, L]), null == h || null == L) return null;
  let U = _.default.Messages.PREMIUM_TIER_SUBSCRIPTION_DESCRIPTION_AFTER_REDEMPTION_WITH_ACTIVE_SUB.format({
      numMonths: h.discount.user_usage_limit,
      discountedPrice: L,
      regularPrice: D
    }),
    v = (0, a.jsx)("div", {
      className: S.whatYouLoseButtonContainer,
      children: (0, a.jsx)(l.Button, {
        color: l.Button.Colors.BRAND,
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
      ref: M,
      children: (0, a.jsx)(l.ModalContent, {
        className: S.body,
        children: null != L ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: S.discountAppliedBody,
            children: [(0, a.jsx)("img", {
              alt: "",
              src: R,
              className: S.nitroIcon
            }), (0, a.jsx)(l.Heading, {
              variant: "heading-xl/bold",
              children: T ? _.default.Messages.PREMIUM_TRIAL_TUTORIAL_WELCOME_BACK : _.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED_PUNCTUATED
            })]
          }), (0, a.jsx)("div", {
            className: S.bodyString,
            children: U
          }), v]
        }) : (0, a.jsx)(l.Spinner, {})
      })
    }), !b && y && (0, a.jsx)(d.default, {
      confettiTarget: M.current,
      confettiCanvas: C,
      confettiVelocityMultiplier: .75
    })]
  })
}