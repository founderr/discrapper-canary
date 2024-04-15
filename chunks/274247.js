"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var s = n("735250"),
  r = n("470079"),
  i = n("153832"),
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

function L(e) {
  let {
    handleStepChange: t
  } = e, {
    selectedPlan: n,
    browserCheckoutState: L,
    browserCheckoutStateLoadId: E,
    contextMetadata: h
  } = (0, u.usePaymentContext)(), {
    isGift: S
  } = (0, C.useGiftContext)(), [j, P] = r.useState(!1);
  return r.useEffect(() => {
    var e;
    !j && (P(!0), (0, a.startBrowserCheckout)(h.loadId), ! function(e, t, n, s) {
      let r = _.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
        a = new URL(o.default.makeUrl(_.Routes.BILLING_LOGIN_HANDOFF)),
        C = (0, i.v4)();
      a.searchParams.append("handoff_key", C), a.searchParams.append("redirect_to", r), l.HTTP.post({
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
    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : m.SubscriptionPlans.PREMIUM_MONTH_TIER_2, S, h.loadId, () => t(d.Step.ADD_PAYMENT_STEPS)))
  }, [n, S, j, P, h, t]), r.useEffect(() => {
    E === h.loadId && L === p.BrowserCheckoutState.DONE && t(d.Step.CONFIRM)
  }, [L, E, h, t]), (0, s.jsxs)(s.Fragment, {
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