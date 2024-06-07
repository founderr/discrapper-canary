"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("315314"), s("610138"), s("216116"), s("78328"), s("815648"), s("47120");
var n = s("735250"),
  i = s("470079"),
  r = s("153832"),
  l = s("544891"),
  a = s("355467"),
  o = s("591759"),
  u = s("987209"),
  C = s("598"),
  d = s("409813"),
  c = s("35248"),
  p = s("362755"),
  _ = s("51499"),
  f = s("614277"),
  m = s("981631"),
  x = s("474936");

function E(e) {
  let {
    handleStepChange: t
  } = e, {
    selectedPlan: s,
    browserCheckoutState: E,
    browserCheckoutStateLoadId: L,
    contextMetadata: S
  } = (0, C.usePaymentContext)(), {
    isGift: I
  } = (0, u.useGiftContext)(), [h, P] = i.useState(!1);
  return i.useEffect(() => {
    var e;
    !h && (P(!0), (0, a.startBrowserCheckout)(S.loadId), ! function(e, t, s, n) {
      let i = m.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, s),
        a = new URL(o.default.makeUrl(m.Routes.BILLING_LOGIN_HANDOFF)),
        u = (0, r.v4)();
      a.searchParams.append("handoff_key", u), a.searchParams.append("redirect_to", i), l.HTTP.post({
        url: m.Endpoints.HANDOFF,
        body: {
          key: u
        },
        oldFormErrors: !0
      }).then(e => {
        a.searchParams.append("handoff_token", e.body.handoff_token), window.open(a.href)
      }, () => {
        n()
      })
    }(null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : x.SubscriptionPlans.PREMIUM_MONTH_TIER_2, I, S.loadId, () => t(d.Step.ADD_PAYMENT_STEPS)))
  }, [s, I, h, P, S, t]), i.useEffect(() => {
    L === S.loadId && E === p.BrowserCheckoutState.DONE && t(d.Step.CONFIRM)
  }, [E, L, S, t]), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(_.default, {}), (0, n.jsx)(f.PaymentPortalBody, {
      children: (0, n.jsx)(c.AwaitingBrowserCheckoutStepBody, {})
    }), (0, n.jsx)(f.PaymentPortalFooter, {
      children: (0, n.jsx)(c.AwaitingBrowserCheckoutStepFooter, {
        onStepChange: t,
        onBackClick: () => t(d.Step.PLAN_SELECT)
      })
    })]
  })
}