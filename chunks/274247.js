"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var s = n("735250"),
  i = n("470079"),
  r = n("153832"),
  l = n("544891"),
  a = n("355467"),
  C = n("591759"),
  o = n("987209"),
  u = n("598"),
  d = n("409813"),
  p = n("35248"),
  c = n("362755"),
  f = n("51499"),
  x = n("614277"),
  _ = n("981631"),
  L = n("474936");

function m(e) {
  let {
    handleStepChange: t
  } = e, {
    selectedPlan: n,
    browserCheckoutState: m,
    browserCheckoutStateLoadId: h,
    contextMetadata: S
  } = (0, u.usePaymentContext)(), {
    isGift: j
  } = (0, o.useGiftContext)(), [E, P] = i.useState(!1);
  return i.useEffect(() => {
    var e;
    !E && (P(!0), (0, a.startBrowserCheckout)(S.loadId), ! function(e, t, n, s) {
      let i = _.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
        a = new URL(C.default.makeUrl(_.Routes.BILLING_LOGIN_HANDOFF)),
        o = (0, r.v4)();
      a.searchParams.append("handoff_key", o), a.searchParams.append("redirect_to", i), l.HTTP.post({
        url: _.Endpoints.HANDOFF,
        body: {
          key: o
        },
        oldFormErrors: !0
      }).then(e => {
        a.searchParams.append("handoff_token", e.body.handoff_token), window.open(a.href)
      }, () => {
        s()
      })
    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : L.SubscriptionPlans.PREMIUM_MONTH_TIER_2, j, S.loadId, () => t(d.Step.ADD_PAYMENT_STEPS)))
  }, [n, j, E, P, S, t]), i.useEffect(() => {
    h === S.loadId && m === c.BrowserCheckoutState.DONE && t(d.Step.CONFIRM)
  }, [m, h, S, t]), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(f.default, {}), (0, s.jsx)(x.PaymentPortalBody, {
      children: (0, s.jsx)(p.AwaitingBrowserCheckoutStepBody, {})
    }), (0, s.jsx)(x.PaymentPortalFooter, {
      children: (0, s.jsx)(p.AwaitingBrowserCheckoutStepFooter, {
        onStepChange: t,
        onBackClick: () => t(d.Step.PLAN_SELECT)
      })
    })]
  })
}