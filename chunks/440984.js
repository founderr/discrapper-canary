t.d(s, {
  D: function() {
    return P
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(442837),
  l = t(780384),
  r = t(481060),
  o = t(410030),
  c = t(607070),
  u = t(530618),
  d = t(74538),
  E = t(937615),
  _ = t(230916),
  p = t(798769),
  I = t(474936),
  m = t(689938),
  N = t(596159),
  C = t(982404),
  h = t(299156);

function P(e) {
  let {
    premiumSubscription: s,
    premiumType: t,
    onClose: P,
    confettiCanvas: T,
    userWasChurned: A = !1,
    userDiscountOffer: R
  } = e, S = (0, o.ZP)(), M = (0, l.wj)(S) ? C : h, f = a.useRef(null), [g, L] = a.useState(!1), x = (0, _._)(s, I.Xh.PREMIUM_MONTH_TIER_2, R), O = (0, d.aS)(I.Xh.PREMIUM_MONTH_TIER_2), D = (0, E.T4)(O.amount, O.currency), y = (0, i.e7)([c.Z], () => c.Z.useReducedMotion);
  if (a.useEffect(() => {
      null != f.current && null != x && L(!0)
    }, [f, g, x]), null == R || null == x) return null;
  let U = m.Z.Messages.PREMIUM_TIER_SUBSCRIPTION_DESCRIPTION_AFTER_REDEMPTION_WITH_ACTIVE_SUB.format({
      numMonths: R.discount.user_usage_limit,
      discountedPrice: x,
      regularPrice: D
    }),
    Z = (0, n.jsx)("div", {
      className: N.whatYouLoseButtonContainer,
      children: (0, n.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: P,
        children: m.Z.Messages.PREMIUM_DISCOUNT_SWEET
      })
    });
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(p.Z, {
      premiumType: t,
      className: N.cancellationHeader,
      onClose: P
    }), (0, n.jsx)("div", {
      ref: f,
      children: (0, n.jsx)(r.ModalContent, {
        className: N.body,
        children: null != x ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsxs)("div", {
            className: N.discountAppliedBody,
            children: [(0, n.jsx)("img", {
              alt: "",
              src: M,
              className: N.nitroIcon
            }), (0, n.jsx)(r.Heading, {
              variant: "heading-xl/bold",
              children: A ? m.Z.Messages.PREMIUM_TRIAL_TUTORIAL_WELCOME_BACK : m.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED_PUNCTUATED
            })]
          }), (0, n.jsx)("div", {
            className: N.bodyString,
            children: U
          }), Z]
        }) : (0, n.jsx)(r.Spinner, {})
      })
    }), !y && g && (0, n.jsx)(u.Z, {
      confettiTarget: f.current,
      confettiCanvas: T,
      confettiVelocityMultiplier: .75
    })]
  })
}