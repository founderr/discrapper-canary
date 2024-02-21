"use strict";
n.r(t), n.d(t, {
  PremiumSubscritionDiscountAppliedModal: function() {
    return p
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("819855"),
  r = n("77078"),
  u = n("841098"),
  o = n("206230"),
  c = n("923702"),
  d = n("719923"),
  _ = n("153160"),
  f = n("478968"),
  m = n("510928"),
  I = n("646718"),
  E = n("782340"),
  C = n("454555"),
  N = n("940420"),
  M = n("591726");

function p(e) {
  let {
    premiumSubscription: t,
    premiumType: n,
    onClose: p,
    confettiCanvas: T,
    userWasChurned: R = !1,
    userDiscountOffer: P
  } = e, S = (0, u.default)(), A = (0, i.isThemeDark)(S) ? N : M, L = a.useRef(null), [g, O] = a.useState(!1), x = (0, f.useChurnDiscountedPrice)(t, I.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P), h = (0, d.getPrice)(I.SubscriptionPlans.PREMIUM_MONTH_TIER_2), y = (0, _.formatPrice)(h.amount, h.currency), D = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  if (a.useEffect(() => {
      null != L.current && null != x && O(!0)
    }, [L, g, x]), null == P || null == x) return null;
  let v = E.default.Messages.PREMIUM_TIER_SUBSCRIPTION_DESCRIPTION_AFTER_REDEMPTION_WITH_ACTIVE_SUB.format({
      numMonths: P.discount.user_usage_limit,
      discountedPrice: x,
      regularPrice: y
    }),
    b = (0, s.jsx)("div", {
      className: C.whatYouLoseButtonContainer,
      children: (0, s.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: p,
        children: E.default.Messages.PREMIUM_DISCOUNT_SWEET
      })
    });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(m.default, {
      premiumType: n,
      className: C.cancellationHeader,
      onClose: p
    }), (0, s.jsx)("div", {
      ref: L,
      children: (0, s.jsx)(r.ModalContent, {
        className: C.body,
        children: null != x ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsxs)("div", {
            className: C.discountAppliedBody,
            children: [(0, s.jsx)("img", {
              alt: "",
              src: A,
              className: C.nitroIcon
            }), (0, s.jsx)(r.Heading, {
              variant: "heading-xl/bold",
              children: R ? E.default.Messages.PREMIUM_TRIAL_TUTORIAL_WELCOME_BACK : E.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED_PUNCTUATED
            })]
          }), (0, s.jsx)("div", {
            className: C.bodyString,
            children: v
          }), b]
        }) : (0, s.jsx)(r.Spinner, {})
      })
    }), !D && g && (0, s.jsx)(c.default, {
      confettiTarget: L.current,
      confettiCanvas: T,
      confettiVelocityMultiplier: .75
    })]
  })
}