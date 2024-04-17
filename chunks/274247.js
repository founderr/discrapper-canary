"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var s = n("735250"),
  i = n("470079"),
  r = n("153832"),
  l = n("544891"),
  a = n("355467"),
  o = n("591759"),
  C = n("987209"),
  u = n("598"),
  d = n("409813"),
  c = n("35248"),
  p = n("362755"),
  f = n("51499"),
  x = n("614277"),
  _ = n("981631"),
  m = n("474936");

function E(e) {
  let {
    handleStepChange: t
  } = e, {
    selectedPlan: n,
    browserCheckoutState: E,
    browserCheckoutStateLoadId: S,
    contextMetadata: L
  } = (0, u.usePaymentContext)(), {
    isGift: h
  } = (0, C.useGiftContext)(), [j, P] = i.useState(!1);
  return i.useEffect(() => {
    var e;
    !j && (P(!0), (0, a.startBrowserCheckout)(L.loadId), ! function(e, t, n, s) {
      let i = _.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
        a = new URL(o.default.makeUrl(_.Routes.BILLING_LOGIN_HANDOFF)),
        C = (0, r.v4)();
      a.searchParams.append("handoff_key", C), a.searchParams.append("redirect_to", i), l.HTTP.post({
        url: _.Endpoints.HANDOFF,
        body: {
          key: C
        },
        oldFormErrors: !0
      }).then(e => {
        a.searchParams.append("handoff_token", e.body.handoff_token), window.open(a.href)
      }, () => {
        s()
      })
    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : m.SubscriptionPlans.PREMIUM_MONTH_TIER_2, h, L.loadId, () => t(d.Step.ADD_PAYMENT_STEPS)))
  }, [n, h, j, P, L, t]), i.useEffect(() => {
    S === L.loadId && E === p.BrowserCheckoutState.DONE && t(d.Step.CONFIRM)
  }, [E, S, L, t]), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(f.default, {}), (0, s.jsx)(x.PaymentPortalBody, {
      children: (0, s.jsx)(c.AwaitingBrowserCheckoutStepBody, {})
    }), (0, s.jsx)(x.PaymentPortalFooter, {
      children: (0, s.jsx)(c.AwaitingBrowserCheckoutStepFooter, {
        onStepChange: t,
        onBackClick: () => t(d.Step.PLAN_SELECT)
      })
    })]
  })
}