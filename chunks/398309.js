"use strict";
s.r(t), s.d(t, {
  PremiumSubscritionDiscountAppliedModal: function() {
    return p
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  i = s("446674"),
  l = s("819855"),
  r = s("77078"),
  u = s("841098"),
  o = s("206230"),
  c = s("923702"),
  d = s("719923"),
  _ = s("153160"),
  m = s("478968"),
  f = s("510928"),
  E = s("646718"),
  I = s("782340"),
  C = s("454555"),
  N = s("940420"),
  M = s("591726");

function p(e) {
  let {
    premiumSubscription: t,
    premiumType: s,
    onClose: p,
    confettiCanvas: T,
    userWasChurned: R = !1,
    userDiscountOffer: P
  } = e, S = (0, u.default)(), A = (0, l.isThemeDark)(S) ? N : M, L = a.useRef(null), [g, O] = a.useState(!1), x = (0, m.useChurnDiscountedPrice)(t, E.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P), h = (0, d.getPrice)(E.SubscriptionPlans.PREMIUM_MONTH_TIER_2), y = (0, _.formatPrice)(h.amount, h.currency), D = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  if (a.useEffect(() => {
      null != L.current && null != x && O(!0)
    }, [L, g, x]), null == P || null == x) return null;
  let v = I.default.Messages.PREMIUM_TIER_SUBSCRIPTION_DESCRIPTION_AFTER_REDEMPTION_WITH_ACTIVE_SUB.format({
      numMonths: P.discount.user_usage_limit,
      discountedPrice: x,
      regularPrice: y
    }),
    b = (0, n.jsx)("div", {
      className: C.whatYouLoseButtonContainer,
      children: (0, n.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: p,
        children: I.default.Messages.PREMIUM_DISCOUNT_SWEET
      })
    });
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(f.default, {
      premiumType: s,
      className: C.cancellationHeader,
      onClose: p
    }), (0, n.jsx)("div", {
      ref: L,
      children: (0, n.jsx)(r.ModalContent, {
        className: C.body,
        children: null != x ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsxs)("div", {
            className: C.discountAppliedBody,
            children: [(0, n.jsx)("img", {
              alt: "",
              src: A,
              className: C.nitroIcon
            }), (0, n.jsx)(r.Heading, {
              variant: "heading-xl/bold",
              children: R ? I.default.Messages.PREMIUM_TRIAL_TUTORIAL_WELCOME_BACK : I.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED_PUNCTUATED
            })]
          }), (0, n.jsx)("div", {
            className: C.bodyString,
            children: v
          }), b]
        }) : (0, n.jsx)(r.Spinner, {})
      })
    }), !D && g && (0, n.jsx)(c.default, {
      confettiTarget: L.current,
      confettiCanvas: T,
      confettiVelocityMultiplier: .75
    })]
  })
}