n.d(t, {
  D: function() {
    return N
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(442837),
  o = n(780384),
  r = n(481060),
  l = n(410030),
  c = n(607070),
  d = n(530618),
  u = n(74538),
  _ = n(937615),
  p = n(230916),
  m = n(798769),
  f = n(474936),
  E = n(689938),
  I = n(596159),
  C = n(982404),
  h = n(299156);

function N(e) {
  let {
    premiumSubscription: t,
    premiumType: n,
    onClose: N,
    confettiCanvas: P,
    userWasChurned: g = !1,
    userDiscountOffer: T
  } = e, S = (0, l.ZP)(), R = (0, o.wj)(S) ? C : h, A = a.useRef(null), [b, x] = a.useState(!1), M = (0, p._)(t, f.Xh.PREMIUM_MONTH_TIER_2, T), L = (0, u.aS)(f.Xh.PREMIUM_MONTH_TIER_2), y = (0, _.T4)(L.amount, L.currency), B = (0, i.e7)([c.Z], () => c.Z.useReducedMotion);
  if (a.useEffect(() => {
      null != A.current && null != M && x(!0)
    }, [A, b, M]), null == T || null == M) return null;
  let D = E.Z.Messages.PREMIUM_TIER_SUBSCRIPTION_DESCRIPTION_AFTER_REDEMPTION_WITH_ACTIVE_SUB.format({
      numMonths: T.discount.user_usage_limit,
      discountedPrice: M,
      regularPrice: y
    }),
    O = (0, s.jsx)("div", {
      className: I.whatYouLoseButtonContainer,
      children: (0, s.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: N,
        children: E.Z.Messages.PREMIUM_DISCOUNT_SWEET
      })
    });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(m.Z, {
      premiumType: n,
      className: I.cancellationHeader,
      onClose: N
    }), (0, s.jsx)("div", {
      ref: A,
      children: (0, s.jsx)(r.ModalContent, {
        className: I.body,
        children: null != M ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsxs)("div", {
            className: I.discountAppliedBody,
            children: [(0, s.jsx)("img", {
              alt: "",
              src: R,
              className: I.nitroIcon
            }), (0, s.jsx)(r.Heading, {
              variant: "heading-xl/bold",
              children: g ? E.Z.Messages.PREMIUM_TRIAL_TUTORIAL_WELCOME_BACK : E.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED_PUNCTUATED
            })]
          }), (0, s.jsx)("div", {
            className: I.bodyString,
            children: D
          }), O]
        }) : (0, s.jsx)(r.Spinner, {})
      })
    }), !B && b && (0, s.jsx)(d.Z, {
      confettiTarget: A.current,
      confettiCanvas: P,
      confettiVelocityMultiplier: .75
    })]
  })
}